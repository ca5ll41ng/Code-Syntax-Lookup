---
id: "en-php-function-snmp-geterrno"
language: "php"
lang: "en"
category: "function"
name: "SNMP::getErrno"
title: "Get last error code"
signature: "public int SNMP::getErrno()"
module: "snmp"
source_url: "https://www.php.net/manual/en/snmp.geterrno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get last error code

## Description

```php
public int SNMP::getErrno()
```

Returns error code from last SNMP request.

## Parameters

This function has no parameters.

## Return Values

Returns one of SNMP error code values described in constants chapter.

## Examples

**`SNMP::getErrno()` example**

```php


<?php
$session = new SNMP(SNMP::VERSION_2c, '127.0.0.1', 'boguscommunity');
var_dump(@$session->get('.1.3.6.1.2.1.1.1.0'));
var_dump($session->getErrno() == SNMP::ERRNO_TIMEOUT);
?>

   
```

The above example will output:

```text


bool(false)
bool(true)

   
```

## See Also

 `SNMP::getError()`
