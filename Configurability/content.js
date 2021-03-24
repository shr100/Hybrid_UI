var script = document.createElement('script');
script.src = "jquery-3.6.0.min.js";
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function() {
    $('.quart').click(function() {
      var ind = $(this).index();
      switch (ind) {

        case 0:
          var tex = "Theme";
          chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {

            chrome.tabs.executeScript({ code: `(${ inContent })()` });
            function inContent() {
            const el_theme = document.body.appendChild(document.createElement('link'));
            el_theme.rel = 'stylesheet'; 
            el_theme.type = 'text/css';
            el_theme.href = 'theme.css'; }
            /*el.style.cssText = 'position:fixed; top:0; left:0; right:0; background:red';
            el.textContent = 'DIV';
            }

            var link = document.createElement('link');
            link.rel = 'stylesheet'; 
            link.type = 'text/css';
            link.href = 'theme.css'; 
            document.getElementsByTagName('HEAD')[0].appendChild(link);*/
         })

         chrome.tabs.getSelected(null, function(tab) {
            var code = 'window.location.reload();';
            chrome.tabs.executeScript(tab.id, {code: code});
          });
          
          break;

        case 1:
          var tex = "Bold";
          chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {

            /*chrome.tabs.executeScript({ code: `(${ inContent })()` });
            function inContent() {
            document.body.removeChild(el_theme);}*/

            chrome.tabs.executeScript({ code: `(${ inContent })()` });
            function inContent() {
            if(el_theme)
            {
                document.body.removeChild(el_theme);
            }
            const el = document.body.appendChild(document.createElement('link'));
            el.rel = 'stylesheet'; 
            el.type = 'text/css';
            el.href = 'styles.css'; }
         })

         chrome.tabs.getSelected(null, function(tab) {
            var code = 'window.location.reload();';
            chrome.tabs.executeScript(tab.id, {code: code});
          });

          break;
        case 2:
          var tex = "div 3";
          break;
        case 3:
          var tex = "div 4";
          break;
      }
      $('.center').text(tex);
    });
  
  });
