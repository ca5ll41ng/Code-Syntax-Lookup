---
id: "en-php-function-function-wddx-deserialize"
language: "php"
lang: "en"
category: "function"
name: "wddx_deserialize"
title: "Unserializes a WDDX packet"
signature: "mixed wddx_deserialize(string $packet)"
module: "wddx"
source_url: "https://www.php.net/manual/en/function.wddx-deserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unserializes a WDDX packet

## Description

```php
mixed wddx_deserialize(string $packet)
```

Unserializes a WDDX `$packet`.

> Do not pass untrusted user input to `wddx_deserialize()`. Unserialization can result in code being loaded and executed due to object instantiation and autoloading, and a malicious user may be able to exploit this. Use a safe, standard data interchange format such as JSON (via `json_decode()` and `json_encode()`) if you need to pass serialized data to the user.

## Parameters

- **`$packet`** — A WDDX packet, as a string or stream.

## Return Values

Returns the deserialized value which can be a string, a number or an array. Note that structures are deserialized into associative arrays.
