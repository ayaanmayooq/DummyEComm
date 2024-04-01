import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductCard } from '@/components/product-card';
import { Product } from "@/lib/schema"

interface Props {
  products: Product[];
}

export const ProductCarousel = ({ products }: Props) => {
  return (
    <div className='p-10'>
      <div className='flex justify-between items-center mx-5'>
        <p>Swipe for more products</p>
        <a className="flex gap-x-1 items-center group" href="/products">
          <p className="font-normal font-sans txt-medium text-ui-fg-interactive">
            Explore products
          </p>
          <svg className='group-hover:rotate-45 ease-in-out duration-150' data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.75001 2H5.00001V3.5H5.75001H11.4393L2.21968 12.7197L1.68935 13.25L2.75001 14.3107L3.28034 13.7803L12.4988 4.56182V10.25V11H13.9988V10.25V3C13.9988 2.44772 13.5511 2 12.9988 2H5.75001Z" fill="currentColor">
            </path></svg>
        </a>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="group">
            <div className='m-5 transition-transform duration-150 ease-in-out'>
              <ProductCard product={product} scale={false} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
