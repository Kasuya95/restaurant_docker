import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const AddRestaurant = () => {
    const [Restaurant, setRestaurant] = useState({
        title: '',
        type: '',
        img: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setRestaurant({ ...Restaurant, [name]: value }) //clone 
    };
    const handleSubmit = async () => {
        try {
            const response = await fetch("http://localhost:3000/restaurants",
                {
                    method: "POST",
                    body: JSON.stringify(Restaurant)
                }
            )
            if (response.ok) {
                alert("Restaurant added successfully!!")
                setRestaurant({
                    title: '',
                    type: '',
                    img: ''
                })
            }
        } catch (error) {

        }
    }

    return (
        <div className="container mx-auto">
            

            <div className="flex justify-center ">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Add Restaurant
                        <div className='pl-38'><a className="btn btn-active btn-error size-5" href="/">X</a>
                        </div></legend>

                    <label className="label">Name</label>
                    <input value={Restaurant.title} onChange={handleChange} type="text" className="input" placeholder="Place Name" name='title' />

                    <label className="label">Type</label>
                    <input value={Restaurant.type} onChange={handleChange} type="text" className="input" placeholder="Place Type" name='type' />
                    <label className="label">Img</label>
                    <input value={Restaurant.img} onChange={handleChange} type="text" className="input" placeholder="Place Url Img" name='img' />
                    {Restaurant.img && (
                        <div className="flex items-center gap-2 px-8">
                            <img className='h-32' src={Restaurant.img}></img>
                        </div>
                    )}
                    <button onClick={handleSubmit} className="btn btn-soft btn-primary">Add</button>
                </fieldset>
            </div>
        </div>

    )
}

export default AddRestaurant