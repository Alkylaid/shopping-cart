import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import teaser1 from '../imgs/teaser1.jpg';
import teaser2 from '../imgs/teaser2.jpg';
import teaser3 from '../imgs/teaser3.jpg';
import teaser4 from '../imgs/teaser4.jpg';
import teaser5 from '../imgs/teaser5.jpg';
import teaser6 from '../imgs/teaser6.jpg';
import teaser7 from '../imgs/teaser7.jpg';
import teaser8 from '../imgs/teaser8.jpg';
import uniqid from 'uniqid';

const Teasers = () => {

  const [teasers, setTeasers] = useState([]);


  useEffect(() => {
    const teaserImages = [teaser1,teaser2,teaser3,teaser4,teaser5,teaser6,teaser7,teaser8]
    const shuffled = teaserImages.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);    
    setTeasers(selected);
  },[]);


  return (
    <div className="teaser-images">
      {teasers.map((image) => {
        return (
          <img
            src={image}
            alt="teasers"
            className="teaser-image"
            key={uniqid()}
          ></img>
        );
      })}
      <Link to="/sale" id="sale-button"> <button >Sale</button>
      </Link>
        <Link to="/shop" id="shop-now-button"><button >Shop Now</button></Link>
      
      <Link to="/featured" id="featured-button"> <button >Featured</button></Link>
    </div>
  );
};

export default Teasers;
