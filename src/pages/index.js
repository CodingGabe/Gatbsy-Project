import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
        <div style={{ color: '#202020'}}>
            <Link to="/contact/">Contact</Link>
            <h1>Hello World!</h1>
            <p>Welcome to Membersy.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="rng" />
        </div>
    )
