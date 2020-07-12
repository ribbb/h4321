import React, { Component } from "react";
import AllQuestions from "./all_questions";
import Header from "./header";
import ChagePage from "./changePage";
import PageName from "./pageName";
import Questions_or_results from "./questions_or_results";
class App extends Component {
  state = {
    dietary_pattern_score: 0,
    grains_score: 0,
    fruit_and_vegetables_score: 0,
    fats_score: 0,
    meat_fish_score: 0,
    dairy_score: 0,
    sugar_drink_score: 0,
    domains: [
      "Ruokarytmi",
      "Vilja",
      "Hedelmät ja Vihannekset",
      "Rasvat",
      "Kala ja Liha",
      "Maidot",
      "Sattumat",
      "Tulokset",
    ],
    question_indexes: [0, 12, 19, 21, 26, 35, 44, 57, 58],
    question_page_number: 0,
    questions: [
      {
        id: 1,
        question_description:
          "Kuinka monena arki- tai työpäivänä viikossa syöt aamupalan?",
        choices: ["0", "1-2", "3-4", "Joka arkipäivä"],
        scores: [0, 0.3, 0.7, 1],
        button_selected: [],
      },
      {
        id: 2,
        question_description:
          "Kuinka monena arki- tai työpäivänä viikossa syöt lounaan?",
        choices: ["0", "1-2", "3-4", "Joka arkipäivä"],
        scores: [0, 0.3, 0.7, 1],
        button_selected: [],
      },
      {
        id: 3,
        question_description:
          "Kuinka monena arki- tai työpäivänä viikossa syöt päivällisen/illallisen?",
        choices: ["0", "1-2", "3-4", "Joka arkipäivä"],
        scores: [0, 0.3, 0.7, 1],
        button_selected: [],
      },
      {
        id: 4,
        question_description:
          "Kuinka monena arki- tai työpäivänä viikossa syöt aamupäivän välipalan?",
        choices: ["0", "1-2", "3-4", "Joka arkipäivä"],
        scores: [0, 0.3, 0.7, 1],
        button_selected: [],
      },
      {
        id: 5,
        question_description:
          "Kuinka monena arki- tai työpäivänä viikossa syöt iltapäivän välipalan?",
        choices: ["0", "1-2", "3-4", "Joka arkipäivä"],
        scores: [0, 0.3, 0.7, 1],
        button_selected: [],
      },
      {
        id: 6,
        question_description:
          "Kuinka monena arki- tai työpäivänä viikossa syöt iltapalan?",
        choices: ["0", "1-2", "3-4", "Joka arkipäivä"],
        scores: [0, 0.3, 0.7, 1],
        button_selected: [],
      },
      {
        id: 7,
        question_description:
          "Kuinka monena arki- tai työpäivänä viikossa syöt muita välipaloja?",
        choices: ["0", "1-2", "3-4", "Joka arkipäivä"],
        scores: [0, 0.3, 0.7, 1],
        button_selected: [],
      },
      {
        id: 8,
        question_description:
          "Kuinka monta kertaa viikossa syöt kalaruokia (esim. uunikalaa, paistettuja silakoita, kalakeittoa, silliä, graavilohta)?",
        choices: [],
        scores: [],
      },
      {
        id: 9,
        question_description:
          "Kuinka monta kertaa viikossa syöt makkararuokia (esim. uunimakkaraa, makkarakeittoa, makkarakastiketta)?",
        choices: [],
        scores: [],
      },
      {
        id: 10,
        question_description:
          "Kuinka monta kertaa viikossa syöt kana- tai broileriruokia (esim. grillibroileria, kanaviillokkia, kanasalaattia)?",
        choices: [],
        scores: [],
      },
      {
        id: 11,
        question_description:
          "Kuinka monta kertaa viikossa syöt liharuokia (esim. lihakeittoa, paistia, lihapullia, kyljyksiä, maksalaatikkoa)?",
        choices: [],
        scores: [],
      },
      {
        id: 12,
        question_description:
          "Kuinka monta kertaa viikossa syöt kasvisruokia pääruokana (esim. kasviskeittoa, pinaattiohukaisia, kasvissalaattia)?",
        choices: [],
        scores: [],
      },
      {
        id: 13,
        question_description:
          "Kuinka monta viipaletta ruis- tai näkkileipää syöt päivässä? Viipale = kaupan valmisviipale tai puolikas sämpylää.",
        choices: [],
        scores: [],
      },
      {
        id: 14,
        question_description:
          "Kuinka monta viipaletta viipaletta hiiva-, graham-, kaura- tai sekaleipää tai sämpylää syöt päivässä? Viipale = kaupan valmisviipale tai puolikas sämpylää.",
        choices: [],
        scores: [],
      },
      {
        id: 15,
        question_description:
          "Kuinka monta viipaletta ranskanleipää tai patonkia syöt päivässä? Viipale = kaupan valmisviipale tai puolikas sämpylää.",
        choices: [],
        scores: [],
      },
      {
        id: 16,
        question_description:
          "Kuinka monta dl puuroa (esim. kaura-, ruis-, vehnähiutalepuuroa) syöt päivässä?",
        choices: [],
        scores: [],
      },
      {
        id: 17,
        question_description:
          "Kuinka monta dl aamiaismuroja (esim. maissihiutaleita tai riisimuroja) syöt päivässä?",
        choices: [],
        scores: [],
      },
      {
        id: 18,
        question_description: "Kuinka monta dl mysliä syöt päivässä?",
        choices: [],
        scores: [],
      },
      {
        id: 19,
        question_description:
          "Kuinka monta viipaletta tavallista pullaa syöt päivässä? Viipale = kaupan valmisviipale tai puolikas sämpylää.",
        choices: [],
        scores: [],
      },
      {
        id: 20,
        question_description:
          "Kuinka paljon syöt vihanneksia ja juureksia? Annos on esim. 1 dl raastetta, salaattia tai keitettyjä vihanneksia tai 1 keskikokoinen porkkana tai 2 tomaattia.",
        choices: [
          "3 annosta tai enemmän päivässä",
          "2 annosta päivässä",
          "annoksen päivässä",
          "4-6 annosta viikossa",
          "1-3 annosta viikossa",
          "vähemmän kuin annoksen viikossa tai en lainkaan",
        ],
        scores: [12, 8, 4, 2, 1, 0],
        button_selected: [],
      },
      {
        id: 21,
        question_description:
          "Kuinka paljon syöt hedelmiä tai marjoja? Annos on 1 keskikokoinen hedelmä tai 2 dl tuoreita marjoja.",
        choices: [
          "2 annosta tai enemmän päivässä",
          "1 annosta päivässä",
          "4-6 annosta viikossa",
          "1-3 annosta viikossa",
          "vähemmän kuin 1 annoksen viikossa tai ei lainkaan",
        ],
        scores: [8, 5, 2, 1, 0],
        button_selected: [],
      },
      {
        id: 22,
        question_description:
          "Mitä rasvaa kotonasi käytetään tavallisesti ruoan valmistuksessa?",
        choices: [
          "kasviöljyä tai juoksevaa kasviöljyvalmistetta (esim. rypsiöljy, oliiviöljy, pullomargariinit)",
          "margariinia, jossa 55-80 % rasvaa (esim. Flora, Becel, Keiju, Rainbow, Kultarypsi)",
          "kasvistanoli- tai kasvisterolimargariinia (Benecol, Becel ProActive, Keiju Alentaja)",
          "talousmargariinia (esim. Sunnuntai)",
          "voi-kasviöljyseosta (esim. Oivariini, Ingmariini, Keijuriini, Flora Kulta tai voin ja öljyn seos)",
          "voita",
          "ei mitään/kotona ei valmisteta ruokaa",
        ],
        scores: [2, 2, 2, 1, 1, 0, 1],
        button_selected: [],
      },
      {
        id: 23,
        question_description:
          "Mitä kermaa tai kermankaltaista valmistetta kotonasi käytetään tavallisesti ruoan valmistuksessa?",
        choices: [
          "kasvirasvasekoitetta (esim. Flora Ruoka), soijakermaa tai kaurakermaa",
          "ruoanvalmistusjogurttia",
          "ruokakermaa, kevytkermaa, kevytranskankermaa, kevytsmetanaa tai kermaviiliä",
          "vispikermaa, kuohukermaa, ranskankermaa tai smetanaa",
          "ei mitään/kotona ei valmisteta ruokaa",
        ],
        scores: [2, 1, 1, 0, 2],
        button_selected: [],
      },
      {
        id: 24,
        question_description: "Käytätkö tavallisesti salaatinkastiketta?",
        choices: [
          "en tavallisesti käytä salaatinkastiketta",
          "käytän kasviöljyä (esim. oliivi-, rypsi- tai pellavansiemenöljy) tai kasviöljypohjaista kastiketta (esim. ranskalainen, sinappi-, majoneesikastike)",
          "käytän mehupohjaista kastiketta",
          "käytän kermaviili- tai jogurttipohjaista kastiketta",
        ],
        scores: [0, 3, 0, 0],
        button_selected: [],
      },
      {
        id: 25,
        question_description: "Mitä rasvaa käytät tavallisesti leivällä?",
        choices: [
          "margariinia, joissa 30-40 % rasvaa (esim. Kevyt Becel, Flora Vähärasvaisempi, Kevyt Keiju, KevytLevi)",
          "margariinia, jossa 55-80 % rasvaa (esim. Becel 60, Becel Gold, Flora, Keiju 60, Keiju 70, Keiju Rypsi)",
          "kasvistanoli- tai kasvisterolimargariinia (Benecol, Becel ProActive, Keiju Alentaja)",
          "voi-kasviöljyseosta (esim. Oivariini, Ingmariini, Keijuriini tai Flora Kulta)",
          "voita",
          "en mitään",
        ],
        scores: [2, 6, 6, 1, 0, 0],
        button_selected: [],
      },
      {
        id: 26,
        question_description:
          "Kuinka paljon syöt pähkinöitä, siemeniä ja manteleita päivässä? Annos on 30g = 2 rkl.",
        choices: [
          "2 annosta tai enemmän päivässä",
          "1 annoksen päivässä",
          "4-6 annosta viikossa",
          "1-3 annosta viikossa",
          "Vähemmän kuin 1 annoksen viikossa tai en lainkaan",
        ],
        scores: [2, 2, 1, 1, 0],
        button_selected: [],
      },
      {
        id: 27,
        question_description:
          "Kuinka monta kertaa viikossa syöt kalaruokia (esim. uunikalaa, paistettuja silakoita, kalakeittoa, silliä, graavilohta)?",
        choices: [],
        scores: [],
      },
      {
        id: 28,
        question_description:
          "Kuinka monta kertaa viikossa syöt makkararuokia (esim. uunimakkaraa, makkarakeittoa, makkarakastiketta)?",
        choices: [],
        scores: [],
      },
      {
        id: 29,
        question_description:
          "Kuinka monta kertaa viikossa syöt kana- tai broileriruokia (esim. grillibroileria, kanaviillokkia, kanasalaattia)?",
        choices: [],
        scores: [],
      },
      {
        id: 30,
        question_description:
          "Kuinka monta kertaa viikossa syöt liharuokia (esim. lihakeittoa, paistia, lihapullia, kyljyksiä, maksalaatikkoa)?",
        choices: [],
        scores: [],
      },
      {
        id: 31,
        question_description:
          "Kuinka monta kertaa viikossa syöt kasvisruokia pääruokana (esim. kasviskeittoa, pinaattiohukaisia, kasvissalaattia)?",
        choices: [],
        scores: [],
      },
      {
        id: 32,
        question_description:
          "Kuinka monta viipaletta (valmissiivu) lihaleikkelettä (esim. palvikinkku, keitokinkku, kalkkunaleikkele) käytät tavallisesti päivässä?",
        choices: [],
        scores: [],
      },
      {
        id: 33,
        question_description:
          "Kuinka monta viipaletta (valmissiivu) makkaraa (esim. lauantaimakkara, gotler tai jahtimakkara) käytät tavallisesti päivässä?",
        choices: [],
        scores: [],
      },
      {
        id: 34,
        question_description:
          "Kuinka monta kappaletta nakkia tai vastaavan määrän grillimakkaraa tai lenkkimakkaraa käytät tavallisesti päivässä?",
        choices: [],
        scores: [],
      },
      {
        id: 35,
        question_description:
          "Käytän vähemmän kuin viipaleen päivässä tai en käytä lainkaan",
        choices: [],
        scores: [],
      },
      {
        id: 36,
        question_description:
          "Kuinka monta dl rasvatonta maitoa, piimää, jogurttia, viiliä tai rahkaa (rasvaa alle 1%) käytät tavallisesti päivässä? Merkitse määrät desilitroina (lasillinen = noin 2 dl, purkillinen = 1,25 dl – 2 dl)",
        choices: [],
        scores: [],
      },
      {
        id: 37,
        question_description:
          "Kuinka monta dl ykkösmaitoa tai vähärasvaista piimää (rasvaa alle 2%) käytät tavallisesti päivässä? Merkitse määrät desilitroina (lasillinen = noin 2 dl, purkillinen = 1,25 dl – 2 dl)",
        choices: [],
        scores: [],
      },
      {
        id: 38,
        question_description:
          "Kuinka monta dl keskirasvaisia valmisteita, esim. kevytmaitoa, A-piimää, kevytviiliä, tavallista jogurttia (rasvaa alle 3 %) käytät tavallisesti päivässä? Merkitse määrät desilitroina (lasillinen = noin 2 dl, purkillinen = 1,25 dl – 2 dl)",
        choices: [],
        scores: [],
      },
      {
        id: 39,
        question_description:
          "Kuinka monta _____dl rasvaista maitoa, piimää tai jogurttia, esim. tilamaitoa, täysmaitoa, tavallista viiliä, Bulgarianjogurttia (rasvaa 3% tai enemmän) käytät tavallisesti päivässä? Merkitse määrät desilitroina (lasillinen = noin 2 dl, purkillinen = 1,25 dl – 2 dl)",
        choices: [],
        scores: [],
      },
      {
        id: 40,
        question_description: "en yleensä käytä nestemäisiä maitovalmisteita",
        choices: [],
        scores: [],
      },
      {
        id: 41,
        question_description:
          "Kuinka monta viipaletta juustoa, jossa rasvaa on 17 % tai vähemmän (esim. Edam 10 – 20 %, Feta alle 20 %, Kevyt Aamupala, Magre 17, Oltermanni 17, Polar 5 tai 15%) syöt tavallisesti päivässä? Viipaleella tarkoitetaan juustohöylällä vedettyä, noin 10 gramman viipaletta.",
        choices: [],
        scores: [],
      },
      {
        id: 42,
        question_description:
          "Kuinka monta viipaletta juustoa, jossa rasvaa on yli 17 % (esim. Aura, Brie, Edam yli 20 %, Emmental yli 20 %, Oltermanni, Feta) syöt tavallisesti päivässä? Viipaleella tarkoitetaan juustohöylällä vedettyä, noin 10 gramman viipaletta.",
        choices: [],
        scores: [],
      },
      {
        id: 43,
        question_description:
          "Kuinka monta viipaletta kasvirasvapohjaista juustoa (esim. Julia, Julius, soijajuusto) syöt tavallisesti päivässä? Viipaleella tarkoitetaan juustohöylällä vedettyä, noin 10 gramman viipaletta.",
        choices: [],
        scores: [],
      },
      {
        id: 44,
        question_description:
          "käytän vähemmän kuin yhden viipaleen päivässä tai en käytä lainkaan.",
        choices: [],
        scores: [],
      },
      {
        id: 45,
        question_description:
          "Kuinka paljon syöt pikaruoka-tyyppistä ruokaa? Annos on esim. lihapiirakka, pasteija, hampurilainen, pizzapala, 1 dl perunalastuja, popcornia tai suolapähkinöitä?",
        choices: [
          "annos tai enemmän päivässä",
          "4-6 annosta viikossa",
          "1-3 annosta viikossa",
          "1-3 annosta kuukaudessa",
          "vähemmän kuin 1 annos kuukaudessa tai ei lainkaan",
        ],
        scores: [0, 0, 1, 2, 3],
        button_selected: [],
      },
      {
        id: 46,
        question_description:
          "Kuinka paljon syöt makeita leivonnaisia, jäätelöä, vanukkaita tai suklaata? Annos on esim. pala piirakkaa tai kakkua, pieni viineri tai munkki, 3-4 keksiä, jäätelötuutti, välipalavanukas, suklaapatukka.",
        choices: [
          "2 annosta tai enemmän päivässä",
          "1 annoksen päivässä",
          "4-6 annosta viikossa",
          "1-3 annosta viikossa",
          "vähemmän kuin annoksen viikossa tai ei lainkaan",
        ],
        scores: [0, 0, 1, 2, 3],
        button_selected: [],
      },
      {
        id: 47,
        question_description:
          "Kuinka paljon syöt sokeria, hunajaa tai sokerimakeisia? Annos on esim. 2 tl sokeria tai hunajaa, 3 sokeripalaa, 5 irtokarkkia, puolet pastilliaskista.",
        choices: [
          "2 annosta tai enemmän päivässä",
          "1 annoksen päivässä",
          "4-6 annosta viikossa",
          "1-3 annosta viikossa",
          "vähemmän kuin annoksen viikossa tai ei lainkaan",
        ],
        scores: [0, 1, 2, 3, 3],
        button_selected: [],
      },
      {
        id: 48,
        question_description:
          "Kuinka paljon juot keskimäärin viikossa kupillista teetä (kupillinen = 2 dl)? Jos et juo lainkaan merkitse kohtaan 0.",
        choices: [],
        scores: [],
      },
      {
        id: 49,
        question_description:
          "Kuinka paljon juot keskimäärin viikossa kupillista kahvia (kupillinen = 1dl)? Jos et juo lainkaan merkitse kohtaan 0.",
        choices: [],
        scores: [],
      },
      {
        id: 50,
        question_description:
          "Kuinka paljon juot keskimäärin viikossa pullollista sokerillisia virvoitusjuomia (pullollinen = 1/3 l)? Jos et juo lainkaan merkitse kohtaan 0.",
        choices: [],
        scores: [],
      },
      {
        id: 51,
        question_description:
          "Kuinka paljon juot keskimäärin viikossa pullollista sokerittomia virvoitusjuomia (esim. Coca Cola Light, Jaffa Light)? Jos et juo lainkaan merkitse kohtaan 0.",
        choices: [],
        scores: [],
      },
      {
        id: 52,
        question_description:
          "Kuinka paljon juot keskimäärin viikossa lasillista täysmehua (lasillinen = noin 2 dl)? Jos et juo lainkaan merkitse kohtaan 0.",
        choices: [],
        scores: [],
      },
      {
        id: 53,
        question_description:
          "Kuinka paljon juot keskimäärin viikossa lasillista sokeroitua mehua (lasillinen = noin 2 dl)? Jos et juo lainkaan merkitse kohtaan 0.",
        choices: [],
        scores: [],
      },
      {
        id: 54,
        question_description:
          "Kuinka paljon juot keskimäärin viikossa pullollista III olutta, ruokakaupan viiniä, siideriä tai Long Drink-juomia (alkoholia 4,7 % tai alle) (pullollinen = 1/3 l)? Jos et juo lainkaan merkitse kohtaan 0.",
        choices: [],
        scores: [],
      },
      {
        id: 55,
        question_description:
          "Kuinka paljon juot keskimäärin viikossa pullollista A-olutta, vahvaa siideriä tai Long Drink-juomia (alkoholia yli 4,7 %) (pullollinen = 1/3 litraa)? Jos et juo lainkaan merkitse kohtaan 0.",
        choices: [],
        scores: [],
      },
      {
        id: 56,
        question_description:
          "Kuinka paljon juot keskimäärin viikossa lasillista viiniä (lasillinen= 12 cl)? Jos et juo lainkaan merkitse kohtaan 0.",
        choices: [],
        scores: [],
      },
      {
        id: 57,
        question_description:
          "Kuinka paljon juot keskimäärin viikossa annosta väkevää alkoholijuomaa, esim. vodkaa, viskiä, konjakkia (annos 4 cl)? Jos et juo lainkaan merkitse kohtaan 0.",
        choices: [],
        scores: [],
      },
    ],
    final_scores: [],
  };

  set_score = (choice_id_list) => {
    //This function takes two values in list. First value is the choice selected. Second is question id.
    //This also updates the button that has been pressed for ui
    const questions = [...this.state.questions];
    const question = questions.filter(
      (question) => question.id === choice_id_list[1]
    );
    const idx = question[0].choices.indexOf(choice_id_list[0]);
    const score = question[0].scores[idx];
    let final_scores = [...this.state.final_scores];
    final_scores[choice_id_list[1] - 1] = score;
    this.setState({ final_scores: final_scores });
    questions[question[0].id - 1].button_selected = idx;
    this.setState({ questions: questions });
    this.update_state();
  };
  user_input_score_helper(val) {
    if (val === undefined) {
      return 0;
    }
    if (val.isNaN) {
      return 0;
    }
    return val === "" ? 0 : parseInt(val, 10);
  }
  update_state() {
    /*
    domains: [
      "Ruokarytmi",
      "Grains",
      "Fruit and vegetables",
      "Fats",
      "Fish and meat",
      "Dairy",
      "Sugar, sweets, fast food, beverages",
    ],
    */
    const score_function_list = [
      this.schedule_score,
      this.grainScore,
      this.fruitScore,
      this.fatsScore,
      this.fishScore,
      this.dairyScore,
      this.sugarScore,
    ];
    const reward = score_function_list.map((x) =>
      x(this.state.final_scores, this.user_input_score_helper)
    );
    console.log(reward);
    this.setState({
      dietary_pattern_score: reward[0],
      grains_score: reward[1],
      fruit_and_vegetables_score: reward[2],
      fats_score: reward[3],
      meat_fish_score: reward[4],
      dairy_score: reward[5],
      sugar_drink_score: reward[6],
    });
    /*
    if (score_function_list[this.state.question_page_number] !== "result") {
      const reward = score_function_list[this.state.question_page_number](
        this.state.final_scores,
        this.user_input_score_helper
      );
      const name_of_page = this.state.domains[this.state.question_page_number];
      console.log("Updating state");
      console.log(reward);
      console.log(name_of_page);
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
        

      if (name_of_page === "Ruokarytmi" || name_of_page === "Kala ja liha") {
        this.setState({ dietary_pattern_score: reward });
      } else if (name_of_page === "Vilja") {
        this.setState({ grains_score: reward });
      } else if (name_of_page === "Hedelmät ja Vihannekset") {
        this.setState({ fruit_and_vegetables_score: reward });
      } else if (name_of_page === "Rasvat") {
        this.setState({ fats_score: reward });
      } else if (name_of_page === "Kala ja liha") {
        this.setState({ meat_fish_score: reward });
      } else if (name_of_page === "Maidot") {
        this.setState({ dairy_score: reward });
      } else if (name_of_page === "Sattumat") {
        this.setState({ sugar_drink_score: reward });
      } else {
        console.log("STATE FOR SCORES WAS NOT UPDATED");
      }
    } */
  }
  check_final_score(score) {
    return score === undefined ? 0 : score;
  }
  schedule_score(scores, helper_function) {
    let final_scores = [...scores];
    let reward = 0;

    let step1 = (final_scores[0] || 0) + (final_scores[3] || 0);
    if (step1 >= 1) {
      reward += 2;
    } else if (step1 >= 0.6) {
      reward += 1;
    }
    let step2 = (final_scores[1] || 0) + (final_scores[4] || 0);
    if (step2 >= 1) {
      reward += 2;
    } else if (step2 >= 0.6) {
      reward += 1;
    }
    let step3 = (final_scores[2] || 0) + (final_scores[5] || 0);
    if (step3 >= 1) {
      reward += 2;
    } else if (step3 >= 0.6) {
      reward += 1;
    }
    if (step1 + step2 + step3 + (final_scores[6] || 0) >= 4) {
      if (step1 + step2 + step3 + (final_scores[6] || 0) <= 6) {
        reward += 1;
      }
    }
    console.log(reward);
    //There were dublicate questions so 7,8,9,10,11 were taken out of comission.
    const step4 =
      helper_function(final_scores[26]) +
      helper_function(final_scores[27]) +
      helper_function(final_scores[28]) +
      helper_function(final_scores[29]) +
      helper_function(final_scores[30]);
    if (step4 >= 7) {
      reward += 3;
    } else if (step4 >= 6) {
      reward += 2;
    } else if (step4 >= 1) {
      reward += 1;
    }
    console.log(reward);
    return reward;
  }
  grainScore(scores, helper_function) {
    let final_scores = [...scores];
    let reward = 0;
    const step1 =
      helper_function(final_scores[12]) +
      helper_function(final_scores[13]) * 0.5 +
      helper_function(final_scores[15]) * 0.5 +
      helper_function(final_scores[17]) * 0.8;

    if (step1 >= 6) {
      reward += 17;
    } else if (step1 >= 5) {
      reward += 15;
    } else if (step1 >= 4) {
      reward += 12;
    } else if (step1 >= 3) {
      reward += 9;
    } else if (step1 >= 2) {
      reward += 6;
    } else if (step1 >= 1) {
      reward += 3;
    }

    const step2 =
      helper_function(final_scores[14]) +
      helper_function(final_scores[16]) +
      helper_function(final_scores[18]);

    if (step2 <= 1) {
      reward += 3;
    }
    return reward;
  }
  fruitScore(scores, helper_function) {
    let final_scores = [...scores];
    let reward = 0;
    reward += final_scores[19] || 0;

    reward += final_scores[20] || 0;

    return reward;
  }

  fatsScore(scores, helper_function) {
    let final_scores = [...scores];
    let reward = 0;
    reward += final_scores[21] || 0;
    reward += final_scores[22] || 0;
    reward += final_scores[23] || 0;
    reward += final_scores[24] || 0;
    reward += final_scores[25] || 0;

    return reward;
  }

  fishScore(scores, helper_function) {
    let final_scores = [...scores];
    let reward = 0;
    const kalaruoka = helper_function(final_scores[26]);
    const makkararuoka = helper_function(final_scores[27]);
    const kanaruokia = helper_function(final_scores[28]);
    const liharuokia = helper_function(final_scores[29]);
    const kasvisruokia = helper_function(final_scores[30]);

    if (kalaruoka >= 2) {
      reward += 2;
    }
    if (makkararuoka === 0) {
      reward += 1;
    }
    if (kanaruokia + liharuokia <= 3) {
      reward += 1;
    }
    if (kasvisruokia >= 2) {
      reward += 1;
    }

    const lihaleikkeleet = helper_function(final_scores[31]);
    const leikkelemakkarat = helper_function(final_scores[32]);
    const nakit = helper_function(final_scores[33]);
    //const none = helper_function(final_scores[34]);

    if (lihaleikkeleet <= 2) {
      reward += 2;
    } else if (lihaleikkeleet <= 4) {
      reward += 1;
    }

    if (leikkelemakkarat === 0) {
      reward += 2;
    } else if (leikkelemakkarat <= 1) {
      reward += 1;
    }

    if (nakit === 0) {
      reward += 1;
    }
    return reward;
  }

  dairyScore(scores, helper_function) {
    let final_scores = [...scores];
    let reward = 0;

    const rasvaton_maito = helper_function(final_scores[35]);
    const ykkös_maito = helper_function(final_scores[36]);
    const keskirasva = helper_function(final_scores[37]);
    const rasvainen = helper_function(final_scores[38]);

    const rasvaton_ykkös = rasvaton_maito + ykkös_maito;

    if (rasvaton_ykkös >= 10) {
      reward += 0;
    } else if (rasvaton_ykkös >= 6) {
      reward += 2;
    } else if (rasvaton_ykkös >= 5) {
      reward += 3;
    } else if (rasvaton_ykkös >= 1) {
      reward += 2;
    }

    if (keskirasva < 2) {
      reward += 1;
    }

    if (rasvainen === 0) {
      reward += 1;
    }
    const vähärasvainen = helper_function(final_scores[39]);
    const paljon_rasvaa = helper_function(final_scores[41]);
    const kasvirasva = helper_function(final_scores[42]);
    //const none = helper_function(final_scores[43]);

    if (vähärasvainen + kasvirasva >= 7) {
      reward += 0;
    } else if (vähärasvainen + kasvirasva >= 4) {
      reward += 1;
    } else if (vähärasvainen + kasvirasva >= 2) {
      reward += 3;
    } else if (vähärasvainen + kasvirasva >= 0) {
      reward += 1;
    }

    if (paljon_rasvaa >= 2) {
      reward += 1;
    } else if (paljon_rasvaa >= 0) {
      reward += 2;
    }
    return reward;
  }

  sugarScore(scores, helper_function) {
    let final_scores = [...scores];
    let reward = 0;
    const pikaruoka = final_scores[44] || 0;
    const leivokset = final_scores[45] || 0;
    const makeiset = final_scores[46] || 0;
    //const tee = helper_function(final_scores[47]);
    //const kahvi = helper_function(final_scores[48]);
    const virvoitusjuoma = helper_function(final_scores[49]);
    //const sokeritonjuoma = helper_function(final_scores[50]);
    const täysmehu = helper_function(final_scores[51]);
    const sokeroitu = helper_function(final_scores[52]);
    const olut = helper_function(final_scores[53]);
    const a_olut = helper_function(final_scores[54]);
    const viini = helper_function(final_scores[55]);
    const alkoholi = helper_function(final_scores[56]);

    reward += pikaruoka;
    reward += leivokset;
    reward += makeiset;
    //console.log(reward);
    if (täysmehu <= 7) {
      reward += 1;
    }
    if (virvoitusjuoma + sokeroitu === 0) {
      reward += 2;
    } else if (virvoitusjuoma + sokeroitu === 0) {
      reward += 1;
    }
    if (olut + a_olut + alkoholi + viini <= 2) {
      reward += 3;
    } else if (olut + a_olut + alkoholi + viini <= 4) {
      reward += 2;
    } else if (olut + a_olut + alkoholi + viini <= 7) {
      reward += 1;
    }
    return reward;
  }
  evalUserInput = (return_value, update_state) => {
    const id = return_value.target.id;
    const value = return_value.target.value;
    const final_scores = [...this.state.final_scores];
    final_scores[id - 1] = value;
    this.setState({ final_scores: final_scores });
    this.update_state();
  };

  changeQuestions = (event) => {
    console.log(event.target.id);
    console.log(event.target.text);
    let new_page_num;
    const number_of_pages = this.state.question_indexes.length;
    const current_page_number = this.state.question_page_number;
    if (event.target.text === undefined) {
      switch (event.target.id) {
        case "next":
          if (number_of_pages - 2 <= current_page_number) {
            new_page_num = 0;
          } else {
            new_page_num = current_page_number + 1;
          }
          break;
        default:
          if (current_page_number === 0) {
            new_page_num = number_of_pages - 2;
          } else {
            new_page_num = current_page_number - 1;
          }
          break;
      }
    } else {
      new_page_num = this.state.domains.indexOf(event.target.text.trim());
    }

    /*
    if (event.target.id === "next") {
      if (number_of_pages - 2 <= current_page_number) {
        new_page_num = 0;
      } else {
        new_page_num = current_page_number + 1;
      }
    } else {
      if (current_page_number === 0) {
        new_page_num = number_of_pages - 2;
      } else {
        new_page_num = current_page_number - 1;
      }
    }
    */
    this.update_state();
    this.setState({ question_page_number: new_page_num });
  };

  render() {
    const score_function_list = [
      this.schedule_score,
      this.grainScore,
      this.fruitScore,
      this.fatsScore,
      this.fishScore,
      this.dairyScore,
      this.sugarScore,
    ];

    return (
      <div>
        <Header
          domains={this.state.domains}
          changeQuestions={this.changeQuestions}
          pageNumber={this.state.question_page_number}
        />
        <PageName
          pageNumber={this.state.question_page_number}
          domains={this.state.domains}
        />
        <ChagePage
          changeQuestions={this.changeQuestions}
          domains={this.state.domains}
          pageNumber={this.state.question_page_number}
        />
        <Questions_or_results
          all={this.state}
          user_input_score_helper={this.user_input_score_helper}
          changeQuestions={this.changeQuestions}
          set_score={this.set_score}
          evalUserInput={this.evalUserInput}
          score_function_list={score_function_list}
          update_state={this.update_state}
        />

        <ChagePage
          changeQuestions={this.changeQuestions}
          domains={this.state.domains}
          pageNumber={this.state.question_page_number}
        />
      </div>
    );
  }
}

export default App;
