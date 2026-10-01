---
id: "en-php-function-function-ldap-mod-replace"
language: "php"
lang: "en"
category: "function"
name: "ldap_mod_replace"
title: "Replace attribute values with new ones"
signature: "bool ldap_mod_replace(LDAP\\Connection $ldap, string $dn, array $entry, array|null $controls = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-mod-replace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replace attribute values with new ones

## Description

```php
bool ldap_mod_replace(LDAP\Connection $ldap, string $dn, array $entry, array|null $controls = null)
```

Replaces one or more attributes from the specified `$dn`. It may also add or remove attributes.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$dn`** — The distinguished name of an LDAP entity.
- **`$entry`** — An associative array listing the attributes to replace. Sending an empty array as value will remove the attribute, while sending an attribute not existing yet on this entry will add it.
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

`ldap_mod_replace_ext()` `ldap_mod_del()` `ldap_mod_add()` `ldap_modify_batch()`
