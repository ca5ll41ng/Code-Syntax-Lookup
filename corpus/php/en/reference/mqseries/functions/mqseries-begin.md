---
id: "en-php-function-function-mqseries-begin"
language: "php"
lang: "en"
category: "function"
name: "mqseries_begin"
title: "MQseries MQBEGIN"
signature: "void mqseries_begin(resource $hconn, array $beginOptions, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-begin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQseries MQBEGIN

## Description

```php
void mqseries_begin(resource $hconn, array $beginOptions, resource $compCode, resource $reason)
```

The `mqseries_begin()` (MQBEGIN) call begins a unit of work that is coordinated by the queue manager, and that may involve external resource managers.

Using `mqseries_begin()` starts the unit of work. Either `mqseries_back()` or `mqseries_cmit()` ends the unit of work.

## Parameters

- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## Examples

**`mqseries_begin()` example**

```php


<?php
    $mqbo = array();
    mqseries_begin( $conn,
                    $mqbo,
                    $comp_code,
                    $reason);
    if ($comp_code !== MQSERIES_MQCC_OK) {
        /* reason code 2121 is a warning for more information see MQSeries reference manual.*/
        if ($reason !== 2121) {
            printf("CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
        }
    }
?>

   
```

## Notes

> `mqseries_begin()` will not function when using MQSeries Client to connect to a Queueu Manager.

## See Also

 `mqseries_conn()` `mqseries_connx()` `mqseries_back()` `mqseries_cmit()`
