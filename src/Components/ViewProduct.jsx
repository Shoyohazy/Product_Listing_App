
import '../styling/viewproduct.css'
//import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

function ViewProduct() {
    const { id } = useParams();
    const items = useSelector((state) => state?.products?.products);  //items is the product list
    const item = items.find((item) => item.id == id)    //finding the item that has to be viewed in the card below..

    return (
        <>
            < div className='view-background' >
                <div className='view-container'>
                    <div className='view-content'>
                        <div className='view-image'>
                            <img src={item?.image} alt="" />
                        </div>
                        <div className='view-info'>
                            <h3 className='view-heading1'>{item?.title}</h3>
                            <p>{item?.description}</p>
                            <h3 className='view-heading2'>${item?.price}</h3>
                        </div>
                    </div>
                    <Link to="/Products"><button>Close</button></Link>
                </div>
            </div>

        </>
    )
}

export default ViewProduct