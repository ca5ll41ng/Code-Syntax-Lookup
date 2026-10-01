---
id: "python-en-function-html-parser-htmlparser-close"
language: "python"
lang: "en"
category: "function"
name: "HTMLParser.close"
signature: "HTMLParser.close()"
directive: "method"
module: "html.parser"
source_url: "https://docs.python.org/3/library/html.parser.html#html.parser.HTMLParser.close"
license: "PSF"
updated: "2026-10-01"
---

# HTMLParser.close

Force processing of all buffered data as if it were followed by an end-of-file
mark.  This method may be redefined by a derived class to define additional
processing at the end of the input, but the redefined version should always call
the `HTMLParser` base class method `close`.
