---
id: "en-php-function-function-snmp-set-valueretrieval"
language: "php"
lang: "en"
category: "function"
name: "snmp_set_valueretrieval"
title: "Specify the method how the SNMP values will be returned"
signature: "true snmp_set_valueretrieval(int $method)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp-set-valueretrieval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specify the method how the SNMP values will be returned

## Description

```php
true snmp_set_valueretrieval(int $method)
```

## Parameters

- **`$method`**
  | SNMP_VALUE_LIBRARY | The return values will be as returned by the Net-SNMP library. |
  | --- | --- |
  | SNMP_VALUE_PLAIN | The return values will be the plain value without the SNMP type information. |
  | SNMP_VALUE_OBJECT | The return values will be objects with the properties `value` and `type`, where the latter is one of the `SNMP_OCTET_STR`, `SNMP_COUNTER` etc. constants. The way `value` is returned is based on which one of constants `SNMP_VALUE_LIBRARY`, `SNMP_VALUE_PLAIN` is set. |



## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

**Using `snmp_set_valueretrieval()`**

```php


<?php
 snmp_set_valueretrieval(SNMP_VALUE_LIBRARY);
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 // $ret = "STRING: lo"

 snmp_set_valueretrieval(SNMP_VALUE_PLAIN);
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 // $ret = "lo";

 snmp_set_valueretrieval(SNMP_VALUE_OBJECT);
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 // stdClass Object
 // (
 //   [type] => 4        <-- SNMP_OCTET_STR, see constants
 //   [value] => lo
 // )

 snmp_set_valueretrieval(SNMP_VALUE_OBJECT | SNMP_VALUE_PLAIN);
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 // stdClass Object
 // (
 //   [type] => 4        <-- SNMP_OCTET_STR, see constants
 //   [value] => lo
 // )

 snmp_set_valueretrieval(SNMP_VALUE_OBJECT | SNMP_VALUE_LIBRARY);
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 // stdClass Object
 // (
 //   [type] => 4        <-- SNMP_OCTET_STR, see constants
 //   [value] => STRING: lo
 // )

?>

   
```

## See Also

  `snmp_get_valueretrieval()`  `snmp.constants`
