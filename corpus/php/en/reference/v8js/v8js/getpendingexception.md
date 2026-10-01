---
id: "en-php-function-v8js-getpendingexception"
language: "php"
lang: "en"
category: "function"
name: "V8Js::getPendingException"
title: "Return pending uncaught Javascript exception"
signature: "public V8JsException V8Js::getPendingException()"
module: "v8js"
source_url: "https://www.php.net/manual/en/v8js.getpendingexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return pending uncaught Javascript exception

## Description

```php
public V8JsException V8Js::getPendingException()
```

Returns any pending uncaught Javascript exception as `V8JsException` left from earlier `V8Js::executeString()` call(s).

## Parameters

This function has no parameters.

## Return Values

Either `V8JsException` or `null`.
