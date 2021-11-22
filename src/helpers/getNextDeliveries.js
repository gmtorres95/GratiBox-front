export default function getNextDeliveries(planType, deliveryDays) {
  const weekday = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ].indexOf(deliveryDays);
  const days = [];
  const today = new Date();
  let nextDate = new Date();

  if (planType.toLowerCase() === 'mensal') {
    nextDate.setDate(Number(deliveryDays));

    if (nextDate > today) days.push(new Date(nextDate));

    while (days.length < 3) {
      nextDate.setMonth(nextDate.getMonth() + 1)
      days.push(new Date(nextDate));
    }
  }

  else {
    if(nextDate.getDay() <= weekday) {
      nextDate.setDate(nextDate.getDate() + (weekday - nextDate.getDay()));
      days.push(new Date(nextDate));
    }
    else nextDate.setDate(nextDate.getDate() + (nextDate.getDay() - weekday));

    while (days.length < 3) {
      nextDate.setDate(nextDate.getDate() + 7);
      days.push(new Date(nextDate));
    }
  }

  return days;
}
