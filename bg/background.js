let enable_joeverso = true;
chrome.storage.local.set({ enable_joeverso: enable_joeverso });

const joeverso = [
  {
    img:
      "https://c.disquscdn.com/uploads/users/33634/3645/avatar92.jpg?1607011910",
    name: "E-sabella Leão",
  },
  {
    img:
      "https://c.disquscdn.com/uploads/users/32702/7671/avatar92.jpg?1546430498",
    name: "El Gato!",
  },
  {
    img:
      "https://c.disquscdn.com/uploads/users/22562/3793/avatar92.jpg?1607134220",
    name: "Nath Caetano",
  },
];
chrome.storage.local.set({ joeverso: joeverso });

let remove_disqus_ads = true;
chrome.storage.local.set({ remove_disqus_ads: remove_disqus_ads });

let bigger_button = true;
chrome.storage.local.set({ bigger_button: bigger_button });

let disable_arrows = false;
chrome.storage.local.set({ disable_arrows: disable_arrows });