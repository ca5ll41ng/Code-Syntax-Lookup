---
id: "python-zh-function-html-parser-htmlparser-handle_comment"
language: "python"
lang: "zh"
category: "function"
name: "HTMLParser.handle_comment"
signature: "HTMLParser.handle_comment(data)"
directive: "method"
module: "html.parser"
source_url: "https://docs.python.org/zh-cn/3/library/html.parser.html#html.parser.HTMLParser.handle_comment"
license: "PSF"
updated: "2026-10-01"
---

# HTMLParser.handle_comment

这个方法在遇到注释的时候被调用 (例如 ``<!--comment-->``)。

For example, the comment `<!-- comment -->` will cause this method to be
called with the argument `' comment '`.

The content of Internet Explorer conditional comments (condcoms) will also be
sent to this method, so, for `<!--[if IE 9]>IE9-specific content<![endif]-->`,
this method will receive `'[if IE 9]>IE9-specific content<![endif]'`.
