import React, { Component } from "react";
import Canvas from "./canvas";

class Results extends Component {
  checkHints(all) {
    let hints_showing = [];
    if (all.dietary_pattern_score / 10 < 0.7) {
      hints_showing.push("0");
    }
    if (all.grains_score / 20 < 0.7) {
      hints_showing.push("1");
    }
    if (all.fruit_and_vegetables_score / 20 < 0.7) {
      hints_showing.push("2");
    }
    if (all.fats_score / 15 < 0.7) {
      hints_showing.push("3");
    }
    if (all.meat_fish_score / 10 < 0.7) {
      hints_showing.push("4");
    }
    if (all.dairy_score / 10 < 0.7) {
      hints_showing.push("5");
    }
    if (all.sugar_drink_score / 15 < 0.7) {
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
      main_score_message = "Ruokavaliosi on suositusten mukainen, hienoa! Jatka samalla tavalla eteenpäin.";
    } else if (kokonaispisteet > 59) {
      main_score_message =
        "Hienoa! Ruokavaliosi on lähellä suositeltua – vieläkö keksit syömistavoissasi kohennettavaa?";
    } else if (kokonaispisteet > 39) {
      main_score_message =
        "Ruokavaliosi on keskimäärin hyvällä tasolla, ja valintoja tarkastelemalla se kohenee entisestään.";
    } else if (kokonaispisteet > 19) {
      main_score_message =
        "Ruokavaliossasi on hyviä asioita, mutta myös kohentamisen varaa. Mihin voisit vielä kiinnittää huomiotasi?";
    } else {
      main_score_message =
        "Ruokavaliossasi on kohentamisen varaa. Mitä muutosta kokeilisit? Mikä parantaisi jaksamistasi?";
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
      "Ruokarytmi: Päivittäin on hyvä syödä säännöllisin väliajoin, esimerkiksi aamupala, lounas ja päivällinen, sekä tarvittaessa 1-2 välipalaa. Säännöllinen ateriarytmi pitää veren sokeripitoisuuden  tasaisena, auttaa syömään kohtuullisesti yksittäisillä aterioilla ja vähentää houkutusta napostella tai ahmia ruokaa ja tukee siten painonhallintaa ja hyvää vireystasoa ja jaksamista.",
      "Vilja: Viljavalmisteiden, kuten leivän, puuron, pastan ja täysjyvämurojen, suositeltava päivittäinen käyttömäärä on noin 6  annosta naisille ja 9 annosta miehille, täysjyväviljaa suosien.  Lautasellinen puuroa vastaa kahta annosta. Leivistä kannattaa valita laatuja, joissa on kuitua vähintään 6 g / 100 g. Pakkauksesta löytyvä Sydänmerkki helpottaa valinnoissa, sillä se kertoo tuotteen olevan Suositeltava valinta omassa tuoteryhmässään.",
      "Hedelmät ja vihannekset: Kasviksia (vihanneksia, juureksia, sieniä, hedelmiä ja marjoja) tulisi nauttia vähintään 500 g päivässä. Ne sisältävät runsaasti kuitua, vitamiineja ja kivennäisaineita ja muita hyödyllisiä yhdisteitä. Palkokasvit ovat hyvä proteiinin lähde.",
      "Rasva: Leipärasvana on suositeltavaa käyttää vähintään 60 % rasvaa sisältävää Sydänmerkittyä kasviöljypohjaista levitettä ja salaattikastikkeena kasviöljyä tai kasviöljypohjaista kastiketta. Myös pähkinöistä ja siemenistä saa runsaasti pehmeää rasvaa. Sopiva käyttömäärä (suolaamattomina ja sokeroimattomina) on noin 30 g (2 ruokalusikallista) päivässä.",
      "Kala ja liha: Kala-aterioita suositellaan nautittavaksi 2-3 kertaa viikossa kalalajeja vaihdellen. Suosi kalaruokien lisäksi erilaisia kasvisruokia ja vähärasvaista siipikarjanlihaa. Lihavalmisteita ja punaista lihaa ei tulisi käyttää enempää kuin 500 g viikossa. Rasvaisia ja runsassuolaisia lihavalmisteita kannattaa nauttia vain harvoin.",
      "Maidot: Maitovalmisteet ovat hyviä proteiinin, kalsiumin, jodin ja D-vitamiinin lähteitä. 5-6 dl nestemäisiä maitovalmisteita ja 2-3 viipaletta juustoa kattaa päivittäisen kalsiumin tarpeen. Maitotuotteiden rasvasta 2/3 on tyydyttynyttä ”kovaa” rasvaa, siksi kannattaa jokapäiväisessä käytössä suosia rasvattomia ja vähärasvaisia maitovalmisteita (nestemäiset enintään 1 %, juustot  enintään 17 % rasvaa). Tarkista myös sokerin määrä, esimerkiksi maustamattomaan jogurttiin saa sopivasti makeutta marjoja lisäämällä. Maidon sijaan voidaan käyttää kasvipohjaisia (esimerkiksi kaura- ja soijapohjaiset) juomia ja jogurtteja, jotka on täydennetty kalsiumilla ja D-vitamiinilla.",
      "Naposteltavat ja energiapitoiset juomat: Näiden ruokien ja juomien ravitsemuksellinen arvo on vähäinen, mutta ne tuovat mielihyvää ja vaihtelua. Näihin kuuluvat monet pikaruoat, makeiset, perunalastut, leivonnaiset sekä sokeri- tai alkoholipitoiset juomat. Niitä kannattaa nauttia vain harvoin ja kohtuullisia määriä.",
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
