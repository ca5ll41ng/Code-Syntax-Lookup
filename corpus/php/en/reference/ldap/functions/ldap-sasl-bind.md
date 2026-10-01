---
id: "en-php-function-function-ldap-sasl-bind"
language: "php"
lang: "en"
category: "function"
name: "ldap_sasl_bind"
title: "Bind to LDAP directory using SASL"
signature: "bool ldap_sasl_bind(LDAP\\Connection $ldap, string|null $dn = null, string|null $password = null, string|null $mech = null, string|null $realm = null, string|null $authc_id = null, string|null $authz_id = null, string|null $props = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-sasl-bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind to LDAP directory using SASL

## Description

```php
bool ldap_sasl_bind(LDAP\Connection $ldap, string|null $dn = null, string|null $password = null, string|null $mech = null, string|null $realm = null, string|null $authc_id = null, string|null $authz_id = null, string|null $props = null)
```

> This function is currently not documented; only its argument list is available.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.0.0 | `$dn`, `$password`, `$mech`, `$realm`, `$authc_id`, `$authz_id` and `$props` are nullable now. |

## Notes

> Requirement
>
> `ldap_sasl_bind()` requires SASL support (`sasl.h`). Be sure `--with-ldap-sasl` is used when configuring PHP otherwise this function will be undefined.
