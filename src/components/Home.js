import React from 'react'
import '../css/home.css'
function Home() {
    return (
        <div className="home">
            <div className="home_content">
                <p style={{color: "var(--primary-color)"}}>CONNECTING THE DISCONNECTED</p>
                <h1 className="title">
                    <span>Vyorius</span> brings unmanned robots <span>together</span>, wherever they are.
                </h1>
                <p>With all of the operations, commanding and maintenance tools in one place, unmanned vehicles will stay connected and productive no matter where you’re Delivering.</p>
                <div className="buttons">
                    <button className="primary-button">Try Vyorius</button>
                    <button className="secondary-button">Learn More</button>
                </div>
                <p>Need to order a delivery? <a href="">Get Started</a></p>
            </div>
            <img src={require('../assets/home.png')} alt=""/>
        </div>
    )
}

export default Home
