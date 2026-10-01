---
id: "en-php-function-function-mqseries-strerror"
language: "php"
lang: "en"
category: "function"
name: "mqseries_strerror"
title: "Returns the error message corresponding to a result code (MQRC)"
signature: "string mqseries_strerror(int $reason)"
module: "mqseries"
source_url: "https://www.php.net/manual/en/function.mqseries-strerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the error message corresponding to a result code (MQRC)

## Description

```php
string mqseries_strerror(int $reason)
```

`mqseries_strerror()` returns the message that correspond to the reason result code.

## Parameters

- **`$reason`** — Reason code qualifying the compCode.

## Return Values

string representation of the reason code message.

## Examples

**`mqseries_strerror()` example**

```php


<?php
    if ($comp_code !== MQSERIES_MQCC_OK) {
        printf("open CompCode:%d Reason:%d Text:%s<br>\n", $comp_code, $reason, mqseries_strerror($reason));
        exit;
    }
?>

   
```

The above example will output:

```text


Connx CompCode:2 Reason:2059 Text:Queue manager not available for connection.

   
```
