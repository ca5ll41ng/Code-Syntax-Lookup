---
id: "en-php-function-function-libxml-get-external-entity-loader"
language: "php"
lang: "en"
category: "function"
name: "libxml_get_external_entity_loader"
title: "Get the current external entity loader"
signature: "callable|null libxml_get_external_entity_loader()"
module: "libxml"
source_url: "https://www.php.net/manual/en/function.libxml-get-external-entity-loader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the current external entity loader

## Description

 {{{ 

```php
callable|null libxml_get_external_entity_loader()
```

Get external entity loader previously installed by `libxml_set_external_entity_loader()`.

 }}} 

## Parameters

This function has no parameters.

## Return Values

 {{{ 

The external entity loader previously installed by `libxml_set_external_entity_loader()`. If that function was never called, or if it was called with `null`, `null` will be returned.

 }}} 

## See Also

 {{{ 

 `libxml_set_external_entity_loader()` 

 }}}
