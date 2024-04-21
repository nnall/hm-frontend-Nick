import React, { useEffect, useState } from "react";
import axios from "axios";

// const API_KEY = "AIzaSyCbC9CDQ76QsKGmPQDvxl4QgbLvUqRocyM";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        //         const response = await axios.get(
        //           "https://mybusiness.googleapis.com/v4/{parent=accounts/*/locations/*}/reviews",
        //           {
        //             params: {
        //               key: API_KEY,
        //             },
        //           }
        //         );
        const response = await axios.get(
          "http://localhost:3001/google-reviews"
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Google Reviews</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.author_name}</strong>: {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
