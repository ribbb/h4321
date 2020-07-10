import React, { Component } from "react";

class Canvas extends React.Component {
  /*
      domains: [
      "Meal frequency",
      "Grains",
      "Fruit and vegetables",
      "Fats",
      "Fish and meat",
      "Dairy",
      "Sugar, sweets, fast food, beverages",
      "Results",
    ],
    domains: [
      "Ruokarytmi",
      "Vilja",
      "Hedelmät ja Vihannekset",
      "Rasvat",
      "Kala ja liha",
      "Maidot",
      "Sattumat",
      "Results",
    ],
    dietary_pattern_score: 0,
    grains_score: 0,
    fruit_and_vegetables_score: 0,
    fats_score: 0,
    meat_fish_score: 0,
    dairy_score: 0,
    sugar_drink_score: 0,
      */
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    //this.get_graph_size(this.props.all.dietary_pattern_score, ctx);
    /*ctx.fillRect(
      50,
      350,
      50,
      -this.get_graph_size(this.props.all.dietary_pattern_score, 10)
    );
    */
    this.draw_square_around(ctx);
    this.create_prosent_line(ctx);
    this.add_names_of_categories(ctx);
  }
  add_bar(color, location, size, ctx) {
    ctx.fillStyle = color;
    console.log(size);
    ctx.fillRect(
      location,
      350,
      20,
      size //-this.get_graph_size(this.props.all.dietary_pattern_score, 10)
    );
  }

  add_names_of_categories(ctx) {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(370, 30, 20, 20);
    ctx.fillStyle = "#000000";
    ctx.fillText(this.props.all.domains[0], 400, 45);
    this.add_bar(
      "#FF0000",
      60,
      -this.get_graph_size(this.props.all.dietary_pattern_score, 10),
      ctx
    );
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(370, 60, 20, 20);
    ctx.fillStyle = "#000000";
    ctx.fillText(this.props.all.domains[1], 400, 75);
    this.add_bar(
      "#0000FF",
      100,
      -this.get_graph_size(this.props.all.grains_score, 20),
      ctx
    );
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(370, 90, 20, 20);
    ctx.fillStyle = "#000000";
    ctx.fillText(this.props.all.domains[2], 400, 105);
    this.add_bar(
      "#00FF00",
      140,
      -this.get_graph_size(this.props.all.fruit_and_vegetables_score, 20),
      ctx
    );
    ctx.fillStyle = "#aa00aa";
    ctx.fillRect(370, 120, 20, 20);
    ctx.fillStyle = "#000000";
    ctx.fillText(this.props.all.domains[3], 400, 135);
    this.add_bar(
      "#aa00aa",
      180,
      -this.get_graph_size(this.props.all.fats_score, 15),
      ctx
    );
    ctx.fillStyle = "#00aaaa";
    ctx.fillRect(370, 150, 20, 20);
    ctx.fillStyle = "#000000";
    ctx.fillText(this.props.all.domains[4], 400, 165);
    this.add_bar(
      "#00aaaa",
      220,
      -this.get_graph_size(this.props.all.meat_fish_score, 10),
      ctx
    );
    ctx.fillStyle = "#aaaa00";
    ctx.fillRect(370, 180, 20, 20);
    ctx.fillStyle = "#000000";
    ctx.fillText(this.props.all.domains[5], 400, 195);
    this.add_bar(
      "#aaaa00",
      260,
      -this.get_graph_size(this.props.all.dairy_score, 10),
      ctx
    );
    ctx.fillStyle = "#000000";
    ctx.fillRect(370, 210, 20, 20);
    ctx.fillStyle = "#000000";
    ctx.fillText(this.props.all.domains[6], 400, 225);
    this.add_bar(
      "#000000",
      300,
      -this.get_graph_size(this.props.all.sugar_drink_score, 15),
      ctx
    );
  }
  create_prosent_line(ctx) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("100%", 0, 50);
    ctx.fillText("90%", 0, 80);
    ctx.fillText("80%", 0, 110);
    ctx.fillText("70%", 0, 140);
    ctx.fillText("60%", 0, 170);
    ctx.fillText("50%", 0, 200);
    ctx.fillText("40%", 0, 230);
    ctx.fillText("30%", 0, 260);
    ctx.fillText("20%", 0, 290);
    ctx.fillText("10%", 0, 320);
    ctx.fillText("0%", 0, 350);
  }
  get_graph_size(size, max_size) {
    return (size / max_size) * 300;
  }
  draw_square_around(ctx) {
    ctx.moveTo(50, 50);
    ctx.lineTo(350, 50);
    ctx.lineTo(350, 350);
    ctx.lineTo(50, 350);
    ctx.lineTo(50, 50);
    ctx.stroke();
  }
  render() {
    return (
      <div>
        <canvas id="myCanvas" ref="canvas" width={600} height={400} />
      </div>
    );
  }
}
export default Canvas;
