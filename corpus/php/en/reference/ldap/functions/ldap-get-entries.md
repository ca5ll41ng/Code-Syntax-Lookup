---
id: "en-php-function-function-ldap-get-entries"
language: "php"
lang: "en"
category: "function"
name: "ldap_get_entries"
title: "Get all result entries"
signature: "array|false ldap_get_entries(LDAP\\Connection $ldap, LDAP\\Result $result)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-get-entries.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get all result entries

## Description

```php
array|false ldap_get_entries(LDAP\Connection $ldap, LDAP\Result $result)
```

Reads multiple entries from the given result, and then reading the attributes and multiple values.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$result`** — An `LDAP\Result` instance, returned by `ldap_list()` or `ldap_search()`.

## Return Values

Returns a complete result information in a multi-dimensional array on success, or `false` on failure.

The structure of the array is as follows. The attribute index is converted to lowercase. (Attributes are case-insensitive for directory servers, but not when used as array indices.) ```text return_value["count"] = number of entries in the result return_value[0] : refers to the details of first entry return_value[i]["dn"] = DN of the ith entry in the result return_value[i]["count"] = number of attributes in ith entry return_value[i][j] = NAME of the jth attribute in the ith entry in the result return_value[i]["attribute"]["count"] = number of values for attribute in ith entry return_value[i]["attribute"][j] = jth value of attribute in ith entry ```

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$result` parameter expects an `LDAP\Result` instance now; previously, a valid `ldap result` `resource` was expected. |

## See Also

`ldap_first_entry()` `ldap_next_entry()`
