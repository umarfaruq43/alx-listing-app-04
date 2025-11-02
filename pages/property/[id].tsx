import { PROPERTYLISTINGSAMPLE } from '@/constants/index';
import { useRouter } from 'next/router';
import PropertyDetail from '@/components/property/PropertyDetail';
import BookingSection from '@/components/property/BookingSection';
import ReviewSection from '@/components/property/ReviewSection';
import { review } from '@/constants/index';
import PropertyImage from '@/components/property/PropertyImages';

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.id === id);

  if (!property) return <p>Property not found</p>;

  return (
    <>
      <head>
        <title>Property Details</title>
      </head>
      <main>
        <div className=''>
          <PropertyImage property={property} />
        </div>
        <div className='flex w-[95%] mx-auto justify-between '>
          <PropertyDetail property={property} />
          <BookingSection price={property.price} />
        </div>
        <div className=' w-[95%] mx-auto '>
          <ReviewSection reviews={review} />
        </div>
      </main>
    </>
  );
}
