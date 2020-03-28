import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                {/* <span className="heading-meta"></span> */}
                <h2 className="colorlib-heading animate-box">Internships</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Machine Learning Intern at PolicyBazaar.com<span> May 2019 - July 2019</span></h2>
                       <p>Train fastText on transcripts(extracted from mongo) in hinglish to predict if customer books policy. Different experiments based on type of transcript, and creating pipeline that predicts booking given lead id as input.
                          Train elmo from scratch on transcripts to obtain their embeddings and incorporate them with metadata
                          Feed universal sentence encoder embeddings to DNNClassifier, to train model on transcripts.
                      </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>DTRL DRDO - Deep learning intern<span> June 2018 - July 2018</span></h2>
                        <p>Modify architecture of existing CNNs(VGG16, ZFNet and LeNet) using tensorflow and compare their accuracy and bottleneck features on same set of face recognition datasets to investigate their similarity in results despite differing architectures.</p>
                      </div>
                    </div>
                  </article>
                  <h2 className="colorlib-heading animate-box">Projects</h2>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Validate-O</h2>
                        <p>Computer vision solution to validate permitted building plans according to government safety standards. Model predicts probability of a building/floor plan getting approved legally. Fine-tuned predefined VGG16 model according to our web scraped government validated data and compared the bottleneck features for image similarity</p>    
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>GroceriStar</h2>
                       <p>Categorize ingredients/shopping list items to their respective departments using NLP, WordNet and majority vote of different classifiers, and auto adding measurement(units) to any ingredient quantity using NLTK</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Goal Prediction</h2>
                        <p>Predict if attempt on target by a player converts to goal using 28 features(power, area, distance, coordinates of shot, remaining minutes, opponent team etc.). Cleaned data while handling missing values using pandas and functions written. Visualised data using matplotlib and seaborn. Achieved MAE of 0.087 using random forest.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
