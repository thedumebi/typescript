const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyBJa50jqbsetkdq_3gvjWgH23at-KkXGOk";

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
}

form.addEventListener("submit", searchAddressHandler);
