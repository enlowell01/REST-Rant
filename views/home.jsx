const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/pasta.jpg" alt="Pasta"/>
                <div>
                Photo by <a href="https://unsplash.com/@sunorwind?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">sunorwind</a> on <a href="https://unsplash.com/photos/vNmf3cbb14g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>

          </main>
      </Def>
    )
  }
  

module.exports = home
