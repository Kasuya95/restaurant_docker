import React from 'react';
import Swal from 'sweetalert2';

const Card = (props) => {
  const deleted = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/restaurants/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        Swal.fire('ลบสำเร็จ!', 'ร้านอาหารถูกลบเรียบร้อยแล้ว', 'success');
        // ถ้าต้องการ reload:
        // window.location.reload();
      } else {
        Swal.fire('เกิดข้อผิดพลาด', 'ไม่สามารถลบได้', 'error');
      }
    } catch (err) {
      console.log(err);
      Swal.fire('ล้มเหลว', 'เกิดข้อผิดพลาดบางอย่าง', 'error');
    }
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: 'แน่ใจ?',
      text: 'ต้องการลบร้านอาหารนี้ใช่หรือไม่',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        deleted(id);
      }
    });
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={props.imageUrl} alt="Restaurant" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{props.type}</p>
        <div className="card-actions justify-end">
          <div
            onClick={() => confirmDelete(props.id)}
            className="btn btn-dash btn-error"
          >
            Delete
          </div>
          <a href={`/Update/${props.id}`} className="btn btn-dash btn-primary">
            Update
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
