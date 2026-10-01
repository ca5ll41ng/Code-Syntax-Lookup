---
id: "en-php-guide-class-domexception"
language: "php"
lang: "en"
category: "guide"
name: "class.domexception"
title: "The DOMException / Dom\\Exception class"
module: "dom"
source_url: "https://www.php.net/manual/en/class.domexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The DOMException / Dom\Exception class

DOMException

   Introduction  DOM operations raise exceptions under particular circumstances, i.e., when an operation is impossible to perform for logical reasons.    This class is aliased as `Dom\Exception` in the Dom namespace.    See also `language.exceptions`.      Class Synopsis    `final` DOMException   `extends` `Exception`    `public` `int` `code`            Properties 
- **`code`** — An integer indicating the type of error generated
