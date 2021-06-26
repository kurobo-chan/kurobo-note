import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Aside from "../components/aside"
import "./layout.css"

export default function Home({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Aside />
      <Footer />
    </div>
  )
}
