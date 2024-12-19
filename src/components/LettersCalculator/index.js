import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeInputElement = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state

    const count = searchInput.length

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputEl">Enter the phrase</label>
          <input
            id="inputEl"
            className="input-box"
            onChange={this.onChangeInputElement}
            type="text"
          />
          <p className="result">No.of letters: {count}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
