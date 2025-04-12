/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { BASE_URL, token } from "../../utils/config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const FeedbackForm = ({ onReviewSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    if (!rating || !reviewText.trim()) {
      setLoading(false);
      return toast.error("Por favor, preencha todos os campos.");
    }
  
    try {
      const response = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ 
          rating: Number(rating),
          reviewText
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Erro ao enviar feedback");
      }

      setRating(0);
      setHover(0);
      setReviewText("");
      toast.success("Feedback enviado com sucesso!");
      
      if (onReviewSubmit) {
        onReviewSubmit();
      }
  
    } catch (err) {
      console.error("Erro ao enviar feedback:", err);
      toast.error(err.message || "Ocorreu um erro ao enviar seu feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Como você classificaria a experiência geral?*
        </h3>

        <div>
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <button
                key={starValue}
                type="button"
                className={`${
                  starValue <= (hover || rating)
                    ? "text-yellow-500"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Dê seu feedback ou sugestões.
        </h3>

        <textarea
          rows="5"
          placeholder="Escreva sua mensagem..."
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn"
        disabled={loading}
      >
        {loading ? (
          <HashLoader size={25} color="#fff" />
        ) : (
          "Submeter Feedback"
        )}
      </button>
    </form>
  );
};

export default FeedbackForm;