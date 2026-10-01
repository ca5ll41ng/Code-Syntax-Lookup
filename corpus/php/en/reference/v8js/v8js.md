---
id: "en-php-guide-class-v8js"
language: "php"
lang: "en"
category: "guide"
name: "class.v8js"
title: "The `V8Js` class"
module: "v8js"
source_url: "https://www.php.net/manual/en/class.v8js.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The `V8Js` class

V8Js

   Introduction  This is the core class for V8Js extension. Each instance created from this class has own context in which all JavaScript is compiled and executed.    See `V8Js::__construct()` for more information.      Class Synopsis   `V8Js`    `V8Js`      `const` `string` `V8Js::V8_VERSION`   `const` `int` `V8Js::FLAG_NONE` 1   `const` `int` `V8Js::FLAG_FORCE_ARRAY` 2          Predefined Constants 
- **`V8Js::V8_VERSION`** — The V8 Javascript Engine version.
- **`V8Js::FLAG_NONE`** — No flags.
- **`V8Js::FLAG_FORCE_ARRAY`** — Forces all JS objects to be associative arrays in PHP.
