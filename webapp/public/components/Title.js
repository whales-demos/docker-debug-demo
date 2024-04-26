import { html, render, Component } from '../js/preact-htm.js'

async function init() {
  try {
    const response = await fetch("/variables", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
    const data = await response.json()
    console.log("📦", data)
    return data

  } catch (error) {
    console.log("😡", error) 
    return error
  }

}

async function info() {
  try {
    const response = await fetch("/info", {
        method: "GET"
      })
    const data = await response.text()
    console.log("📦", data)
    return data

  } catch (error) {
    console.log("😡", error) 
    return error
  }
}

let variables = await init()
let infoMessage = await info()

class Title extends Component {

  constructor(props) {
    super()

    console.log("🚧", variables)

    this.state = { 
      text: variables.message ? variables.message : "this is a message",
      mainTitle: infoMessage,
      //mainTitle: `👋📅 ${(new Date()).toLocaleString()}`,
      //mainTitle: `🎃 You've been hacked! 😈 ${(new Date()).toLocaleString()}`,
    }
  }

  render() {
    return html`
    <h1>${this.state.mainTitle}</h1>
    <h2>${this.state.text}</h2>
    <h4>${this.props.subtitle}</h4>
    `
  }
}

export default Title
