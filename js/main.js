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

var ctx = document.getElementById('sekino');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'sekino',
      data: [
        60,52,70,82,92,85,70,69,51,70,95
      ],
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'rgb(252, 220, 0)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(255,255,255)',
      hitRadius: 5
    }, 
      ]
  },
  options
});

var ctx = document.getElementById('kelly');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'kelly',
      data: [
        92,97,82,69,92,95,74,71,88,84,75
      ],
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'rgb(252, 220, 0)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(255,255,255)',
      hitRadius: 5
    }, 
      ]
  },
  options
});

var ctx = document.getElementById('kj');
var mychart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels:data,
    datasets: [{
      label: 'KJ',
      data: [
        84,87,90,72,88,94,68,81,82,86,78
      ],
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'rgb(252, 220, 0)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(255,255,255)',
      hitRadius: 5
    }, 
      ]
  },
  options
});

