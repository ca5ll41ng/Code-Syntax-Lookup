---
id: "en-php-function-function-ldap-unbind"
language: "php"
lang: "en"
category: "function"
name: "ldap_unbind"
title: "Unbind from LDAP directory"
signature: "bool ldap_unbind(LDAP\\Connection $ldap)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-unbind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unbind from LDAP directory

## Description

```php
bool ldap_unbind(LDAP\Connection $ldap)
```

Unbinds from the LDAP directory.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |

## See Also

`ldap_bind()`
