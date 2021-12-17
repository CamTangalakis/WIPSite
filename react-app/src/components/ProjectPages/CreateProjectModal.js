import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeProject } from '../../store/project';

function MakeProjectPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => state.session.user.id)
    const categories = useSelector(state => state.categories.categories)

    const [title, setTitle] = useState('')
    const [categoryId, setCategoryId] = useState(0)
    const [tags, setTags] = useState('')
    const [description, setDescription] = useState('')
    const [coverPhoto, setPhoto] = useState('')
    const [errors, setErrors] = useState([])

    // console.log(categoryId, '<---------------')

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
            history.push('/home')
        }
    }

    return (
        <>
            <form onSubmit={submitProject}>
                <h2>Create a New Project</h2>
                <div className='inputContainer'>
                    <div className='errorContainer'>
                        {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <label htmlFor='title' className='titleLabel'>Title</label>
                    <input
                        className='titleInput'
                        name='title'
                        type='text'
                        placeholder='Title'
                        value={title}
                        onChange={(e)=> {setTitle(e.target.value)}}
                    />
                </div>

                <div className='inputContainer'>
                    <label htmlFor='category' className='categoryLabel'>Category</label>
                    <select onChange={(e)=> setCategoryId(e.target.value)} >
                        <option value={0}>Select</option>
                        {categories.map(cat => {
                            return (<option value={cat.id}>{cat.category}</option>)
                        })}
                    </select>
                </div>

                <div className='inputContainer'>
                    <label htmlFor='description' className='descriptionLabel'>Description</label>
                    <input
                        className='descriptionInput'
                        name='description'
                        type='textArea'
                        placeholder='What is your project about?'
                        value={description}
                        onChange={(e)=> {setDescription(e.target.value)}}
                    />
                </div>

                <div className='inputContainer'>
                    <label htmlFor='photo' className='photoLabel'>Cover Photo</label>
                    <input
                        className='photoInput'
                        name='photo'
                        type='textArea'
                        placeholder='Add a photo url'
                        value={coverPhoto}
                        onChange={(e)=> {setPhoto(e.target.value)}}
                    />
                </div>

                <div className='inputContainer'>
                    <label htmlFor='tags' className='tagsLabel'>Tags</label>
                    <input
                        className='tagsInput'
                        name='tags'
                        type='text'
                        placeholder='Please enter tags separated by spaces'
                        value={tags}
                        onChange={(e)=> {setTags(e.target.value)}}
                    />
                </div>


                <button type='submit'>Create</button>

            </form>
        </>
    )
}

export default MakeProjectPage
