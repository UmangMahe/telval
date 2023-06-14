import React from "react";
import Content from "../../components/shared-components/Content";
import bgImage from "/images/contact.jpg";

function Contact(props) {
  return (
    <Content>
      <div className="content">
        <div className="contact">
          <div
            className="background"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>

          <h1
            className="title mt-1"
            style={{
              opacity: 1,
              marginBottom: "33px",
              transform: "matrix(1, 0, 0, 1, 0, 0)",
            }}
          >
            Contact
          </h1>

          <div className="">
            <div className="elementor-section-wrap">
              <section style={{ padding: "10px" }}>
                <div className="row">
                  <div className="col-md">
                    <h2 className="fw-bold" style={{ fontSize: "1.5em" }}>
                      Send us an email
                    </h2>
                  </div>
                </div>
              </section>

              <section style={{ padding: "0 10px" }}>
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-row">
                    <div
                      className="elementor-element elementor-element-05c4e4f elementor-column elementor-col-100 elementor-top-column"
                      data-element_type="column"
                      data-id="05c4e4f"
                    >
                      <div className="elementor-column-wrap elementor-element-populated">
                        <div className="elementor-widget-wrap">
                          <div
                            className="elementor-element elementor-element-1b03db2 elementor-button-align-end elementor-widget elementor-widget-form"
                            data-element_type="widget"
                            data-id="1b03db2"
                            data-settings='{"step_next_label":"Next","step_previous_label":"Previous","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                            data-widget_type="form.default"
                          >
                            <div className="elementor-widget-container">
                              <form
                                className="elementor-form"
                                method="post"
                                name="New Form"
                              >
                                <div className="row gx-3 gy-2">
                                  <div className="col-md-6">
                                    <input
                                      aria-required="true"
                                      className=""
                                      name="name"
                                      placeholder="Name*"
                                      required="required"
                                      size="1"
                                      type="text"
                                    />
                                  </div>

                                  <div className="col-md-6">
                                    <input
                                      aria-required="true"
                                      className="elementor-field elementor-size-sm elementor-field-textual"
                                      name="email"
                                      placeholder="Email*"
                                      required="required"
                                      size="1"
                                      type="email"
                                    />
                                  </div>

                                  <div className="col-md-12">
                                    <input
                                      className="elementor-field elementor-size-sm elementor-field-textual"
                                      name="subject"
                                      placeholder="Subject"
                                      size="1"
                                      type="text"
                                    />
                                  </div>

                                  <div className="col-md-12">
                                    <textarea
                                      className="elementor-field-textual elementor-field elementor-size-sm"
                                      name="message"
                                      placeholder="Message"
                                      rows="4"
                                    ></textarea>
                                  </div>

                                  <div className="col-md d-flex justify-content-end">
                                    <button
                                      className="contact-button contact-button-size-md"
                                      type="submit"
                                    >
                                      <span>
                                        <span className="elementor-button-text">
                                          SUBMIT
                                        </span>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Contact;
