import { usePosts } from 'context/PostContext'
import { useUI, MODAL_VIEW } from 'context/UIcontext'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PostCard({title, body, id, uid}) {
  const { setPostsToEdit, deletePost } = usePosts()
  const { openModal, setModalView } = useUI()
  
  const handlerClick = () => {
    const editPost = {title, body, id, uid}
    console.log({editPost})
    setPostsToEdit(editPost)
    setModalView(MODAL_VIEW.updatePost)
    openModal()
  }

  const handlerDeleteButton = () => {
    deletePost({id})
  }

  return (
    <Card >
      <CardContent>
        
        <Typography variant="h5" component="div">
         { title }
        </Typography>
        <Typography variant="body2">
          { body }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={ handlerClick }>Editar</Button>
        <Button size="small" onClick={ handlerDeleteButton }>Eliminar</Button>
      </CardActions>
    </Card>
  );
}