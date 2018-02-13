export const dateUtils = {
  getDayOfWeek: (timestamp, short) => {
    const days = short
      ? ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]
      : [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wenesday",
          "Thursday",
          "Friday",
          "Saturday"
        ];

    const date = new Date();
    date.setTime(timestamp * 1000);
    const day = date.getDay();
    return days[day];
  }
};
