const app = new Vue({
  el: "#app",
  data: {
    enable_joeverso: false,
    version: "v0.1.0",
  },
  mounted() {
    let vm = this;
    chrome.storage.local.get(["enable_joeverso"], function (result) {
      vm.enable_joeverso = result.enable_joeverso;
    });
  },
  watch: {
    enable_joeverso() {
      chrome.storage.local.set({ enable_joeverso: this.enable_joeverso });
    },
  },
});
