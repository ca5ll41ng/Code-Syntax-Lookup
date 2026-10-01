---
id: "en-php-guide-class-dom-document"
language: "php"
lang: "en"
category: "guide"
name: "class.dom-document"
title: "The Dom\\Document class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.dom-document.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\Document class

Dom\Document

    This is the modern, spec-compliant equivalent of `DOMDocument`. It is the base class for `Dom\XMLDocument` and `Dom\HTMLDocument`.     Class Synopsis   `abstract` `Dom\Document`   `extends` `Dom\Node`   `implements` Dom\ParentNode      `public` `readonly` `Dom\Implementation` `implementation`   `public` `string` `URL`   `public` `string` `documentURI`   `public` `string` `characterSet`   `public` `string` `charset`   `public` `string` `inputEncoding`   `public` `readonly` `Dom\DocumentType|null` `doctype`   `public` `readonly` `Dom\Element|null` `documentElement`   `public` `readonly` `Dom\Element|null` `firstElementChild`   `public` `readonly` `Dom\Element|null` `lastElementChild`   `public` `readonly` `int` `childElementCount`   `public` `readonly` `Dom\HTMLCollection` `children`   `public` `Dom\HTMLElement|null` `body`   `public` `readonly` `Dom\HTMLElement|null` `head`   `public` `string` `title`     Not documented yet   Not documented yet     Properties 
- ****
- ****
- **`URL`** — Equivalent to `documentURI`.
- **`characterSet`** — The encoding of the document used for serialization. Upon parsing a document, this is set to the input encoding of that document.
- **`inputEncoding`** — Legacy alias for `characterSet`.
- **`charset`** — Legacy alias for `characterSet`.
- ****
- **`documentElement`** — The `Dom\Element` that is the document element. This evaluates to `null` for document without elements.
- ****
- ****
- ****
- ****
- **`body`** — The first child of the `html` element that is either a `body` tag or a `frameset` tag. These need to be in the HTML namespace. If no element matches, this evaluates to `null`.
- **`head`** — The first `head` element that is a child of the `html` element. These need to be in the HTML namespace. If no element matches, this evaluates to `null`.
- **`title`** — The title of the document as set by the `title` element for HTML or the SVG `title` element for SVG. If there is no title, this evaluates to the empty string.
