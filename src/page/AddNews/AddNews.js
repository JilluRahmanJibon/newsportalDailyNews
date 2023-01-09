import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import SmallLoader from '../../Shared/Loader/SmallLoader';

const AddNews = () => {
    useTitle('Add News')
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [selcetedImage, setSelcetedImage] = useState();
    const [categories, setCategories] = useState([]);
    const { register, handleSubmit } = useForm();
    const navigate =useNavigate()
        
        function formatDate(date) {
        const yyyy = date.getFullYear();
        let dd = date.getDate() + 1;
        if (dd < 10) dd = "0" + dd;
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        let strTime =
            monthNames[date.getMonth()] + "/" + dd + "/" + yyyy;
        return strTime;
    }
    const currentDate = formatDate(new Date());

    const handleNewsPublish = (data) => {
        setLoading(true);

        const formData = new FormData()
        formData.append('image', selcetedImage)
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImageKey}`, { method: 'POST', body: formData }).then(res => res.json()).then(img => {
            if (img.success) {
                const image = img.data.url;

                axios.post(`${process.env.REACT_APP_ApiUrl}news`, {
                    author: {
                        email: user?.email,
                        name: user?.displayName,
                        published_date: currentDate,
                        img: user?.photoURL
                    },
                    title: data.title,
                    description: data.description,
                    picture: image,
                    category: data.cate,

                }).then(res => {
                    if (res.data.acknowledged) {
                        // navigate('/dashboard/myAllProducts')
                        navigate('/')
                        setLoading(false)
                        toast.success('Post successfully added!.', { duration: 1500 })
                    }
                }).catch(err => {
                    setLoading(false)
                    toast.error(err.message)
                })
            }
        })
    }

    const imageChange = e => {
        if (e.target.files && e.target.files.length > 0) {
            setSelcetedImage(e.target.files[0])
        }
    }


    useEffect(() => {
        fetch(`${process.env.REACT_APP_ApiUrl}news`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);
    // console.log(category);
    // category name
    const categoryNames = categories.map((category) => category.category);

    //unique category name
    const uniqueCategory = [...new Set(categoryNames)];
    // console.log(uniqueCategory);


    return (
        <div>
            <div className="bg-white rounded-md shadow-2xl  py-12 w-96 mx-auto my-10">
                <form
                    className=" flex flex-col mx-2 gap-4 items-center justify-center "
                    onSubmit={handleSubmit(handleNewsPublish)}
                >
                    <input required
                        className="border w-full bg-white text-gray-600 border-black p-2 "
                        {...register("title", { required: "title is Required" })}
                        placeholder="Post title"
                    />
                    <textarea required
                        className="border border-black  text-gray-600  p-2 w-full"
                        placeholder="Post Description"
                        {...register("description", { required: "description is Required" })}
                        name="description"
                    ></textarea>

                    <div className='w-full'>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="useraccount" className="text-sm">
                                Choice Your News Type
                            </label>
                        </div>
                        <select
                            name="option"

                            className="select select-bordered  w-full bg-white "
                        >
                            {uniqueCategory.map((data, uxi) => (
                                <option   {...register("cate")} data={data} key={uxi} value={data}>
                                    {data}
                                </option>
                            ))}

                        </select>
                    </div>

                    <div className=''>
                        {
                            selcetedImage ? <div className='relative'>
                                <label htmlFor='uploadImage' className='absolute cursor-pointer z-50 top-1 left-1 bg-blue-600 py-1 px-3 rounded-sm '>Add new </label>
                                <div className='flex relative justify-center '>
                                    <img className='max-h-[400px] min-h-[250px] ' src={URL.createObjectURL(selcetedImage)} alt="" />
                                </div></div> :
                                <div className='animate-pulse'>
                                    <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                    <div className="input_field flex flex-col w-max mx-auto text-center">
                                        <label htmlFor='uploadImage'>

                                            <div className="text bg-blue-600 text-white border border-primary rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500">Select Image</div>
                                        </label>

                                        <div className="title text-indigo-500 ">Image is required</div>
                                    </div>
                                </div>
                        }

                        <input id='uploadImage' className="text-sm cursor-pointer w-36 hidden" type="file" onChange={imageChange} accept='image/*' />
                    </div>

                    <button disabled={!selcetedImage || loading} className="btn p-2 w-80 rounded-none bg-black text-white font-bold hover:bg-gray-800">
                        {loading ? <SmallLoader /> : '  Publish'}
                    </button>

                </form>

            </div>
        </div>
    );
};

export default AddNews;