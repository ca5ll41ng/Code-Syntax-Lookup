---
id: "en-php-function-function-snmp3-get"
language: "php"
lang: "en"
category: "function"
name: "snmp3_get"
title: "Fetch an SNMP object"
signature: "mixed snmp3_get(string $hostname, string $security_name, string $security_level, string $auth_protocol, string $auth_passphrase, string $privacy_protocol, string $privacy_passphrase, array|string $object_id, int $timeout = -1, int $retries = -1)"
module: "snmp"
source_url: "https://www.php.net/manual/en/function.snmp3-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch an SNMP object

## Description

```php
mixed snmp3_get(string $hostname, string $security_name, string $security_level, string $auth_protocol, string $auth_passphrase, string $privacy_protocol, string $privacy_passphrase, array|string $object_id, int $timeout = -1, int $retries = -1)
```

The `snmp3_get()` function is used to read the value of an SNMP object specified by the `$object_id`.

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

Returns SNMP object value on success or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.6.0 | The privacy protocol now accepts `"AES192"`, `"AES192C"`, `"AES256"`, and `"AES256C"` when supported by the Net-SNMP library. |
| 8.5.0 | Now throws a ValueError when the hostname length is equal to or greater than 128 bytes, when the port is negative or greater than 65535, or when the timeout or retries values are lower than -1 or too large. |
| 8.1.0 | The authentication protocol now accepts `"SHA256"` and `"SHA512"` when supported by the Net-SNMP library. |

## Examples

**Using `snmp3_get()`**

```php


<?php
$nameOfSecondInterface = snmp3_get('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'IF-MIB::ifName.2');
?>

   
```

## See Also

 `snmp3_set()`
