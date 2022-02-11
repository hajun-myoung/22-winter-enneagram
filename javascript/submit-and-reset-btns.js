document.addEventListener("DOMContentLoaded", () => {
  setResetBtn();
  setSubmitBtn();
});

function setResetBtn() {
  let resetBtn = document.getElementById("reset-btn");

  resetBtn.addEventListener("click", () => {
    if (confirm("정말로 응답을 초기화하시겠습니까?")) {
      let checkedElem = document.querySelectorAll("input:checked");
      for (let item of checkedElem) {
        item.checked = false;
      }
      updateBar();
    } else {
      alert("응답 초기화가 취소되었습니다");
    }
  });
}

function setSubmitBtn() {
  let submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", () => {
    sumQuestion();
    // console.log(sum);
    createResult();
  });
}

function createResult() {
  // 지능검사결과 폼
  const resultTypeInfo = [
    {
      id: "a",
      title: "1번, 개혁가",
      description: "이성적이고 이상적인 유형으로, 원칙적이고 목표가 분명합니다. 스스로를 잘 통제하고 완벽주의자 경향이 있습니다.",
    },
    {
      id: "b",
      title: "2번, 조력자",
      description: "사람들을 잘 돌보고, 원활하게 교류하는 유형으로, 관대하고 감정을 잘 표출합니다. 사람들을 즐겁게 해 주고, 소유욕이 강합니다.",
    },
    {
      id: "c",
      title: "3번, 성취가",
      description: "성공 지향적이고 실용적인 유형으로, 적응을 잘 하고, 뛰어다니며, 자신의 이미지에 관심이 많습니다.",
    },
    {
      id: "d",
      title: "4번, 예술가",
      description: "민감하고 내성적인 유형으로, 표현력이 있고 극적이며, 자신의 내면 세계에 빠져 있습니다.",
    },
    {
      id: "e",
      title: "5번, 통찰가",
      description: "이성적이고 지혜로운 유형으로, 지각력이 있고 혼자 떨어져 지내기를 좋아합니다. 스스로의 마음을 잘 드러내지 않습니다.",
    },
    {
      id: "f",
      title: "6번, 충성가",
      description: "충실하고 안전을 추구하는 유형으로, 책임감과 의심, 불안이 많습니다. 사람들에게 호감을 줍니다.",
    },
    {
      id: "g",
      title: "7번, 낙천가",
      description: "늘 바쁘며 재미를 추구하는 유형으로, 즉흥적이고 변덕스러우며 욕심이 많습니다.",
    },
    {
      id: "h",
      title: "8번, 리더",
      description: "힘이 있고, 남을 지배하는 유형으로, 자신감과 결단력을 가지고 있습니다. 사람들과 맞서기를 좋아합니다.",
    },
    {
      id: "i",
      title: "9번, 평화주의자",
      description: "느긋하며 남들 앞에 나서지 않으려하는 유형으로, 수용적이고 남에게 위안을 줍니다. 잘 동의하고, 스스로에게 만족합니다.",
    },
  ];

   // 차트랑 메이저 결과 한 행으로 묶기
   let chart_and_major = document.createElement("div");
   chart_and_major.id = "chart_and_major"; 

  // resultDiv will contain whole contents
  let resultDiv = document.createElement("div");

  let chartDiv = document.createElement("div");
  chartDiv.id = "chartDiv";
  let chartCanvas = document.createElement("canvas");
  chartCanvas.id = "myChart";
  // debugger;
  chartCanvas.setAttribute("width", "400");
  chartCanvas.setAttribute("height", "400");
  chartDiv.appendChild(chartCanvas);

  chart_and_major.appendChild(chartDiv);


  // div for major result
  calculateMaxVal(); // console.log(MaxValue);
  for (let idx = 0; idx < sum.length; idx++) {
    sum[idx] = +(sum[idx] / MaxValue[idx]);
    sum[idx] = isNaN(sum[idx]) ? 0 : sum[idx];
  }

  let resultData = [];
  let orderedSum = [...sum];
  orderedSum.sort((a, b) => b - a);

  for (let idx = 0; idx < resultTypeInfo.length; idx++) {
    let biggestIdx = sum.indexOf(orderedSum[idx]);
    let biggestVal = sum[biggestIdx];
    sum[biggestIdx] = -1;

    resultData.push({
      type: resultTypeInfo[biggestIdx].title,
      val: biggestVal,
      description: resultTypeInfo[biggestIdx].description,
    });
  }

  for (let idx = 0; idx < resultTypeInfo.length; idx++) {
    let newDiv = document.createElement("div");
    if (idx == 0) newDiv.id = `major`;
    else newDiv.id = `minor`;

    let newText = document.createTextNode(
      idx == 0
        ? `${userName}님은 ${resultData[idx].type}형 인재입니다.`
        : `${userName}님의 ${idx + 1}번째 우수지능은 ${
            resultData[idx].type
          }입니다.`
    );

    newDiv.appendChild(newText);

    let newGraphDiv = document.createElement("div");
    let newGraph = document.createElement("span");
    if (idx == 0) {
      newGraphDiv.style.width = "100%";
      newGraphDiv.className += "majorGraph";
    } else newGraphDiv.className += "minorGraph";

    newGraphDiv.appendChild(newGraph);

    newGraph.innerHTML = `${Math.ceil(+resultData[idx].val * 100)}%`;
    setTimeout(() => {
      newGraph.style.width =
        resultData[idx].val * newGraphDiv.offsetWidth + "px";
    }, 1000);

    let newDescription = document.createElement("div");
    let newDescriptionText = document.createTextNode(
      resultData[idx].description
    );
    if (idx == 0) newDescription.className += "majorDescription";
    else newDescription.className += "minorDescription";

    newDescription.appendChild(newDescriptionText);

    newDiv.appendChild(newText);
    newDiv.appendChild(newGraphDiv);
    newDiv.appendChild(newDescription);

    if (idx == 0) {
      chart_and_major.appendChild(newDiv);
      resultDiv.appendChild(chart_and_major);
    } else resultDiv.appendChild(newDiv);
  }

  // 캔버스에 차트 드로잉
  const myChart = new Chart(chartCanvas, {
    type: "radar",
    data: {
      labels: ["유형1", "유형2", "유형3", "유형4", "유형5", "유형6", "유형7", "유형8", "유형9",],
      datasets: [
        {
          label: `${userName}님 검사결과`,
          data: resultData.map((data) => data.val),
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          pointBackgroundColor: "rgb(255, 99, 132)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
      ],
    },
    options: {
      responsive: false,
      scale: {
        // beginAtZero: true,
        max: 1.0,
        min: 0.0,
        stepSize: 0.2,
      },
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  });


  // 최종 초기화 및 반영
  document.getElementById("progressBar").style.display = "none";

  const noticeElem = document.getElementsByClassName("notice");
  
  noticeElem[0].innerHTML = `${userName}님의 검사 결과입니다.`;
  noticeElem[0].style.backgroundColor = "skyblue";
  
  noticeElem[1].style.display = "none";
  
  document.getElementById("controller").style.display = "none";
  
  let questionDiv = document.getElementById("question");
  questionDiv.style.height = "520px";

  questionDiv.scroll({
    top: 0,
    behavior: "smooth",
  });
  questionDiv.innerHTML = "";
  questionDiv.appendChild(resultDiv);
}
