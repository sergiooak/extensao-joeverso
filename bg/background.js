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
];
chrome.storage.local.set({ joeverso: joeverso });

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
  // No tabs or host permissions needed!
  console.log("Turning " + tab.url + " red!");
  alert('Teste')
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"',
  });
});

alert('Teste 1')
