---
id: "en-php-function-function-snmp2-getnext"
language: "php"
lang: "en"
category: "function"
name: "snmp2_getnext"
title: "Fetch the SNMP object which follows the given object id"
signature: "mixed snmp2_getnext(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp2-getnext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch the SNMP object which follows the given object id

## Description

```php
mixed snmp2_getnext(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)
```

The `snmp2_getnext()` function is used to read the value of the SNMP object that follows the specified `$object_id`.

## Parameters

- **`$hostname`** — The hostname of the SNMP agent (server).
- **`$community`** — The read community.
- **`$object_id`** — The SNMP object id which precedes the wanted one.
- **`$timeout`** — The number of microseconds until the first timeout.
- **`$retries`** — The number of times to retry if timeouts occur.

## Return Values

Returns SNMP object value on success or `false` on error. In case of an error, an E_WARNING message is shown.

## Examples

**Using `snmp2_getnext()`**

```php


<?php
$nameOfSecondInterface = snmp2_getnext('localhost', 'public', 'IF-MIB::ifName.1');
?>

   
```

## See Also

 `snmp2_get()` `snmp2_walk()`
