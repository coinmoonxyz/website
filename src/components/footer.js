import React from "react"
import { css, jsx } from "@emotion/react"

const Footer = props => {
  return (
    <footer style={{ fontSize: "13px", color: "#666" }}>
      <p>© {new Date().getFullYear()}, coinmoon.xyz</p>
      <p>
        <a
          href="https://www.privacypolicygenerator.info/live.php?token=9CiSLR52wnUDteo2kXQlNPQ98DCRHl9T"
          style={{ color: "#666" }}
        >
          Our Privacy Policy
        </a>
      </p>
      <p>
        Disclaimer: This website is for entertainment purpose only. The owner
        and writers of the website are not financial advisors, and no
        information on this website should be considered investment advice or
        used to make investment decisions. The owner and writers of the website
        cannot be held accountable for any loss that may incur. The
        cryptocurrency market is highly volatile. Please do your own thorough
        research before making any investment.
      </p>
      <p>
        공지: 이 웹사이트는 재미를 목적으로 만들었습니다. 운영진과 필진은 재정
        전문가가 아니며 본 웹사이트의 컨텐트는 투자를 권유하거나 투자를 조언하는
        목적으로 제공되지 않습니다. 운영진과 필진은 어떤 손해도 책임질 수
        없습니다. 코인 마켓은 굉장히 불안정합니다. 투자를 할 때에는 꼭 직접
        충분한 조사를 하시기를 권합니다.
      </p>
      <p>
        Advertisement Disclaimer: The links on this website may contain
        referral/affiliate links. If you purchase products or services through
        the links, the owner of the website gets a small reward.
      </p>
      <p>
        광고 공지: 본 웹사이트의 링크는 리퍼럴 링크를 포함합니다. 방문자가 이
        링크를 통해 제품이나 서비스를 구매 시, 운영자는 약간의 리워드를
        받습니다.
      </p>
    </footer>
  )
}

export default Footer
