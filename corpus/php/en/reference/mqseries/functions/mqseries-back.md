---
id: "en-php-function-function-mqseries-back"
language: "php"
lang: "en"
category: "function"
name: "mqseries_back"
title: "MQSeries MQBACK"
signature: "void mqseries_back(resource $hconn, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-back.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQSeries MQBACK

## Description

```php
void mqseries_back(resource $hconn, resource $compCode, resource $reason)
```

The `mqseries_back()` (MQBACK) call indicates to the queue manager that all the message gets and puts that have occurred since the last syncpoint are to be backed out. Messages put as part of a unit of work are deleted; messages retrieved as part of a unit of work are reinstated on the queue.

Using `mqseries_back()` only works in conjunction with `mqseries_begin()` and only function when connecting directly to a Queueu manager. Not via the mqclient interface.

## Parameters

- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## Examples

**`mqseries_back()` example**

```php


<?php
    mqseries_back($conn, $comp_code, $reason);

    if ($comp_code !== MQSERIES_MQCC_OK) {
        printf("CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
    }
?>

   
```

## Notes

> `mqseries_back()` will not function when using MQSeries Client to connect to a Queueu Manager.

## See Also

 `mqseries_conn()` `mqseries_connx()` `mqseries_begin()`
