import './App.css';
import './custom.scss';
import NavbarComp from './components/NavbarComp';
import {useEffect, useState} from 'react';

const App = () => {
  const importAll = (r) => {
    return r.keys().map(r);
  };

  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(importAll(require.context('../images/gallery/', false, /\.(png|jpe?g|svg)$/)));

  }, []); // empty dependency array to act like componentDidMount

  useEffect(() => {
    cacheImages(images);
  }, []);

  const cacheImages = async(arr) => {
    const promises = await arr.map((image) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = image;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);
    setIsloading(false);
  }

  return (
    <div className="App">
      <NavbarComp/>
    </div>
  );
}



export default App;