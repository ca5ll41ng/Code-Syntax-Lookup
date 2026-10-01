---
id: "en-php-function-snmp-set"
language: "php"
lang: "en"
category: "function"
name: "SNMP::set"
title: "Set the value of an SNMP object"
signature: "public bool SNMP::set(array|string $objectId, array|string $type, array|string $value)"
module: "snmp"
source_url: "https://www.php.net/manual/en/snmp.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the value of an SNMP object

## Description

```php
public bool SNMP::set(array|string $objectId, array|string $type, array|string $value)
```

Requests remote SNMP agent setting the value of one or more SNMP objects specified by the `$objectId`.

## Parameters

- **`$objectId`** — The SNMP object id — When count of OIDs in object_id array is greater than max_oids object property set method will have to use multiple queries to perform requested value updates. In this case type and value checks are made per-chunk so second or subsequent requests may fail due to wrong type or value for OID requested. To mark this a warning is raised when count of OIDs in object_id array is greater than max_oids.
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

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

This method does not throw any exceptions by default. To enable throwing an SNMPException exception when some of library errors occur the SNMP class parameter `$exceptions_enabled` should be set to a corresponding value. See `$SNMP::$exceptions_enabled` explanation for more details.

## Examples

**Set single SNMP object id**

```php


<?php
  $session = new SNMP(SNMP::VERSION_2C, "127.0.0.1", "private");
  $session->set('SNMPv2-MIB::sysContact.0', 's', "Nobody");
?>

   
```

**Set multiple values using single `SNMP::set()` call**

```php


<?php
  $session = new SNMP(SNMP::VERSION_2C, "127.0.0.1", "private");
  $session->set(array('SNMPv2-MIB::sysContact.0', 'SNMPv2-MIB::sysLocation.0'), array('s', 's'), array("Nobody", "Nowhere"));
// or
  $session->set(array('SNMPv2-MIB::sysContact.0', 'SNMPv2-MIB::sysLocation.0'), 's', array("Nobody", "Nowhere"));
?>

   
```

**Using `SNMP::set()` for setting BITS SNMP object id**

```php


<?php
  $session = new SNMP(SNMP::VERSION_2C, "127.0.0.1", "private");
  $session->set('FOO-MIB::bar.42', 'b', '0 1 2 3 4');
// or
  $session->set('FOO-MIB::bar.42', 'x', 'F0');
?>
 
    
```

## See Also

 `SNMP::get()`
