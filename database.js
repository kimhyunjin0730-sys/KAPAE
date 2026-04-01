const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'HI829^cata700',
  database: process.env.DB_NAME || 'kapae5070',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(conn => {
    console.log('✅ MySQL Database Connected successfully.');
    conn.release();
  })
  .catch(err => {
    console.error('❌ MySQL Connection Error. VM 서버에 MySQL 엔진이 구동 중인지, 비밀번호가 맞는지 확인하세요:', err.message);
  });

module.exports = pool;
