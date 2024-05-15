const data = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Facebook",
        backgroundColor: "blue",
        borderColor: "blue",
        data: [1820, 1680, 2350, 2402, 1809],
      },
    ],
  };
  
  const config = {
    type: "bar",
    data: data,
    options: {
      maintainAspectRatio: false,
      reponsive: false,
    },
  };
  
  const ctx = document.getElementById('myBarChart').getContext("2d");
  const myBarChart = new Chart(ctx, config);



// chart 2


const data2 = {
    labels: ["Mar","Apr", "May", "Jun","July","Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Comments",
        backgroundColor: "white",
        borderColor: "blue",
        data: [1401, 1235,1562,1490 ,1406, 1510, 1550 ,1630, 1640, 1750],
        fill: false,
      },
    ],
  };
  
  const config2 = {
    type: "line",
    data: data2,
    options: {
      maintainAspectRatio: false,
      reponsive: false,
    },
  };
  
  const ctx2 = document.getElementById("mylinechart1").getContext("2d");
  const mylinechart1 = new Chart(ctx2,config2);

// chart 3

const data3 = {
    labels: ["Likes", "Dislikes"],
    datasets: [
      {
        label: "Likes",
        backgroundColor: [
            'blue',
      'brown',
        ],
        
        data: [ 20400  , 2309],
        fill: false,
      },
      
    ],
  };
  
  const config3 = {
    type: "pie",
    data: data3,
    options: {
      maintainAspectRatio: false,
      reponsive: false,
    },
  };
  
  const ctx3 = document.getElementById("piechart").getContext("2d");
  const piechart = new Chart(ctx3,config3);