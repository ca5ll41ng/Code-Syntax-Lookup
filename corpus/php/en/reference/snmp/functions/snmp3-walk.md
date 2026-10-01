---
id: "en-php-function-function-snmp3-walk"
language: "php"
lang: "en"
category: "function"
name: "snmp3_walk"
title: "Fetch all the SNMP objects from an agent"
signature: "array|false snmp3_walk(string $hostname, string $security_name, string $security_level, string $auth_protocol, string $auth_passphrase, string $privacy_protocol, string $privacy_passphrase, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp3-walk.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch all the SNMP objects from an agent

## Description

```php
array|false snmp3_walk(string $hostname, string $security_name, string $security_level, string $auth_protocol, string $auth_passphrase, string $privacy_protocol, string $privacy_passphrase, array|string $object_id, int $timeout = -1, int $retries = -1)
```

`snmp3_walk()` function is used to read all the values from an SNMP agent specified by the `$hostname`.

The authentication and privacy arguments must always be passed, but their values are ignored when `$security_level` does not use them.

## Parameters

- **`$hostname`** — The hostname of the SNMP agent (server).
- **`$security_name`** — The security name, usually some kind of username.
- **`$security_level`** — The security level: `"noAuthNoPriv"`, `"authNoPriv"`, or `"authPriv"`.
- **`$auth_protocol`** — The authentication protocol: `"MD5"`, `"SHA"`, `"SHA256"`, or `"SHA512"`.
- **`$auth_passphrase`** — The authentication passphrase.
- **`$privacy_protocol`** — The privacy protocol: `"DES"`, or `"AES"`, also accepted as `"AES128"`. `"AES192"`, `"AES192C"`, `"AES256"`, and `"AES256C"` are accepted when supported by the Net-SNMP library.
- **`$privacy_passphrase`** — The privacy passphrase.
- **`$object_id`** — If an empty string, `$object_id` is taken as `.1.3.6.1.2.1`, the root of the SNMP objects tree, and all objects under that tree are returned as an array. — If `$object_id` is specified, all the SNMP objects below that `$object_id` are returned.
- **`$timeout`** — The number of microseconds until the first timeout.
- **`$retries`** — The number of times to retry if timeouts occur.

## Return Values

Returns an array of SNMP object values starting from the `$object_id` as root or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.6.0 | The privacy protocol now accepts `"AES192"`, `"AES192C"`, `"AES256"`, and `"AES256C"` when supported by the Net-SNMP library. |
| 8.1.0 | The authentication protocol now accepts `"SHA256"` and `"SHA512"` when supported by the Net-SNMP library. |

## Examples

**`snmp3_walk()` Example**

```php


<?php
$ret = snmp3_walk('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'IF-MIB::ifName');
var_export($ret);
?>

   
```

Above function call would return all the SNMP objects from the SNMP agent running on localhost: array ( 0 => 'STRING: lo', 1 => 'STRING: eth0', 2 => 'STRING: eth2', 3 => 'STRING: sit0', 4 => 'STRING: sixxs', )

## See Also

 `snmp3_real_walk()`
