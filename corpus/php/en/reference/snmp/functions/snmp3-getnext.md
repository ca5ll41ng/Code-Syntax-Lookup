---
id: "en-php-function-function-snmp3-getnext"
language: "php"
lang: "en"
category: "function"
name: "snmp3_getnext"
title: "Fetch the SNMP object which follows the given object id"
signature: "mixed snmp3_getnext(string $hostname, string $security_name, string $security_level, string $auth_protocol, string $auth_passphrase, string $privacy_protocol, string $privacy_passphrase, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp3-getnext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch the SNMP object which follows the given object id

## Description

```php
mixed snmp3_getnext(string $hostname, string $security_name, string $security_level, string $auth_protocol, string $auth_passphrase, string $privacy_protocol, string $privacy_passphrase, array|string $object_id, int $timeout = -1, int $retries = -1)
```

The `snmp3_getnext()` function is used to read the value of the SNMP object that follows the specified `$object_id`.

## Parameters

- **`$hostname`** — The hostname of the SNMP agent (server).
- **`$security_name`** — The security name, usually some kind of username.
- **`$security_level`** — The security level: `"noAuthNoPriv"`, `"authNoPriv"`, or `"authPriv"`.
- **`$auth_protocol`** — The authentication protocol: `"MD5"`, `"SHA"`, `"SHA256"`, or `"SHA512"`.
- **`$auth_passphrase`** — The authentication passphrase.
- **`$privacy_protocol`** — The privacy protocol: `"DES"`, or `"AES"`, also accepted as `"AES128"`. `"AES192"`, `"AES192C"`, `"AES256"`, and `"AES256C"` are accepted when supported by the Net-SNMP library.
- **`$privacy_passphrase`** — The privacy passphrase.
- **`$object_id`** — The SNMP object id.
- **`$timeout`** — The number of microseconds until the first timeout.
- **`$retries`** — The number of times to retry if timeouts occur.

## Return Values

Returns SNMP object value on success or `false` on error. In case of an error, an E_WARNING message is shown.

## Changelog

|  |  |
| --- | --- |
| 8.6.0 | The privacy protocol now accepts `"AES192"`, `"AES192C"`, `"AES256"`, and `"AES256C"` when supported by the Net-SNMP library. |
| 8.1.0 | The authentication protocol now accepts `"SHA256"` and `"SHA512"` when supported by the Net-SNMP library. |

## Examples

**Using `snmp3_getnext()`**

```php


<?php
$nameOfSecondInterface = snmp3_getnext('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'IF-MIB::ifName.1');
?>

   
```

## See Also

 `snmp3_get()` `snmp3_walk()`
