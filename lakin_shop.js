function ALLCODES() {
  try {
    // add Ad template with timeout
    let second_sec = document.querySelector(
      "body > section:nth-of-type(2) > .container"
    );
    second_sec.classList.add("my_template");
    // let new_row = document.createElement("div");
    // new_row.classList.add('myRow');
    // new_row.classList.add('row');
    // let new_row_time = document.createElement('div');
    let myRow_up = document.createRange()
      .createContextualFragment(`<div class="myRow_time">
        <div class="up">
                <div class="time">
                    <div class="box">
                        <div class="days">
                            <div class="num">
                                <span id="daysNum">00</span>
                            </div>
                            <div class="word">ي</div>
                        </div>
                        <div class="hours">
                             <div class="num">
                                <span id="hoursNum">00</span>
                             </div>
                            <div class="word">س</div>
                        </div>
                        <div class="minutes">
                             <div class="num">
                                <span id="minutesNum">00</span>
                             </div>
                            <div class="word">د</div>
                        </div>
                        <div class="seconds">
                             <div class="num">
                                <span id="secondsNum">00</span>
                             </div>
                            <div class="word">ث</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            `);
    // new_row_time.classList.add('myRow_time');

    let add_temp = () => {
      let myRow_down = document.createRange().createContextualFragment(`<style>
            .my_template {
                position:relative;
            }
            .my_template .myRow_time, .my_template .myRow {
                position:absolute;
                z-index:2;
                left:calc(1.2vw + 15px);
                bottom:1.5vw;
            }
            .my_template .myRow {
                left:auto;
                right:calc(2vw + 15px);
                bottom:13%;
            }
            .stoped {
            color: red;
            }
            .up {
                position: relative;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
            .closeOfferAll {
                transition:opacity 0.2s;
                opacity: 0;
            }
            .up .close #close-ad {
                background-color: transparent;
                outline: none;
                border: none;
                cursor: pointer;
                padding: 5px;
                font-size: 20px;
                border-radius: 50%;
                box-shadow: 0 0 10px 4px #eee;
            }
            .up .time {
                width: 100%;
            }
            .up .time .box {
                display: flex;
                justify-content: center;
                direction: ltr;
            }
            .up .time .box > div {
                margin: 0px 1vw;
                border: 1px solid #555;
                border-radius: 4px;
                text-align: center;
            }
            .up .box .num {
                color: #ffffff;
                font-weight: 600;
                font-size: 12px;
                font-size: 5vw;
                margin-bottom: 0.2vw;
                padding: 1px 2px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .up .box .word {
                border-top: 1px solid #555;
                padding: 0px 2px;
                min-width: 8vw;
                color:#ffffff;
                font-size: 4vw;
            }
            .title {
                width: 100%;
                text-align: center;
                margin-bottom: 20px;
            }
            .title h2 {
                color: #444;
            }
            .title h2 + span {
                font-weight: 600;
                font-size: 20px;
            }
            .down {
                display: flex;
                justify-content: space-around;
                direction: ltr;
            }
            .down .couponDiv {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .down .copyCoupon, .down .closeOffer-bigBtn {
                background-color: var(--color-primary,#454ade);
                background: linear-gradient(65deg, #ffffff 2%, #ffffff 10%);
                color: var(--color-primary,#454ade);
                font-weight: 600;
                font-size: 3vw;
                outline: none;
                border: none;
                padding: 1.4vw 1.8vw;
                border-radius: 100px;
                margin: 5px auto;
                cursor: pointer;
            }
            .down .closeOffer-bigBtn  {
                color: #333;
                background: #fff;
                border: 1px solid #333;
                font-size: 20px;
                padding: 6px 12px;
            }
            .down .closeOffer-bigBtn:hover {
                background: linear-gradient(65deg, #1274ED 0, #4992F0 100%);
                color: #fff;
                transition: 0.2s;
            }
            .down .copyCoupon:hover {
                opacity: 0.9;
            }
            .down .clicked .copy-icon:after {
                content: "\f0c5";
                font-family: 'fontawesome';
                font-size: 20px;
            }
            #cw {
                margin-left: 4px;
            }
            .down .offerEnds {
                background: #eee;
                opacity: 0.7;
                color: #555;
                cursor: auto;
                pointer-events: none;
            }
            .down .offerEnds:hover {
                opacity: 0.7;
            }
            @media only screen and (max-width:520px) {
                .down .copyCoupon {
                    padding: 0.5vw 1vw;
                }
                .up .box .num {
                    font-size: 4vw;
                }
                 .up .box .word {
                 min-width: 7.5vw;
                }
            }
            @media only screen and (min-width:1400px) {
                .up .box .num {
                    font-size: 4vw;
                }
                .up .box .word {
                min-width: 7vw;
               }
            }
            </style>
            <div class="myRow">
            <div class="main-container">
            <div class="down">
                <div class="couponDiv">
                    <button type="button" onclick="copyCoupon()" class="copyCoupon ">
                        <span class="coupon" id="coupon">2023</span>
                        <span id="cw">نسخ</span>
                        <i class="copy-icon"></i>
                    </button>
                </div>
            </div>
        </div>
        </div>`);

      second_sec.appendChild(myRow_down);
      second_sec.prepend(myRow_up);
    };

    //  The coupon 'end day'
    let countDownDate = new Date("Jan 5, 2023 20:40:50").getTime();
    let one_time = 0;
    let counter = setInterval(() => {
      try {
        let dateNow = new Date().getTime();

        // diff between Now and end day
        let dateDiff = countDownDate - dateNow;

        if (dateDiff > 0) {
          if (one_time < 1) {
            let test1 = performance.now();
            // new_row.classList.add('in_loading');
            // setTimeout(() => {
            add_temp();
            // new_row.classList.remove('in_loading');
            let test2 = performance.now();
            console.log(test2 - test1);
            // }, 1200);
          }
          one_time++;
          // time units
          let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
          let hours = Math.floor(
            (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

          document.getElementById("daysNum").textContent =
            days < 10 ? `0${days}` : days;
          document.getElementById("hoursNum").textContent =
            hours < 10 ? `0${hours}` : hours;
          document.getElementById("minutesNum").textContent =
            minutes < 10 ? `0${minutes}` : minutes;
          document.getElementById("secondsNum").textContent =
            seconds < 10 ? `0${seconds}` : seconds;
        } else {
          console.log(`time passed! please re-new the offer date
            انتهى العرض
            `);
          offerEnd();
        }
      } catch (e) {
        console.log(`error accr
        reason:
        ${e}`);
        clearInterval(counter);
      }
    }, 1000);

    // if offer ends while visitors browsing the store
    try {
      let title = document.querySelector(".up .title h2");
      let allTimer = document.querySelectorAll(".time .num span");
      let copyBtn = document.querySelector(".copyCoupon");
      var offerEnd = () => {
        clearInterval(counter);
        title.textContent = "انتهى العرض";
        allTimer.forEach((el) => el.classList.add("stoped"));
        copyBtn.classList.add("offerEnds");
      };
    } catch (e) {
      console.log(`Error with selector
    reason:
    ${e}`);
    }

    // copy couponto device clipboard
    var copyCoupon = () => {
      try {
        let myCoupon = document.getElementById("coupon").textContent;
        navigator.clipboard.writeText(myCoupon);
        console.log(`coupon copied`);
        document.getElementById("cw").textContent = "تم";
      } catch (e) {
        console.log(`faild to copy the coupon !!
        reson:
        ${e}`);
      }
      };
      
      
    // put my name in the side pannel for 6 months, cuz they dont pay for anything
    let dateNow_2 = new Date();
    // from 1 jan 2023 to 1 july
    let dateFinish = new Date("jun 1 2023");
    let dateDiff_2 = dateFinish - dateNow_2;
    let insertMyName = () => {
      let ele = `<li>
        <a target="_blank" href="https://t.me/Emad_Albakri"><i class="sicon-Emad_brush sicon-pencil-paintbrush"></i>منسّق المتجر CSS &nbsp; <span> Emad </span></a>
        </li>`;
      let sideBar_ul = document.querySelector(
        ".side-panel__content .top-header__info"
      );
      sideBar_ul.innerHTML += ele;
    };
    if (dateDiff_2 > 0) {
      insertMyName();
    }
    // end putting my name in the side panel

    // animation for ratings stars
    let titles = document.querySelectorAll(
      `section > .container > .row:first-of-type > div > div.title`
    );

    for (let i in titles) {
      if (titles[i].textContent == "آراء العملاء") {
        titles[
          i
        ].parentElement.parentElement.parentElement.parentElement.classList.add(
          "my_ratings"
        );
      }
    }
    let rate_sec = document.querySelector(".my_ratings");

    window.addEventListener("scroll", () => {
      if (rate_sec.getBoundingClientRect().top < 200) {
        rate_sec.classList.add("active");
      }
    });
    //End animation for ratings stars
  } catch (e) {
    console.log(`Error. reason:

        ${e}
        `);
  }

  // End of Codes, please dont remove or play with the under codes
}

if (document.readyState === "loading") {
  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", ALLCODES);
} else {
  // `DOMContentLoaded` has already fired
  ALLCODES();
}
