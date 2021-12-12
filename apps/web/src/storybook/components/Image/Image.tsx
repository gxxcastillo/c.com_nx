function Image({
  src = '',
  alt = ''
}) {
  return (
    <div className="Image">
      <img src={src} alt={alt} />
    </div>
  )
}

export default Image;