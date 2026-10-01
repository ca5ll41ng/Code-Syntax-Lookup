---
id: "en-php-guide-book-mhash"
language: "php"
lang: "en"
category: "guide"
name: "book.mhash"
title: "Mhash"
module: "mhash"
source_url: "https://www.php.net/manual/en/book.mhash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Mhash

{{{ preface 

 Introduction  These functions are intended to work with [mhash](). Mhash can be used to create checksums, message digests, message authentication codes, and more.    This is an interface to the mhash library. Mhash supports a wide variety of hash algorithms such as MD5, SHA1, GOST, and many others. For a complete list of supported hashes, refer to the constants page. The general rule is that you can access the hash algorithm from PHP with `MHASH_hashname`. For example, to access TIGER you use the PHP constant `MHASH_TIGER`.   
> This extension is obsoleted by Hash.

 
> As of PHP 7.0.0 the Mhash extension has been fully integrated into the Hash extension. Therefore, it is no longer possible to detect Mhash support with `extension_loaded()`; use `function_exists()` instead. Furthermore, Mhash is no longer reported by `get_loaded_extensions()` and related features.

 

 }}}
