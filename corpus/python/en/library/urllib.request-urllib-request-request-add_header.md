---
id: "python-en-function-urllib-request-request-add_header"
language: "python"
lang: "en"
category: "function"
name: "Request.add_header"
signature: "Request.add_header(key, val)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.Request.add_header"
license: "PSF"
updated: "2026-10-01"
---

# Request.add_header

Add another header to the request.  Headers are currently ignored by all
handlers except HTTP handlers, where they are added to the list of headers sent
to the server.  Note that there cannot be more than one header with the same
name, and later calls will overwrite previous calls in case the *key* collides.
Currently, this is no loss of HTTP functionality, since all headers which have
meaning when used more than once have a (header-specific) way of gaining the
same functionality using only one header.  Note that headers added using
this method are also added to redirected requests.
