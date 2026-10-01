---
id: "en-php-function-function-snmp-set-oid-output-format"
language: "php"
lang: "en"
category: "function"
name: "snmp_set_oid_output_format"
title: "Set the OID output format"
signature: "true snmp_set_oid_output_format(int $format)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp-set-oid-output-format.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the OID output format

## Description

```php
true snmp_set_oid_output_format(int $format)
```

`snmp_set_oid_output_format()` sets the output format to be full or numeric.

## Parameters

- **`$format`**
  | `SNMP_OID_OUTPUT_FULL` | .iso.org.dod.internet.mgmt.mib-2.system.sysUpTime.sysUpTimeInstance |
  | --- | --- |
  | `SNMP_OID_OUTPUT_NUMERIC` | .1.3.6.1.2.1.1.3.0 |
  | `SNMP_OID_OUTPUT_MODULE` | DISMAN-EVENT-MIB::sysUpTimeInstance |
  | `SNMP_OID_OUTPUT_SUFFIX` | sysUpTimeInstance |
  | `SNMP_OID_OUTPUT_UCD` | system.sysUpTime.sysUpTimeInstance |
  | `SNMP_OID_OUTPUT_NONE` | Undefined |



## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | The return type is `true` now; previously, it was `bool`. |

## Examples

**Using `snmprealwalk()`**

```php


<?php

 snmp_read_mib("/usr/share/mibs/netsnmp/NET-SNMP-TC");

 // default or SNMP_OID_OUTPUT_MODULE
 print_r( snmprealwalk('localhost', 'public', 'RFC1213-MIB::sysObjectID') );

 snmp_set_oid_output_format(SNMP_OID_OUTPUT_NUMERIC);
 print_r( snmprealwalk('localhost', 'public', 'RFC1213-MIB::sysObjectID') );

 snmp_set_oid_output_format(SNMP_OID_OUTPUT_FULL);
 print_r( snmprealwalk('localhost', 'public', 'RFC1213-MIB::sysObjectID') );
?>

   
```

The above would output: Array ( [RFC1213-MIB::sysObjectID.0] => OID: NET-SNMP-TC::linux ) Array ( [.1.3.6.1.2.1.1.2.0] => OID: .1.3.6.1.4.1.8072.3.2.10 ) Array ( [.iso.org.dod.internet.mgmt.mib-2.system.sysObjectID.0] => OID: .iso.org.dod.internet.private.enterprises.netSnmp.netSnmpEnumerations.netSnmpAgentOIDs.linux )
