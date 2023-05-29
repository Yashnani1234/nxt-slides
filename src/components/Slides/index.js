import {Component} from 'react'
import './index.css'
import SlideListItem from '../slideItem'
import SliderContext from '../../context'
import Slide from '../slide'

class Slides extends Component {
  render() {
    return (
      <SliderContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideListItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SliderContext.Consumer>
    )
  }
}

export default Slides
