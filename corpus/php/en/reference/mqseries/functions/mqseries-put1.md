---
id: "en-php-function-function-mqseries-put1"
language: "php"
lang: "en"
category: "function"
name: "mqseries_put1"
title: "MQSeries MQPUT1"
signature: "void mqseries_put1(resource $hconn, resource $objDesc, resource $msgDesc, resource $pmo, string $buffer, resource $compCode, resource $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-put1.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MQSeries MQPUT1

## Description

```php
void mqseries_put1(resource $hconn, resource $objDesc, resource $msgDesc, resource $pmo, string $buffer, resource $compCode, resource $reason)
```

The `mqseries_put1()` (MQPUT1) call puts one message on a queue. The queue need not be open.

You can use both the `mqseries_put()` and `mqseries_put1()` calls to put messages on a queue; which call to use depends on the circumstances. Use the `mqseries_put()` (MQPUT) call to place multiple messages on the same queue. Use the `mqseries_put1()` (MQPUT1) call to put only one message on a queue. This call encapsulates the MQOPEN, MQPUT, and MQCLOSE calls into a single call, minimizing the number of calls that must be issued.

## Parameters

- **`$hConn`** — Connection handle. — This handle represents the connection to the queue manager.
- **`$objDesc`** — Object descriptor. (MQOD) — This is a structure which identifies the queue to which the message is added.
- **`$msgDesc`** — Message descriptor (MQMD).
- **`$pmo`** — Put message options (MQPMO).
- **`$compCode`** — Completion code.
- **`$reason`** — Reason code qualifying the compCode.

## Return Values

No value is returned.

## See Also

 `mqseries_conn()` `mqseries_connx()` `mqseries_open()` `mqseries_get()`
