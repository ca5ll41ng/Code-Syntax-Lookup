---
id: "python-en-function-urllib-request-datahandler-data_open"
language: "python"
lang: "en"
category: "function"
name: "DataHandler.data_open"
signature: "DataHandler.data_open(req)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.DataHandler.data_open"
license: "PSF"
updated: "2026-10-01"
---

# DataHandler.data_open

Read a data URL. This kind of URL contains the content encoded in the URL
itself. The data URL syntax is specified in RFC 2397. This implementation
ignores white spaces in base64 encoded data URLs so the URL may be wrapped
in whatever source file it comes from. But even though some browsers don't
mind about a missing padding at the end of a base64 encoded data URL, this
implementation will raise a `ValueError` in that case.
