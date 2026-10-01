---
id: "en-php-function-function-ldap-delete"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["ldap_injection"],"cwe":["CWE-90"],"params":[3]}
name: "ldap_delete"
title: "Delete an entry from a directory"
signature: "bool ldap_delete(LDAP\\Connection $ldap, string $dn, array|null $controls = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete an entry from a directory

## Description

```php
bool ldap_delete(LDAP\Connection $ldap, string $dn, array|null $controls = null)
```

Deletes a particular entry in LDAP directory.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$dn`** — The distinguished name of an LDAP entity.
- **`$controls`** — Array of LDAP Controls to send with the request.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.0.0 | `$controls` is nullable now; previously, it defaulted to `[]`. |
| 7.3.0 | Support for `$controls` added |

## See Also

`ldap_delete_ext()` `ldap_add()`
