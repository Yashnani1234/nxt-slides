import './index.css'

const SlideItem = props => {
  const {details, onClickButton} = props
  const {heading, description, id} = details
  const slideChange = () => {
    onClickButton(id)
  }
  return (
    <li className="list">
      <button type="button" onClick={slideChange} testid={id}>
        <h1 className="heading">{heading}</h1>
        <p className="para">{description}</p>
      </button>
    </li>
  )
}

export default SlideItem
