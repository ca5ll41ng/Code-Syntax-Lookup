---
id: "en-php-function-function-eio-init"
language: "php"
lang: "en"
category: "function"
name: "eio_init"
title: "(Re-)initialize Eio"
signature: "void eio_init()"
module: "eio"
source_url: "https://www.php.net/manual/en/function.eio-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# (Re-)initialize Eio

## Description

```php
void eio_init()
```

`eio_init()` (re-)initializes Eio. It allocates memory for internal structures of libeio and Eio itself. You may call `eio_init()` before using Eio functions. Otherwise it will be called internally first time you invoke an Eio function in a process.

> This function was removed in version 3.0.0RC1 of the eio extension for PHP version 8 and higher.

## Parameters

This function has no parameters.

## Return Values

No value is returned.
