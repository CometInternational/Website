<!-- Event snippet for Add to cart conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
< script > function gtag_report_conversion(url) {
  var callback = function() {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-816653653/ULTXCOfepIUBENXKtIUD',
    'value': 139.99,
    'currency': 'USD',
    'transaction_id': '',
    'event_callback': callback
  });
  return false;
} < /script>
