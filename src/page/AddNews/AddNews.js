import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const AddNews = () => {
    const { user } = useContext(AuthContext)
    
    const { register, handleSubmit } = useForm();

    const handleNewsPublish = (data) => {
        console.log(data);
    }


    return (
        <div>
            
            <div className="bg-white rounded-md shadow-2xl py-12 w-96 mx-auto my-10">
                <form
                    className=" flex flex-col gap-4 items-center justify-center "
                    onSubmit={handleSubmit(handleNewsPublish)}
                >
                    <input
                        className="border bg-white text-gray-600 border-black p-2 w-80"
                        {...register("title", { required: "title is Required" })}
                        placeholder="title"
                    />
                    <textarea
                        className="border border-white bg-gray-700 text-white  p-2 w-80"
                        placeholder="message"
                        name="message"
                    ></textarea>

                    <input
                        className="border bg-white text-gray-600 border-black p-2 w-80"
                        {...register("publish", { required: "date is Required" })}
                        placeholder="Publish Date"
                    />

                    <button className="btn p-2 w-80 rounded-none bg-black text-white font-bold hover:bg-gray-800">
                        Publish
                    </button>

                </form>

            </div>        
        </div>
    );
};

export default AddNews;