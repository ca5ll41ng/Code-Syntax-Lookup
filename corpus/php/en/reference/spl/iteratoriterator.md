---
id: "en-php-guide-class-iteratoriterator"
language: "php"
lang: "en"
category: "guide"
name: "class.iteratoriterator"
title: "The IteratorIterator class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.iteratoriterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The IteratorIterator class

IteratorIterator

  Introduction  This iterator wrapper allows the conversion of anything that is Traversable into an Iterator. It is important to understand that most classes that do not implement Iterators have reasons as most likely they do not allow the full Iterator feature set. If so, techniques should be provided to prevent misuse, otherwise expect exceptions or fatal errors.     Class Synopsis   `IteratorIterator`   `implements` OuterIterator        Notes 
> This class permits access to methods of the inner iterator via the __call magic method.
