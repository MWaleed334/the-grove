import Hero from '@/sections/Hero/Hero'
import DisplayVenue from '@/sections/DisplayVenue/DisplayVenue'
import BookTickets from '@/sections/BookTickets/BookTickets'
import CuisineShowcase from '@/sections/CuisineShowcase/CuisineShowcase'
import CurateExperience from '@/sections/CurateExperience/CurateExperience'
import FindYourPlace from '@/sections/FindYourPlace/FindYourPlace'

export default function Home() {
  return (
    <div className='flex flex-col gap-6 md:gap-10'>
      <Hero />
      <DisplayVenue/>
     <BookTickets/>
      <CuisineShowcase />
      <CurateExperience />
      <FindYourPlace />
    </div>
  )
}
