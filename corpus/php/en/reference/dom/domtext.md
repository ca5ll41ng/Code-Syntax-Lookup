---
id: "en-php-guide-class-domtext"
language: "php"
lang: "en"
category: "guide"
name: "class.domtext"
title: "The DOMText class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domtext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMText class

DOMText

   Introduction  The `DOMText` class inherits from `DOMCharacterData` and represents the textual content of a `DOMElement` or `DOMAttr`.      Class Synopsis    `DOMText`   `extends` `DOMCharacterData`      `public` `readonly` `string` `wholeText`                Properties 
- **`wholeText`** — Holds all the text of logically-adjacent (not separated by Element, Comment or Processing Instruction) Text nodes.

    Changelog 
|  |  |
| --- | --- |
| 8.0.0 | The unimplemented method `DOMText::replaceWholeText()` has been removed. |
