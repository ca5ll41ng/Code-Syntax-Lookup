---
id: "en-php-function-function-yaz-es-result"
language: "php"
lang: "en"
category: "function"
name: "yaz_es_result"
title: "Inspects Extended Services Result"
signature: "array yaz_es_result(resource $id)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-es-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inspects Extended Services Result

## Description

```php
array yaz_es_result(resource $id)
```

This function inspects the last returned Extended Service result from a server. An Extended Service is initiated by either `yaz_item_order()` or `yaz_es()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.

## Return Values

Returns array with element `targetReference` for the reference for the extended service operation (generated and returned from the server).

## See Also

`yaz_es()`
