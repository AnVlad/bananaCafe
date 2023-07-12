import React from 'react';

import Wrapper from '../helper/Wrapper';
import Banner from './main/Banner';
import PopularMenuBanner from './main/PopularMenuBanner';
import Gallery from './main/Gallery';
import Location from './main/Location';

function Main() {
  return (
    <>
      <main>
        <Wrapper backgroundColor='second'>
          <Banner />
          <PopularMenuBanner />
          <Gallery />
          <Location />
        </Wrapper>
      </main>
    </>
  );
}

export default Main;
