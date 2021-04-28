import React from "react"

const Footer = props => {
  return (
    <footer>
      <p>© {new Date().getFullYear()}, coinmoon.xyz</p>
      <p>
        Disclaimer: This website is for entertainment purpose only. The owner of
        the website is not a financial advisor, and no information on this website should be used to
        make investment or predict market prices. The owner of the website
        cannot be held accountable for any loss that may incur. The
        cryptocurrency market is highly volatile. Please do your own thorough
        research before making any investment.
      </p>
    </footer>
  )
}

export default Footer
