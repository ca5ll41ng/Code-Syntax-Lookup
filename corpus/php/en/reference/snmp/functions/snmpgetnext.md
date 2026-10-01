---
id: "en-php-function-function-snmpgetnext"
language: "php"
lang: "en"
category: "function"
name: "snmpgetnext"
title: "Fetch the SNMP object which follows the given object id"
signature: "mixed snmpgetnext(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmpgetnext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch the SNMP object which follows the given object id

## Description

```php
mixed snmpgetnext(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)
```

The `snmpgetnext()` function is used to read the value of the SNMP object that follows the specified `$object_id`.

## Parameters

- **`$hostname`** — The hostname of the SNMP agent (server).
- **`$community`** — The read community.
- **`$object_id`** — The SNMP object id which precedes the wanted one.
- **`$timeout`** — The number of microseconds until the first timeout.
- **`$retries`** — The number of times to retry if timeouts occur.

## Return Values

Returns SNMP object value on success or `false` on error. In case of an error, an E_WARNING message is shown.

## Examples

**Using `snmpgetnext()`**

```php


<?php
$nameOfSecondInterface = snmpgetnext('localhost', 'public', 'IF-MIB::ifName.1');
?>

   
```

## See Also

 `snmpget()` `snmpwalk()`
