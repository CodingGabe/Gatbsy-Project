import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
        <div>
            <Link to="/contact/">Contact</Link>
            <Link to="/about-css-modules/">Modules</Link>
            <h1>Hello World!</h1>
            <p>Welcome to Membersy.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="rng" />
        </div>
    )
