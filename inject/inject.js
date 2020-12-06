const app = new Vue({
  el: "#app",
  data: {
    joeverso: [],
    enable_joeverso: true,
    remove_disqus_ads: true,
    bigger_button: true,
    disbale_arrows: false,
  },
  methods: {
    inject_body_class(class_name) {
      document.querySelector("body").classList.add(class_name);
    },
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
    // Remove Disqus Ads
    chrome.storage.local.get(["remove_disqus_ads"], function (result) {
      vm.remove_disqus_ads = result.remove_disqus_ads;
      if (vm.remove_disqus_ads) {
        vm.inject_body_class("remove_disqus_ads");
      }
    });
    // Disable Arrows Navigation
    chrome.storage.local.get(["disable_arrows"], function (result) {
      vm.disable_arrows = result.disable_arrows;
      if (vm.disable_arrows) {
        let r = document.querySelector("#narw-next");
        let l = document.querySelector("#narw-previous");
        if (r) {
          r.remove();
        }
        if (l) {
          l.remove();
        }
      }
    });
    // Bigger Button
    chrome.storage.local.get(["bigger_button"], function (result) {
      vm.bigger_button = result.bigger_button;
      if (vm.bigger_button) {
        vm.inject_body_class("bigger_button");
      }
    });
  },
});
