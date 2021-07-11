import React from "react"
import SEO from "../components/seo"
import SideBar from "../components/sidebar"
// import DogVideo from "../assets/videos/topper.mp4"
// import "../styles/pages/homePage.scss"

const IndexPage: React.FC = props => {
  return (
    <section className="page-container">
      {/* <SEO /> */}
      <SideBar />
      <div>
        <div id="fb-root" />

        <div className="main">
          <div className="chapter-marker" data-id="chap-2">
            {/* chapter 2 CONTENT START */}
            <div className="pseudo-container">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <img
                    className="chapter-img img-responsive mx-auto d-block break"
                    src="./Blockchain explained_files/BLOCK-spacer.png"
                  />
                </div>
                <div className="col-md-9">
                  <p className="srepgfx-chapter">Difficult to change</p>
                </div>
                <div className="col-md-7">
                  <p className="srepgfx-chapter-intro">
                    Hash codes keep records safe.
                  </p>
                </div>
                <div className="col-md-7">
                  <p className="srepgfx-dek break">
                    A hash code is created by a math function that takes digital
                    information and generates a string of letters and numbers
                    from it. Let’s take a closer look at two important
                    characteristics of hash codes:
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <p className="srepgfx-dek">
                    First, no matter what the size of the original file, a hash
                    function will always generate a code of the same length. For
                    example, the first tweet from Jack Dorsey was much shorter
                    than “War and Peace” by Leo Tolstoy, but they would yield
                    hashes of the same length.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-7 break">
                  <div className="text-center">
                    <img
                      className="smaller"
                      src="./Blockchain explained_files/thetweet.jpg"
                    />
                  </div>
                  <p className="srepgfx-label smidge text-md-center">
                    Sample (32-byte) HASH length of @jack's tweet:
                  </p>
                  <p className="hash text-md-center ">
                    c6f7257abff7b43959cd728f06c0c74230391640115cc3ea86a7e54be62aecc4
                  </p>
                </div>
                <div className="col-md-7 break-after">
                  <div className="text-center">
                    <img
                      className="smaller"
                      src="./Blockchain explained_files/book_closed.jpg"
                    />
                  </div>
                  <p className="srepgfx-label smidge text-md-center">
                    Sample (32-byte) HASH length of 'War &amp; Peace':
                  </p>
                  <p className="hash text-md-center">
                    a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <p className="srepgfx-dek">
                    Second, any change to the original input will generate a new
                    hash. So if someone decided to delete just one comma from
                    Tolstoy's 587,287-word masterpiece, it would show up,
                    because the hash would change.
                  </p>
                </div>
                <div className="col-md-7">
                  <div className="text-center">
                    <img
                      className="smaller"
                      src="./Blockchain explained_files/book_open.jpg"
                    />
                  </div>
                  <p className="srepgfx-label smidge center text-md-center">
                    ORIGINAL HASH:
                  </p>
                  <p className="hash text-md-center ">
                    a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447
                  </p>
                  <p className="srepgfx-label smidge text-md-center">
                    NEW HASH:
                  </p>
                  <p className="hash text-md-center ">
                    40115cc2aecc43ea86a7e54be6f7257abff7b43959cd728f06c0c7423039166r
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <p className="srepgfx-chapter-intro break">
                    The changed hash breaks the chain.
                  </p>
                  <p className="srepgfx-dek break-after">
                    The next block in the chain still has the old hash, so to
                    restore the chain a hacker would have to recalculate that.
                    And the next, and so on. Recalculating all those hashes
                    would take an enormous amount of computing power.
                  </p>
                </div>
              </div>
            </div>
            {/* scn04 - the hash */}
            <div className="scroll-item-container">
              <div className="scroll-item-content">
                <div className="pseudo-container"></div>
              </div>
              <div className="scroll-item" id="scroll-video-4">
                <div className="row justify-content-center">
                  <div className="col-xl-10 scroll-video-holder">
                    <video
                      className="video master-video hidden-sm-down mtz-vlc-pboid"
                      playsInline
                      autoPlay
                      muted
                      poster="images/videos-lg/posters/poster-video-5.png"
                    >
                      <source
                        src="images/videos-lg/video-5.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <video
                      className="video master-video hidden-md-up mtz-vlc-pboid"
                      playsInline
                      autoPlay
                      muted
                      poster="images/videos-sm/sm-posters/sm-poster-video-5.png"
                    >
                      <source
                        src="images/videos-sm/sm-video-5.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
              <div className="scroll-video-markers" />
            </div>
            {/* chapter 2 CONTENT END */}
          </div>
          <div className="chapter-marker" data-id="chap-3">
            {/* chapter 3 CONTENT START */}
            <div className="pseudo-container">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <img
                    className="chapter-img img-responsive mx-auto d-block break"
                    src="./Blockchain explained_files/BLOCK-spacer.png"
                  />
                  <p className="srepgfx-chapter">
                    The computers in the network
                  </p>
                </div>
                <div className="col-md-5">
                  <p className="srepgfx-chapter-intro">
                    Unlike traditional ledgers, a blockchain database is
                    decentralized and has no “master.”
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <img
                    className="img-fluid break hidden-xs-down"
                    src="./Blockchain explained_files/network.jpg"
                  />
                </div>
                <div className="col-md-9">
                  <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-6 text-center text-sm-left">
                      <img
                        className="img-fluid break hidden-sm-up smaller-image"
                        src="./Blockchain explained_files/network-central-small.jpg"
                      />
                      <p className="srepgfx-label">Centralized network</p>
                      <p className="srepgfx-sublabel">
                        Authority is held by a central node.
                      </p>
                    </div>
                    <div className="col-sm-6 col-md-6 text-center text-sm-left">
                      <img
                        className="img-fluid break hidden-sm-up smaller-image"
                        src="./Blockchain explained_files/network-decentral-small.jpg"
                      />
                      <p className="srepgfx-label">Decentralized network</p>
                      <p className="srepgfx-sublabel">
                        All the nodes can access the information and compete to
                        be the next to add to the database.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <p className="srepgfx-chapter-intro break">
                    Permission to join
                  </p>
                  <p className="srepgfx-dek">
                    Without centralized control of a network, trust is a
                    problem. One answer is to only let people you know, such as
                    company employees, join in. But blockchains such as the
                    bitcoin network are open to anyone. Members are anonymous.
                    There is no way to know if they are trustworthy.
                  </p>
                  <p className="srepgfx-dek">
                    To resolve this and build trust, these blockchains set tests
                    for the computers that seek to join and add records to the
                    chain. The tests are called consensus models.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <p className="srepgfx-chapter-intro break">
                    Reaching a consensus
                  </p>
                  <p className="srepgfx-dek">
                    The tests require network members to ‘prove’ themselves.
                    Some examples:
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-sm-4 col-md-4 text-center text-sm-left">
                  <img
                    className="img-fluid smaller-image"
                    src="./Blockchain explained_files/work.jpg"
                  />
                  <p className="srepgfx-label">Proof of work</p>
                  <p className="srepgfx-sublabel">
                    To add a block to the chain, nodes must demonstrate that
                    they have done ‘work’ by solving an increasingly difficult
                    computational puzzle. This process, called mining, uses a
                    lot of computing power. In return for their work, members
                    can receive rewards - tokens for instance, or bitcoins.
                  </p>
                </div>
                <div className="col-sm-4 col-md-4 text-center text-sm-left">
                  <img
                    className="img-fluid smaller-image"
                    src="./Blockchain explained_files/stake.jpg"
                  />
                  <p className="srepgfx-label">Proof of Stake</p>
                  <p className="srepgfx-sublabel">
                    Participants buy tokens which allow them to join the
                    network. The more tokens they have, the more they can mine.
                  </p>
                </div>
              </div>
            </div>
            {/* chapter 3 CONTENT END */}
          </div>
          <div className="chapter-marker" data-id="chap-4">
            {/* chapter 4 CONTENT START */}
            <div className="pseudo-container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <img
                    className="chapter-img img-responsive mx-auto d-block break"
                    src="./Blockchain explained_files/BLOCK-spacer.png"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <p className="srepgfx-chapter">Possible uses</p>
                </div>
                <div className="col-md-5">
                  <p className="srepgfx-chapter-intro break-after">
                    There is a lot of hype about blockchain, but some promising
                    uses are under development.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-3 text-center text-sm-left">
                  <img
                    className="uses-img"
                    src="./Blockchain explained_files/bitcoin.jpg"
                  />
                  <p className="srepgfx-label">Cryptocurrency</p>
                  <p className="srepgfx-sublabel">
                    Blockchains are the basis of bitcoin and other
                    cryptocurrencies.
                  </p>
                </div>
                <div className="col-md-3 text-center text-sm-left">
                  <img
                    className="uses-img"
                    src="./Blockchain explained_files/banks.jpg"
                  />
                  <p className="srepgfx-label">Banking</p>
                  <p className="srepgfx-sublabel">
                    Financial institutions have been investing in blockchains to
                    simplify their record-keeping for payments.
                  </p>
                </div>
                <div className="col-md-3 text-center text-sm-left">
                  <img
                    className="uses-img"
                    src="./Blockchain explained_files/supply_chain.jpg"
                  />
                  <p className="srepgfx-label">Supply chain</p>
                  <p className="srepgfx-sublabel">
                    Recording trades on a blockchain offers a way to check the
                    history of a product. For example, jewelry companies hope it
                    can assure customers that diamonds are not from places where
                    they could finance war.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-3 text-center text-sm-left">
                  <img
                    className="uses-img"
                    src="./Blockchain explained_files/health.png"
                  />
                  <p className="srepgfx-label">Healthcare</p>
                  <p className="srepgfx-sublabel">
                    With blockchain, medical history could be securely stored
                    and controlled by patients.
                  </p>
                </div>
                <div className="col-md-3 text-center text-sm-left">
                  <img
                    className="uses-img"
                    src="./Blockchain explained_files/vote.png"
                  />
                  <p className="srepgfx-label">Voting</p>
                  <p className="srepgfx-sublabel">
                    Blockchain records could create tamper-proof election
                    returns.
                  </p>
                </div>
                <div className="col-md-3 text-center text-sm-left">
                  <img
                    className="uses-img uses-img"
                    src="./Blockchain explained_files/land.png"
                  />
                  <p className="srepgfx-label">Property records</p>
                  <p className="srepgfx-sublabel">
                    Storing land records on a blockchain could cut down on
                    costly title research and insurance. In politically unstable
                    places, it could help prove ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* chapter 4 CONTENT END */}
          <div className="pseudo-container">
            <div className="row">
              <div className="col-12 mt-1">
                <p className="credit text-left">
                  Correction: An earlier version of this graphic incorrectly
                  described a hash function as an example of encryption. Hashing
                  is a form of cryptographic security that—unlike encryption—
                  cannot be reversed, or decrypted.
                </p>
                <img
                  className="chapter-img img-responsive mx-auto d-block"
                  src="./Blockchain explained_files/BLOCK-spacer.png"
                />
                <p className="credit text-center">
                  For more Reuters coverage of financial technology, please
                  visit our{" "}
                  <a href="https://www.reuters.com/future-of-money">
                    Future of Money
                  </a>{" "}
                  page.
                </p>
                <p className="credit text-center break break-after">
                  GRAPHIC by Maryanne Murray
                  <br />
                  DEVELOPMENT by Matthew Weber
                  <br />
                  VISUAL EDITING by Sarah Slobin
                  <br />
                  EDITED by Sara Ledwith
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="footer navbar bg-inverse bg-inverse navbar-inverse flex-row">
          <div className="navbar-brand">
            <a className="logo-container" href="http://www.reuters.com/">
              <img
                src="./Blockchain explained_files/reuters-footer.png"
                className="footer-logo"
              />
            </a>
          </div>
          <div className="mx-auto">
            <ul className="navbar-nav d-block">
              <li className="nav-item">
                <a className="nav-link" href="http://www.reuters.com/">
                  Reuters.com
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://www.reuters.com/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://www.reuters.com/terms-of-use"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          {/* saved from url=(0072)http://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/index.html */}
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          {/* Browser Compatibility */}
          <meta httpEquiv="cleartype" content="on" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* SOCIAL */}
          {/* Twitter */}
          {/* Linked In */}
          {/* Google */}
          <title>Blockchain explained</title>
          {/* G+ */}
          <meta itemProp="name" content="Blockchain explained" />
          <meta
            itemProp="description"
            content="A Reuters visual guide to blockchain technology"
          />
          <meta
            itemProp="image"
            content="http://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/share-card.png"
          />
          <meta
            itemProp="thumbnailUrl"
            content="http://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/share-card.png"
          />
          {/* FB */}
          <meta property="fb:app_id" content={319194411438328} />
          <meta property="fb:admins" content={616167736} />
          <meta property="fb:admins" content={625796953} />
          <meta property="fb:admins" content={571759798} />
          <meta
            property="og:url"
            content="http://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/index.html"
          />
          <meta property="og:title" content="Blockchain explained" />
          <meta
            property="og:image"
            content="http://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/share-card.png"
          />
          <meta property="og:site_name" content="Reuters" />
          <meta
            property="og:description"
            content="A Reuters visual guide to blockchain technology"
          />
          <meta
            name="description"
            content="A Reuters visual guide to blockchain technology"
          />
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ReutersGraphics" />
          <meta name="twitter:title" content="Blockchain explained" />
          <meta
            name="twitter:description"
            content="A Reuters visual guide to blockchain technology"
          />
          <meta name="twitter:creator" content="@ReutersGraphics" />
          <meta
            name="twitter:image:src"
            content="http://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/images/share-card.png"
          />
          <meta name="twitter:domain" content="http://www.reuters.com/" />
          <link
            rel="canonical"
            href="http://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/index.html"
          />
          <link
            rel="shortcut icon"
            href="http://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/favicon.ico"
          />
          <link
            rel="shortcut icon"
            href="http://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/favicon.ico"
          />
          <link rel="stylesheet" href="./Blockchain explained_files/main.css" />
          <meta
            httpEquiv="origin-trial"
            content="A+b/H0b8RPXNaJgaNFpO0YOFuGK6myDQXlwnJB3SwzvNMfcndat4DZYMrP4ClJIzYWo3/yP2S+8FTZ/lpqbPAAEAAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="
          />
          <meta
            httpEquiv="origin-trial"
            content="A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
          />
          <meta
            httpEquiv="origin-trial"
            content="AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
          />
          <meta
            httpEquiv="origin-trial"
            content="A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
          />
          <meta
            httpEquiv="origin-trial"
            content="AookgM0K6zABiuRTZwpn+R95G2CKmUH/2+zf2kS/QpMlVZ6HTI6QekeLkrJyxeIi62p2ejcQTF464pkdlx0Nwg0AAABmeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJUcnVzdFRva2VucyIsImV4cGlyeSI6MTYzNDA4MzE5OSwiaXNTdWJkb21haW4iOnRydWV9"
          />
          <meta
            httpEquiv="origin-trial"
            content="A3HucHUo1oW9s+9kIKz8mLkbcmdaj5lxt3eiIMp1Nh49dkkBlg1Fhg4Fd/r0vL69mRRA36YutI9P/lJUfL8csQoAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
          />
          <meta
            httpEquiv="origin-trial"
            content="A0OysezhLoCRYomumeYlubLurZTCmsjTb087OvtCy95jNM65cfEsbajrJnhaGwiTxhz38ZZbm+UhUwQuXfVPTg0AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
          />
          <meta
            httpEquiv="origin-trial"
            content="AxoOxdZQmIoA1WeAPDixRAeWDdgs7ZtVFfH2y19ziTgD1iaHE5ZGz2UdSjubkWvob9C5PrjUfkWi4ZSLgWk3Xg8AAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
          />
          <meta
            httpEquiv="origin-trial"
            content="A7+rMYR5onPnACrz+niKSeFdH3xw1IyHo2AZSHmxrofRk9w4HcQPMYcpBUKu6OQ6zsdxf4m/vqa6tG6Na4OLpAQAAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
          />
          <meta
            httpEquiv="origin-trial"
            content="AwfG8hAcHnPa/kJ1Co0EvG/K0F9l1s2JZGiDLt2mhC3QI5Fh4qmsmSwrWObZFbRC9ieDaSLU6lHRxhGUF/i9sgoAAACBeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
          />
          <meta
            httpEquiv="origin-trial"
            content="AwQ7dCmHkvR6FuOFxAuNnktYSQrGbL4dF+eBkrwNLALc69Wr//PnO1yzns3pjUoCaYbKHtVcnng2hU+8OUm0PAYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
          />
          <meta
            httpEquiv="origin-trial"
            content="AysVDPGQTLD/Scn78x4mLwB1tMfje5jwUpAAzGRpWsr1NzoN7MTFhT3ClmImi2svDZA7V6nWGIV8YTPsSRTe0wYAAACHeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
          />
          <div id="fb-root" />
          <nav className="header navbar navbar-full fixed-top bg-inverse navbar-inverse navbar-toggleable">
            {/* button for toggling the nav */}
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#ReutersMainNav"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* the logo / title */}
            <div className="navbar-brand">
              <a className="logo-container" href="http://www.reuters.com/">
                <img
                  className="logo reuters-graphics"
                  src="./Blockchain explained_files/reuters-graphics.png"
                />
              </a>
              <a
                className="page-title hidden-xs-down"
                href="http://graphics.reuters.com/TECHNOLOGY-BLOCKCHAIN/010070P11GN/index.html"
              >
                <span>Blockchain explained</span>
              </a>
            </div>
            <p />
            {/* the content */}
            <div
              className="navbar-collapse collapse show"
              id="ReutersMainNav"
              aria-expanded="true"
              style={{}}
            >
              <ul className="social navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="https://twitter.com/intent/tweet?text=Blockchain%20explained&via=Reuters&url=http%3A%2F%2Fgraphics.reuters.com%2FTECHNOLOGY-BLOCKCHAIN%2F010070P11GN%2Findex.html">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgraphics.reuters.com%2FTECHNOLOGY-BLOCKCHAIN%2F010070P11GN%2Findex.html">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="main">
            {" "}
            <div className="progress-bar-holder">
              <div className="progress-bar" style={{ width: "0%" }}>
                {" "}
              </div>
            </div>
            <div className="title-page">
              <video
                className="video topper-video hidden-sm-down mtz-vlc-pboid"
                playsInline
                autoPlay
                muted
                loop
              >
                <source src="images/videos-lg/topper.mp4" type="video/mp4" />
              </video>
              <video
                className="video topper-video hidden-md-up mtz-vlc-pboid"
                playsInline
                autoPlay
                muted
                loop
              >
                <source src="images/videos-sm/sm-topper.mp4" type="video/mp4" />
              </video>
              <div className="pseudo-container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="page-header">
                      <p className="srepgfx-dek kicker">
                        a Reuters visual guide
                      </p>
                      <h1 className="srepgfx-title">Blockchain explained</h1>
                      <p className="credit">
                        By MARYANNE MURRAY
                        <br />
                        Published June 15, 2018
                      </p>
                    </div>
                    <div className="srepgfx-dek-large main-subhead">
                      <div>
                        A blockchain is
                        <span className="special selected">a database </span>
                        <img
                          className="subhead-img"
                          src="./Blockchain explained_files/CHAPTER-01.jpg"
                        />{" "}
                        that is shared across a network of computers. Once a
                        record has been added to the chain it is very{" "}
                        <span className="special"> difficult to change.</span>
                        <img
                          className="subhead-img"
                          src="./Blockchain explained_files/CHAPTER-02.jpg"
                        />{" "}
                        To ensure all the copies of the database are the same,{" "}
                        <span className="special">the network</span>{" "}
                        <img
                          className="subhead-img"
                          src="./Blockchain explained_files/CHAPTER-03.jpg"
                        />{" "}
                        makes constant checks. Blockchains have been used to
                        underpin cyber-currencies like bitcoin, but many other{" "}
                        <span className="special"> possible uses</span>
                        <img
                          className="subhead-img"
                          src="./Blockchain explained_files/CHAPTER-04.jpg"
                        />
                        are emerging.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="button-div-notoggle"
                className="btn btn-primary circle top-button"
              >
                Top
              </div>
              {/* chapter 1 CONTENT START */}
              <div className="chapter-marker" data-id="chap-1">
                <div className="container mt-3">
                  <div className="row justify-content-center">
                    <div className="col-lg-9">
                      <img
                        className="chapter-img img-responsive mx-auto d-block break"
                        src="./Blockchain explained_files/BLOCK-spacer.png"
                      />
                    </div>
                    <div className="col-lg-9">
                      <p className="srepgfx-chapter">A database</p>
                    </div>
                    <div className="col-md-8 col-lg-7">
                      <p className="srepgfx-chapter-intro">
                        Records are bundled together into blocks and added to
                        the chain one after another. The basic parts:{" "}
                      </p>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col-6 col-md-12">
                          <img
                            className="img-fluid d-md-none"
                            src="./Blockchain explained_files/components-small.jpg"
                          />
                          <img
                            className="img-fluid d-none d-md-block"
                            src="./Blockchain explained_files/components-wide.jpg"
                          />
                        </div>
                        <div className="col-6  col-md-10">
                          <div className="row justify-content-between">
                            <div className="col-md-3">
                              <p className="srepgfx-label text-left">
                                The record
                              </p>
                              <p className="srepgfx-sublabel">
                                Can be any information, a deal for example
                              </p>
                            </div>
                            <div className="col-md-3 mt-0 mt-sm-3 mt-md-0">
                              <p className="srepgfx-label text-left">
                                The block
                              </p>
                              <p className="srepgfx-sublabel">
                                A bundle of records
                              </p>
                            </div>
                            <div className="col-md-3  mt-0 mt-sm-3 mt-md-0 ">
                              <p className="srepgfx-label text-left">
                                The Chain
                              </p>
                              <p className="srepgfx-sublabel">
                                All the blocks linked together
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* chapter 1 - scn01 - the record */}
                <div className="scroll-item-container full-height">
                  <div className="scroll-item-content">
                    <div className="pseudo-container">
                      <div className="row justify-content-center">
                        <div className="col-lg-9">
                          <p className="srepgfx-chapter-intro break">
                            Here’s how a deal gets included in a blockchain:
                          </p>
                          <p className="srepgfx-label centered ">STEP ONE</p>
                        </div>
                        <div className="col-md-7">
                          <p className="srepgfx-dek centered">
                            A trade is recorded. For example, let’s say Mr Pink
                            is selling two of his coins to Mr Green for $100.
                            The record lists the details, including a digital
                            signature from each party.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-item" id="scroll-video-0">
                    <div className="row justify-content-center">
                      <div className="col-xl-10 scroll-video-holder">
                        <video
                          className="video master-video hidden-sm-down mtz-vlc-pboid"
                          playsInline
                          autoPlay
                          muted
                          poster="images/videos-lg/posters/poster-video-1.png"
                        >
                          <source
                            src="images/videos-lg/video-1.mp4"
                            type="video/mp4"
                          />
                        </video>
                        <video
                          className="video master-video hidden-md-up mtz-vlc-pboid"
                          playsInline
                          autoPlay
                          muted
                          poster="images/videos-sm/sm-posters/sm-poster-video-1.png"
                        >
                          <source
                            src="images/videos-sm/sm-video-1.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                  <div className="scroll-video-markers" />
                </div>
              </div>
              {/* chapter 1 - scn02 - the network */}
              <div className="scroll-item-container full-height">
                <div className="scroll-item-content">
                  <div className="pseudo-container">
                    <div className="row justify-content-center">
                      <div className="col-lg-9">
                        <p className="srepgfx-label centered">STEP TWO</p>
                      </div>
                      <div className="col-md-7">
                        <p className="srepgfx-dek centered">
                          The record is checked by the network. The computers in
                          the network, called 'nodes', check the details of the
                          trade to make sure it is valid.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-item" id="scroll-video-1">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 scroll-video-holder">
                      <video
                        className="video master-video hidden-sm-down mtz-vlc-pboid"
                        playsInline
                        autoPlay
                        muted
                        poster="images/videos-lg/posters/poster-video-2.png"
                      >
                        <source
                          src="images/videos-lg/video-2.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <video
                        className="video master-video hidden-md-up mtz-vlc-pboid"
                        playsInline
                        autoPlay
                        muted
                        poster="images/videos-sm/sm-posters/sm-poster-video-2.png"
                      >
                        <source
                          src="images/videos-sm/sm-video-2.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="scroll-video-markers" />
              </div>
              {/* chapter 1 - scn03  the block*/}
              <div className="scroll-item-container full-height">
                <div className="scroll-item-content">
                  <div className="pseudo-container">
                    <div className="row justify-content-center">
                      <div className="col-lg-9">
                        <p className="srepgfx-label centered">STEP THREE</p>
                      </div>
                      <div className="col-md-7">
                        <p className="srepgfx-dek centered">
                          The records that the network accepted are added to a
                          block. Each block contains a unique code called a
                          hash. It also contains the hash of the previous block
                          in the chain.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-item" id="scroll-video-2">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 scroll-video-holder">
                      <video
                        className="video master-video hidden-sm-down mtz-vlc-pboid"
                        playsInline
                        autoPlay
                        muted
                        poster="images/videos-lg/posters/poster-video-3.png"
                      >
                        <source
                          src="images/videos-lg/video-3.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <video
                        className="video master-video hidden-md-up mtz-vlc-pboid"
                        playsInline
                        autoPlay
                        muted
                        poster="images/videos-sm/sm-posters/sm-poster-video-3.png"
                      >
                        <source
                          src="images/videos-sm/sm-video-3.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="scroll-video-markers" />
              </div>
              {/* chapter 1 - scn04 - the chain */}
              <div className="scroll-item-container">
                <div className="scroll-item-content">
                  <div className="pseudo-container">
                    <div className="row justify-content-center">
                      <div className="col-lg-9">
                        <p className="srepgfx-label centered">STEP FOUR</p>
                      </div>
                      <div className="col-md-7">
                        <p className="srepgfx-dek centered">
                          The block is added to the blockchain. The hash codes
                          connect the blocks together in a specific order.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="scroll-item" id="scroll-video-3">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 scroll-video-holder">
                      <video
                        className="video master-video hidden-sm-down mtz-vlc-pboid"
                        playsInline
                        autoPlay
                        muted
                        poster="images/videos-lg/posters/poster-video-4.png"
                      >
                        <source
                          src="images/videos-lg/video-4.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <video
                        className="video master-video hidden-md-up mtz-vlc-pboid"
                        playsInline
                        autoPlay
                        muted
                        poster="images/videos-sm/sm-posters/sm-poster-video-4.png"
                      >
                        <source
                          src="images/videos-sm/sm-video-4.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="scroll-video-markers" />
              </div>
              {/* chapter 1 CONTENT END */}
            </div>
            <div className="chapter-marker" data-id="chap-2">
              {/* chapter 2 CONTENT START */}
              <div className="pseudo-container">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <img
                      className="chapter-img img-responsive mx-auto d-block break"
                      src="./Blockchain explained_files/BLOCK-spacer.png"
                    />
                  </div>
                  <div className="col-md-9">
                    <p className="srepgfx-chapter">Difficult to change</p>
                  </div>
                  <div className="col-md-7">
                    <p className="srepgfx-chapter-intro">
                      Hash codes keep records safe.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <p className="srepgfx-dek break">
                      A hash code is created by a math function that takes
                      digital information and generates a string of letters and
                      numbers from it. Let’s take a closer look at two important
                      characteristics of hash codes:
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="srepgfx-dek">
                      First, no matter what the size of the original file, a
                      hash function will always generate a code of the same
                      length. For example, the first tweet from Jack Dorsey was
                      much shorter than “War and Peace” by Leo Tolstoy, but they
                      would yield hashes of the same length.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-7 break">
                    <div className="text-center">
                      <img
                        className="smaller"
                        src="./Blockchain explained_files/thetweet.jpg"
                      />
                    </div>
                    <p className="srepgfx-label smidge text-md-center">
                      Sample (32-byte) HASH length of @jack's tweet:
                    </p>
                    <p className="hash text-md-center ">
                      c6f7257abff7b43959cd728f06c0c74230391640115cc3ea86a7e54be62aecc4
                    </p>
                  </div>
                  <div className="col-md-7 break-after">
                    <div className="text-center">
                      <img
                        className="smaller"
                        src="./Blockchain explained_files/book_closed.jpg"
                      />
                    </div>
                    <p className="srepgfx-label smidge text-md-center">
                      Sample (32-byte) HASH length of 'War &amp; Peace':
                    </p>
                    <p className="hash text-md-center">
                      a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="srepgfx-dek">
                      Second, any change to the original input will generate a
                      new hash. So if someone decided to delete just one comma
                      from Tolstoy's 587,287-word masterpiece, it would show up,
                      because the hash would change.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <div className="text-center">
                      <img
                        className="smaller"
                        src="./Blockchain explained_files/book_open.jpg"
                      />
                    </div>
                    <p className="srepgfx-label smidge center text-md-center">
                      ORIGINAL HASH:
                    </p>
                    <p className="hash text-md-center ">
                      a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447
                    </p>
                    <p className="srepgfx-label smidge text-md-center">
                      NEW HASH:
                    </p>
                    <p className="hash text-md-center ">
                      40115cc2aecc43ea86a7e54be6f7257abff7b43959cd728f06c0c7423039166r
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="srepgfx-chapter-intro break">
                      The changed hash breaks the chain.
                    </p>
                    <p className="srepgfx-dek break-after">
                      The next block in the chain still has the old hash, so to
                      restore the chain a hacker would have to recalculate that.
                      And the next, and so on. Recalculating all those hashes
                      would take an enormous amount of computing power.
                    </p>
                  </div>
                </div>
              </div>
              {/* scn04 - the hash */}
              <div className="scroll-item-container">
                <div className="scroll-item-content">
                  <div className="pseudo-container"></div>
                </div>
                <div className="scroll-item" id="scroll-video-4">
                  <div className="row justify-content-center">
                    <div className="col-xl-10 scroll-video-holder">
                      <video
                        className="video master-video hidden-sm-down mtz-vlc-pboid"
                        playsInline
                        autoPlay
                        muted
                        poster="images/videos-lg/posters/poster-video-5.png"
                      >
                        <source
                          src="images/videos-lg/video-5.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <video
                        className="video master-video hidden-md-up mtz-vlc-pboid"
                        playsInline
                        autoPlay
                        muted
                        poster="images/videos-sm/sm-posters/sm-poster-video-5.png"
                      >
                        <source
                          src="images/videos-sm/sm-video-5.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
                <div className="scroll-video-markers" />
              </div>
              {/* chapter 2 CONTENT END */}
            </div>
            <div className="chapter-marker" data-id="chap-3">
              {/* chapter 3 CONTENT START */}
              <div className="pseudo-container">
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <img
                      className="chapter-img img-responsive mx-auto d-block break"
                      src="./Blockchain explained_files/BLOCK-spacer.png"
                    />
                    <p className="srepgfx-chapter">
                      The computers in the network
                    </p>
                  </div>
                  <div className="col-md-5">
                    <p className="srepgfx-chapter-intro">
                      Unlike traditional ledgers, a blockchain database is
                      decentralized and has no “master.”
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <img
                      className="img-fluid break hidden-xs-down"
                      src="./Blockchain explained_files/network.jpg"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="row justify-content-center">
                      <div className="col-sm-6 col-md-6 text-center text-sm-left">
                        <img
                          className="img-fluid break hidden-sm-up smaller-image"
                          src="./Blockchain explained_files/network-central-small.jpg"
                        />
                        <p className="srepgfx-label">Centralized network</p>
                        <p className="srepgfx-sublabel">
                          Authority is held by a central node.
                        </p>
                      </div>
                      <div className="col-sm-6 col-md-6 text-center text-sm-left">
                        <img
                          className="img-fluid break hidden-sm-up smaller-image"
                          src="./Blockchain explained_files/network-decentral-small.jpg"
                        />
                        <p className="srepgfx-label">Decentralized network</p>
                        <p className="srepgfx-sublabel">
                          All the nodes can access the information and compete
                          to be the next to add to the database.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="srepgfx-chapter-intro break">
                      Permission to join
                    </p>
                    <p className="srepgfx-dek">
                      Without centralized control of a network, trust is a
                      problem. One answer is to only let people you know, such
                      as company employees, join in. But blockchains such as the
                      bitcoin network are open to anyone. Members are anonymous.
                      There is no way to know if they are trustworthy.
                    </p>
                    <p className="srepgfx-dek">
                      To resolve this and build trust, these blockchains set
                      tests for the computers that seek to join and add records
                      to the chain. The tests are called consensus models.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="srepgfx-chapter-intro break">
                      Reaching a consensus
                    </p>
                    <p className="srepgfx-dek">
                      The tests require network members to ‘prove’ themselves.
                      Some examples:
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-sm-4 col-md-4 text-center text-sm-left">
                    <img
                      className="img-fluid smaller-image"
                      src="./Blockchain explained_files/work.jpg"
                    />
                    <p className="srepgfx-label">Proof of work</p>
                    <p className="srepgfx-sublabel">
                      To add a block to the chain, nodes must demonstrate that
                      they have done ‘work’ by solving an increasingly difficult
                      computational puzzle. This process, called mining, uses a
                      lot of computing power. In return for their work, members
                      can receive rewards - tokens for instance, or bitcoins.
                    </p>
                  </div>
                  <div className="col-sm-4 col-md-4 text-center text-sm-left">
                    <img
                      className="img-fluid smaller-image"
                      src="./Blockchain explained_files/stake.jpg"
                    />
                    <p className="srepgfx-label">Proof of Stake</p>
                    <p className="srepgfx-sublabel">
                      Participants buy tokens which allow them to join the
                      network. The more tokens they have, the more they can
                      mine.
                    </p>
                  </div>
                </div>
              </div>
              {/* chapter 3 CONTENT END */}
            </div>
            <div className="chapter-marker" data-id="chap-4">
              {/* chapter 4 CONTENT START */}
              <div className="pseudo-container">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <img
                      className="chapter-img img-responsive mx-auto d-block break"
                      src="./Blockchain explained_files/BLOCK-spacer.png"
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-9">
                    <p className="srepgfx-chapter">Possible uses</p>
                  </div>
                  <div className="col-md-5">
                    <p className="srepgfx-chapter-intro break-after">
                      There is a lot of hype about blockchain, but some
                      promising uses are under development.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-3 text-center text-sm-left">
                    <img
                      className="uses-img"
                      src="./Blockchain explained_files/bitcoin.jpg"
                    />
                    <p className="srepgfx-label">Cryptocurrency</p>
                    <p className="srepgfx-sublabel">
                      Blockchains are the basis of bitcoin and other
                      cryptocurrencies.
                    </p>
                  </div>
                  <div className="col-md-3 text-center text-sm-left">
                    <img
                      className="uses-img"
                      src="./Blockchain explained_files/banks.jpg"
                    />
                    <p className="srepgfx-label">Banking</p>
                    <p className="srepgfx-sublabel">
                      Financial institutions have been investing in blockchains
                      to simplify their record-keeping for payments.
                    </p>
                  </div>
                  <div className="col-md-3 text-center text-sm-left">
                    <img
                      className="uses-img"
                      src="./Blockchain explained_files/supply_chain.jpg"
                    />
                    <p className="srepgfx-label">Supply chain</p>
                    <p className="srepgfx-sublabel">
                      Recording trades on a blockchain offers a way to check the
                      history of a product. For example, jewelry companies hope
                      it can assure customers that diamonds are not from places
                      where they could finance war.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-3 text-center text-sm-left">
                    <img
                      className="uses-img"
                      src="./Blockchain explained_files/health.png"
                    />
                    <p className="srepgfx-label">Healthcare</p>
                    <p className="srepgfx-sublabel">
                      With blockchain, medical history could be securely stored
                      and controlled by patients.
                    </p>
                  </div>
                  <div className="col-md-3 text-center text-sm-left">
                    <img
                      className="uses-img"
                      src="./Blockchain explained_files/vote.png"
                    />
                    <p className="srepgfx-label">Voting</p>
                    <p className="srepgfx-sublabel">
                      Blockchain records could create tamper-proof election
                      returns.
                    </p>
                  </div>
                  <div className="col-md-3 text-center text-sm-left">
                    <img
                      className="uses-img uses-img"
                      src="./Blockchain explained_files/land.png"
                    />
                    <p className="srepgfx-label">Property records</p>
                    <p className="srepgfx-sublabel">
                      Storing land records on a blockchain could cut down on
                      costly title research and insurance. In politically
                      unstable places, it could help prove ownership.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* chapter 4 CONTENT END */}
            <div className="pseudo-container">
              <div className="row">
                <div className="col-12 mt-1">
                  <p className="credit text-left">
                    Correction: An earlier version of this graphic incorrectly
                    described a hash function as an example of encryption.
                    Hashing is a form of cryptographic security that—unlike
                    encryption— cannot be reversed, or decrypted.
                  </p>
                  <img
                    className="chapter-img img-responsive mx-auto d-block"
                    src="./Blockchain explained_files/BLOCK-spacer.png"
                  />
                  <p className="credit text-center">
                    For more Reuters coverage of financial technology, please
                    visit our{" "}
                    <a href="https://www.reuters.com/future-of-money">
                      Future of Money
                    </a>{" "}
                    page.
                  </p>
                  <p className="credit text-center break break-after">
                    GRAPHIC by Maryanne Murray
                    <br />
                    DEVELOPMENT by Matthew Weber
                    <br />
                    VISUAL EDITING by Sarah Slobin
                    <br />
                    EDITED by Sara Ledwith
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndexPage
