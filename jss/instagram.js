// chart 1

const data = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Followers",
        backgroundColor: "#F806CC",
        borderColor: "#F806CC",
        data: [465, 568, 389, 623, 698],
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
          label: "Likes",
          backgroundColor: "white",
          borderColor: "#F806CC",
          data: [1354, 1405, 1562, 1490 , 1406, 1510, 1550 ,1630, 1640, 1750],
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




    //   chart3


const data3 = {
    labels: ["Mar","Apr", "May", "Jun","July","Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Share",
        backgroundColor: "white",
        borderColor: "#F806CC",
        data: [326,450,523,501, 603, 640, 701, 680, 780 , 830],
        fill: false,
      },
    ],
  };
  
  const config3 = {
    type: "line",
    data: data3,
    options: {
      maintainAspectRatio: false,
      reponsive: false,
    },
  };
  
  const ctx3 = document.getElementById("mylinechart2").getContext("2d");
  const mylinechart2 = new Chart(ctx3,config3);