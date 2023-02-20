import React, { useState } from 'react';
import axiosClient from "./axiosClient";

const LoginForm = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosClient.post('/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('refreshToken', response.data.refresh_token);
      window.location.reload(); // Tải lại trang để cập nhật thông tin người dùng
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={username} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

const ProtectedPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axiosClient.get('/items/Áo%20thun%20nam');
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Lấy JWT từ localStorage
  const token = localStorage.getItem('token');

  // Nếu JWT hết hạn, lấy refresh token từ localStorage và gửi yêu cầu lấy lại JWT mới từ máy chủ
  if (!token) {
    const refreshToken = localStorage.getItem('refreshToken');
    axiosClient.post('/auth/refresh-token', { refreshToken }).then((response) => {
      // Lưu trữ JWT mới vào localStorage
      localStorage.setItem('token', response.data.token);
      // Sau khi nhận được JWT mới, tải lại trang để cập nhật thông tin người dùng
      window.location.reload();
    });
  } else {
    // Nếu JWT còn hiệu lực, gửi yêu cầu để lấy thông tin người dùng
    fetchData();
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>Email: {user.password}</p>
      <button onClick={() => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.reload(); // Đăng xuất và tải lại trang
      }}>Logout</button>
    </div>
  );
};

const App = () => {
  // Kiểm tra xem người dùng đã đăng nhập chưa
  const token = localStorage.getItem('token');
  if (!token) {
    return <LoginForm />;
  }

  return <ProtectedPage />;
};

export default App;
