  // Set up context menu at install time.
  chrome.runtime.onInstalled.addListener(function() {
      chrome.contextMenus.create({"title": "Search on SoundCloud", "contexts":["selection"], "id": "context" + "selection"});
  });
  // add click event
  chrome.contextMenus.onClicked.addListener(searchOnSoundCloud);
  // The onClicked callback function.
  function searchOnSoundCloud(info, tab) {
      var selection = info.selectionText;
      var url = "https://soundcloud.com/search?q=" + encodeURIComponent(selection); 
      window.open(url, '_blank');
  };

