import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeProject } from '../../store/project';
import './projectpage.css'

function MakeProjectPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => state.session.user?.id)
    const categories = useSelector(state => state.categories.categories)
    const projects = useSelector(state => state.projects.projects)

    const [title, setTitle] = useState('')
    const [categoryId, setCategoryId] = useState(0)
    const [tags, setTags] = useState('')
    const [description, setDescription] = useState('')
    const [coverPhoto, setPhoto] = useState('')
    const [errors, setErrors] = useState([])

    // console.log(categoryId, '<---------------')

    if (!userId) history.push('/login')

    const submitProject = async(e) => {
        e.preventDefault()
        setErrors([])
        if(title.length < 1) {
            errors.push('Please enter valid title')
        }
        if(description.length < 1) {
            errors.push('Please enter valid description')
        }
        if(categoryId < 1) {
            errors.push('Please select a category')
        }
        if(errors.length < 1) {
            await dispatch(makeProject({title, categoryId, userId, tags, description, coverPhoto}))
            const project = projects.filter(project => project.title === title)
            console.log(project, '!!!!')
            // const projectId
            history.push('/home')
        }
    }

    return (
        <div className='newProjectPage'>
            <form onSubmit={submitProject}>
                <h2 className='pageHeader'>Create a New Project</h2>
                <div className='inputContainer'>
                    <div className='errorContainer'>
                        {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <label htmlFor='title' className='label'>Title </label>
                    <input
                        required="required"
                        className='input'
                        name='title'
                        type='text'
                        placeholder='Your project name'
                        value={title}
                        onChange={(e)=> {setTitle(e.target.value)}}
                    />
                </div>

                <div className='inputContainer'>
                    <label htmlFor='category' className='label'>Category</label>
                    <select
                        onChange={(e)=> setCategoryId(e.target.value)}
                        className='input'
                        required>
                        <option value=''>Select</option>
                        {categories.map(cat => {
                            return (<option value={cat.id}>{cat.category}</option>)
                        })}
                    </select>
                </div>

                <div className='inputContainer'>
                    <label htmlFor='description' className='label'>Description</label>
                    <input
                        className='input'
                        required="required"
                        name='description'
                        type='textArea'
                        placeholder='What is your project about?'
                        value={description}
                        onChange={(e)=> {setDescription(e.target.value)}}
                    />
                </div>

                <div className='inputContainer'>
                    <label htmlFor='photo' className='label'>Cover Photo</label>
                    <input
                        className='input'
                        required="required"
                        name='photo'
                        type='textArea'
                        placeholder='Add a photo url'
                        value={coverPhoto}
                        onChange={(e)=> {setPhoto(e.target.value)}}
                    />
                    {coverPhoto ? (
                        <img src={coverPhoto} className='projectCoverPhoto'/>
                    ): null}
                </div>

                <div className='inputContainer'>
                    <label htmlFor='tags' className='label'>Tags  (optional)</label>
                    <input
                        className='input'
                        name='tags'
                        type='text'
                        placeholder='Please enter tags separated by spaces'
                        value={tags}
                        onChange={(e)=> {setTags(e.target.value)}}
                    />
                </div>

                <button type='submit' className='createButton'>Create</button>

            </form>
        </div>
    )
}

export default MakeProjectPage
