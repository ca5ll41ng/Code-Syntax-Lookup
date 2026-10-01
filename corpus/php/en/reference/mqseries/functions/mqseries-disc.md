---
id: "en-php-function-function-mqseries-disc"
language: "php"
lang: "en"
category: "function"
name: "mqseries_disc"
title: "MQSeries MQDISC"
signature: "void mqseries_disc(resource $hconn, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-disc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQSeries MQDISC

## Description

```php
void mqseries_disc(resource $hconn, resource $compCode, resource $reason)
```

The `mqseries_disc()` (MQDISC) call breaks the connection between the queue manager and the application program, and is the inverse of the `mqseries_conn()` (MQCONN) or `mqseries_connx()` (MQCONNX) call.

## Parameters

- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## Examples

**`mqseries_disc()` example**

```php


<?php
    mqseries_disc($conn, $comp_code, $reason);
    if ($comp_code !== MQSERIES_MQCC_OK) {
        printf("disc CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
    }
?>

   
```

## See Also

 `mqseries_conn()` `mqseries_connx()`
