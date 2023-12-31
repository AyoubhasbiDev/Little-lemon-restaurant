import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    const random = Math.random();
    try {
      await wait(1000);
      if (random < 0.2) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: "success",
        message: `Thanks ${data.fullname} You have successfully confirmed your reservation`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    }
  };

  return { response, submit };
};

export default useSubmit;
