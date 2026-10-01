---
id: "python-en-function-urllib-request-openerdirector-error"
language: "python"
lang: "en"
category: "function"
name: "OpenerDirector.error"
signature: "OpenerDirector.error(proto, *args)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.OpenerDirector.error"
license: "PSF"
updated: "2026-10-01"
---

# OpenerDirector.error

Handle an error of the given protocol.  This will call the registered error
handlers for the given protocol with the given arguments (which are protocol
specific).  The HTTP protocol is a special case which uses the HTTP response
code to determine the specific error handler; refer to the `http_error_\`
methods of the handler classes.

Return values and exceptions raised are the same as those of `urlopen`.
