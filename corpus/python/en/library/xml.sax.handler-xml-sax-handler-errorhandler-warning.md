---
id: "python-en-function-xml-sax-handler-errorhandler-warning"
language: "python"
lang: "en"
category: "function"
name: "ErrorHandler.warning"
signature: "ErrorHandler.warning(exception)"
directive: "method"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.ErrorHandler.warning"
license: "PSF"
updated: "2026-10-01"
---

# ErrorHandler.warning

Called when the parser presents minor warning information to the application.
Parsing is expected to continue when this method returns, and document
information will continue to be passed to the application. Raising an exception
in this method will cause parsing to end.
