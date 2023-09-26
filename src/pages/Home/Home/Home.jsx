import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/all images/img1.avif'
import img2 from '../../../assets/all images/img2.avif'
import img3 from '../../../assets/all images/img3.avif'

const Home = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img className="max-h-96" src={img1} />
                    
                </div>
                <div>
                    <img className="max-h-96" src={img2} />
                    
                </div>
                <div>
                    <img className="max-h-96" src={img3} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Home;