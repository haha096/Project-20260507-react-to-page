import React, { useState } from 'react';

const booksData = [
  { id: 1, title: "신경과학과 마음", author: "안토니오 다마지오", price: 25000 },
  { id: 2, title: "불확실성의 시대", author: "데이비드 봄", price: 22000 },
  { id: 3, title: "감정은 어떻게 만들어지는가", author: "리사 펠드먼 배럿", price: 28000 },
  { id: 4, title: "나를 복제하다", author: "테드 창", price: 18000 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
    alert(`${book.title}이(가) 장바구니에 담겼습니다!`);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>📚 Insight Books</h1>
        <div className="cart-status">장바구니: {cart.length}권</div>
      </header>

      <main className="book-grid">
        {booksData.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p className="author">{book.author}</p>
            <p className="price">{book.price.toLocaleString()}원</p>
            <button onClick={() => addToCart(book)}>장바구니 담기</button>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>AWS CI/CD Pipeline Deployment Test Page</p>
      </footer>
    </div>
  );
}

export default App;