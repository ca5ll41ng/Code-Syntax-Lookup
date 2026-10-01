---
id: "en-php-function-function-ldap-exop-refresh"
language: "php"
lang: "en"
category: "function"
name: "ldap_exop_refresh"
title: "Refresh extended operation helper"
signature: "int|false ldap_exop_refresh(LDAP\\Connection $ldap, string $dn, int $ttl)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-exop-refresh.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Refresh extended operation helper

## Description

```php
int|false ldap_exop_refresh(LDAP\Connection $ldap, string $dn, int $ttl)
```

Performs a Refresh extended operation and returns the data.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$dn`** — dn of the entry to refresh.
- **`$ttl`** — Time in seconds (between 1 and 31557600) that the client requests that the entry exists in the directory before being automatically removed.

## Return Values

From RFC: The responseTtl field is the time in seconds which the server chooses to have as the time-to-live field for that entry. It must not be any smaller than that which the client requested, and it may be larger. However, to allow servers to maintain a relatively accurate directory, and to prevent clients from abusing the dynamic extensions, servers are permitted to shorten a client-requested time-to-live value, down to a minimum of 86400 seconds (one day). `false` will be returned on error.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |

## See Also

`ldap_exop()`
