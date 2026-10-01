---
id: "python-en-function-html-parser-htmlparser-handle_startendtag"
language: "python"
lang: "en"
category: "function"
name: "HTMLParser.handle_startendtag"
signature: "HTMLParser.handle_startendtag(tag, attrs)"
directive: "method"
module: "html.parser"
source_url: "https://docs.python.org/3/library/html.parser.html#html.parser.HTMLParser.handle_startendtag"
license: "PSF"
updated: "2026-10-01"
---

# HTMLParser.handle_startendtag

Similar to `handle_starttag`, but called when the parser encounters an
XHTML-style empty tag (`<img ... />`).  This method may be overridden by
subclasses which require this particular lexical information; the default
implementation simply calls `handle_starttag` and `handle_endtag`.
