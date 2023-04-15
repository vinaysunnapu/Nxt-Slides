import './index.css'

const Slide = props => {
  const {slideData, activeSlide, isActive} = props

  const {id, heading, description, num} = slideData

  const onClickActiveSlide = () => {
    activeSlide(id)
  }

  const bgClassName = isActive && 'list-bg-color'

  return (
    <li
      testid={`slideTab${num}`}
      className={`main-list-item ${bgClassName}`}
      onClick={onClickActiveSlide}
    >
      <p className="num">{num}</p>
      <div className="list-item">
        <h1 className="list-heading">{heading}</h1>
        <p className="list-description">{description}</p>
      </div>
    </li>
  )
}

export default Slide
