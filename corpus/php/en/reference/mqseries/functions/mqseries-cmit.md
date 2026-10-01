---
id: "en-php-function-function-mqseries-cmit"
language: "php"
lang: "en"
category: "function"
name: "mqseries_cmit"
title: "MQSeries MQCMIT"
signature: "void mqseries_cmit(resource $hconn, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-cmit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQSeries MQCMIT

## Description

```php
void mqseries_cmit(resource $hconn, resource $compCode, resource $reason)
```

The `mqseries_cmit()` (MQCMIT) call indicates to the queue manager that the application has reached a syncpoint, and that all of the message gets and puts that have occurred since the last syncpoint are to be made permanent. Messages put as part of a unit of work are made available to other applications; messages retrieved as part of a unit of work are deleted.

## Parameters

- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## Examples

**`mqseries_cmit()` example**

```php


<?php
    mqseries_cmit($conn, $comp_code, $reason);
    if ($comp_code !== MQSERIES_MQCC_OK) {
        printf("cmit CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
    }
?>

   
```

## Notes

> `mqseries_back()` will not function when using MQSeries Client to connect to a Queueu Manager.

## See Also

 `mqseries_begin()` `mqseries_back()` `mqseries_conn()` `mqseries_connx()`
