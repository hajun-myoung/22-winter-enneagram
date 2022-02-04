const QUESTIONS = [
  {
    text: "나는 마음이 차갑고 냉정한 편이다",
    type: "e",
    num: 1,
  },
  {
    text: "나는 무엇을 하든 승부욕이 강하다",
    type: "c",
    num: 2,
  },
  {
    text: "나는 재미있는 일을 즐기며 낙천적으로 산다",
    type: "g",
    num: 3,
  },
  {
    text: "나는 다른 사람들을 도와주고 베풀기를 좋아한다",
    type: "b",
    num: 4,
  },
  {
    text: "나는 예민하고 감정의 기복이 심한 편이다",
    type: "d",
    num: 5,
  },
  {
    text: "나는 좀 우유부단하고 수동적인 편이다",
    type: "i",
    num: 6,
  },
  {
    text: "나는 주변이 깔끔하게 정리되어 있지 않으면 짜증이 난다",
    type: "a",
    num: 7,
  },
  {
    text: "나는 사람들로부터 '충성스러운 사람이다'라는 말을 듣는다",
    type: "f",
    num: 8,
  },
  {
    text: "나느 화가 나면 참지 못하고 폭발하지만 뒤끝은 없다",
    type: "h",
    num: 9,
  },
  {
    text: "나는 무슨 일이든지 완벽하게 하려는 경향이 있다",
    type: "a",
    num: 10,
  },
  {
    text: "나는 예술적 감각이 뛰어나고 낭만적이다",
    type: "d",
    num: 11,
  },
  {
    text: "나는 누구에게나 친절하고 동정심이 많은 편이다",
    type: "b",
    num: 12,
  },
  {
    text: "나는 뭐든지 조금하지 않고 좀 느긋한 사람이다",
    type: "i",
    num: 13,
  },
  {
    text: "나는 무리해서라도 싫은 일은 할 수만 있으면 피하려고 한다",
    type: "g",
    num: 14,
  },
  {
    text: "나는 목적 지향적이고 일 중심적이다",
    type: "c",
    num: 15,
  },
  {
    text: "나는 맡겨진 일에 대해 책임감이 강하다",
    type: "f",
    num: 16,
  },
  {
    text: "나는 인간관계에서 공격적이고 자기주장이 강하다",
    type: "h",
    num: 17,
  },
  {
    text: "나는 책읽기를 좋아하고 새로운 지식 습득을 좋아한다",
    type: "e",
    num: 18,
  },
  {
    text: "나는 사람들로부터 부탁을 받으면 거절하기가 어렵다",
    type: "b",
    num: 19,
  },
  {
    text: "나는 여러가지 재주가 있고 뭐든지 잘할 수 있다",
    type: "g",
    num: 20,
  },
  {
    text: "나는 성공을 위한 자기개발을 위해서 꾸준히 노력한다",
    type: "c",
    num: 21,
  },
  {
    text: "나는 기본이 안 된 사람을 싫어하는 편이다",
    type: "a",
    num: 22,
  },
  {
    text: "나느 새로운 환경이나 독특한 분위기를 좋아한다",
    type: "d",
    num: 23,
  },
  {
    text: "나는 어려운 문제를 직면하기보다 회피한다",
    type: "i",
    num: 24,
  },
  {
    text: "나는 어느 한 분야에 전문성을 가진 지적 능력이 있다",
    type: "e",
    num: 25,
  },
  {
    text: "나는 돌다리도 두드려 가려는 경향이 있어 조심스러워 한다",
    type: "f",
    num: 26,
  },
  {
    text: "나는 에너지가 넘쳐서 활동적인 삶을 산다",
    type: "h",
    num: 27,
  },
  {
    text: "나는 작은 실수에도 신경을 쓰기 때문에 스트레스를 받는다",
    type: "a",
    num: 28,
  },
  {
    text: "나는 혼자 있는 시간보다 여러 사람들과 어울리는 것이 좋다",
    type: "g",
    num: 29,
  },
  {
    text: "나는 사람들과 교제하며 감정을 공감할 때 기쁨을 느낀다",
    type: "b",
    num: 30,
  },
  {
    text: "나는 외로움을 느낄 때가 많고 우울한 경향이 있다",
    type: "d",
    num: 31,
  },
  {
    text: "나는 모든 것을 분석적인 사고로 판단하기를 좋아한다",
    type: "e",
    num: 32,
  },
  {
    text: "나는 사람들로부터 설득력과 지도력이 있다는 말을 듣는다",
    type: "c",
    num: 33,
  },
  {
    text: "나는 인간관계에서 조화를 이루고 평화를 추구한다",
    type: "i",
    num: 34,
  },
  {
    text: "나는 미래의 불확실성에 대한 걱정과 염려가 많은 편이다",
    type: "f",
    num: 35,
  },
  {
    text: "나는 사람들을 통제하고 지배하려는 경향이 강하다",
    type: "h",
    num: 36,
  },
  {
    text: "나는 모든 상황 속에서 '안전제일'을 중요하게 생각한다",
    type: "f",
    num: 37,
  },
  {
    text: "나는 확실한 원칙과 규칙을 가지고 양심적으로 행동한다",
    type: "a",
    num: 38,
  },
  {
    text: "나는 다른 사람들보다 유행에 민감하고 특별한 옷을 좋아한다",
    type: "d",
    num: 39,
  },
  {
    text: "나는 한 가지 일에 집중하기 보다는 관심분야가 계속 바뀐다",
    type: "g",
    num: 40,
  },
  {
    text: "나는 사람들이 '오래 사귄 친구처럼 편안하다'고 말한다",
    type: "i",
    num: 41,
  },
  {
    text: "나는 시간과 금전 사용에 있어서 과도히 아낀다",
    type: "e",
    num: 42,
  },
  {
    text: "나는 미래에 대한 꿈과 비전이 있고 성취욕구가 강하다",
    type: "c",
    num: 43,
  },
  {
    text: "나는 분노를 절제하기가 어려워 타인에게 상처를 주는 경향이 있다",
    type: "h",
    num: 44,
  },
  {
    text: "나는 눈치가 빠르고 주변사람들이 보이는 반응에 민감하다",
    type: "b",
    num: 45,
  },
  {
    text: "나는 해야 할 일이 많은데 시간이 부족해 항상 조급해진다",
    type: "a",
    num: 46,
  },
  {
    text: "나는 친한 사람이라도 아무런 예고도 없이 방문하는 것은 싫다",
    type: "e",
    num: 47,
  },
  {
    text: "나는 인간의 도리와 의리를 중요하게 여기며 지도력이 있다",
    type: "h",
    num: 48,
  },
  {
    text: "나는 부정적인 말보다는 주로 긍정적인 말을 하는 편이다",
    type: "c",
    num: 49,
  },
  {
    text: "나는 어린애 같고 명랑하다",
    type: "g",
    num: 50,
  },
  {
    text: "나는 타인의 감정을 고려해서 자신을 희생시키는 경향이 있다",
    type: "b",
    num: 51,
  },
  {
    text: "나는 자신이 비극의 주인공처럼 느껴질 때가 있다",
    type: "d",
    num: 52,
  },
  {
    text: "나는 불확실한 것보다 예측 가능한 일을 좋아한다",
    type: "f",
    num: 53,
  },
  {
    text: "나는 문제가 발생하면 '세월이 약이겠지'라고 생각하고 내버려 둔다",
    type: "i",
    num: 54,
  },
  {
    text: "나는 나 자신의 결점과 부족한 부분을 고치려고 노력한다",
    type: "a",
    num: 55,
  },
  {
    text: "나는 어려운 일을 당할 때 스스로 해결하는 것이 마음 편하다",
    type: "e",
    num: 56,
  },
  {
    text: "나는 의미 있다고 여기는 것을 위해서는 깊이 몰입한다",
    type: "d",
    num: 57,
  },
  {
    text: "나는 갑작스런 환경의 변화보다 익숙한 하루의 일과를 좋아한다",
    type: "i",
    num: 58,
  },
  {
    text: "나는 마음에 두려움이 있으며 의심을 많이 하는 편이다",
    type: "f",
    num: 59,
  },
  {
    text: "나는 모르는 사람들과도 쉽게 사귀며 교제 나누기를 좋아한다",
    type: "b",
    num: 60,
  },
  {
    text: "나는 반복되는 일 보다는 새로운 것을 추구하며 모험적인 것이 좋다",
    type: "g",
    num: 61,
  },
  {
    text: "나는 단기간에 가장 효율적으로 일하는 능력이 있다",
    type: "c",
    num: 62,
  },
  {
    text: "나는 도전할 대상이 있어야 힘디 더 솟는다",
    type: "h",
    num: 63,
  },
  {
    text: "나는 과거의 실패한 일 보다는 성공할 꿈을 꾸리를 좋아한다",
    type: "c",
    num: 64,
  },
  {
    text: "나는 너무 진지하게 생각하다 두려움에 빠진다",
    type: "f",
    num: 65,
  },
  {
    text: "나는 다른 사람들이 미처 생각하지 못하는 아이디어를 제시한다",
    type: "d",
    num: 66,
  },
  {
    text: "나는 유머감각이 있어 분위기 메이커 역할을 잘한다",
    type: "g",
    num: 67,
  },
  {
    text: "나는 차분하여 쉽게 감정적으로 흥분하지 않는 편이다",
    type: "i",
    num: 68,
  },
  {
    text: "나는 내면에 불가능은 없다는 강한 정신력을 가지고 있다",
    type: "h",
    num: 69,
  },
  {
    text: "나는 꼼꼼하고 성실하며 정직하게 산다",
    type: "a",
    num: 70,
  },
  {
    text: "나는 목소리가 작은 편이고 자신감이 없고 소심한 편이다",
    type: "e",
    num: 71,
  },
  {
    text: "나는 사람들에게 봉사하므로 소중한 존재로 여겨지기를 바란다",
    type: "b",
    num: 72,
  },
  {
    text: "나는 무슨 일이나 옳고 그름으로 흑백을 구분하여 판단한다",
    type: "a",
    num: 73,
  },
  {
    text: "나는 독특한 것을 추구하기 때문에 타인에게 오해받을 때가 있다",
    type: "d",
    num: 74,
  },
  {
    text: "나는 한 번 신뢰하고 믿는 사람과는 오래도록 관계를 갖는다",
    type: "f",
    num: 75,
  },
  {
    text: "나는 '무지하고 무능력한 사람'을 무시하는 경향이 많은 편이다",
    type: "c",
    num: 76,
  },
  {
    text: "나는 인생의 어두운 부분보다 밝은 측면을 보기를 좋아한다",
    type: "g",
    num: 77,
  },
  {
    text: "나는 사람들과 활동하기보다는 혼자 조용한 시간을 갖는 것이 좋다",
    type: "e",
    num: 78,
  },
  {
    text: "나는 다른 사람보다 늘 강해야 된다고 생각한다",
    type: "h",
    num: 79,
  },
  {
    text: "나는 모든 사람들의 의견을 존중하고 화합을 잘 시킨다",
    type: "i",
    num: 80,
  },
  {
    text: "나는 항상 타인에게 필요한 존재가 되고 싶다",
    type: "b",
    num: 81,
  },
];

const CHOICE_COUNT = 5;
const PROBLEMS_IN_A_PAGE = 25;
const PROBLEMS_AMOUNT = 71;
const PAGE_COUNT = Math.ceil(PROBLEMS_AMOUNT / PROBLEMS_IN_A_PAGE);

let choice = [
  ["아주", "그렇다"],
  ["조금", "그렇다"],
  ["그저", "그렇다"],
  ["조금", "아니다"],
  ["전혀", "아니다"],
];

function generate() {
  // question article
  // let tar = document.getElementById("question");
  for (let page = 0; page < PAGE_COUNT; page++) {
    console.log(`page ${page} Loading`);
    let newQuestionPage = document.getElementsByClassName("slide")[page];
    QUESTIONS.slice(
      page * PROBLEMS_IN_A_PAGE,
      (page + 1) * PROBLEMS_IN_A_PAGE
    ).forEach((item) => {
      // console.log(`item ${item.num} Loading`);
      // 문항을 감싸는 div
      let newDiv = document.createElement("div");
      newDiv.className += `question_${item.type}`;

      // 문항에 들어가는 p태그들 : 번호와 문제
      let numberP_tag = document.createElement("p");
      let questionP_tag = document.createElement("p");

      let numTxt = document.createTextNode(`Q${item.num}`);
      let quetionTxt = document.createTextNode(item.text);

      numberP_tag.appendChild(numTxt);
      questionP_tag.appendChild(quetionTxt);

      // 문항 Div에 연결
      newDiv.appendChild(numberP_tag);
      newDiv.appendChild(questionP_tag);

      // 선택지 div와 자식 input, label
      let choiceDiv = document.createElement("div");
      choiceDiv.className += "choice";

      for (let cnt = 0; cnt < CHOICE_COUNT; cnt++) {
        let newInput = document.createElement("input");
        let newLabel = document.createElement("label");

        // "아주" "그렇다" 사이 줄바꿈을 위해 두 개의 P element를 이용
        let newP_tag_inLabel_1 = document.createElement("p");
        let newP_tag_inLabel_2 = document.createElement("p");
        let newLabelTxt1 = document.createTextNode(choice[cnt][0]);
        let newLabelTxt2 = document.createTextNode(choice[cnt][1]);

        newP_tag_inLabel_1.appendChild(newLabelTxt1);
        newP_tag_inLabel_2.appendChild(newLabelTxt2);

        newInput.type = "radio";
        newInput.name = `q${item.num}`;
        newInput.id = `choice${cnt + 1}`;
        newInput.value = `${5 - cnt}`;

        newLabel.for = `choice${cnt + 1}`;

        newLabel.appendChild(newP_tag_inLabel_1);
        newLabel.appendChild(newP_tag_inLabel_2);

        choiceDiv.appendChild(newInput);
        choiceDiv.appendChild(newLabel);
      }

      newDiv.appendChild(choiceDiv);

      newQuestionPage.appendChild(newDiv);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  generate();
});

// export { generate };
