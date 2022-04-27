const app = require('express')();


app.get('/', (req, res) => {
  res.send(`<script>
  function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 1;
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
    return os;
  }
  const curOS=getOS();
  console.warn(curOS);
  window.location.replace('yodecostoreapp://SignUpScreen/2384972349732498327423749322');
  if(curOS.length===6){
      setTimeout("window.location = 'https://apps.apple.com/in/app/whatsapp-messenger/id310633997';", 2000);
  }
  if(curOS.length===7){
      setTimeout("window.location = 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu';", 2000);
  }
  console.log(curOS.length);
  </script>`)
})

app.listen(3000, () => {
  console.log("OK")
});