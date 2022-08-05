'use strict'

var data=
    [
      'Inside Scoring',
      'Outside Scoring',
      'Strength',
      'Speed',
      'Hustle',
      'Iq',
      'Ball Handle',
      'Passing',
      'Rebounding',
      'Inside Defending',
      'Outside Defending'];

const options =  {
  scales: {
    r: {
      //グラフの最小値・最大値
      min: 0,
      max: 100,
      stepSize: 10, 
    
      //グリッドライン
      grid: {
        color: 'purple',
      },
      //アングルライン
      angleLines: {
        color: 'purple',
      },
      //各項目のラベル
      pointLabels: {
        color: 'white',
      },
      ticks: {             // 目盛り
        stepSize: 10,        // 目盛の間隔
    },
    },
  },
}

var ctx = document.getElementById('kj');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'KJ',
      data: [
        85,88,90,72,88,94,68,86,85,86,78
      ],
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'rgb(252, 220, 0)',
      borderWidth: 1,
      pointBackgroundColor: 'rgb(255,255,255)',
      hitRadius: 5
    }, 
      ]
  },
  options
});
