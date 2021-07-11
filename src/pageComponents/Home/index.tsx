import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import SideBar from "../../components/sidebar"
import "./homePage.scss"
import HomeHeader from "./HomeHeader"
import Topper from "./videos/topper.mp4"
import SmTopper from "./videos/sm-topper.mp4"
import Chapter1 from "./Chapter1"

const Home: React.FC = props => {
  const elementRef = useRef()
  useEffect(() => {
    if (elementRef && elementRef.current) {
      //@ts-ignore
      elementRef.current.focus()
      //
    }
  }, [elementRef])
  return (
    <section className="page-container">
      {/* <SEO /> */}
      <SideBar />

      <div className="main " ref={elementRef} tabIndex={1}>
        <video
          className="video topper-video hidden-sm-down mtz-vlc-pboid"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={Topper} type="video/mp4" />
        </video>
        <video
          className="video topper-video hidden-md-up mtz-vlc-pboid"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={SmTopper} type="video/mp4" />
        </video>
        <div className="home-content">
          <div className="title-page">
            {/* <HomeHeader /> */}
            {/* <Chapter1 /> */}
            <div className="chapter-marker" data-id="chap-2">
              {/* <!-- chapter 2 CONTENT START --> */}
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

              {/* <!-- scn04 - the hash --> */}
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
                <div className="scroll-video-markers"></div>
              </div>
              {/* <!-- chapter 2 CONTENT END --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
