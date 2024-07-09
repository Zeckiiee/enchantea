
export default function Carousel() {
  const slides =[
    {
        id:1,
        url:'https://www.istockphoto.com/photo/bbq-classic-burger-against-fiery-flames-vibrant-food-black-background-gm1500141300-521683503?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fburger&utm_medium=affiliate&utm_source=unsplash&utm_term=burger%3A%3A%3A'
    },
    {

    },
  ]
  return (
    <div>
        {slides.map((slide)=>{
            return(
                <div key={slide.}><img src={slide.url} alt="" /></div>
            )
        })}
    </div>
  )
}
