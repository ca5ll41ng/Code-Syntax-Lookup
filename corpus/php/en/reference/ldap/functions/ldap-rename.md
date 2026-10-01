---
id: "en-php-function-function-ldap-rename"
language: "php"
lang: "en"
category: "function"
name: "ldap_rename"
title: "Modify the name of an entry"
signature: "bool ldap_rename(LDAP\\Connection $ldap, string $dn, string $new_rdn, string $new_parent, bool $delete_old_rdn, array|null $controls = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-rename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the name of an entry

## Description

```php
bool ldap_rename(LDAP\Connection $ldap, string $dn, string $new_rdn, string $new_parent, bool $delete_old_rdn, array|null $controls = null)
```

The entry specified by `$dn` is renamed/moved.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$dn`** — The distinguished name of an LDAP entity.
- **`$new_rdn`** — The new RDN.
- **`$new_parent`** — The new parent/superior entry.
- **`$delete_old_rdn`** — If `true` the old RDN value(s) is removed, else the old RDN value(s) is retained as non-distinguished values of the entry.
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

> This function currently only works with LDAPv3. You may have to use `ldap_set_option()` prior to binding to use LDAPv3. This function is only available when using OpenLDAP 2.x.x OR Netscape Directory SDK x.x.

## See Also

`ldap_rename_ext()` `ldap_modify()`
