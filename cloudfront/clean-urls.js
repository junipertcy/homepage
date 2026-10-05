// CloudFront viewer-request function (runtime cloudfront-js-2.0) for junipertcy.info.
// The site is prerendered to one index.html per route, and an S3 origin behind OAC has no directory
// index, so clean URLs are mapped to those files here. This file is the source of the deployed function.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Explicit index.html addresses get the clean URL, so the address bar always names a route the app
  // knows. The query string is dropped; nothing links to these addresses with one.
  if (uri.endsWith('/index.html')) {
    var clean = uri.slice(0, -'index.html'.length);
    if (clean.length > 1) clean = clean.slice(0, -1);
    return { statusCode: 301, statusDescription: 'Moved Permanently', headers: { location: { value: clean } } };
  }
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (uri.split('/').pop().indexOf('.') === -1) {
    request.uri = uri + '/index.html';
  }
  return request;
}
