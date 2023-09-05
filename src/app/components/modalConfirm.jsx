import Link from "next/link";

const ModalConfirm = ({open, onClose}) => {

    if(!open) return null;
    return (
        <div className="overlay">
            <div className="container">
                <div className="content border border-black font-comfortea">
                    <h2 className="flex items-center justify-center text-xl">Confirm my reservation?</h2>
                    <div className="flex items-center justify-center">
                        <Link href="/">
                        <button className="bg-rent-red shadow-md border border-rent-red text-rent-white text-xl uppercase rounded
                                            hover:bg-rent-red hover:text-white hover:border-white p-2 mx-10 my-4">Yes</button>
                        </Link>
                        <button onClick={onClose} className="bg-rent-white shadow-md border border-rent-red text-rent-red text-xl uppercase rounded
                                            hover:bg-rent-grey p-2 mx-10 my-4">No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirm