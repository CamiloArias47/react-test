import withAuth from "HOC/withAuth.js";
import DashboardThemeProvider from 'components/dashboard-container'
import { usePosts } from "context/PostContext";
import { useUI, MODAL_VIEW } from 'context/UIcontext'
import PostCard from 'components/postCard'
import Button from '@mui/material/Button';
import Footer from "components/footer";
import style from 'styles/style-dashboard'
import { useEffect } from "react";


const Dashboard = () => {

    const { setModalView, openModal, uid } = useUI()
    const { getPosts, posts } = usePosts()

    const handlerClickCreate = () => {
        setModalView(MODAL_VIEW.createPost)
        openModal()
    }

    useEffect( () => {
        getPosts(uid)
    }, [uid])

    return(
            <DashboardThemeProvider>
                <div className="dashboard-content">
                    <h1>Todos mis post</h1>
                    <div className="utilities-bar">
                         <Button variant="contained" color="secondary" size="large" onClick={ handlerClickCreate }>Crear Post</Button>
                    </div>
                    <div className="post-list">
                        { 
                            posts.map( post => { 
                                return (
                                    <PostCard 
                                        key={post.id} 
                                        id={post.id}
                                        uid={post.user}
                                        title={post.title} 
                                        body={post.body}/> 
                                ) 
                            })
                        }
                    </div>
                </div>
                <Footer/>
                <style jsx>{ style }</style>
            </DashboardThemeProvider>
    )
}

export default withAuth(Dashboard);