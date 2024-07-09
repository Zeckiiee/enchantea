

export default function ProductCard({pictureUrl}) {
  return (
    <div className=' w-40 h-40 bg-orange-200 rounded-lg overflow-hidden flex justify-center items-center'>
        <img className="w-full h-full object-cover" src={pictureUrl} alt="" />
    </div>
  )
}
