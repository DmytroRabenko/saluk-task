import CatalogSlider from '../../components/main/catalog-slider/catalog-slider';
import Hero from '../../components/main/hero/hero';
import Phrase from '../../components/main/phrase/phrase';
import ReviewsSlider from '../../components/main/reviews-slider/reviews-slider';
import Subscribe from '../../components/main/subscribe/subscribe';

const Main = () => {
  return (
    <>
      <Hero />
      <Phrase />
      <CatalogSlider />
      <Subscribe />
      <ReviewsSlider />
    </>
  );
};

export default Main;
