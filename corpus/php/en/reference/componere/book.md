---
id: "en-php-guide-book-componere"
language: "php"
lang: "en"
category: "guide"
name: "book.componere"
title: "Componere"
module: "componere"
source_url: "https://www.php.net/manual/en/book.componere.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Componere

Componere

 Introduction  Componere (latin, English: compose) targets production environments and provides an API for composition of classes, monkey patching, and casting.    Composition:  `Componere\Definition` is used to define (or redefine) a class at runtime; The class can then be registered, and in the case of redefinition it replaces the original class for as long as the `Componere\Definition` exists.      Patching:  `Componere\Patch` is used to change the class of a specific instance of an object at runtime; Upon application the patch will remain applied for as long as the `Componere\Patch` exists, and can be reverted explicitly.      Casting:  `Componere\` casting functions can cast among user defined compatible types; Where compatible means `Type` is sub or super to the type of `$object`.
