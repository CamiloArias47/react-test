import { useEffect, useState, useCallback } from "react";
import withAuth from "HOC/withAuth.js";
import { fetcherApi } from 'services/fetcher'
import throttle from 'just-throttle';
import useNearScreen from 'hooks/useNeearScreen'
import DashboardThemeProvider from 'components/dashboard-container'
import PostCard from 'components/postCard'
import style from 'styles/style-dashboard'


const Dashboard = () => {

    const [ posts, setPosts ] = useState([])
    const [ linkPrevPost, setLinkPrevPost ] = useState('')
    const { isNearScreen, fromRef } = useNearScreen({distance:'10px',once:false})

    useEffect( () => {
        fetcherApi({route:'/api/posts'})
            .then( res => res.links.last )
            .then( route => fetcherApi({route, fullRoute:true}) )
            .then( lastPostRes => {
                setPosts(lastPostRes.data.reverse())
                setLinkPrevPost(lastPostRes.links.prev)
            })
    }, [])

    useEffect( () => {
        if( isNearScreen && linkPrevPost != '' ){
            throttleNextPage()
        }
    }, [isNearScreen])

    const throttleNextPage = useCallback( 
        throttle( () => { 

            const confGetter = {
                route : linkPrevPost, 
                fullRoute : true
            }

            fetcherApi(confGetter)
                .then( morePostRes => {
                    const newPosts = [...posts, ...morePostRes.data.reverse()]
                    setPosts(newPosts)
                    setLinkPrevPost(morePostRes.links.prev)
                })

        } , 500, {leading: true} ), 
      [linkPrevPost, posts])

    return(
            <DashboardThemeProvider>
                <div className="dashboard-content">
                    <h1>Todos los Post de la comunidad</h1>
                    <div className="post-list">
                        { 
                            posts.map( post => { 
                                return (
                                    <PostCard 
                                        key={post.id+'-'+post.user} 
                                        id={post.id}
                                        uid={post.user}
                                        title={post.title} 
                                        body={post.body}/> 
                                ) 
                            })
                        }
                    </div>
                </div>

                <div ref={ fromRef } ></div>

                <style jsx>{ style }</style>
            </DashboardThemeProvider>
    )
}

export default withAuth(Dashboard);