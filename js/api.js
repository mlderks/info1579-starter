const jokeContainer = document.getElementById("jokeContainer");
const quoteContainer = document.getElementById("quoteContainer");

export const getJoke = async () => {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");

  if (!response.ok) {
    throw new Error("Unable to retrieve joke.");
  }

  const data = await response.json();

  return data;
};

export const displayJoke = async () => {
  try {
    jokeContainer.innerHTML = "Loading joke...";
    const joke = await getJoke();
    jokeContainer.innerHTML = `<p>${joke.setup}</p>
                               <p>${joke.punchline}</p>`;
  } catch (error) {
    jokeContainer.innerHTML = "Unable to load joke.";
  }
};

export const getQuote = async () => {
    // Fetch a random quote from the API
    const response = await fetch("https://dummyjson.com/quotes/random");
    // Check whether the response was successful
    if (!response.ok) {
      throw new Error("Unable to retrieve quote.");
    }
    // Convert the response to JSON
    const data = await response.json();
    // Return the quote data
    return data;
};

export const displayQuote = async () => {
    try {
        // Display the loading message
        quoteContainer.innerHTML = "Loading quote...";
        // Call getQuote() and save the returned data
        const quote = await getQuote();
        // Display the quote and author
        quoteContainer.innerHTML = `<p>${quote.quote}</p>
                                    <p>${quote.author}</p>`;
    } catch (error) {
        // Display an error message
        quoteContainer.innerHTML = "Unable to load quote.";
    }
};
