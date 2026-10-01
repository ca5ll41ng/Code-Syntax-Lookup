---
id: "python-en-function-urllib-error-contenttooshorterror"
language: "python"
lang: "en"
category: "function"
name: "ContentTooShortError"
signature: "ContentTooShortError(msg, content)"
directive: "exception"
module: "urllib.error"
source_url: "https://docs.python.org/3/library/urllib.error.html#urllib.error.ContentTooShortError"
license: "PSF"
updated: "2026-10-01"
---

# ContentTooShortError

This exception is raised when the `~urllib.request.urlretrieve`
function detects that
the amount of the downloaded data is less than the expected amount (given by
the *Content-Length* header).

attribute:: content
