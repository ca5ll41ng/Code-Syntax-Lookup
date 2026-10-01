---
id: "python-en-function-wsgiref-request_uri"
language: "python"
lang: "en"
category: "function"
name: "request_uri"
signature: "request_uri(environ, include_query=True)"
directive: "function"
module: "wsgiref"
source_url: "https://docs.python.org/3/library/wsgiref.html#wsgiref.request_uri"
license: "PSF"
updated: "2026-10-01"
---

# request_uri

Return the full request URI, optionally including the query string, using the
algorithm found in the "URL Reconstruction" section of PEP 3333.  If
*include_query* is false, the query string is not included in the resulting URI.
