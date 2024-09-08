import logo from './logo.svg'
import './App.css'
//Đây là file component tổng (component là các khối xây dựng cơ bản của giao diện người dùng. Nó giống như các hàm JavaScript nhưng cho phép bạn tách nhỏ giao diện thành các phần độc lập, có thể tái sử dụng và component tổng là file chứa các file component con)
function App() {
  return (
    //Đây là cú pháp JSX tương tự như cú pháp của HTML
    <div className='App'>
      <h1>Create By Hien </h1>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
