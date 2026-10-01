---
id: "python-en-function-wsgiref-application_uri"
language: "python"
lang: "en"
category: "function"
name: "application_uri"
signature: "application_uri(environ)"
directive: "function"
module: "wsgiref"
source_url: "https://docs.python.org/3/library/wsgiref.html#wsgiref.application_uri"
license: "PSF"
updated: "2026-10-01"
---

# application_uri

Similar to `request_uri`, except that the `PATH_INFO` and
`QUERY_STRING` variables are ignored.  The result is the base URI of the
application object addressed by the request.
