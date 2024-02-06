import shopProductsData from "../data/shopProducts";

function ShopSection() {

 return (
   <div className="bg-shop" id="shop">
     <div className="shop-links">
       <div>
         <h2>products</h2>
       </div>
       <div className="links">
         <li data-filter="all">all</li>
         <li data-filter=".coffee">coffee</li>
         <li data-filter=".machines">machines</li>
         <li data-filter=".sweets">sweets</li>
       </div>
     </div>
     <div className="shop-flex consts">
       {shopProductsData.map((product) => {
         // Calculate discount percentage
         const discountPercentage = ((product.oldPrice - product.price) / product.oldPrice) * 100;

         return (
           <div className="shop1 mix coffee" key={product.id}>
             <div className="shop-image">
               <img src={product.imageUrl} alt={product.name} />
               {/* Display discount percentage */}
               <div className="price">-{discountPercentage.toFixed(0)}%</div>
               <div className="social">
                 {product.social.map((icon) => (
                   <a key={icon.id} href={icon.linkURL}>
                     <i className={icon.socialIcon}></i>
                   </a>
                 ))}
               </div>
             </div>
             <h2>hot coffee</h2>
             <div className="stars">
               {product.stars.map((icon) => (
                 <i key={icon.id} className={icon.star}></i>
               ))}
             </div>
             {/* Display product price */}
             <article>€{product.price}</article>
             {/* Display old price */}
             <span>€{product.oldPrice}</span>
           </div>
         );
       })}
     </div>
   </div>
 );
}

export default ShopSection;
