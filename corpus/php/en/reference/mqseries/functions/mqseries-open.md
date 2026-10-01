---
id: "en-php-function-function-mqseries-open"
language: "php"
lang: "en"
category: "function"
name: "mqseries_open"
title: "MQSeries MQOPEN"
signature: "void mqseries_open(resource $hconn, array $objDesc, int $option, resource $hobj, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQSeries MQOPEN

## Description

```php
void mqseries_open(resource $hconn, array $objDesc, int $option, resource $hobj, resource $compCode, resource $reason)
```

The `mqseries_open()` (MQOPEN) call establishes access to an object.

## Parameters

- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$objDesc`** — Object descriptor. (MQOD)
- **`$options`** — Options that control the action of the function.
- **`$hObj`** — Object handle. — This handle represents the object to be used.
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## Examples

**`mqseries_open()` example**

```php


<?php
    $mqods = array('ObjectName' => 'TESTQ');
    mqseries_open(
                $conn,
                $mqods,
                MQSERIES_MQOO_INPUT_AS_Q_DEF | MQSERIES_MQOO_FAIL_IF_QUIESCING | MQSERIES_MQOO_OUTPUT,
                $obj,
                $comp_code,
                $reason);
    if ($comp_code !== MQSERIES_MQCC_OK) {
        printf("open CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
        exit;
    }
?>

   
```

## See Also

 `mqseries_close()`
