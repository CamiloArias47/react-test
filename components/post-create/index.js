import { useState } from 'react'
import { useUI } from 'context/UIcontext'
import { usePosts } from 'context/PostContext'
import style from 'styles/style-modal-form'

export default function CreatePost(){
    const { savePost } = usePosts()
    const [ error, setError ] = useState('')
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

    const { closeModal, uid} = useUI()

    const handlerInput = event => {
        const {value, name} = event.target
        if(name === 'title-post') setTitle(value)
        if(name === 'body-post') setContent(value)
    }

    const handlerSubmit = event => {
        event.preventDefault()
        savePost({title, body:content, uid })
            .then( () => {
                closeModal()
            })
            .catch( () => {
                setError('Intentalo de nuevo')
            })
    }

    return(
            <div className="modal-content">
                <span className='title'>Crear Post</span>
                <form onSubmit={handlerSubmit}>
                    <input 
                        value={title} 
                        id="title-post" 
                        name="title-post" 
                        type="text"
                        placeholder="Título" 
                        onChange={handlerInput} 
                        required
                    />

                    <textarea
                        id="body-post"
                        name="body-post"
                        placeholder="Contenido"
                        type="text"
                        value={content}
                        onChange={handlerInput} 
                    > </textarea>

                    <button className='btn-primary'>Guardar</button>
                </form>
                { error !== '' ? <span className='error-msg'>{error}</span> : ''}
                
                <div className='modal-footer'>
                    
                </div>
                <style jsx>{ style }</style>
            </div>
    )
}