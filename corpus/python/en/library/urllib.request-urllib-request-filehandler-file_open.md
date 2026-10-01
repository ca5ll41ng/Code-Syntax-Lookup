---
id: "python-en-function-urllib-request-filehandler-file_open"
language: "python"
lang: "en"
category: "function"
name: "FileHandler.file_open"
signature: "FileHandler.file_open(req)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.FileHandler.file_open"
license: "PSF"
updated: "2026-10-01"
---

# FileHandler.file_open

Open the file locally, if there is no host name, or the host name is
`'localhost'`.

> *Changed in 3.2*: This method is applicable only for local hostnames.  When a remote hostname is given, a :exc:`~urllib.error.URLError` is raised.
