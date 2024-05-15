// Chart1

var ctx_2 = document.getElementById("myLineChart");
  

var number = [21936,57877, 110480, 54215, 
  63752,59520, 64269,66999, 1120674, 42285, 23011, 2478];
var month = ["Jan","Feb", "Mar","Apr", "May", 
"Jun","July","Aug", "Sep","Oct","Nov", "Dem"];

var myChart_2 = new Chart(ctx_2, {
  type: "line",
  data: {
    labels: month,
    datasets: [
        {
            label: "Youtube Views",
            borderColor: '#ff0207',
            data: number,
            fill: false,
          },

    ],
  },
  options: {
  maintainAspectRatio: false,
  reponsive: false,
  fill: false, 
  lineTension: 0
}
});



// CHART_2 

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ,
   'Jul' , 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Youtube',
      backgroundColor: '#FF0000',
      borderColor: '#FF0000',
      data: [100, 250, 410, 100, 300, 100, 300, 200,
         640, 100 , 200, 100],
      
    },
    {
      label: 'Facebook',
      backgroundColor: '#405DE6',
      borderColor: '#4267B2',
      data: [200, 480, 260 ,368, 720, 389 , 306 , 298
         , 560 , 487, 513, 287],
      
    },
    {
      label: 'X',
      backgroundColor: '#000000',
      borderColor: '#000000',
      data: [50 , 40, 25, 75 , 49, 86, 32, 74, 56, 48,
         87, 25],
      
    },
    {
      label: 'Instagram',
      backgroundColor: '#00D100',
      borderColor: '#00D100',
      data: [221, 123, 302, 420, 326, 365, 235, 598,
         235, 748, 286, 325],
      
    }
  ]
};



const config = {
  type: 'bar',
  data: data,
  options: {
    maintainAspectRatio: false,
    reponsive: false,
  }
};

const ctx = document.getElementById('myBarChart').getContext('2d');
const myBarChart = new Chart(ctx, config);


