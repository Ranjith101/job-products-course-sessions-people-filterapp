import React, { useState } from 'react';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const ProductCard = styled.div`
  width: calc(25% - 20px);
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 1200px) {
    width: calc(33.33% - 20px);
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 10px;
`;

const ProductCode = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const StarIcon = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  margin-right: 5px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
`;

const Select = styled.select`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 10px;
`;


const BuyNowButton = styled.button`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  cursor: pointer;
  margin-right: 10px;
`;

const ViewDetailsButton = styled.button`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #fff;
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  text-align: center;
`;

const PopupCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  padding: 5px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  cursor: pointer;
`;

// const products = [
//   {
//     id: 1,
//     name: 'Apple',
//     image: 'https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg',
//     code: 'P001',
//     price: 10.99,
//     rating: 3.2,
//   },
//   {
//     id: 2,
//     name: 'Mangoes',
//     image: 'https://www.sahajaaharam.com/files/Mango%20-%20Alphonzo.jpg',
//     code: 'P002',
//     price: 19.99,
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: 'Kashmir Apple',
//     image: 'https://5.imimg.com/data5/WA/NV/LI/SELLER-52971039/apple-indian-500x500.jpg',
//     code: 'P001',
//     price: 10.99,
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     name: 'Salem Mangoes',
//     image: 'https://www.sahajaaharam.com/files/Mango%20-%20Alphonzo.jpg',
//     code: 'P002',
//     price: 19.99,
//     rating: 3.8,
//   },
//     {
//     id: 4,
//     name: 'Salem Mangoes',
//     image: 'https://www.sahajaaharam.com/files/Mango%20-%20Alphonzo.jpg',
//     code: 'P002',
//     price: 19.99,
//     rating: 3.8,
//   },
  
//   // Add more products here...
// ];


const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/300x200',
      code: 'P001',
      price: 10.99,
      rating: 4.5,
      expiryDate: '2022-12-31',
      reviews: [
        {
          id: 1,
          user: 'User 1',
          comment: 'This is a great product!',
          rating: 4.5,
        },
        {
          id: 2,
          user: 'User 2',
          comment: 'I love this product!',
          rating: 5,
        },
      ],
    },

    {
        id: 2,
        name: 'Product 2',
        image: 'https://via.placeholder.com/300x200',
        code: 'P002',
        price: 19.99,
        rating: 3.5,
        expiryDate: '2023-06-30',
        reviews: [
          {
            id: 1,
            user: 'User 1',
            comment: 'This is a good product!',
            rating: 3.5,
          },
          {
            id: 2,
            user: 'User 2',
            comment: 'It works well for me!',
            rating: 4,
          },
        ],
      },
      {
        id: 3,
        name: 'Product 3',
        image: 'https://via.placeholder.com/300x200',
        code: 'P003',
        price: 14.99,
        rating: 4,
        expiryDate: '2022-09-30',
        reviews: [
          {
            id: 1,
            user: 'User 1',
            comment: 'This is a great product!',
            rating: 4.5,
          },
          {
            id: 2,
            user: 'User 2',
            comment: 'I love this product!',
            rating: 5,
          },
          {
            id: 3,
            user: 'User 3',
            comment: 'It works well for me!',
            rating: 4,
          },
        ],
      },
      {
        id: 4,
        name: 'Product 4',
        image: 'https://via.placeholder.com/300x200',
        code: 'P004',
        price: 9.99,
        rating: 3,
        expiryDate: '2022-12-31',
        reviews: [
          {
            id: 1,
            user: 'User 1',
            comment: 'This is an okay product.',
            rating: 3,
          },
          {
            id: 2,
            user: 'User 2',
            comment: 'It could be better.',
            rating: 2.5,
          },
        ],
      },
      {
        id: 5,
        name: 'Product 5',
        image: 'https://via.placeholder.com/300x200',
        code: 'P005',
        price: 24.99,
        rating: 4.5,
        expiryDate: '2023-03-31',
        reviews: [
          {
            id: 1,
            user: 'User 1',
            comment: 'This is a great product!',
            rating: 4.5,
          },
          {
            id: 2,
            user: 'User 2',
            comment: 'I love this product!',
            rating: 5,
          },
          {
            id: 3,
            user: 'User 3',
            comment: 'It works well for me!',
            rating: 4,
          },
          {
            id: 4,
            user: 'User 4',
            comment: 'I would recommend this product to anyone!',
            rating: 5,
          },
        ],
      },
    ];
    

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleBuyNowClick = (product) => {
    window.location.href = 'https://example.com/buy/' + product.code;
  };

  const handleViewDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = sortOption
    ? filteredProducts.sort((a, b) => {
        if (sortOption === 'price') {
          return a.price - b.price;
        } else if (sortOption === 'rating') {
          return b.rating - a.rating;
        } else {
          return 0;
        }
      })
    : filteredProducts;

  const rows = [];

  for (let i = 0; i < sortedProducts.length; i += 4) {
    rows.push(sortedProducts.slice(i, i + 4));
  }
    return (
        <>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Select value={sortOption} onChange={handleSortChange}>
            <option value="">Sort by...</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </Select>
        </SearchContainer>
        <ProductListContainer>
          {rows.map((row, index) => (
            <ProductRow key={index}>
              {row.map((product) => (
                <ProductCard key={product.id}>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductInfo>
                    <ProductCode>{product.name}</ProductCode>
                    <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                    <ProductRating>
                      {[...Array(Math.round(product.rating))].map((_, index) => (
                        <StarIcon key={index}>&#9733;</StarIcon>
                      ))}
                      {[...Array(5 - Math.round(product.rating))].map((_, index) => (
                        <StarIcon key={index}>&#9734;</StarIcon>
                      ))}
                    </ProductRating>
                    <BuyNowButton onClick={() => handleBuyNowClick(product)}>
                      Buy Now
                    </BuyNowButton>
                    <ViewDetailsButton onClick={() => handleViewDetailsClick(product)}>
                      View Details
                    </ViewDetailsButton>
                  </ProductInfo>
                </ProductCard>
              ))}
            </ProductRow>
          ))}
        </ProductListContainer>
        {selectedProduct && (
          <PopupContainer>
            <PopupContent>
              <h2>{selectedProduct.name}</h2>
              <p>Expiry Date: {selectedProduct.expiryDate}</p>
              <p>User Reviews:</p>
              {selectedProduct.reviews.map((review) => (
                <div key={review.id}>
                  <p>{review.user}: {review.comment}</p>
                  <p>Rating: {review.rating}</p>
                </div>
              ))}
              <PopupCloseButton onClick={handleClosePopup}>X</PopupCloseButton>
            </PopupContent>
          </PopupContainer>
        )}
      </>
      );
};

export default ProductList;