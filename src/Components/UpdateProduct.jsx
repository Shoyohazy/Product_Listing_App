import { useParams } from 'react-router-dom';
import Form from '../Utils/Form';
import { useSelector } from 'react-redux';

function UpdateProduct() {
    // when we update the product it is pushed in the list in sorted manner
    // so please check the list as it might not be in the same position after updating

    const { id } = useParams();
    const items = useSelector((state) => state?.products?.products);  //items is the product list
    const item = items.find((item) => item.id == id)        //finding the item that has to be updated                          

    return (

        <>
            {<Form {...item} />}
        </>
    )
}

export default UpdateProduct;