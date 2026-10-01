---
id: "en-php-function-function-ldap-mod-add"
language: "php"
lang: "en"
category: "function"
name: "ldap_mod_add"
title: "Add attribute values to current attributes"
signature: "bool ldap_mod_add(LDAP\\Connection $ldap, string $dn, array $entry, array|null $controls = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-mod-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add attribute values to current attributes

## Description

```php
bool ldap_mod_add(LDAP\Connection $ldap, string $dn, array $entry, array|null $controls = null)
```

Adds one or more attribute values to the specified `$dn`. To add a whole new object see `ldap_add()` function.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$dn`** — The distinguished name of an LDAP entity.
- **`$entry`** — An associative array listing the attribute values to add. If an attribute was not existing yet it will be added. If an attribute is existing you can only add values to it if it supports multiple values.
- **`$controls`** — Array of LDAP Controls to send with the request.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.0.0 | `$controls` is nullable now; previously, it defaulted to `[]`. |
| 7.3.0 | Support for `$controls` added |

## Notes

> This function is binary-safe.

## See Also

`ldap_mod_add_ext()` `ldap_mod_del()` `ldap_mod_replace()` `ldap_modify_batch()`
