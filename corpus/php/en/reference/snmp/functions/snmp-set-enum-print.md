---
id: "en-php-function-function-snmp-set-enum-print"
language: "php"
lang: "en"
category: "function"
name: "snmp_set_enum_print"
title: "Return all values that are enums with their enum value instead of the raw integer"
signature: "true snmp_set_enum_print(bool $enable)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp-set-enum-print.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return all values that are enums with their enum value instead of the raw integer

## Description

```php
true snmp_set_enum_print(bool $enable)
```

This function toggles if snmpwalk/snmpget etc. should automatically lookup enum values in the MIB and return them together with their human readable string.

## Parameters

- **`$enable`** — As the value is interpreted as boolean by the Net-SNMP library, it can only be "0" or "1".

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

**Using `snmp_set_enum_print()`**

```php


<?php
 snmp_set_enum_print(0);
 echo snmpget('localhost', 'public', 'IF-MIB::ifOperStatus.3') . "\n";
 snmp_set_enum_print(1);
 echo snmpget('localhost', 'public', 'IF-MIB::ifOperStatus.3') . "\n";
?>

   
```

The above would return INTEGER: up(1) INTEGER: 1
