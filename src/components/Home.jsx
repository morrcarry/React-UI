import React from "react";
import vg from "../assets/2.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <p>
          We are your only solution to the tech problems you face everyday. We
          are leading tech company whose aim is to increase the problem solving
          ability in children.
        </p>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            What is it that makes us who we are? Is it how we were raised? Is it
            the specific time and location in space during our birth? Or is it
            by mere choice alone in every moment that makes us who we are at
            that moment, ever-changing? I could tell you that they are all are
            true. And I could also tell you that they are all false. And guess
            what, both statements would be correct. Here’s another shocker,
            truth is relative. You can turn something from an untruth into a
            truth and vise versa all with the power of belief, thought, and
            faith. If you truly believe with all of your heart that you are a
            product of your upbringing and nothing more, then you have made that
            true. You’ve also chosen to be a victim of your past but hey if
            that’s the truth you want you got it. Now if you believe that your
            upbringing is the past and nothing more, and that you choose moment
            by moment who you are, then that is true. Truth is based on your
            reality. And your reality is based on your thoughts and beliefs.
            There is no set reality. There are no set truths. Reality, just like
            truth, is relative to the being who perceives it
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
