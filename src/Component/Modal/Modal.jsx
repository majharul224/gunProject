import React from 'react';
const Modal = ({gunDetails}) => {
    const {name,price,category,bullet}=gunDetails
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4">Price- ${price}</p>
                    <p className="py-4">Category- {category}</p>
                    <p className="py-4">Bullet- {bullet}</p>
                </form>
            </dialog>
        </>
    );
};

export default Modal;