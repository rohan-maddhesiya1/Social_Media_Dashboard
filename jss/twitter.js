// chart 1

const data = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Followers",
        backgroundColor: "#4E9F3D",
        borderColor: "white",
        data: [102, 80 , 140 , 158, 130],
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
        label: "Re_Tweets",
        backgroundColor: "white",
        borderColor: "#4E9F3D",
        data: [54, 95,62,90 ,76, 51, 68 ,82, 63, 75],
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
        label: "Re_Tweets",
        backgroundColor: "white",
        borderColor: "#4E9F3D",
        data: [130, 88,90,109 ,99, 123, 105, 112, 88, 145],
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