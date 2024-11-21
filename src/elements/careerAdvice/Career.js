import React from "react";

import videoEdit from "../../assets/images/prianka/videoEdit.jpeg";
import editorial from "../../assets/images/prianka/editorial.jpeg";
import CareerForm from "./CareerForm";

const Career = () => {
  return (
    <>
      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rn-contact-address mt_dec--30">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://jobs.bdjobs.com/jobdetails.asp?id=1300298&ln=1&JobKeyword=whatson"
                  target="_blank"
                >
                  <div className="jobs">
                    <div>
                      <img
                        className="job-img"
                        src="https://whatson.academy/wp-content/uploads/2021/10/guitar-course-1.jpg"
                      />
                    </div>
                    <div className="inner ps-5 pe-5 mt-3">
                      <h4 className="title">Music Teacher</h4>
                      <p>Deadline: 28 Nov 2024</p>
                      <p>Vacancy: 2</p>
                      <p>Age: 21 to 39 years</p>
                      <p>Location: Sector 3, Uttara, Dhaka</p>
                      <p>Salary: Tk. 5000 - 8000 / Monthly </p>
                      <p>Experience: 2 to 6 years</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <a
                  href="https://jobs.bdjobs.com/jobdetails.asp?id=1300336&ln=1&JobKeyword=whatson"
                  target="_blank"
                >
                  <div className="jobs">
                    <div>
                      <img className="job-img" src={videoEdit} />
                    </div>
                    <div className="inner ps-5 pe-5 mt-3">
                      <h4 className="title">Video Editor</h4>
                      <p>Deadline: 22 Nov 2024</p>
                      <p>Vacancy: 2</p>
                      <p>Age: 21 to 39 years</p>
                      <p>Location: Sector 3, Uttara, Dhaka</p>
                      <p>Salary: Tk. 15000 - 25000 / Month </p>
                      <p>Experience: 2 to 5 years</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <a href="#" target="_blank">
                  <div className="jobs">
                    <div>
                      <img className="job-img" src={editorial} />
                    </div>
                    <div className="inner ps-5 pe-5 mt-3">
                      <h4 className="title">Editorial</h4>
                      <p>Deadline: -- </p>
                      <p>Vacancy: -- </p>
                      <p>Age: -- </p>
                      <p>Location: --</p>
                      <p>Salary: -- </p>
                      <p>Experience: -- </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt--40 row--15">
        <CareerForm formStyle="contact-form-1" />
      </div>
    </>
  );
};
export default Career;
