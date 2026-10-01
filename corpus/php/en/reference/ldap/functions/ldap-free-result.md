---
id: "en-php-function-function-ldap-free-result"
language: "php"
lang: "en"
category: "function"
name: "ldap_free_result"
title: "Free result memory"
signature: "bool ldap_free_result(LDAP\\Result $result)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-free-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Free result memory

## Description

```php
bool ldap_free_result(LDAP\Result $result)
```

Frees up the memory allocated internally to store the result. All result memory will be automatically freed when the script terminates.

Typically all the memory allocated for the LDAP result gets freed at the end of the script. In case the script is making successive searches which return large result sets, `ldap_free_result()` could be called to keep the runtime memory usage by the script low.

## Parameters

- **`$result`** — An `LDAP\Result` instance, returned by `ldap_list()` or `ldap_search()`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$result` parameter expects an `LDAP\Result` instance now; previously, a valid `ldap result` `resource` was expected. |
