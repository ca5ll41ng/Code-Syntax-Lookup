---
id: "en-php-function-snmp-getnext"
language: "php"
lang: "en"
category: "function"
name: "SNMP::getnext"
title: "Fetch an SNMP object which follows the given object id"
signature: "public mixed SNMP::getnext(array|string $objectId)"
module: "snmp"
source_url: "https://www.php.net/manual/en/snmp.getnext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch an SNMP object which follows the given object id

## Description

```php
public mixed SNMP::getnext(array|string $objectId)
```

Fetch an SNMP object that follows specified `$objectId`.

## Parameters

If `$objectId` is a string, then `SNMP::getnext()` will return SNMP object as string. If `$objectId` is an array, all requested SNMP objects will be returned as associative array of the SNMP object ids and their values.

- **`$objectId`** — The SNMP object (OID) or objects

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
  $nsysdescr = $session->getnext("sysDescr.0");
  echo "$nsysdescr\n";
  $nsysdescr = $session->getnext(array("sysDescr.0"));
  print_r($nsysdescr);
?>

   
```

The above example will output something similar to:

```text


OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
Array
(
    [SNMPv2-MIB::sysObjectID.0] => OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
)

   
```

**Multiple SNMP objects**

```php


<?php
  $session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
  $results = $session->getnext(array("sysDescr.0", "sysName.0"));
  print_r($results);
  $session->close();
?>

   
```

The above example will output something similar to:

```text


Array
(
    [SNMPv2-MIB::sysObjectID.0] => OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
    [SNMPv2-MIB::sysLocation.0] => STRING: Nowhere
)

   
```

## See Also

 `SNMP::getErrno()` `SNMP::getError()`
