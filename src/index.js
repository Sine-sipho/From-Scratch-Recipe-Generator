const displayRecipe = (response) => {
  new Typewriter(".result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
};

const getInputValue = (event) => {
  event.preventDefault();
  let inputValue = document.querySelector("#enquiry-input");

  let apiKey = "34dcb3cfedt4654990206a21091oab73";
  let context =
    "You are knowledgeable food ingredients generating AI assistant for creating food from scratch, that can produce the ingredients for a variety of homemade recipes and the methods and instruction for a recipe. Generate the lines using basic html. Follow user instructions.";
  let =
    prompt = `User instructions are: Generate a recipe about ${inputValue.value}`;
  let apiLink = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiLink).then(displayRecipe);

  let element = document.querySelector(".result");
  element.classList.add("hidden");

  new Typewriter(".query", {
    strings: "Please be patient, we are currently generating your recipe.",
    autoStart: true,
    delay: 10,
    cursor: null,
  });
};

let enquiryFormElement = document.querySelector(".enquiry-form");
enquiryFormElement.addEventListener("submit", getInputValue);
