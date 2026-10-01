---
id: "en-php-guide-book-wddx"
language: "php"
lang: "en"
category: "guide"
name: "book.wddx"
title: "WDDX"
module: "wddx"
source_url: "https://www.php.net/manual/en/book.wddx.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# WDDX

{{{ preface 

 Introduction 
> This extension is *DEPRECATED* and *UNBUNDLED* as of PHP 7.4.0.

  These functions are intended for work with [WDDX]().   
> Do not pass untrusted user input to `wddx_deserialize()`. Unserialization can result in code being loaded and executed due to object instantiation and autoloading, and a malicious user may be able to exploit this. Use a safe, standard data interchange format such as JSON (via `json_decode()` and `json_encode()`) if you need to pass serialized data to the user.

 

 }}}
