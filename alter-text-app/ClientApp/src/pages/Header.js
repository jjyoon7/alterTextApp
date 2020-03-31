import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/" className="header-title">
                    <h1 className="foo foo-title">foo</h1>
                    <h1 className="word word-title word-title-animation">Word</h1>
                    <h1 className="bar bar-title">bar</h1>
                </Link>
            </nav>
        </header>
    )
}