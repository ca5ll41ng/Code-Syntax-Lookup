---
id: "en-php-guide-book-enchant"
language: "php"
lang: "en"
category: "guide"
name: "book.enchant"
title: "Enchant spelling library"
module: "enchant"
source_url: "https://www.php.net/manual/en/book.enchant.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enchant spelling library

Enchant

 {{{ preface 

 Introduction  Enchant is the PHP binding for the [Enchant library](). Enchant steps in to provide uniformity and conformity on top of all spelling libraries, and implement certain features that may be lacking in any individual provider library. Everything should "just work" for any and every definition of "just working."    Enchant supports the following backends: 
- `Aspell/Pspell (intends to replace Ispell)`
- `Ispell (old as sin, could be interpreted as a defacto standard)`
- `MySpell/Hunspell (an OOo projects, also used by Mozilla)`
- `Uspell (primarily Yiddish, Hebrew, and Eastern European languages - hosted in AbiWord's CVS under the module "uspell")`
- `Hspell (Hebrew)`
- `AppleSpell (Mac OSX)`

   

 }}}
