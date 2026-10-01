---
id: "en-php-function-function-mqseries-conn"
language: "php"
lang: "en"
category: "function"
name: "mqseries_conn"
title: "MQSeries MQCONN"
signature: "void mqseries_conn(string $qManagerName, resource $hconn, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-conn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQSeries MQCONN

## Description

```php
void mqseries_conn(string $qManagerName, resource $hconn, resource $compCode, resource $reason)
```

The `mqseries_conn()` (MQCONN) call connects an application program to a queue manager. It provides a queue manager connection handle, which is used by the application on subsequent message queuing calls.

## Parameters

- **`$qManagerName`** — Name of queue manager. — Name of the queue manager the application wishes to connect.
- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## Examples

**`mqseries_conn()` example**

```php


<?php
    mqseries_conn('WMQ1', $conn, $comp_code, $reason);
    if ($comp_code !== MQSERIES_MQCC_OK) {
        printf("conn CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
        exit;
    }
?>

   
```

## See Also

 `mqseries_disc()`
