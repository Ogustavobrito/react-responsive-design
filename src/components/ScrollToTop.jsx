import React, {useState} from 'react';
import {BsChevronUp} from 'react-icons/bs';

const ScrollToTop = () => {
  const [visible, setVisable] = useState(false);
  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setVisable(true) : setVisable(false);
  });

  return (
    <div className={` scrollTop ${visible ? 'visible' : ''}`}>
      <a href="#">
        <BsChevronUp />
      </a>
    </div>
  );
};

export default ScrollToTop;
