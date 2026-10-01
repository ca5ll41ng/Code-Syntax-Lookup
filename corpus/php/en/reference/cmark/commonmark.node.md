---
id: "en-php-guide-class-commonmark-node"
language: "php"
lang: "en"
category: "guide"
name: "class.commonmark-node"
title: "Abstract CommonMark\\Node"
module: "cmark"
source_url: "https://www.php.net/manual/en/class.commonmark-node.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Abstract CommonMark\Node

CommonMark\Node

   Introduction  Represents an Abstract Node, this final abstract is not for direct use by the programmer.      Class Synopsis   `CommonMark\Node`    `final` `abstract` `CommonMark\Node`   CommonMark\Interfaces\IVisitable   Traversable      `public` `readonly` `Node|null` `parent`   `public` `readonly` `Node|null` `previous`   `public` `readonly` `Node|null` `next`   `public` `readonly` `Node|null` `lastChild`   `public` `readonly` `Node|null` `firstChild`   `public` `readonly` `int` `startLine`   `public` `readonly` `int` `endLine`   `public` `readonly` `int` `startColumn`   `public` `readonly` `int` `endColumn`
