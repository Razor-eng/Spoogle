function Avatar({url}) {
  return <img style={{marginLeft: "auto"}}  loading='lazy' src={url} alt="Profile pic" className=' h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110'/>
}

export default Avatar
