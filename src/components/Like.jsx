import React from 'react';
import eth1 from '../assets/eth1.png';
import eth2 from '../assets/eth2.png';

const Like = () => {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">An NTF like no other</h2>
          <p className="description">
            Don't miss out release of our new NFT. Sing up below to recieve
            updates when we go live on 04/11
          </p>
          <p className="description">
            Don't miss out release of our new NFT. Sing up below to recieve
            updates when we go live on 04/11.Don't miss out release of our new
            NFT. Sing up below to recieve updates when we go live on 04/11
          </p>
        </div>

        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">An NTF like no other</h2>
          <p className="description">
            Don't miss out release of our new NFT. Sing up below to recieve
            updates when we go live on 04/11
          </p>
          <p className="description">
            Don't miss out release of our new NFT. Sing up below to recieve
            updates when we go live on 04/11.Don't miss out release of our new
            NFT. Sing up below to recieve updates when we go live on 04/11
          </p>
        </div>
      </div>
    </div>
  );
};

export default Like;
