const hourlyData = [3, 8, 13, 6, 6, 8, 9, 15, 7, 9, 13, 6, 5, 14, 8, 3, 5, 12, 6, 4, 11, 5, 10, 7];
const dailyData = [45, 68, 46, 86, 76, 65, 78];
const weeklyData = [235, 349, 186, 328];
const monthlyData = [943, 1024, 898, 1053, 786, 1023, 721, 1431, 763, 861, 943, 877];
const hourlyLable = []
const dailyLable = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const weeklyLable = ['Week 1', 'Week 2', 'Week 3', 'Week 4']
const monthlyLable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']




              const line = document.getElementById('lineChart').getContext('2d');
              const lineChart = new Chart(line, {
                  type: 'line',
                  data: {
                      labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                      datasets: [{
                          // label: '# of Votes',
                          data: [12, 19, 53, 5, 12, 38, 24],
                          backgroundColor: 'rgba(112, 104, 201, .5)',
                          fill:true,
                          borderColor: 'rgba(112, 104, 201, .5)',
                          borderWidth: 1
                      }]
                  },
                  options: {
                      scales: {
                          y: {
                              beginAtZero: true
                          }
                      },
                      plugins:{legend:{display:false}}
                  }
              });





                      const bar = document.getElementById('barChart').getContext('2d');
                      const barChart = new Chart(bar, {
                          type: 'bar',
                          data: {
                              labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                              datasets: [{
                                  label: '# of Votes',
                                  data: [12, 19, 53, 5, 12, 38, 24],
                                  backgroundColor: '#93789c',
                                  borderColor: '#5f566e',
                                  borderWidth: 1
                              }]
                          },
                          options: {
                              scales: {
                                  y: {
                                      beginAtZero: true
                                  }
                              },
                              plugins:{legend:{display:false}}
                          }
                      });





            const doughnut = document.getElementById('doughnutChart').getContext('2d');
            const doughnutChart = new Chart(doughnut, {
                type: 'doughnut',
                data: {
                    labels: ['Desktop', 'Tablet', 'Phones'],
                    datasets: [{
                        data: [2000, 550, 556],
                        backgroundColor: [
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                        ],
                    }]
                },
                options: {
                    scales: {
                        y: {
                            display:false
                        }
                    },
                    plugins:{legend:{position:'right'}}
                }

            });
