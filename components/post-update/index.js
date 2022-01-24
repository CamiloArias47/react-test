import { useEffect, useState } from 'react'
import { useUI } from 'context/UIcontext'
import { usePosts } from 'context/PostContext'
import style from 'styles/style-modal-form'

export default function UpdatePost({}){
    const { updatePost, editPost } = usePosts()
    const [ error, setError ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

    const { closeModal, uid} = useUI()

    useEffect( () => {
        setTitle(editPost.title)
        setContent(editPost.body)
    },[editPost])

    const handlerInput = event => {
        const {value, name} = event.target
        if(name === 'title-post-upd') setTitle(value)
        if(name === 'body-post-upd') setContent(value)
    }

    const handlerSubmit = event => {
        event.preventDefault()
        updatePost({title, body:content, id: editPost.id })
            .then( () => {
                closeModal()
            })
            .catch( () => {
                setError('Intentalo de nuevo')
            })
    }

    return(
            <div className="modal-content">
                <span className='title'>Actualizar Post</span>
                <form onSubmit={handlerSubmit}>
                    <input 
                        value={title} 
                        id="title-post-upd" 
                        name="title-post-upd" 
                        type="text"
                        placeholder="Título" 
                        onChange={handlerInput} 
                        required
                    />

                    <textarea
                        id="body-post-upd"
                        name="body-post-upd"
                        placeholder="Contenido"
                        type="text"
                        value={content}
                        onChange={handlerInput} 
                    > </textarea>

                    <button className='btn-primary'>Actualizar</button>
                </form>
                { error !== '' ? <span className='error-msg'>{error}</span> : ''}
                
                <div className='modal-footer'>
                    
                </div>
                <style jsx>{ style }</style>
            </div>
    )
}