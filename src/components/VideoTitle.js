

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-4 text-lg w-1/4 m-2">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black md:py-3 md:px-12 px-5 py-2 mx-1 text-xl rounded-lg hover:bg-opacity-80 ">Play</button>
        <button className="hidden md:inline-block md:mx-2 bg-gray-500 text-white p-3 px-12 text-xl rounded-lg bg-opacity-50 hover:bg-opacity-80 ">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
