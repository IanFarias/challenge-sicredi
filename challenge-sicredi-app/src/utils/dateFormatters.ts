export const formatMinutesToHour = (minutes: number) => {
  if (minutes < 60) {
    return `${minutes} minutos`;
  }

  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;

  const textHours = `00${hours}`.slice(-2);
  const textMinutes = `00${min}`.slice(-2);

  return `${textHours}:${textMinutes} horas`;
};

export const formatDate = (date: Date) => {
  const formattedDate = new Date(date).toLocaleString('pt-BR', {
    timeZone: 'UTC',
  });

  return formattedDate;
};
