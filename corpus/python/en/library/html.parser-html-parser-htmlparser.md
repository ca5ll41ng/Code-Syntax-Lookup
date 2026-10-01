---
id: "python-en-function-html-parser-htmlparser"
language: "python"
lang: "en"
category: "function"
name: "HTMLParser"
signature: "HTMLParser(*, convert_charrefs=True, scripting=False)"
directive: "class"
module: "html.parser"
source_url: "https://docs.python.org/3/library/html.parser.html#html.parser.HTMLParser"
license: "PSF"
updated: "2026-10-01"
---

# HTMLParser

Create a parser instance able to parse invalid markup.

If *convert_charrefs* is true (the default), all character
references (except the ones in elements like `script` and `style`) are
automatically converted to the corresponding Unicode characters.

If *scripting* is false (the default), the content of the `noscript`
element is parsed normally; if it's true, it's returned as is without
being parsed.

An `.HTMLParser` instance is fed HTML data and calls handler methods
when start tags, end tags, text, comments, and other markup elements are
encountered.  The user should subclass `.HTMLParser` and override its
methods to implement the desired behavior.

This parser does not check that end tags match start tags or call the end-tag
handler for elements which are closed implicitly by closing an outer element.

> *Changed in 3.4*: *convert_charrefs* keyword argument added.

> *Changed in 3.5*: The default value for argument *convert_charrefs* is now ``True``.

> *Changed in 3.14.1*: Added the *scripting* parameter.
