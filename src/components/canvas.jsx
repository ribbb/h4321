import React, { Component } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
class Canvas extends React.Component {
  get_graph_size(size, max_size) {
    return (size / max_size) * 300;
  }
  render() {
    let bar_chart_labels = this.props.all.domains.filter(
      (x) => x != "Tulokset"
    );
    let original_scores = [
      this.props.all.dietary_pattern_score,
      this.props.all.grains_score,
      this.props.all.fruit_and_vegetables_score,
      this.props.all.fats_score,
      this.props.all.meat_fish_score,
      this.props.all.dairy_score,
      this.props.all.sugar_drink_score,
    ];
    const data = {
      labels: [
        this.props.all.domains[0],
        this.props.all.domains[1],
        this.props.all.domains[2],
        this.props.all.domains[3],
        this.props.all.domains[4],
        this.props.all.domains[5],
        this.props.all.domains[6],
      ],
      datasets: [
        {
          label: "Tulokset",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [
            this.props.all.dietary_pattern_score / 10,
            this.props.all.grains_score / 20,
            this.props.all.fruit_and_vegetables_score / 20,
            this.props.all.fats_score / 15,
            this.props.all.meat_fish_score / 10,
            this.props.all.dairy_score / 10,
            this.props.all.sugar_drink_score / 15,
          ],
        },
      ],
    };
    let max_scores = [10, 20, 20, 15, 10, 10, 15];
    const combined_score =
      this.props.all.dietary_pattern_score +
      this.props.all.grains_score +
      this.props.all.fruit_and_vegetables_score +
      this.props.all.fats_score +
      this.props.all.meat_fish_score +
      this.props.all.dairy_score +
      this.props.all.sugar_drink_score;

    const dough = {
      labels: ["Kokonaispisteet"],
      datasets: [
        {
          data: [combined_score, 100 - combined_score],
          backgroundColor: ["#FF6384", "#666d72"],
          hoverBackgroundColor: ["#FF6384", "#666d72"],
        },
      ],
    };
    //<canvas id="myCanvas" ref="canvas" width={600} height={400} />
    const dough_style = {
      margin: "auto",
      width: "100%",
      maxWidth: "1200px",
      paddingBottom: "20px",
    };
    return (
      <div>
        <div style={dough_style}>
          <Doughnut
            data={dough}
            width={100}
            height={50}
            legend={{
              align: "center",
              position: "top",
              display: true,
            }}
            options={{
              animation: {
                duration: 2000,
                easing: "easeInExpo",
              },
            }}
          />
        </div>
        <div>
          <Bar
            data={data}
            width={100}
            height={400}
            options={{
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    let label = "Pisteet "
                      .concat(original_scores[tooltipItem.index])
                      .concat("/")
                      .concat(max_scores[tooltipItem.index]);
                    return label;
                  },
                },
                mode: "index",
                intersect: false,
              },
              hover: {
                mode: "index",
                intersect: false,
              },
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      suggestedMax: 1,
                      beginAtZero: true,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      fontSize: 16,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  }
}
export default Canvas;
