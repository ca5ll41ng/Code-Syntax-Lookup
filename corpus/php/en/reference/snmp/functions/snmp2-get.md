---
id: "en-php-function-function-snmp2-get"
language: "php"
lang: "en"
category: "function"
name: "snmp2_get"
title: "Fetch an SNMP object"
signature: "mixed snmp2_get(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp2-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch an SNMP object

## Description

```php
mixed snmp2_get(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)
```

The `snmp2_get()` function is used to read the value of an SNMP object specified by the `$object_id`.

## Parameters

- **`$hostname`** — The SNMP agent.
- **`$community`** — The read community.
- **`$object_id`** — The SNMP object.
- **`$timeout`** — The number of microseconds until the first timeout.
- **`$retries`** — The number of times to retry if timeouts occur.

## Return Values

Returns SNMP object value on success or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Now throws a ValueError when the hostname length is equal to or greater than 128 bytes, when the port is negative or greater than 65535, or when the timeout or retries values are lower than -1 or too large. |

## Examples

**Using `snmp2_get()`**

```php


<?php
$syscontact = snmp2_get("127.0.0.1", "public", "system.SysContact.0");
?>

   
```

## See Also

 `snmp2_set()`
