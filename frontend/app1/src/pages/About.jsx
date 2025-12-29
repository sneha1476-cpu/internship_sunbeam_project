import img1 from "../assets/sunbeam1.png";
import img2 from "../assets/sunbeam2.png";
import img3 from "../assets/sunbeam3.png";
import ImageScroller from "../components/ImageScroller";

function About() {
  return (
    <>
      <h2>Sunbeam Institute of Information Technology</h2>

      <p>
        The Sunbeam campus at Rajiv Gandhi Infotech Park, Hinjawadi is spread over
        an area of 1 Acre which includes 70,000 sq feet of built-up area and
        5-floor building for C-DAC courses.
      </p>

      <p>
        The teaching-learning process is facilitated in 3 lecture halls, 5
        computer labs with high-speed Internet connectivity, a seminar room,
        conference room, library. The entire Sunbeam campus is Wi-Fi enabled.
        Sunbeam also provides hostel facility to girls.
      </p>

      <ImageScroller images={[img1, img2, img3]} />
    </>
  );
}

export default About;
