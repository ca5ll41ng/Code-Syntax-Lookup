---
id: "en-php-function-function-snmp2-walk"
language: "php"
lang: "en"
category: "function"
name: "snmp2_walk"
title: "Fetch all the SNMP objects from an agent"
signature: "array|false snmp2_walk(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp2-walk.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch all the SNMP objects from an agent

## Description

```php
array|false snmp2_walk(string $hostname, string $community, array|string $object_id, int $timeout = -1, int $retries = -1)
```

`snmp2_walk()` function is used to read all the values from an SNMP agent specified by the `$hostname`.

## Parameters

- **`$hostname`** — The SNMP agent (server).
- **`$community`** — The read community.
- **`$object_id`** — If `null`, `$object_id` is taken as the root of the SNMP objects tree and all objects under that tree are returned as an array. — If `$object_id` is specified, all the SNMP objects below that `$object_id` are returned.
- **`$timeout`** — The number of microseconds until the first timeout.
- **`$retries`** — The number of times to retry if timeouts occur.

## Return Values

Returns an array of SNMP object values starting from the `$object_id` as root or `false` on error.

## Examples

**`snmp2_walk()` Example**

```php


<?php
$a = snmp2_walk("127.0.0.1", "public", "");

foreach ($a as $val) {
    echo "$val\n";
}

?>

   
```

Above function call would return all the SNMP objects from the SNMP agent running on localhost. One can step through the values with a loop

## See Also

 `snmp2_real_walk()`
