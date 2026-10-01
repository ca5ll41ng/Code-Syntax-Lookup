---
id: "en-php-function-function-ldap-next-attribute"
language: "php"
lang: "en"
category: "function"
name: "ldap_next_attribute"
title: "Get the next attribute in result"
signature: "string|false ldap_next_attribute(LDAP\\Connection $ldap, LDAP\\ResultEntry $entry)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-next-attribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the next attribute in result

## Description

```php
string|false ldap_next_attribute(LDAP\Connection $ldap, LDAP\ResultEntry $entry)
```

Retrieves the attributes in an entry. The first call to `ldap_next_attribute()` is made with the `$entry` returned from `ldap_first_attribute()`.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$entry`** — An `LDAP\ResultEntry` instance.

## Return Values

Returns the next attribute in an entry on success and `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$entry` parameter expects an `LDAP\ResultEntry` instance now; previously, a valid `ldap result entry` `resource` was expected. |
| 8.0.0 | The unused third parameter `$ber_identifier` is no longer accepted. |

## See Also

`ldap_get_attributes()`
