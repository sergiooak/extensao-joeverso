const app = new Vue({
  el: "#app",
  data: {
    joeverso: [],
    enable_joeverso: false,
  },
  methods: {
    active_joeverso() {
      document.querySelectorAll(".le-autor").forEach((e) => {
        let person = this.joeverso[
          Math.floor(Math.random() * this.joeverso.length)
        ];
        e.querySelector("a").textContent = person.name;
        e.querySelector("img").src = person.img;
      });
    },
  },
  created() {
    let vm = this;
    chrome.storage.local.get(["enable_joeverso"], function (result) {
      vm.enable_joeverso = result.enable_joeverso;
      if (vm.enable_joeverso) {
        chrome.storage.local.get(["joeverso"], function (result) {
          vm.joeverso = result.joeverso;
          vm.active_joeverso();
        });
      }
    });
  },
});

// // 1 - Change IMG on header
// try {
//   document.querySelector("footer .le-negaozao").src =
//     "https://i.imgur.com/7uoux59.png";
//   document.querySelector(".le-logo-ahnegao img").src =
//     "https://i.imgur.com/64YZDkW.png";
//   document.querySelector(".le-negao img").src =
//     "https://i.imgur.com/7uoux59.png";
// } catch (error) {}
// try {
//   document.querySelector("#logo-ahnegao-header > a > img:nth-child(2)").src =
//     "https://i.imgur.com/1mct3RP.png";
// } catch (error) {}
