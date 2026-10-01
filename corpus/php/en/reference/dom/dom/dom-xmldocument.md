---
id: "en-php-guide-class-dom-xmldocument"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-xmldocument"
title: "The Dom\\XMLDocument class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-xmldocument.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\XMLDocument class

Dom\XMLDocument

  Introduction  Represents an XML document.     Class Synopsis   `final` `Dom\XMLDocument`   `extends` `Dom\Document`      `public` `readonly` `string` `xmlEncoding`   `public` `bool` `xmlStandalone`   `public` `string` `xmlVersion`   `public` `bool` `formatOutput`      Not documented yet   Not documented yet      Properties 
> While the `DOMDocument` class allows setting certain properties to influence parser behaviour, this class only uses the `LIBXML_{*}` constants to configure the parser.

 
- ****
- ****
- ****
- **`formatOutput`** — Nicely formats output with indentation and extra space.

   Notes 
> The DOM extension uses UTF-8 encoding when working with methods or properties. The parser methods auto-detect the encoding or allow the caller to specify an encoding.
