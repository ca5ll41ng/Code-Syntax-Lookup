---
id: "en-php-function-function-ldap-rename-ext"
language: "php"
lang: "en"
category: "function"
name: "ldap_rename_ext"
title: "Modify the name of an entry"
signature: "LDAP\\Result|false ldap_rename_ext(LDAP\\Connection $ldap, string $dn, string $new_rdn, string $new_parent, bool $delete_old_rdn, array|null $controls = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-rename-ext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify the name of an entry

## Description

```php
LDAP\Result|false ldap_rename_ext(LDAP\Connection $ldap, string $dn, string $new_rdn, string $new_parent, bool $delete_old_rdn, array|null $controls = null)
```

Does the same thing as `ldap_rename()` but returns an `LDAP\Result` instance to be parsed with `ldap_parse_result()`.

## Parameters

See `ldap_rename()`

## Return Values

Returns an `LDAP\Result` instance, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | Returns an `LDAP\Result` instance now; previously, a `resource` was returned. |
| 8.0.0 | `$controls` is nullable now; previously, it defaulted to `[]`. |
| 7.3.0 | Support for `$controls` added |

## See Also

`ldap_rename()` `ldap_parse_result()`
