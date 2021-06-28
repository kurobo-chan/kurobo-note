import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"
import RandomPosts from "../components/randomposts"

export default function Home({ children }) {
  return (
    <div>
      <Header />
      {children}
      <RandomPosts a_number={3} />
      <Footer />
    </div>
  )
}
