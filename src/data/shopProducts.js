const shopProductsData = [
    {
      id: 1,
      name: "Hot Coffee",
      social: [
        { id: 1, linkURL: "/", socialIcon: "far fa-heart" },
        { id: 2, linkURL: "/", socialIcon: "fas fa-shopping-cart" },
        { id: 3, linkURL: "/", socialIcon: "fas fa-share-alt" },
        { id: 4, linkURL: "/", socialIcon: "fas fa-search" },
      ],
      stars: [
        { id: 1, star: "fas fa-star gold" },
        { id: 2, star: "fas fa-star gold" },
        { id: 3, star: "fas fa-star gold" },
        { id: 4, star: "far fa-star" },
        { id: 5, star: "far fa-star" },
      ],
      imageUrl: "/images/products_images/picture-1.png",
      price: 32.00,
      oldPrice: 45.00,
      discount: 0,
    },
    {
      id: 2,
      name: "Espresso Blend",
      social: [
        { id: 1, linkURL: "/", socialIcon: "far fa-heart" },
        { id: 2, linkURL: "/", socialIcon: "fas fa-shopping-cart" },
        { id: 3, linkURL: "/", socialIcon: "fas fa-share-alt" },
        { id: 4, linkURL: "/", socialIcon: "fas fa-search" },
      ],
      stars: [
        { id: 1, star: "fas fa-star gold" },
        { id: 2, star: "fas fa-star gold" },
        { id: 3, star: "fas fa-star gold" },
        { id: 4, star: "far fa-star" },
        { id: 5, star: "far fa-star" },
      ],
      imageUrl: "/images/products_images/picture-2.png",
      price: 36.00,
      oldPrice: 36.00,
      discount: 0,
    },
    {
      id: 3,
      name: "Medium Roast",
      social: [
        { id: 1, linkURL: "/", socialIcon: "far fa-heart" },
        { id: 2, linkURL: "/", socialIcon: "fas fa-shopping-cart" },
        { id: 3, linkURL: "/", socialIcon: "fas fa-share-alt" },
        { id: 4, linkURL: "/", socialIcon: "fas fa-search" },
      ],
      stars: [
        { id: 1, star: "fas fa-star gold" },
        { id: 2, star: "fas fa-star gold" },
        { id: 3, star: "fas fa-star gold" },
        { id: 4, star: "far fa-star" },
        { id: 5, star: "far fa-star" },
      ],
      imageUrl: "/images/products_images/picture-3.png",
      price: 25.00,
      oldPrice: 30.0,
      discount: 0,
    },
    {
      id: 4,
      name: "Dark Roast",
      social: [
        { id: 1, linkURL: "/", socialIcon: "far fa-heart" },
        { id: 2, linkURL: "/", socialIcon: "fas fa-shopping-cart" },
        { id: 3, linkURL: "/", socialIcon: "fas fa-share-alt" },
        { id: 4, linkURL: "/", socialIcon: "fas fa-search" },
      ],
      stars: [
        { id: 1, star: "fas fa-star gold" },
        { id: 2, star: "fas fa-star gold" },
        { id: 3, star: "fas fa-star gold" },
        { id: 4, star: "far fa-star" },
        { id: 5, star: "far fa-star" },
      ],
      imageUrl: "/images/products_images/picture-4.png",
      price: 30.00,
      oldPrice: 40.00,
      discount: 0,
    },
    {
      id: 5,
      name: "Premium Coffee Machine",
      social: [
        { id: 1, linkURL: "/", socialIcon: "far fa-heart" },
        { id: 2, linkURL: "/", socialIcon: "fas fa-shopping-cart" },
        { id: 3, linkURL: "/", socialIcon: "fas fa-share-alt" },
        { id: 4, linkURL: "/", socialIcon: "fas fa-search" },
      ],
      stars: [
        { id: 1, star: "fas fa-star gold" },
        { id: 2, star: "fas fa-star gold" },
        { id: 3, star: "fas fa-star gold" },
        { id: 4, star: "far fa-star" },
        { id: 5, star: "far fa-star" },
      ],
      imageUrl: "/images/products_images/machine-1.png",
      price: 300.00,
      oldPrice: 450.00,
      discount: 0,
    },
    {
      id: 6,
      name: "Automatic Espresso Maker",
      social: [
        { id: 1, linkURL: "/", socialIcon: "far fa-heart" },
        { id: 2, linkURL: "/", socialIcon: "fas fa-shopping-cart" },
        { id: 3, linkURL: "/", socialIcon: "fas fa-share-alt" },
        { id: 4, linkURL: "/", socialIcon: "fas fa-search" },
      ],
      stars: [
        { id: 1, star: "fas fa-star gold" },
        { id: 2, star: "fas fa-star gold" },
        { id: 3, star: "fas fa-star gold" },
        { id: 4, star: "far fa-star" },
        { id: 5, star: "far fa-star" },
      ],
      imageUrl: "/images/products_images/machine-2.png",
      price: 260.00,
      oldPrice: 320.00,
      discount: 0,
    },
    {
      id: 7,
      name: "Single Serve Coffee Maker",
      social: [
        { id: 1, linkURL: "/", socialIcon: "far fa-heart" },
        { id: 2, linkURL: "/", socialIcon: "fas fa-shopping-cart" },
        { id: 3, linkURL: "/", socialIcon: "fas fa-share-alt" },
        { id: 4, linkURL: "/", socialIcon: "fas fa-search" },
      ],
      stars: [
        { id: 1, star: "fas fa-star gold" },
        { id: 2, star: "fas fa-star gold" },
        { id: 3, star: "fas fa-star gold" },
        { id: 4, star: "far fa-star" },
        { id: 5, star: "far fa-star" },
      ],
      imageUrl: "/images/products_images/machine-3.png",
      price: 220.00,
      oldPrice: 250.00,
      discount: 0,
    },
    {
      id: 8,
      name: "Cold Brew Coffee Maker",
      social: [
        { id: 1, linkURL: "/", socialIcon: "far fa-heart" },
        { id: 2, linkURL: "/", socialIcon: "fas fa-shopping-cart" },
        { id: 3, linkURL: "/", socialIcon: "fas fa-share-alt" },
        { id: 4, linkURL: "/", socialIcon: "fas fa-search" },
      ],
      stars: [
        { id: 1, star: "fas fa-star gold" },
        { id: 2, star: "fas fa-star gold" },
        { id: 3, star: "fas fa-star gold" },
        { id: 4, star: "far fa-star" },
        { id: 5, star: "far fa-star" },
      ],
      imageUrl: "/images/products_images/machine-4.png",
      price: 300.00,
      oldPrice: 300.00,
      discount: 0,
    },
  ];
  
  export default shopProductsData;
  