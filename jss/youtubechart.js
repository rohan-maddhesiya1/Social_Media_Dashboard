// chart 1

const data = {
  labels: ["Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Youtube",
      backgroundColor: "#FF0000",
      borderColor: "#FF0000",
      data: [200, 640, 100 , 200, 100],
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
        label: "Youtube",
        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        data: [354, 405,562,490 ,406, 510, 550 ,630, 640, 750],
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
            '#FF0000',
      'yellow',
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
