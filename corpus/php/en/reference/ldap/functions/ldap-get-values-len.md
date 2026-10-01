---
id: "en-php-function-function-ldap-get-values-len"
language: "php"
lang: "en"
category: "function"
name: "ldap_get_values_len"
title: "Get all binary values from a result entry"
signature: "array|false ldap_get_values_len(LDAP\\Connection $ldap, LDAP\\ResultEntry $entry, string $attribute)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-get-values-len.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get all binary values from a result entry

## Description

```php
array|false ldap_get_values_len(LDAP\Connection $ldap, LDAP\ResultEntry $entry, string $attribute)
```

Reads all the values of the attribute in the entry in the result.

This function is used exactly like `ldap_get_values()` except that it handles binary data and not string data.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$entry`** — An `LDAP\ResultEntry` instance.
- **`$attribute`**

## Return Values

Returns an array of values for the attribute on success and `false` on error. Individual values are accessed by integer index in the array. The first index is 0. The number of values can be found by indexing "count" in the resultant array.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$entry` parameter expects an `LDAP\ResultEntry` instance now; previously, a valid `ldap result entry` `resource` was expected. |

## See Also

`ldap_get_values()`
