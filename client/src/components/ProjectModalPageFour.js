import React, { useEffect, useState } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectModalPageFour = ({
  instagramExample,
  tiktokExample,
  youtubeExample,
  instagramTask,
  tiktokTask,
  youtubeTask,
  hashtags,
  tags,
  phrases,
  linkInBio,
}) => {
  // Page Four - Review Contract - Guideline Dropdowns
  const [showHashtags, setShowHashtags] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [showPhrases, setShowPhrases] = useState(false);
  const [showLinkInBio, setShowLinkInBio] = useState(false);

  useEffect(() => {
    console.log(instagramExample);
    console.log(youtubeExample);
    console.log(tiktokExample);
  }, []);

  return (
    <>
      <div className="project-modal-page__group">
        <h4 className="project-modal-page__label">Examples</h4>
        <div className="examples-container">
          {instagramTask ? (
            <div className="examples-container__example">
              {" "}
              <img
                src={instagramExample}
                alt="instagram example"
                className="examples-container__image"
              />
              <p className="examples-container__text">Instagram</p>
            </div>
          ) : (
            ""
          )}

          {tiktokTask ? (
            <div className="examples-container__example">
              {" "}
              <img
                src={tiktokExample}
                alt="tiktok example"
                className="examples-container__image"
              />
              <p className="examples-container__text">Tik Tok</p>
            </div>
          ) : (
            ""
          )}
          {youtubeTask ? (
            <div className="examples-container__example">
              <img
                src={youtubeExample}
                alt="youtube example"
                className="examples-container__image"
              />
              <p className="examples-container__text">YouTube</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="label-row-container">
        <div className="label-col-container label-col-container--guidelines">
          <div className="project-modal-page__group project-modal-page__group--guidelines">
            <div className="label-row-container label-row-container--justify-left">
              <h4 className="project-modal-page__label">Hashtags</h4>
              <FontAwesomeIcon icon={faCopy} className="icon-copy" />
            </div>
            <div className="keywords-container keywords-container--guidelines">
              {hashtags.map((word, index) => (
                <div className="keywords-item" key={index}>
                  <span className="keywords-text">{word}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="project-modal-page__group project-modal-page__group--guidelines">
            <div className="label-row-container label-row-container--justify-left">
              <h4 className="project-modal-page__label">Required Phrases</h4>
              <FontAwesomeIcon icon={faCopy} className="icon-copy" />
            </div>
            <div className="keywords-container keywords-container--guidelines">
              {phrases.map((word, index) => (
                <div className="keywords-item" key={index}>
                  <span className="keywords-text">{word}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="label-col-container label-col-container--guidelines">
          {/* add tags here  */}
          <div className="project-modal-page__group project-modal-page__group--guidelines">
            <div className="label-row-container label-row-container--justify-left">
              <h4 className="project-modal-page__label">Tags</h4>
              <FontAwesomeIcon icon={faCopy} className="icon-copy" />
            </div>
            <div className="keywords-container keywords-container--guidelines">
              {tags.map((word, index) => (
                <div className="keywords-item" key={index}>
                  <span className="keywords-text">@{word}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="project-modal-page__group project-modal-page__group--guidelines">
            <div className="label-row-container label-row-container--justify-left">
              <h4 className="project-modal-page__label">Tags</h4>
              <FontAwesomeIcon icon={faCopy} className="icon-copy" />
            </div>
            <div className="keywords-container keywords-container--guidelines">
              <div className="keywords-item">
                <span className="keywords-text"> {linkInBio}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModalPageFour;
