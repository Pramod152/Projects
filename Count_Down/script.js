const endDate = "14 May 2023 11:31 PM";

document.querySelector("#end_date").innerText = endDate;
const input = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();

  const diff = (end - now) / 1000;

  if (diff < 0) return;
  //  Convert into days
  input[0].value = Math.floor(diff / 3600 / 24);
  //  Convert into hours
  input[1].value = Math.floor(diff / 3600) % 24;
  //  Convert into minutes
  input[2].value = Math.floor(diff / 60) % 60;
  //  Convert into seconds
  input[3].value = Math.floor(diff) % 60;
};
clock();

setInterval(() => {
  clock();
}, 1000);
