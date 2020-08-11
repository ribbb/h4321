import React, { Component } from "react";
import Canvas from "./canvas";

class Results extends Component {
  checkHints(all) {
    let hints_showing = [];
    if (all.dietary_pattern_score / 10 < 0.5) {
      hints_showing.push("0");
    }
    if (all.grains_score / 20 < 0.5) {
      hints_showing.push("1");
    }
    if (all.fruit_and_vegetables_score / 20 < 0.5) {
      hints_showing.push("2");
    }
    if (all.fats_score / 15 < 0.5) {
      hints_showing.push("3");
    }
    if (all.meat_fish_score / 10 < 0.5) {
      hints_showing.push("4");
    }
    if (all.dairy_score / 10 < 0.5) {
      hints_showing.push("5");
    }
    if (all.sugar_drink_score / 15 < 0.5) {
      hints_showing.push("6");
    }
    return hints_showing;
  }
  render() {
    let hints_showing = this.checkHints(this.props.all);
    /*
     /*
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
    const flexcontainer = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
    let kokonaispisteet =
      this.props.all.dietary_pattern_score +
      this.props.all.grains_score +
      this.props.all.fruit_and_vegetables_score +
      this.props.all.fats_score +
      this.props.all.meat_fish_score +
      this.props.all.dairy_score +
      this.props.all.sugar_drink_score;
    let main_score_message = "";
    if (kokonaispisteet > 79) {
      main_score_message = "Ruokavaliosi on suositusten mukainen, hienoa!";
    } else if (kokonaispisteet > 59) {
      main_score_message =
        "Ruokavaliosi on lähellä suosituksia – vieläkö keksit kohennettavaa? ";
    } else if (kokonaispisteet > 39) {
      main_score_message =
        "Ruokavaliosi on keskimääräisellä tasolla, ja valintoja viilaamalla se kohenee entisestään.";
    } else if (kokonaispisteet > 19) {
      main_score_message =
        "Ruokavaliossasi on hyviä asioita, mutta myös parantamisen varaa.";
    } else {
      main_score_message =
        "Ruokavaliossasi on kohentamisen varaa. Mitä muutosta kokeilisit?";
    }
    return (
      <div id="results-div">
        <h3>{main_score_message}</h3>
        {
          /* <div>
          Pisteet Ruokarytmistä {this.props.all.dietary_pattern_score} / 10
        </div>
        <div>Pisteet Viljasta {this.props.all.grains_score} / 20</div>
        <div>
          Pisteet Hedelmistä ja Vihanneksista{" "}
          {this.props.all.fruit_and_vegetables_score} / 20
        </div>
        <div>Pisteet Rasvoista {this.props.all.fats_score} / 15</div>
        <div>
          Pisteet Kalasta ja Lihasta {this.props.all.meat_fish_score} / 10
        </div>
        <div>Pisteet Maidosta {this.props.all.dairy_score} /10</div>
        <div>Pisteet Sattumista {this.props.all.sugar_drink_score} / 15</div>
        */
          <div>Kokonaispisteet {kokonaispisteet} / 100</div>
        }
        <Canvas all={this.props.all} />
        <br />
        <br />
        <h4>Vihjeitä pisteiden parantamiseen</h4>
        <div style={flexcontainer}>{hints_showing.map(this.GenerateHints)}</div>
        <br />
        <br />
      </div>
    );
  }
  GenerateHints(idx) {
    const hints = [
      "Ruokarytmi: Päivittäin on hyvä syödä säännöllisin väliajoin terveellinen ateria, esimerkiksi aamupala, lounas ja päivällinen, sekä tarvittaessa 1-2 välipalaa. Säännöllinen ateriarytmi pitää veren sokeripitoisuuden tasaisena, auttaa syömään kohtuullisesti yksittäisillä aterioilla ja vähentää houkutusta napostella tai ahmia ruokaa ja tukee siten painonhallintaa.",
      "Vilja: Viljavalmisteiden suositeltava päivittäinen käyttömäärä on noin 6 annosta naisille ja 9 annosta miehille, täysjyväviljaa suosien. Lautasellinen puuroa vastaa kahta annosta. Leivistä kannattaa valita laatuja, joissa on kuitua vähintään 6 g / 100 g.",
      "Hedelmät ja vihannekset: Kasviksia (vihanneksia, juureksia, sieniä, hedelmiä ja marjoja) tulisi nauttia vähintään 500 g päivässä. Ne sisältävät runsaasti kuitua, vitamiineja ja kivennäisaineita ja muita hyödyllisiä yhdisteitä. Palkokasvit ovat hyvä proteiinin lähde.",
      "Rasvat: Leipärasvana tulisi käyttää vähintään 60% rasvaa sisältävää kasviöljypohjaista levitettä ja salaattikastikkeena kasviöljypohjaista kastiketta. Myös pähkinöistä saa runsaasti pehmeää rasvaa, niitä voi nauttia (suolaamattomina ja sokeroimattomina) noin 30 g (2 ruokalusikallista) päivässä.",
      "Kala ja liha: Kalaa suositellaan nautittavaksi 2-3 kertaa viikossa kalalajeja vaihdellen. Lihavalmisteita ja punaista lihaa ei tulisi käyttää enempää kuin 500 g viikossa.",
      "Maidot: Maitovalmisteet ovat hyviä proteiinin, kalsiumin, jodin D-vitamiinin lähteitä. 5-6 dl nestemäisiä maitovalmisteita ja 2-3 viipaletta juustoa kattaa päivittäisen kalsiumin tarpeen. Maidon rasvasta 2/3 on tyydyttynyttä ”kovaa” rasvaa, siksi kannattaa suosia rasvattomia ja vähärasvaisia maitovalmisteita (nestemäiset  enintään 1%, juustot enintään 17% rasvaa).",
      "Sattumat: Sattumiksi kutsutaan ”mielihyväruokia” joiden ravitsemuksellinen arvo on vähäinen. Näihin kuuluvat makeiset, perunalastut, leivonnaiset sekä sokeri- tai alkoholipitoiset juomat. Niitä kannattaa nauttia vain harvoin.",
    ];
    let hint = hints[idx];
    let topic_and_hint = hint.split(":");

    return (
      <div id="hints" key={"hint-".concat(idx)}>
        <b>{topic_and_hint[0]}:</b>
        {topic_and_hint[1]}
      </div>
    );
  }
}

export default Results;
