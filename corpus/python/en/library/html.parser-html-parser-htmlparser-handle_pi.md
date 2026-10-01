---
id: "python-en-function-html-parser-htmlparser-handle_pi"
language: "python"
lang: "en"
category: "function"
name: "HTMLParser.handle_pi"
signature: "HTMLParser.handle_pi(data)"
directive: "method"
module: "html.parser"
source_url: "https://docs.python.org/3/library/html.parser.html#html.parser.HTMLParser.handle_pi"
license: "PSF"
updated: "2026-10-01"
---

# HTMLParser.handle_pi

Method called when a processing instruction is encountered.  The *data*
parameter will contain the entire processing instruction. For example, for the
processing instruction `<?proc color='red'>`, this method would be called as
`handle_pi("proc color='red'")`.  It is intended to be overridden by a derived
class; the base class implementation does nothing.

> **Note**
>
> The `HTMLParser` class uses the SGML syntactic rules for processing
> instructions.  An XHTML processing instruction using the trailing `'?'` will
> cause the `'?'` to be included in *data*.
>
