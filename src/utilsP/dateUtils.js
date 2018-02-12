export const dateUtils = {
  getDayOfWeek: timestamp => {
    const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    const date = new Date();
    date.setTime(timestamp * 1000);
    const day = date.getDay();
    return days[day - 1];
  }
};
