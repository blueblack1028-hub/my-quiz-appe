import React from 'react';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl'
    }}>
      <h1 style={{ color: '#2563eb' }}>ژیری کویز</h1>
      <p>بەخێرهاتیت! ئەپەکەت بە سەرکەوتوویی لە Vercel کار دەکات.</p>
      <button style={{
        padding: '10px 20px',
        backgroundColor: '#2563eb',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        دەستپێکردنی تاقیکردنەوە
      </button>
    </div>
  );
}

export default App;
