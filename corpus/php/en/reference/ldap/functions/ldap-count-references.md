---
id: "en-php-function-function-ldap-count-references"
language: "php"
lang: "en"
category: "function"
name: "ldap_count_references"
title: "Counts the number of references in a search result"
signature: "int ldap_count_references(LDAP\\Connection $ldap, LDAP\\Result $result)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-count-references.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Counts the number of references in a search result

## Description

```php
int ldap_count_references(LDAP\Connection $ldap, LDAP\Result $result)
```

Counts the number of references in a search result.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$result`** — An `LDAP\Result` instance, returned by `ldap_list()` or `ldap_search()`.

## Return Values

Returns the number of references in a search result.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$result` parameter expects an `LDAP\Result` instance now; previously, a valid `ldap result` `resource` was expected. |

## See Also

 `ldap_connect()`
