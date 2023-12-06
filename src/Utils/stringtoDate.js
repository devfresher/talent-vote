export const formatDate = (date) => {
  const inputDate = new Date(date);

  // Format the date
  const formattedDate = inputDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format the time
  const formattedTime = inputDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Combine date and time
  const result = `${formattedDate} (${formattedTime})`;

  return result;
};

export const formatTime = (targetDate) => {
   // Parse the target date string into a Date object
   const targetDateTime = new Date(targetDate);

   // Get the current date and time
   const currentDateTime = new Date();
 
   // Calculate the time difference in milliseconds
   const timeDifference = targetDateTime - currentDateTime;
 
   // Calculate days, hours, and minutes
   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
 


  // Format the result
  return {
    day: [...days.toString().padStart(3, "0")],
    hours: [...hours.toString().padStart(2, "0")],
    min: [...minutes.toString().padStart(2, "0")],
  };
};

export function currentDateString() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${
    String(currentDate.getMonth() + 1).padStart(2, '0')
  }-${
    String(currentDate.getDate()).padStart(2, '0')
  }T${
    String(currentDate.getHours()).padStart(2, '0')
  }:${
    String(currentDate.getMinutes()).padStart(2, '0')
  }:${
    String(currentDate.getSeconds()).padStart(2, '0')
  }.${
    String(currentDate.getMilliseconds()).padStart(3, '0')
  }Z`;

  return formattedDate
}