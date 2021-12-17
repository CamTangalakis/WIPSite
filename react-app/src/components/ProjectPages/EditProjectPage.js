import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProject } from '../../store/project';

function EditProjectForm({setShowModal, project}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const projectId = project.id

    const [title, setTitle] = useState(project?.title)
    const [tags, setTags] = useState(project.tags)
    const [description, setDescription] = useState(project.description)

    const submitProject = async(e) => {
        e.preventDefault()
        await dispatch(editProject({title, tags, description, projectId}))
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
