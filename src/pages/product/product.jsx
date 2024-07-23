import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-hot-toast';
import BearCarousel, {
  BearSlideCard,
} from "bear-react-carousel";

import './product.scss';
import { products } from '../../services';
import { useCartStore } from "../../store/store";

export default function Product() {
  const [quantity, setQuantity] = useState(1);
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  const { productId } = useParams("productId");
  const product = products.find(product => product.id === productId);

  const bearSlideItemData = product.images.map((img, index) => {
    return <BearSlideCard key={index}>
      <img className='sliderImg' src={img} alt="product" />
    </BearSlideCard>
  });

  const productQuantity = cart.find(item => item.id === product.id)?.quantity || 0;
  const maxQuantity = 99 - productQuantity;

  const handleAddToCart = () => {
    if (maxQuantity === 0) {
      return toast.error('You have reached the maximum quantity for this product');
    }

    if (quantity === 0) {
      return toast.error('You have to add at least one product to the cart');
    }

    toast.success('You have added the product to the cart');
    addToCart(product, quantity);
  }

  const handleQuantity = (event) => {
    setQuantity(Number(event.target.value));
    if (event.target.value > maxQuantity) setQuantity(maxQuantity);
    if (event.target.value < 0) setQuantity(0);
  }

  const handleIncrement = () => {
    if (maxQuantity === 0) return toast.error('You have reached the maximum quantity for this product');
    if (quantity === maxQuantity) return toast.error('You have reached the maximum quantity for this product');
    setQuantity(quantity + 1);
  }

  const handleDecrement = () => {
    if (quantity === 0) return toast.error('You have reached the minimum quantity for this product');
    setQuantity(quantity - 1);
  }

  return (
    <div className='productPage'>
      <div className='background'>
        <BearCarousel
          data={bearSlideItemData}
          spaceBetween={10}
          slidesPerView={1}
          isEnableNavButton
          isEnableLoop
          isLazy
        />

        <div className='product'>
          <div className='productInfo'>
            <h2>{product.name}</h2>
            <p className='price'>$ {product.price}</p>
            <p>{product.description}</p>
          </div>

          <div className='quantity'>
            <h3>Quantity: </h3>
            <div className='quantityInput'>
              <button className='decrementBtn btn' onClick={handleDecrement}>
                <RemoveIcon fontSize="small" />
              </button>
              <input disabled={maxQuantity === 0 ? true : false} value={quantity} onChange={(event) => handleQuantity(event)} type="number" />
              <button className='incrementBtn btn' onClick={handleIncrement}>
                <AddIcon fontSize="small" />
              </button>
            </div>
          </div>

          <button onClick={handleAddToCart} className='addToCart'>Add to cart</button>

          <div className='shopInfo'>
            <div className='collapse collapse1'>
              <div>
                <h4>Product Info</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus magni dignissimos dolorum laborum recusandae non illo fugit aut tempora doloremque cumque, labore rem cum ipsum quod accusantium, fugiat cupiditate saepe?</p>
              </div>
              <input id='collapseBtn1' type="checkbox" />
              <label className='collapseLabel1' htmlFor="collapseBtn1" />
            </div>
            <hr />
            <div className='collapse collapse2'>
              <div>
                <h4>Return & Refund Policy</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus magni dignissimos dolorum laborum recusandae non illo fugit aut tempora doloremque cumque, labore rem cum ipsum quod accusantium, fugiat cupiditate saepe?</p>
              </div>
              <input id='collapseBtn2' type="checkbox" />
              <label className='collapseLabel2' htmlFor="collapseBtn2" />
            </div>
            <hr />
            <div className='collapse collapse3'>
              <div>
                <h4>Shipping Info</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus magni dignissimos dolorum laborum recusandae non illo fugit aut tempora doloremque cumque, labore rem cum ipsum quod accusantium, fugiat cupiditate saepe?</p>
              </div>
              <input id='collapseBtn3' type="checkbox" />
              <label className='collapseLabel3' htmlFor="collapseBtn3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}