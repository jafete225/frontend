/* eslint-disable react/prop-types */
import { useState } from "react";
import avatar from "../../src/assets/images/avatar-icon.png";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./Doctors/FeedbackForm";

const Feedback = ({ reviews, totalRating }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
         Todas avaliações ({totalRating})
        </h4>

        {
          reviews.map((reviewItem, index) => (
            <div key={index} className="flex justify-between gap-10 mb-[30px]">
              <div className="flex gap-3">
                <figure className="w-10 h-10 rounded-full">
                  <img
                    src={reviewItem?.user?.photo || avatar}
                    alt={ "User"}
                    className="w-full rounded-full"
                  />
                </figure>

                <div>
                  <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                    {reviewItem?.user?.name || "Anonymous"}
                  </h5>
                  <p className="text-[14px] leading-6 text-textColor">
                    {new Date(reviewItem?.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text__para mt-3 font-medium text-[15px]">
                    {reviewItem.reviewText}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(reviewItem?.rating).keys()].map((_, starIndex) => (
                  <AiFillStar key={starIndex} color="#0067FF" />
                ))}
              </div>
            </div>
          ))
        }
      </div>

      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};
 
export default Feedback;
