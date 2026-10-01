---
id: "en-php-function-function-ldap-next-entry"
language: "php"
lang: "en"
category: "function"
name: "ldap_next_entry"
title: "Get next result entry"
signature: "LDAP\\ResultEntry|false ldap_next_entry(LDAP\\Connection $ldap, LDAP\\ResultEntry $entry)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-next-entry.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get next result entry

## Description

```php
LDAP\ResultEntry|false ldap_next_entry(LDAP\Connection $ldap, LDAP\ResultEntry $entry)
```

Retrieve the entries stored in the result. Successive calls to the `ldap_next_entry()` return entries one by one till there are no more entries. The first call to `ldap_next_entry()` is made after the call to `ldap_first_entry()` with the `$entry` as returned from the `ldap_first_entry()`.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$entry`** — An `LDAP\ResultEntry` instance.

## Return Values

Returns an `LDAP\ResultEntry` instance for the next entry in the result whose entries are being read starting with `ldap_first_entry()`. If there are no more entries in the result then it returns `false`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$entry` parameter expects an `LDAP\ResultEntry` instance now; previously, a valid `ldap result entry` `resource` was expected. |
| 8.1.0 | Returns an `LDAP\Result` instance now; previously, a `resource` was returned. |

## See Also

`ldap_get_entries()`
