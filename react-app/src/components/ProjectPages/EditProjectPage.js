import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeProject } from '../../store/project';

function EditProjectPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => state.session.user.id)
    const categories = useSelector(state => state.categories.categories)

    const [title, setTitle] = useState('')
    const [categoryId, setCategoryId] = useState(0)
    const [tags, setTags] = useState('')
    const [description, setDescription] = useState('')

    // console.log(categoryId, '<---------------')

    const submitProject = async(e) => {
        e.preventDefault()
        await dispatch(makeProject({title, categoryId, userId, tags, description}))
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
                        placeholder='Description'
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
                        placeholder='Tags'
                        value={tags}
                        onChange={(e)=> {setTags(e.target.value)}}
                    />
                </div>


                <button type='submit'>Create</button>

            </form>
        </>
    )
}

export default EditProjectPage
