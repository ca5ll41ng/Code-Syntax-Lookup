---
id: "en-php-guide-enum-dom-adjacentposition"
language: "php"
lang: "en"
category: "guide"
name: "enum.dom-adjacentposition"
title: "The Dom\\AdjacentPosition Enum"
module: "dom"
source_url: "https://www.php.net/manual/en/enum.dom-adjacentposition.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Dom\AdjacentPosition Enum

Dom\AdjacentPosition

  Introduction  The `AdjacentPosition` enum is used to specify where, relative to the context element, insertion should be performed using `Dom\Element::insertAdjacentElement()` or `Dom\Element::insertAdjacentText()`.       `AdjacentPosition`  BeforeBegin  Insert before the context element. This is only possible if the element is in a document and has a parent.    AfterBegin  Insert before the first child of the context element.    BeforeEnd  Insert after the last child of the context element.    AfterEnd  Insert after the context element. This is only possible if the element is in a document and has a parent.
