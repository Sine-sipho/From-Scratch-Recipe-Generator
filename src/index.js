const getInputValue = (event) => {
  event.preventDefault();
  let inputValue = document.querySelector("#text-input");

  new Typewriter(".result", {
    strings: "Let me not to the marriage of true minds admit impediments...",
    autoStart: true,
    delay: 20,
    cursor: null,
  });
};

let enquiryFormElement = document.querySelector(".enquiry-form");
enquiryFormElement.addEventListener("submit", getInputValue);
