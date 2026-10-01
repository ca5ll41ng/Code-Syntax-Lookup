---
id: "en-php-function-function-ldap-add-ext"
language: "php"
lang: "en"
category: "function"
name: "ldap_add_ext"
title: "Add entries to LDAP directory"
signature: "LDAP\\Result|false ldap_add_ext(LDAP\\Connection $ldap, string $dn, array $entry, array|null $controls = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-add-ext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add entries to LDAP directory

## Description

```php
LDAP\Result|false ldap_add_ext(LDAP\Connection $ldap, string $dn, array $entry, array|null $controls = null)
```

Does the same thing as `ldap_add()` but returns an `LDAP\Result` instance to be parsed with `ldap_parse_result()`.

## Parameters

See `ldap_add()`

## Return Values

Returns an `LDAP\Result` instance, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | Returns an `LDAP\Result` instance now; previously, a `resource` was returned. |
| 8.0.0 | `$controls` is nullable now; previously, it defaulted to `[]`. |

## Notes

> This function is binary-safe.

## See Also

`ldap_add()` `ldap_parse_result()`
