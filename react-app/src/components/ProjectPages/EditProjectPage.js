import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProject } from '../../store/project';

function EditProjectForm({setShowModal, project}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => state.session.user.id)
    const categories = useSelector(state => state.categories.categories)

    const [title, setTitle] = useState(project?.title)
    const [categoryId, setCategoryId] = useState(project?.categoryId)
    const [tags, setTags] = useState(project.tags)
    const [description, setDescription] = useState(project.description)

    console.log('in the form')

    const submitProject = async(e) => {
        e.preventDefault()
        await dispatch(editProject({title, categoryId, userId, tags, description}, project.id))
        setShowModal(false)
        history.push('/home')
    }

    return (
        <>
            <form onSubmit={submitProject}>
                <div className='inputContainer'>
                    <label htmlFor='title' className='titleLabel'>Title</label>
                    <input
                        className='titleInput'
                        name='title'
                        type='text'
                        value={title}
                        onChange={(e)=> {setTitle(e.target.value)}}
                    />
                </div>

                <div className='inputContainer'>
                    <label htmlFor='description' className='descriptionLabel'>Description</label>
                    <input
                        className='descriptionInput'
                        name='description'
                        type='textArea'
                        value={description}
                        onChange={(e)=> {setDescription(e.target.value)}}
                    />
                </div>

                <div className='inputContainer'>
                    <label htmlFor='tags' className='tagsLabel'>Tags</label>
                    <input
                        className='tagsInput'
                        name='tags'
                        type='text'
                        value={tags}
                        onChange={(e)=> {setTags(e.target.value)}}
                    />
                </div>

                <button type='submit'>Edit</button>

            </form>
        </>
    )
}

export default EditProjectForm
