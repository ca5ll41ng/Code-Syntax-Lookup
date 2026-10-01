---
id: "en-php-function-function-ldap-get-dn"
language: "php"
lang: "en"
category: "function"
name: "ldap_get_dn"
title: "Get the DN of a result entry"
signature: "string|false ldap_get_dn(LDAP\\Connection $ldap, LDAP\\ResultEntry $entry)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-get-dn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the DN of a result entry

## Description

```php
string|false ldap_get_dn(LDAP\Connection $ldap, LDAP\ResultEntry $entry)
```

Finds out the DN of an entry in the result.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$entry`** — An `LDAP\ResultEntry` instance.

## Return Values

Returns the DN of the result entry and `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$entry` parameter expects an `LDAP\ResultEntry` instance now; previously, a valid `ldap result entry` `resource` was expected. |
