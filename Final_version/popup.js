/*
var script = document.createElement('script');
script.src = "jquery-3.6.0.min.js";
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function() {
    $('.quart').click(function() {
      var ind = $(this).index();
      switch (ind) {
        case 0:
          var tex = "div 1";
          chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            var link = document.createElement('link');
            link.rel = 'stylesheet'; 
            link.type = 'text/css';
            link.href = 'theme.css'; 
            document.getElementsByTagName('HEAD')[0].appendChild(link);
         })
          break;
        case 1:
          var tex = "div 2";
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
  
    if(document.querySelector('theme'))
    {
   document.querySelector('theme').addEventListener('click', onclick, false)
   function onclick () {
     chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        var link = document.createElement('link');
        link.rel = 'stylesheet'; 
        link.type = 'text/css';
        link.href = 'theme.css'; 
        document.getElementsByTagName('HEAD')[0].appendChild(link);
     })
    }
   }  
   

   if(document.querySelector('#theme'))
   {
  document.querySelector('#theme').addEventListener('click', onclick, false)
  function onclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
       var link = chrome.extension.getURL('theme.css');
       $('head').append($('<link>')
       .attr('rel','stylesheet') 
       .attr('type','text/css')
       .attr('href','theme.css'));
    });
       
    }
   }  

   if(document.querySelector('bold'))
   {
   document.querySelector('bold').addEventListener('click', onclick, false)
   function onclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        var link = document.createElement('link');
        link.rel = 'stylesheet'; 
        link.type = 'text/css';
        link.href = 'styles.css'; 
        document.getElementsByTagName('HEAD')[0].appendChild(link);
    })
    
    }
  }

  if(document.querySelector('theme'))
  {
    
    document.querySelector('voice').addEventListener('click', onclick, false)
    function onclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      /*Voice Integration TODO 
    })
    }
  }
  if(document.querySelector('disable'))
  {
  document.querySelector('disable').addEventListener('click', onclick, false)
  function onclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
    })
  }
    }

*/
