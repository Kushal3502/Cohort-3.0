setInterval(() => {
  const time = new Date();
  const hours = time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
  const minutes =
    time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;
  const seconds =
    time.getSeconds() > 9 ? time.getSeconds() : `0${time.getSeconds()}`;

  console.log(
    `${hours <= 12 ? hours : hours - 12}::${minutes}::${seconds} ${
      hours <= 12 ? "AM" : "PM"
    }`
  );
}, 1000);
