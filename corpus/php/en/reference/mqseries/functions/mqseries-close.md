---
id: "en-php-function-function-mqseries-close"
language: "php"
lang: "en"
category: "function"
name: "mqseries_close"
title: "MQSeries MQCLOSE"
signature: "void mqseries_close(resource $hconn, resource $hobj, int $options, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQSeries MQCLOSE

## Description

```php
void mqseries_close(resource $hconn, resource $hobj, int $options, resource $compCode, resource $reason)
```

The `mqseries_close()` (MQCLOSE) call relinquishes access to an object, and is the inverse of the `mqseries_open()` (MQOPEN) call.

## Parameters

- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$hObj`** — Object handle. — This handle represents the object to be used.
- **`$options`**
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## Examples

**`mqseries_close()` example**

```php


<?php
    mqseries_close($conn, $obj, MQSERIES_MQCO_NONE, $comp_code, $reason);
    if ($comp_code !== MQSERIES_MQCC_OK) {
        printf("close CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
    }
?>

   
```

## See Also

 `mqseries_open()` `mqseries_conn()` `mqseries_connx()`
