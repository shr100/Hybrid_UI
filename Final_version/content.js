// var images = document.getElementsByTagName('img');
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
// }

function addTheme(doc) {
  doc.body.classList.add('a11y_body');

  var links = document.getElementsByTagName('a');
  for (let l of links) {
    l.classList.add('a11y_a');
  }
}

function removeTheme(doc) {
  doc.body.classList.remove('a11y_body');

  var links = document.getElementsByTagName('a');
  for (let l of links) {
    l.classList.remove('a11y_a');
  }
}

function addStyle(doc) {
  doc.body.classList.add('a11y_sty_body');

  var links = document.getElementsByTagName('a');
  for (let l of links) {
    l.classList.add('a11y_sty_a');
  }

  var paragrphs = document.getElementsByTagName('p');
  for (let p of paragrphs) {
    p.classList.add('a11y_sty_p');
  }
}

function removeStyle(doc) {
  doc.body.classList.remove('a11y_sty_body');

  var links = document.getElementsByTagName('a');
  for (let l of links) {
    l.classList.remove('a11y_sty_a');
  }

  var paragrphs = document.getElementsByTagName('p');
  for (let p of paragrphs) {
    p.classList.remove('a11y_sty_p');
  }
}

$(document).ready(function() {
    $('.quart').click(function() {
      var ind = $(this).index();
      switch (ind) {
        case 0:
          var tex = "Theme";
          chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.executeScript({ code: `(${ inContent })()` });
            function inContent() {
              addTheme(document);
              removeStyle(document);
             }
          })
          break;

        case 1:
          var tex = "Bold";
          chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.executeScript({ code: `(${ inContent })()` });
            function inContent() {
              addStyle(document);
              removeTheme(document);
            }
          })
          break;

        case 2:
          var tex = "Bold Theme";
          chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.executeScript({ code: `(${ inContent })()` });
            function inContent() {
              addStyle(document);
              addTheme(document);
            }
          })
          break;

        case 3:
          var tex = "Disabled";
          chrome.tabs.executeScript({ code: `(${ inContent })()` });
            function inContent() {
              removeTheme(document);
              removeStyle(document);
            }
          break;
      }
      $('.center').text(tex);
    });
  });