---
id: "en-php-guide-class-regexiterator"
language: "php"
lang: "en"
category: "guide"
name: "class.regexiterator"
title: "The RegexIterator class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.regexiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The RegexIterator class

RegexIterator

   Introduction  This iterator can be used to filter another iterator based on a regular expression.      Class Synopsis    `RegexIterator`   `extends` `FilterIterator`    `public` `const` `int` `RegexIterator::USE_KEY`   `public` `const` `int` `RegexIterator::INVERT_MATCH`   `public` `const` `int` `RegexIterator::MATCH`   `public` `const` `int` `RegexIterator::GET_MATCH`   `public` `const` `int` `RegexIterator::ALL_MATCHES`   `public` `const` `int` `RegexIterator::SPLIT`   `public` `const` `int` `RegexIterator::REPLACE`    `public` `string|null` `replacement` null           Predefined Constants  RegexIterator operation modes 
- **`RegexIterator::ALL_MATCHES`** — Return all matches for the current entry (see `preg_match_all()`).
- **`RegexIterator::GET_MATCH`** — Return the first match for the current entry (see `preg_match()`).
- **`RegexIterator::MATCH`** — Only execute match (filter) for the current entry (see `preg_match()`).
- **`RegexIterator::REPLACE`** — Replace the current entry (see `preg_replace()`; Not fully implemented yet)
- **`RegexIterator::SPLIT`** — Returns the split values for the current entry (see `preg_split()`).

   RegexIterator Flags 
- **`RegexIterator::USE_KEY`** — Special flag: Match the entry key instead of the entry value.
- **`RegexIterator::INVERT_MATCH`** — Inverts the return value of `RegexIterator::accept()`.

    Properties 
- **`replacement`**

    Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
