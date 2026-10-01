---
id: "python-en-function-html-parser-htmlparser-handle_starttag"
language: "python"
lang: "en"
category: "function"
name: "HTMLParser.handle_starttag"
signature: "HTMLParser.handle_starttag(tag, attrs)"
directive: "method"
module: "html.parser"
source_url: "https://docs.python.org/3/library/html.parser.html#html.parser.HTMLParser.handle_starttag"
license: "PSF"
updated: "2026-10-01"
---

# HTMLParser.handle_starttag

This method is called to handle the start tag of an element (e.g. `<div id="main">`).

The *tag* argument is the name of the tag converted to lower case. The *attrs*
argument is a list of `(name, value)` pairs containing the attributes found
inside the tag's `<>` brackets.  The *name* will be translated to lower case,
and quotes in the *value* have been removed, and character and entity references
have been replaced.  For empty attributes, *value* is `None`.

For instance, for the tag `<A HREF="https://www.cwi.nl/">`, this method
would be called as `handle_starttag('a', [('href', 'https://www.cwi.nl/')])`.

All entity references from `html.entities` are replaced in the attribute
values.
