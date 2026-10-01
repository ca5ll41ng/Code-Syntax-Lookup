---
id: "en-php-guide-class-snmp"
language: "php"
lang: "en"
category: "guide"
name: "class.snmp"
title: "The SNMP class"
module: "snmp"
source_url: "https://www.php.net/manual/en/class.snmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SNMP class

SNMP

   Introduction  Represents SNMP session.      Class Synopsis    `SNMP`    `public` `const` `int` `SNMP::VERSION_1`   `public` `const` `int` `SNMP::VERSION_2c`   `public` `const` `int` `SNMP::VERSION_2C`   `public` `const` `int` `SNMP::VERSION_3`   `public` `const` `int` `SNMP::ERRNO_NOERROR`   `public` `const` `int` `SNMP::ERRNO_ANY`   `public` `const` `int` `SNMP::ERRNO_GENERIC`   `public` `const` `int` `SNMP::ERRNO_TIMEOUT`   `public` `const` `int` `SNMP::ERRNO_ERROR_IN_REPLY`   `public` `const` `int` `SNMP::ERRNO_OID_NOT_INCREASING`   `public` `const` `int` `SNMP::ERRNO_OID_PARSING_ERROR`   `public` `const` `int` `SNMP::ERRNO_MULTIPLE_SET_QUERIES`    `public` `readonly` `array` `info`   `public` `int|null` `max_oids`   `public` `int` `valueretrieval`   `public` `bool` `quick_print`   `public` `bool` `enum_print`   `public` `int` `oid_output_format`   `public` `bool` `oid_increasing_check`   `public` `int` `exceptions_enabled`         Properties 
- **`max_oids`** — Maximum OID per GET/SET/GETBULK request
- **`valueretrieval`** — Controls the method how the SNMP values will be returned
  | `SNMP_VALUE_LIBRARY` | The return values will be as returned by the Net-SNMP library. |
  | --- | --- |
  | `SNMP_VALUE_PLAIN` | The return values will be the plain value without the SNMP type information. |
  | `SNMP_VALUE_OBJECT` | The return values will be objects with the properties "value" and "type", where the latter is one of the SNMP_OCTET_STR, SNMP_COUNTER etc. constants. The way "value" is returned is based on which one of `SNMP_VALUE_LIBRARY`, `SNMP_VALUE_PLAIN` is set |

- **`quick_print`** — Value of `$quick_print` within the NET-SNMP library — Sets the value of `$quick_print` within the NET-SNMP library. When this is set (1), the SNMP library will return 'quick printed' values. This means that just the value will be printed. When `$quick_print` is not enabled (default) the NET-SNMP library prints extra information including the type of the value (i.e. IpAddress or OID). Additionally, if quick_print is not enabled, the library prints additional hex values for all strings of three characters or less.
- **`enum_print`** — Controls the way enum values are printed — Parameter toggles if walk/get etc. should automatically lookup enum values in the MIB and return them together with their human readable string.
- **`oid_output_format`** — Controls OID output format
  | `SNMP_OID_OUTPUT_FULL` | .iso.org.dod.internet.mgmt.mib-2.system.sysUpTime.sysUpTimeInstance |
  | --- | --- |
  | `SNMP_OID_OUTPUT_NUMERIC` | .1.3.6.1.2.1.1.3.0 |
  | `SNMP_OID_OUTPUT_MODULE` | DISMAN-EVENT-MIB::sysUpTimeInstance |
  | `SNMP_OID_OUTPUT_SUFFIX` | sysUpTimeInstance |
  | `SNMP_OID_OUTPUT_UCD` | system.sysUpTime.sysUpTimeInstance |
  | `SNMP_OID_OUTPUT_NONE` | Undefined |

- **`oid_increasing_check`** — Controls disabling check for increasing OID while walking OID tree — Some SNMP agents are known for returning OIDs out of order but can complete the walk anyway. Other agents return OIDs that are out of order and can cause `SNMP::walk()` to loop indefinitely until memory limit will be reached. PHP SNMP library by default performs OID increasing check and stops walking on OID tree when it detects possible loop with issuing warning about non-increasing OID faced. Set `oid_increasing_check` to `false` to disable this check.
- **`exceptions_enabled`** — Controls which failures will raise SNMPException instead of warning. Use bitwise OR'ed `SNMP::ERRNO_{*}` constants. By default all SNMP exceptions are disabled.
- **`info`** — Read-only property with remote agent configuration: hostname, port, default timeout, default retries count

     Predefined Constants  SNMP Error Types 
- **`SNMP::ERRNO_NOERROR`** — No SNMP-specific error occurred.
- **`SNMP::ERRNO_GENERIC`** — A generic SNMP error occurred.
- **`SNMP::ERRNO_TIMEOUT`** — Request to SNMP agent timed out.
- **`SNMP::ERRNO_ERROR_IN_REPLY`** — SNMP agent returned an error in reply.
- **`SNMP::ERRNO_OID_NOT_INCREASING`** — SNMP agent faced OID cycling reporning non-increasing OID while executing (BULK)WALK command. This indicates bogus remote SNMP agent.
- **`SNMP::ERRNO_OID_PARSING_ERROR`** — Library failed while parsing OID (and/or type for SET command). No queries has been made.
- **`SNMP::ERRNO_MULTIPLE_SET_QUERIES`** — Library will use multiple queries for SET operation requested. That means that operation will be performed in a non-transaction manner and second or subsequent chunks may fail if a type or value failure will be faced.
- **`SNMP::ERRNO_ANY`** — All SNMP::ERRNO_* codes bitwise OR'ed.

   SNMP Protocol Versions 
- **`SNMP::VERSION_1`**
- **`SNMP::VERSION_2C`, `SNMP::VERSION_2c`**
- **`SNMP::VERSION_3`**
