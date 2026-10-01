---
id: "en-php-function-function-mqseries-set"
language: "php"
lang: "en"
category: "function"
name: "mqseries_set"
title: "MQSeries MQSET"
signature: "void mqseries_set(resource $hConn, resource $hObj, int $selectorCount, array $selectors, int $intAttrCount, array $intAttrs, int $charAttrLength, array $charAttrs, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQSeries MQSET

## Description

```php
void mqseries_set(resource $hConn, resource $hObj, int $selectorCount, array $selectors, int $intAttrCount, array $intAttrs, int $charAttrLength, array $charAttrs, resource $compCode, resource $reason)
```

The `mqseries_set()` (MQSET) call is used to change the attributes of an object represented by a handle. The object must be a queue.

## Parameters

- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$hObj`** — Object handle. — This handle represents the object to be used.
- **`$selectorCount`** — Count of selectors.
- **`$selectors`** — Array of attribute selectors.
- **`$intAttrCount`** — Count of integer attributes.
- **`$intAttrs`** — Array of integer attributes.
- **`$charAttrLength`** — Length of character attributes buffer.
- **`$charAttrs`** — Character attributes.
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## See Also

 `mqseries_inq()`
