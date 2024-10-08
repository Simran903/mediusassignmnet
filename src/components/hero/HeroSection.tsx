import React,{lazy} from 'react';

const Image = lazy(() => import('next/image'))
// import Image from 'next/image';
import HeroImage from '@/../../public/hero-variant-c.webp';
import googleIcon from  '@/../../public/google-icon.png';
import './hero.css';

const HeroSection: React.FC = () => {
  return (
    <main className="hero-main">
      <div className="hero-content">
        <h1 className="hero-title" style={{zIndex: 9999}}>
          <span style={{zIndex: 9999}}>Mortgages</span><span style={{zIndex: 9999}}>made simple</span>
        </h1>
        <div className="hero-ratting-section">

          <div className='hero-rating-container'>
            <button className="hero-button">
              Start my approval
            </button>
            <p className="hero-text">
         
              3 min | No credit impact
            </p>
          </div>

          <div className="hero-reviews">
            <div className="hero-reviews-container">
            <Image src={googleIcon} alt="Google" width={20} height={20} className="hero-google-icon" />
            <div className="hero-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="hero-star-icon">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            </div>
            <span className="hero-review-text">4.6 Stars | 3177 Google reviews</span>
          </div>
        </div>
      </div>
      <div className="hero-image-wrapper" style={{zIndex: "1 !important"}}>
        <div className="hero-image-container">
          <Image 
            src={HeroImage} 
            alt="Phone displaying mortgage approval" 
            width={500} 
            height={600}
            style={{background: 'none',position: "relative"}}
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
