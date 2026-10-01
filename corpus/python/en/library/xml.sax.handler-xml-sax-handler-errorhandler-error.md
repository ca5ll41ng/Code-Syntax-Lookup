---
id: "python-en-function-xml-sax-handler-errorhandler-error"
language: "python"
lang: "en"
category: "function"
name: "ErrorHandler.error"
signature: "ErrorHandler.error(exception)"
directive: "method"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.ErrorHandler.error"
license: "PSF"
updated: "2026-10-01"
---

# ErrorHandler.error

Called when the parser encounters a recoverable error.  If this method does not
raise an exception, parsing may continue, but further document information
should not be expected by the application.  Allowing the parser to continue may
allow additional errors to be discovered in the input document.
