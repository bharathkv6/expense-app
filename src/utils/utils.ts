export const formatDate = (date: Date) => {
  const year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDay().toString();

  if(month.length < 2) month = '0' + month;
  if(day.length < 2) day = '0' + day;

  return `${year}-${month}-${day}`;
}