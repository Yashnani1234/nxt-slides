import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import SlideItem from '../slideItem'

import './index.css'

const initialSlidesList = [
  {
    id: uuidv4(),
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: uuidv4(),
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: uuidv4(),
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: uuidv4(),
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: uuidv4(),
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: uuidv4(),
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: uuidv4(),
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]
class Slides extends Component {
  state = {
    slidesList: initialSlidesList,
    editHeading: false,
    activeSlide: initialSlidesList[0],
    editPara: false,
    title: '',
    para: '',
  }

  onClickNew = event => {
    event.preventDefault()
    const newSlide = {
      id: uuidv4(),
      heading: 'heading',
      description: 'description',
    }
    this.setState(prevState => ({
      slidesList: [...prevState.slidesList, newSlide],
    }))
  }

  onClickButton = id => {
    const {slidesList} = this.state
    const index = slidesList.find(each => {
      if (each.id === id) {
        return each
      }
      return null
    })
    this.setState({
      editHeading: false,
      editPara: false,
      activeSlide: index,
    })
  }

  onClickHeading = () => {
    this.setState(prevState => ({editHeading: !prevState.edit}))
  }

  onClickPara = () => {
    this.setState(prevState => ({editPara: !prevState.editPara}))
  }

  onChangeHeading = event => {
    const {activeSlide} = this.state

    this.setState(prevState => ({
      slidesList: prevState.slidesList.map(each => {
        if (each === activeSlide) {
          const updated = {...each, heading: event.target.value}
          console.log(updated)
          return updated
        }
        return each
      }),
    }))
    this.setState({title: event.target.value})
  }

  onChangeDescription = event => {
    const {activeSlide} = this.state

    this.setState(prevState => ({
      slidesList: prevState.slidesList.map(each => {
        if (each === activeSlide) {
          const updated = {...each, description: event.target.value}
          console.log(updated)
          return updated
        }
        return each
      }),
    }))
    this.setState({para: event.target.value})
  }

  render() {
    const {
      slidesList,
      editPara,
      editHeading,
      activeSlide,
      title,
      para,
    } = this.state
    console.log(activeSlide)
    return (
      <>
        <div className="header">
          <img
            className="image-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
          />
          <h1>Nxt Slides</h1>
        </div>
        <button className="new" type="button" onClick={this.onClickNew}>
          <img
            className="image-plus"
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
          />
          <p>New</p>
        </button>
        <div className="container">
          <div className="items">
            <ol className="un-list">
              {slidesList.map(each => (
                <SlideItem
                  details={each}
                  key={each.id}
                  onClickButton={this.onClickButton}
                />
              ))}
            </ol>
          </div>
          <div className="slide">
            <li className="list">
              {editHeading ? (
                <input
                  type="text"
                  value={title}
                  onChange={this.onChangeHeading}
                />
              ) : (
                <h1 className="slideHeading" onClick={this.onClickHeading}>
                  {activeSlide.heading}
                </h1>
              )}
              {editPara ? (
                <input
                  type="text"
                  value={para}
                  onChange={this.onChangeDescription}
                />
              ) : (
                <p className="slidePara" onClick={this.onClickPara}>
                  {activeSlide.description}
                </p>
              )}
            </li>
          </div>
        </div>
      </>
    )
  }
}

export default Slides
