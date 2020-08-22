import React from 'react';
import ReactPlayer from 'react-player';
import { Container, Row } from 'reactstrap';

export default () => {
  return (
    <>
      <header id="ahHeader" className="text-white vh-auto ">
        <Container className="pt-5 px-3">
          <p class="display-4 font-weight-bold text-center pt-5">
            About
            <img
              alt="AgriHub Logo"
              src="assets/logo/agrihub-logo-colored.png"
              class="img-fluid mb-2 pl-2 "
              width="22%"
            />
          </p>
          <div class="embed-responsive embed-responsive-21by9 text-center">
            <ReactPlayer url="https://www.youtube.com/embed/7LqAJoD-PpA?autoplay=1" />
          </div>
          <p className="pt-5 font-weight-bold text-center vh-auto text-justify">
            Welcome to the Udemy for Farmers. With the declining number of
            Filipino Farmers , the Philippines is facing a new threat... Food
            Security. According to a study, Filipino youths are no longer
            interested with farming.
          </p>
          <p className="pb-5 font-weight-bold text-center vh-auto text-justify">
            Farming is no longer appealing due to negative perception that
            farming means poverty. it's about time to make farming more
            appealing through digital learning. Enabling and equipping the
            farmers with new techiques and technologies thru our online courses.
            Empowering them with shared knowledge and value that can be
            experienced using the built-in community feature.
          </p>
        </Container>
      </header>

      <Container className="vh-auto pb-5 text-center">
        <header className="pt-5 text-center font font-weight-bold ">
          Awesome Team Behind{' '}
          <img
            alt="Agrihub Logo"
            src="assets/logo/agrihub-logo-colored.png"
            class="pb-3 img-fluid"
            width="15%"
          />
        </header>
        <div className="text-center pt-5 vh-auto pb-5">
          <Row>
            <div className="font-weight-bold">
              <img
                alt="Darwin"
                src="assets/teamImages/darwin.jpg"
                class="responsive pl-4"
              ></img>
              <p className="pt-2 pl-4">Darwin Camahalan</p>
            </div>
            <div className="font-weight-bold">
              <img
                alt="Arjay"
                src="assets/teamImages/arjay.jpg"
                class="responsive pl-4 "
              ></img>
              <p className="pl-3 pt-2">Arjay Osman</p>
            </div>
            <div className="font-weight-bold">
              <img
                alt="Rollie"
                src="assets/teamImages/rollie.jpg"
                class="responsive pl-4 "
              ></img>
              <p className="pl-4 pt-2">Raleigh Jabonero</p>
            </div>
            <div className="font-weight-bold">
              <img
                alt="Laurence"
                src="assets/teamImages/laurence.jpg"
                class="responsive pl-4 "
              ></img>
              <p className="pl-4 pt-2">Laurence Lloyd</p>
            </div>
            <div className="font-weight-bold">
              <img
                alt="Nessa"
                src="assets/teamImages/nessa.jpg"
                class="responsive pl-4 "
              ></img>
              <p className="pl-4 pt-2">Nessa Navarro Bacani</p>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};
