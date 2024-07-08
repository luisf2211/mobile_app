export default function formatearFecha(input) {
  const cleanedInput = input.replace(/\D/g, "");

  let formattedDate = "";
  if (cleanedInput.length > 2) {
    formattedDate += cleanedInput.slice(0, 2) + "/";
    if (cleanedInput.length > 4) {
      formattedDate +=
        cleanedInput.slice(2, 4) + "/" + cleanedInput.slice(4, 8);
    } else {
      formattedDate += cleanedInput.slice(2, 4);
    }
  } else {
    formattedDate = cleanedInput;
  }
  return formattedDate;
}
