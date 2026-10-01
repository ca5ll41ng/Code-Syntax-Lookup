---
id: "en-php-function-function-snmp2-set"
language: "php"
lang: "en"
category: "function"
name: "snmp2_set"
title: "Set the value of an SNMP object"
signature: "bool snmp2_set(string $hostname, string $community, array|string $object_id, array|string $type, array|string $value, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp2-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the value of an SNMP object

## Description

```php
bool snmp2_set(string $hostname, string $community, array|string $object_id, array|string $type, array|string $value, int $timeout = -1, int $retries = -1)
```

`snmp2_set()` is used to set the value of an SNMP object specified by the `$object_id`.

## Parameters

- **`$hostname`** — The hostname of the SNMP agent (server).
- **`$community`** — The write community.
- **`$object_id`** — The SNMP object id.
- **`$type`** — The MIB defines the type of each object id. It has to be specified as a single character from the below list.
  | = | The type is taken from the MIB |
  | --- | --- |
  | i | INTEGER |
  | u | INTEGER |
  | s | STRING |
  | x | HEX STRING |
  | d | DECIMAL STRING |
  | n | NULLOBJ |
  | o | OBJID |
  | t | TIMETICKS |
  | a | IPADDRESS |
  | b | BITS |

 — If `OPAQUE_SPECIAL_TYPES` was defined while compiling the SNMP library, the following are also valid:
  | U | unsigned int64 |
  | --- | --- |
  | I | signed int64 |
  | F | float |
  | D | double |

 — Most of these will use the obvious corresponding ASN.1 type. 's', 'x', 'd' and 'b' are all different ways of specifying an OCTET STRING value, and the 'u' unsigned type is also used for handling Gauge32 values. — If the MIB-Files are loaded by into the MIB Tree with "snmp_read_mib" or by specifying it in the libsnmp config, '=' may be used as the `$type` parameter for all object ids as the type can then be automatically read from the MIB. — Note that there are two ways to set a variable of the type BITS like e.g. "SYNTAX BITS {telnet(0), ftp(1), http(2), icmp(3), snmp(4), ssh(5), https(6)}":
  - Using type "b" and a list of bit numbers. This method is not recommended since GET query for the same OID would return e.g. 0xF8.
  - Using type "x" and a hex number but without(!) the usual "0x" prefix.

 — See examples section for more details.
- **`$value`** — The new value.
- **`$timeout`** — The number of microseconds until the first timeout.
- **`$retries`** — The number of times to retry if timeouts occur.

## Return Values

Returns `true` on success or `false` on failure.

If the SNMP host rejects the data type, an E_WARNING message like "Warning: Error in packet. Reason: (badValue) The value given has the wrong type or length." is shown. If an unknown or invalid OID is specified the warning probably reads "Could not add variable".

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Now throws a ValueError when the hostname length is equal to or greater than 128 bytes, when the port is negative or greater than 65535, or when the timeout or retries values are lower than -1 or too large. |

## Examples

**Using `snmp2_set()`**

```php


<?php
  snmp2_set("localhost", "public", "IF-MIB::ifAlias.3", "s", "foo");
?>
 
    
```

**Using `snmp2_set()` for setting BITS SNMP object id**

```php


<?php
  snmp2_set("localhost", "public", 'FOO-MIB::bar.42', 'b', '0 1 2 3 4');
// or
  snmp2_set("localhost", "public", 'FOO-MIB::bar.42', 'x', 'F0');
?>
 
    
```

## See Also

 `snmp2_get()`
