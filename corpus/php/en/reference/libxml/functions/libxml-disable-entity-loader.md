---
id: "en-php-function-function-libxml-disable-entity-loader"
language: "php"
lang: "en"
category: "function"
name: "libxml_disable_entity_loader"
title: "Disable the ability to load external entities"
signature: "#[\\Deprecated(since: '8.0', message: 'as external entity loading is disabled by default')] bool libxml_disable_entity_loader(bool $disable = true)"
module: "libxml"
source_url: "https://www.php.net/manual/en/function.libxml-disable-entity-loader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Disable the ability to load external entities

## Description

```php
#[\Deprecated(since: '8.0', message: 'as external entity loading is disabled by default')] bool libxml_disable_entity_loader(bool $disable = true)
```

Disable/enable the ability to load external entities. Note that disabling the loading of external entities may cause general issues with loading XML documents.

As of libxml 2.9.0 entity substitution is disabled by default, so there is no need to disable the loading of external entities, unless there is the need to resolve internal entity references with `LIBXML_NOENT`, `LIBXML_DTDVALID`, or `LIBXML_DTDLOAD`. Generally, it is preferable to use `libxml_set_external_entity_loader()` to suppress loading of external entities. The `LIBXML_NO_XXE` constant can be used to prevent this as well (only available in Libxml >= 2.13.0, as of PHP 8.4.0).

## Parameters

- **`$disable`** — Disable (`true`) or enable (`false`) libxml extensions (such as `book.dom`, `book.xmlwriter` and `book.xmlreader`) to load external entities.

## Return Values

Returns the previous value.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been deprecated. |

## See Also

`libxml_use_internal_errors()` `libxml_set_external_entity_loader()` The `LIBXML_NOENT` constant The `LIBXML_DTDVALID` constant The `LIBXML_NO_XXE` constant
