---
id: "en-php-function-function-ldap-bind-ext"
language: "php"
lang: "en"
category: "function"
name: "ldap_bind_ext"
title: "Bind to LDAP directory"
signature: "LDAP\\Result|false ldap_bind_ext(LDAP\\Connection $ldap, string|null $dn = null, string|null $password = null, array|null $controls = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-bind-ext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind to LDAP directory

## Description

```php
LDAP\Result|false ldap_bind_ext(LDAP\Connection $ldap, string|null $dn = null, string|null $password = null, array|null $controls = null)
```

Does the same thing as `ldap_bind()` but returns an `LDAP\Result` instance to be parsed with `ldap_parse_result()`.

## Parameters

See `ldap_bind()`

## Return Values

Returns an `LDAP\Result` instance, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | Returns an `LDAP\Result` instance now; previously, a `resource` was returned. |
| 8.0.0 | `$controls` is nullable now; previously, it defaulted to `[]`. |

## See Also

`ldap_bind()` `ldap_parse_result()`
