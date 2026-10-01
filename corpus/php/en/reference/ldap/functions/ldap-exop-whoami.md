---
id: "en-php-function-function-ldap-exop-whoami"
language: "php"
lang: "en"
category: "function"
name: "ldap_exop_whoami"
title: "WHOAMI extended operation helper"
signature: "string|false ldap_exop_whoami(LDAP\\Connection $ldap)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-exop-whoami.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# WHOAMI extended operation helper

## Description

```php
string|false ldap_exop_whoami(LDAP\Connection $ldap)
```

Performs a WHOAMI extended operation and returns the data.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.

## Return Values

The data returned by the server, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |

## See Also

`ldap_exop()`
