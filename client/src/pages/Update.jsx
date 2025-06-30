import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router';
import Swal from 'sweetalert2';


const Update = () => {
    //1.Get id from URL
    const {id} = useParams();
    const [Restaurant, setRestaurant] = useState({
        title: '',
        type: '',
        img: ''
    });

    //2.Get Restaurant By ID
    useEffect(()=>{
        fetch(`http://localhost:3000/restaurants/${id}`).then((res) => {
          //แปลงจาก JSON เป็น String
            return res.json();
        })
        .then((response) => {
            setRestaurant(response)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }, [id]);
    const handleChange = (e) => {
        const { name, value } = e.target
        setRestaurant({ ...Restaurant, [name]: value }) //clone 
    };
    const handleSubmit = async () => {
  Swal.fire({
    title: 'คุณแน่ใจหรือไม่?',
    text: 'คุณต้องการอัปเดตร้านอาหารนี้ใช่ไหม?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'ใช่, อัปเดตเลย!',
    cancelButtonText: 'ยกเลิก',
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/restaurants/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Restaurant),
        });

        if (response.ok) {
          Swal.fire('สำเร็จ!', 'ร้านอาหารได้รับการอัปเดต!!!', 'success');
          setRestaurant({
            title: '',
            type: '',
            img: ''
          });
        } else {
          Swal.fire('เกิดข้อผิดพลาด', 'อัปเดตไม่สำเร็จ', 'error');
        }
      } catch (error) {
        console.log(error);
        Swal.fire('ล้มเหลว', 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์', 'error');
      }
    }
  });
};


    return (
        <div className="container mx-auto">
            

            <div className="flex justify-center ">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Update Restaurant
                        <div className='pl-38'><a href='/' className="btn btn-active btn-error size-5">X</a>
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
                    <button  onClick={handleSubmit} className="btn btn-soft btn-primary">Update</button>
                </fieldset>
            </div>
        </div>

    )
}

export default Update