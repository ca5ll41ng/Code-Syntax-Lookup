---
id: "en-php-function-snmp-get"
language: "php"
lang: "en"
category: "function"
name: "SNMP::get"
title: "Fetch an SNMP object"
signature: "public mixed SNMP::get(array|string $objectId, bool $preserveKeys = false)"
module: "snmp"
source_url: "https://www.php.net/manual/en/snmp.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch an SNMP object

## Description

```php
public mixed SNMP::get(array|string $objectId, bool $preserveKeys = false)
```

Fetch an SNMP object specified in `$objectId` using GET query.

## Parameters

If `$objectId` is a string, then `SNMP::get()` will return SNMP object as string. If `$objectId` is an array, all requested SNMP objects will be returned as associative array of the SNMP object ids and their values.

- **`$objectId`** — The SNMP object (OID) or objects
- **`$preserveKeys`** — When `$objectId` is an array and `$preserveKeys` set to `true` keys in results will be taken exactly as in `$objectId`, otherwise `SNMP::oid_output_format` property is used to determinate the form of keys.

## Return Values

Returns SNMP objects requested as string or array depending on `$objectId` type or `false` on error.

## Errors/Exceptions

This method does not throw any exceptions by default. To enable throwing an SNMPException exception when some of library errors occur the SNMP class parameter `$exceptions_enabled` should be set to a corresponding value. See `$SNMP::$exceptions_enabled` explanation for more details.

## Examples

**Single SNMP object**

Single SNMP object may be requested in two ways: as string resulting string return value or as single-element array with associative array as output.

```php


<?php
  $session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
  $sysdescr = $session->get("sysDescr.0");
  echo "$sysdescr\n";
  $sysdescr = $session->get(array("sysDescr.0"));
  print_r($sysdescr);
?>

   
```

The above example will output something similar to:

```text


STRING: Test server
Array
(
    [SNMPv2-MIB::sysDescr.0] => STRING: Test server
)

   
```

**Multiple SNMP objects**

```php


  $session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
  $results = $session->get(array("sysDescr.0", "sysName.0"));
  print_r($results);
  $session->close();

   
```

The above example will output something similar to:

```text


Array
(
    [SNMPv2-MIB::sysDescr.0] => STRING: Test server
    [SNMPv2-MIB::sysName.0] => STRING: myhost.nodomain
)

   
```

## See Also

 `SNMP::getErrno()` `SNMP::getError()`
