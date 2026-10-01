---
id: "en-php-function-function-snmp2-real-walk"
language: "php"
lang: "en"
category: "function"
name: "snmp2_real_walk"
title: "Return all objects including their respective object ID within the specified one"
signature: "array|false snmp2_real_walk(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp2-real-walk.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return all objects including their respective object ID within the specified one

## Description

```php
array|false snmp2_real_walk(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)
```

The `snmp2_real_walk()` function is used to traverse over a number of SNMP objects starting from `$object_id` and return not only their values but also their object ids.

## Parameters

- **`$hostname`** — The hostname of the SNMP agent (server).
- **`$community`** — The read community.
- **`$object_id`** — The SNMP object id which precedes the wanted one.
- **`$timeout`** — The number of microseconds until the first timeout.
- **`$retries`** — The number of times to retry if timeouts occur.

## Return Values

Returns an associative array of the SNMP object ids and their values on success or `false` on error. In case of an error, an E_WARNING message is shown.

## Examples

**Using `snmp2_real_walk()`**

```php


<?php
 print_r(snmp2_real_walk("localhost", "public", "IF-MIB::ifName"));
?>

   
```

The above will output something like: Array ( [IF-MIB::ifName.1] => STRING: lo [IF-MIB::ifName.2] => STRING: eth0 [IF-MIB::ifName.3] => STRING: eth2 [IF-MIB::ifName.4] => STRING: sit0 [IF-MIB::ifName.5] => STRING: sixxs )

## See Also

 `snmp2_walk()`
