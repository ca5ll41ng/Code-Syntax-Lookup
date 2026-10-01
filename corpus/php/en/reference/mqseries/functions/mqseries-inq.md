---
id: "en-php-function-function-mqseries-inq"
language: "php"
lang: "en"
category: "function"
name: "mqseries_inq"
title: "MQSeries MQINQ"
signature: "void mqseries_inq(resource $hconn, resource $hobj, int $selectorCount, array $selectors, int $intAttrCount, resource $intAttr, int $charAttrLength, resource $charAttr, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-inq.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQSeries MQINQ

## Description

```php
void mqseries_inq(resource $hconn, resource $hobj, int $selectorCount, array $selectors, int $intAttrCount, resource $intAttr, int $charAttrLength, resource $charAttr, resource $compCode, resource $reason)
```

The `mqseries_inq()` (MQINQ) call returns an array of integers and a set of character strings containing the attributes of an object.

## Parameters

- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$hObj`** — Object handle. — This handle represents the object to be used.
- **`$selectorCount`** — Count of selectors.
- **`$selectors`** — Array of attribute selectors.
- **`$intAttrLength`** — Count of integer attributes.
- **`$intAttr`** — Array of integer attributes.
- **`$charAttrLength`** — Length of character attributes buffer.
- **`$charAttr`** — Character attributes.
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## Examples

**`mqseries_inq()` example**

```php


<?php
    $int_attr = array();
    $char_attr = "";

    mqseries_inq($conn, $obj, 1, array(MQSERIES_MQCA_Q_MGR_NAME), 0, $int_attr, 48, $char_attr, $comp_code, $reason);

    if ($comp_code !== MQSERIES_MQCC_OK) {
        printf("INQ CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
    } else {
        echo "INQ QManager name result ".$char_attr."<br>\n";
    }
?>

   
```

## See Also

 `mqseries_conn()` `mqseries_connx()` `mqseries_open()`
