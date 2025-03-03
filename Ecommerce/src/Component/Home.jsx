import Cards from './Cards'; 
import Arr from './Data/Data.jsx'
import {Row,Col}from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return(
      
        <>
        <Carousel style={{height:"720px",width:"1280px",marginLeft:"90px",marginBottom:"10px",borderRadius:"10px",boxShadow:"2px 2px 2px 2px gray"}} data-bs-theme="dark">
      <Carousel.Item>
      <img style={{height:"720px",width:"1280px",objectFit:"fill"}} src="https://www.adsoftheworld.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBem9HQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--953bf75d2c2493329e00984f2e81f523c9690171/thumbnail_45078" className="d-block w-100" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:"720px",width:"1280px",objectFit:"fill"}} src="https://media.licdn.com/dms/image/D4E12AQFgUH1pxkovSg/article-cover_image-shrink_720_1280/0/1715245528820?e=2147483647&v=beta&t=lGGC8hYW0R-5DqVKhQCER9HbDEpoNkAftyBA03osYdU" />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:"720px",width:"1280px",objectFit:"fill"}} src="https://c8.alamy.com/comp/2E2NTYD/great-britain-england-london-denim-style-vintage-levis-banner-dating-from-1950-2E2NTYD.jpg" />
      </Carousel.Item>
    </Carousel>  
    <div style={{ paddingLeft: "100px", }}>
      <h1><FontAwesomeIcon icon={faStore} />Collections</h1>
        <Row xs={4} sm={4} md={4} style={{ margin: "15px" }}>
          {Arr.map((e) => {
            return <Cards img={e.img} BrandName={e.BrandName} Details={e.Details} Lin={e.Lin} id={e.id} />;
          })}
        </Row>
      </div></>
);
}

export default Home;