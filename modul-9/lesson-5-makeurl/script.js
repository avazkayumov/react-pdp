let siuuu = generateUrl("http://testurl.bitfinx.com/",
{
    width: 360,
    height: 300,
    locale: 'en',
    toolbar_bg: '',
    interval: '3h',
    pair: 'BTC_USD',
})

console.log(siuuu)


function generateUrl(url, params) {
    return url.concat("?", Object.entries(params).filter(function(el, i, arr) {
        if(el[1] === '') return false;
        else return true;
    }).map((el, i, arr) => {
        return el[0]=el[1]
    }).join("&"))
}
// "http://testurl.bitfinx.com/?height=300&interval=3h&locale=en&pair=BTC_USD&width=360"

// Object.entries(params);