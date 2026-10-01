---
id: "en-php-function-snmp-geterror"
language: "php"
lang: "en"
category: "function"
name: "SNMP::getError"
title: "Get last error message"
signature: "public string SNMP::getError()"
module: "snmp"
source_url: "https://www.php.net/manual/en/snmp.geterror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get last error message

## Description

```php
public string SNMP::getError()
```

Returns string with error from last SNMP request.

## Parameters

This function has no parameters.

## Return Values

String describing error from last SNMP request.

## Examples

**`SNMP::getError()` example**

```php


<?php
$session = new SNMP(SNMP::VERSION_2c, '127.0.0.1', 'boguscommunity');
var_dump(@$session->get('.1.3.6.1.2.1.1.1.0'));
var_dump($session->getError());
?>

   
```

The above example will output:

```text


bool(false)
string(26) "No response from 127.0.0.1"

   
```

## See Also

 `SNMP::getErrno()`
