import logo from './logo.svg';
import './App.css';
import ImageGallery from './ImageGallery';
import { useRef, useState } from 'react';

function App() {
  const [fetchData,setFetchData] = useState([]);
  const ref = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    const endpointURL = `https://pixabay.com/api/?key=22122404-713dcecbd36ec8660739a046d&q=${ref.current.value}&image_type=photo`;
    fetch(endpointURL)
    .then((res)=>{
      return res.json();
    })
    .then((data) => {
      setFetchData(data.hits);
    });
  };
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='画像を探す' ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData}/>
    </div>
  );
}

export default App;
