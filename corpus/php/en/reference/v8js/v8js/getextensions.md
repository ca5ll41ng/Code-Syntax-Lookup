---
id: "en-php-function-v8js-getextensions"
language: "php"
lang: "en"
category: "function"
name: "V8Js::getExtensions"
title: "Return an array of registered extensions"
signature: "public static array V8Js::getExtensions()"
module: "v8js"
source_url: "https://www.php.net/manual/en/v8js.getextensions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return an array of registered extensions

## Description

```php
public static array V8Js::getExtensions()
```

This function returns array of Javascript extensions registered using `V8Js::registerExtension()`.

## Parameters

This function has no parameters.

## Return Values

Returns an array of registered extensions or an empty array if there are none.
