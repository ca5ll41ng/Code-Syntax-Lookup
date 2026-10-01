---
id: "en-php-guide-book-luasandbox"
language: "php"
lang: "en"
category: "guide"
name: "book.luasandbox"
title: "LuaSandbox"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/book.luasandbox.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# LuaSandbox

LuaSandbox

 Introduction  LuaSandbox is an extension for PHP 7 and PHP 8 to allow safely running untrusted Lua 5.1 code from within PHP.    Differences compared to the Lua extension: 
- LuaSandbox has support for time and memory limits.
- LuaSandbox provides a default-safe environment for running untrusted code. Stock Lua functions were reviewed for security, and several were patched accordingly.
- LuaSandbox has a PHP interface which is more complex, precise and powerful, but it is less convenient for developers.
- LuaSandbox supports only Lua 5.1. It is difficult to change this, because LuaSandbox uses heavily modified Lua standard libraries, and due to the lack of backwards compatibility between major Lua versions. LuaSandbox aims to maximise backwards compatibility with user-supplied scripts.
