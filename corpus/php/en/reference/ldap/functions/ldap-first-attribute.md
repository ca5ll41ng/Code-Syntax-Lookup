---
id: "en-php-function-function-ldap-first-attribute"
language: "php"
lang: "en"
category: "function"
name: "ldap_first_attribute"
title: "Return first attribute"
signature: "string|false ldap_first_attribute(LDAP\\Connection $ldap, LDAP\\ResultEntry $entry)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-first-attribute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return first attribute

## Description

```php
string|false ldap_first_attribute(LDAP\Connection $ldap, LDAP\ResultEntry $entry)
```

Gets the first attribute in the given entry. Remaining attributes are retrieved by calling `ldap_next_attribute()` successively.

Similar to reading entries, attributes are also read one by one from a particular entry.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$entry`** — An `LDAP\ResultEntry` instance.

## Return Values

Returns the first attribute in the entry on success and `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$entry` parameter expects an `LDAP\ResultEntry` instance now; previously, a valid `ldap result entry` `resource` was expected. |
| 8.0.0 | The unused third parameter `$ber_identifier` is no longer accepted. |

## See Also

`ldap_next_attribute()` `ldap_get_attributes()`
