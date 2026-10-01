---
id: "python-en-function-html-parser-htmlparser-handle_comment"
language: "python"
lang: "en"
category: "function"
name: "HTMLParser.handle_comment"
signature: "HTMLParser.handle_comment(data)"
directive: "method"
module: "html.parser"
source_url: "https://docs.python.org/3/library/html.parser.html#html.parser.HTMLParser.handle_comment"
license: "PSF"
updated: "2026-10-01"
---

# HTMLParser.handle_comment

This method is called when a comment is encountered (e.g. `<!--comment-->`).

For example, the comment `<!-- comment -->` will cause this method to be
called with the argument `' comment '`.

The content of Internet Explorer conditional comments (condcoms) will also be
sent to this method, so, for `<!--[if IE 9]>IE9-specific content<![endif]-->`,
this method will receive `'[if IE 9]>IE9-specific content<![endif]'`.
