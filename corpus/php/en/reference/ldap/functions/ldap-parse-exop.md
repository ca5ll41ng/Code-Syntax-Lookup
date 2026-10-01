---
id: "en-php-function-function-ldap-parse-exop"
language: "php"
lang: "en"
category: "function"
name: "ldap_parse_exop"
title: "Parse result object from an LDAP extended operation"
signature: "bool ldap_parse_exop(LDAP\\Connection $ldap, LDAP\\Result $result, string $response_data = null, string $response_oid = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-parse-exop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parse result object from an LDAP extended operation

## Description

```php
bool ldap_parse_exop(LDAP\Connection $ldap, LDAP\Result $result, string $response_data = null, string $response_oid = null)
```

Parse LDAP extended operation data from result object `$result`

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$result`** — An `LDAP\Result` instance, returned by `ldap_list()` or `ldap_search()`.
- **`$response_data`** — Will be filled by the response data.
- **`$response_oid`** — Will be filled by the response OID.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 8.1.0 | The `$result` parameter expects an `LDAP\Result` instance now; previously, a valid `ldap result` `resource` was expected. |

## See Also

`ldap_exop()`
