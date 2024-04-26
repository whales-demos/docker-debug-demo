import { html, render, Component } from '../js/preact-htm.js'
import Title  from './Title.js'

class App extends Component {
  render() {
    return html`
      <dialog open>
        <article>
          <header>
            <!--
            <button aria-label="Close" rel="prev"></button>
            -->
            <p>
              <strong>🐳 Golang demo</strong>
            </p>
          </header>
          <p>
            <${Title} subtitle="📦 v0.0.0"/>
          </p>
        </article>
      </dialog>
    `
  }
}

export default App


