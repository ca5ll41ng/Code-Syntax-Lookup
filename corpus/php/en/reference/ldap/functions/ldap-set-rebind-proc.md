---
id: "en-php-function-function-ldap-set-rebind-proc"
language: "php"
lang: "en"
category: "function"
name: "ldap_set_rebind_proc"
title: "Set a callback function to do re-binds on referral chasing"
signature: "bool ldap_set_rebind_proc(LDAP\\Connection $ldap, callable|null $callback)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-set-rebind-proc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a callback function to do re-binds on referral chasing

## Description

```php
bool ldap_set_rebind_proc(LDAP\Connection $ldap, callable|null $callback)
```

> This function is currently not documented; only its argument list is available.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.0.0 | `$callback` is nullable now. |
