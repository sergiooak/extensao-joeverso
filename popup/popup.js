const app = new Vue({
  el: "#app",
  data: {
    enable_joeverso: false,
    remove_disqus_ads: true,
    bigger_button: true,
    disable_arrows: false,
    show_refresh: false,
    version: "v0.2.0",
  },
  methods: {
    refesh(){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
      });
      this.show_refresh = false;
    }
  },
  mounted() {
    let vm = this;
    chrome.storage.local.get(["enable_joeverso"], function (result) {
      vm.enable_joeverso = result.enable_joeverso;
    });
    chrome.storage.local.get(["remove_disqus_ads"], function (result) {
      vm.remove_disqus_ads = result.remove_disqus_ads;
    });
    chrome.storage.local.get(["bigger_button"], function (result) {
      vm.bigger_button = result.bigger_button;
    });
    chrome.storage.local.get(["disable_arrows"], function (result) {
      vm.disable_arrows = result.disable_arrows;
    });
    setTimeout(() => {
      vm.show_refresh = false;
    }, 100)
  },
  watch: {
    disable_arrows() {
      this.show_refresh = true;
      chrome.storage.local.set({ disable_arrows: this.disable_arrows });
    },
    enable_joeverso() {
      this.show_refresh = true;
      chrome.storage.local.set({ enable_joeverso: this.enable_joeverso });
    },
    remove_disqus_ads() {
      this.show_refresh = true;
      chrome.storage.local.set({ remove_disqus_ads: this.remove_disqus_ads });
    },
    bigger_button() {
      this.show_refresh = true;
      chrome.storage.local.set({ bigger_button: this.bigger_button });
    },
  },
});
