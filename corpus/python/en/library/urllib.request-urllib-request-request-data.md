---
id: "python-en-function-urllib-request-request-data"
language: "python"
lang: "en"
category: "function"
name: "Request.data"
directive: "attribute"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.Request.data"
license: "PSF"
updated: "2026-10-01"
---

# Request.data

The entity body for the request, or `None` if not specified.

> *Changed in 3.4*: Changing value of :attr:`Request.data` now deletes "Content-Length" header if it was previously set or calculated.
