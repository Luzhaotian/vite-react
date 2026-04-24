import React from 'react';
import { Carousel } from 'antd';
import { Image } from 'antd';

const contentStyle: React.CSSProperties = {
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
  width: 'calc(100vw - 192px - 32px - 48px - 8px)',
  height: '400px',
  objectFit: 'cover',
};

const placeholderImage = 'https://via.placeholder.com/1920x400/364d79/ffffff?text=Carousel+1';

const App: React.FC = () => (
  <Carousel>
    <div>
      <Image style={contentStyle} src={placeholderImage} />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default App;
