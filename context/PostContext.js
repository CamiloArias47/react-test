import React, { useState, useCallback, useMemo } from 'react'
import {apiUrl} from 'services/conf'
import { useFetcherApi } from 'services/fetcher'

const initialstate = {
    posts : [],
    editPost : {}
}

export const PostContext = React.createContext(initialstate)

PostContext.displayName = 'PostContext'

export const PostProvider = props => {
    const [ posts , setPostProvider ] = useState([])
    const [ editPost , setEditPost ] = useState({})

    const setPosts = useCallback( post => { 
        setPostProvider(post)
    }, [] ) 

    const setPostsToEdit = useCallback( post => { 
        setEditPost(post)
    }, [] ) 

    const getPosts = useCallback( uid => {
        fetch(`${ apiUrl }/api/users/${ uid }/post`)
            .then( res => res.json() )
            .then( posts => {
                const userPost = posts.data.reverse()
                setPostProvider(posts.data)
            })
    },[])

    const savePost = useCallback( ({title, uid, body}) => {
        const form = {title, user_uuid : uid, body}
        const datos = JSON.stringify(form)
        
        const config = { 
            route : '/api/posts',
            config : {
                method: 'POST', 
                body: datos,
            }
        }

        return useFetcherApi(config)
            .then( data => {
                const saved = data.data
                const newPosts = [saved, ...posts]
                setPostProvider(newPosts)
                return true
            })
            

    },[posts])

    const updatePost = useCallback( ({title, id, body}) => {
        const form = {title, body}
        const datos = JSON.stringify(form)
        
        const config = { 
            route : '/api/posts/'+id,
            config : {
                method: 'PUT', 
                body: datos,
            }
        }

        return useFetcherApi(config)
            .then( data => {
                const updated = data.data
                const position = posts.findIndex( p => p.id === id)

                let newPosts = posts
                newPosts.splice(position, 1, updated);

                setPostProvider(newPosts)
                return true
            })
            

    },[posts])


    const deletePost = useCallback( ({id}) => {

        const config = { 
            route : '/api/posts/'+id,
            config : { method: 'DELETE' }
        }

        return useFetcherApi(config)
            .then( data => {
                console.log('delete...')
                console.log({data})

                const newPosts = posts.filter( p => p.id !== id);
                setPostProvider(newPosts)

                return true
            })
            

    },[posts])

    const value = useMemo(
        () => ({
            posts,
            editPost,
            setPostsToEdit,
            setPosts,
            getPosts,
            savePost,
            updatePost,
            deletePost
        }),
        [posts, editPost]
      )

    return <PostContext.Provider value={value} {...props} />
}

export const usePosts = () => {
    const context = React.useContext(PostContext)
    if (context === undefined) {
      throw new Error(`se debe usar un PostContextProvider primero`)
    }
    return context
}

export const PostContextProvider = ({ children }) => (
    <PostProvider>
      { children }
    </PostProvider>
)