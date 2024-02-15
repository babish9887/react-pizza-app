 import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

 function CartOverview() {
  const totalCartQuantity=useSelector(getTotalCartQuantity);
  const totalCartPrice=useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;

   return (
  <div className='fixed bottom-0 w-full'>

   <div className="flex items-center justify-between md:text-base bg-stone-800 text-stone-200 uppercase px-4 py-4 text-sm sm:px-6">
    <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
       <Link to='/cart'>Open Cart &rarr;</Link>
     </div>
</div>

  );
}

 export default CartOverview;


