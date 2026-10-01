---
id: "en-php-guide-class-normalizer"
language: "php"
lang: "en"
category: "guide"
name: "class.normalizer"
title: "The Normalizer class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.normalizer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The Normalizer class

Normalizer

   Introduction  Normalization is a process that involves transforming characters and sequences of characters into a formally-defined underlying representation. This process is most important when text needs to be compared for sorting and searching, but it is also used when storing text to ensure that the text is stored in a consistent representation.    The Unicode Consortium has defined a number of normalization forms reflecting the various needs of applications:  Normalization Form D (NFD) - Canonical Decomposition  Normalization Form C (NFC) - Canonical Decomposition followed by Canonical Composition   Normalization Form KD (NFKD) - Compatibility Decomposition   Normalization Form KC (NFKC) - Compatibility Decomposition followed by Canonical Composition   The different forms are defined in terms of a set of transformations on the text, transformations that are expressed by both an algorithm and a set of data files.      Class Synopsis    `Normalizer`    `public` `const` `int` `Normalizer::FORM_D`   `public` `const` `int` `Normalizer::NFD`   `public` `const` `int` `Normalizer::FORM_KD`   `public` `const` `int` `Normalizer::NFKD`   `public` `const` `int` `Normalizer::FORM_C`   `public` `const` `int` `Normalizer::NFC`   `public` `const` `int` `Normalizer::FORM_KC`   `public` `const` `int` `Normalizer::NFKC`   `public` `const` `int` `Normalizer::FORM_KC_CF`   `public` `const` `int` `Normalizer::NFKC_CF`          See Also    [Unicode Normalization]()   [Unicode Normalization FAQ]()   [ICU User Guide - Normalization]()   [ICU API Reference - Normalization]()       Changelog 
|  |  |
| --- | --- |
| 8.4.0 | The class constants are now typed. |
| 8.0.0 | `Normalizer::NONE` has been removed. |
