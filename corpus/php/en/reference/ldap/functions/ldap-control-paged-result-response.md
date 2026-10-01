---
id: "en-php-function-function-ldap-control-paged-result-response"
language: "php"
lang: "en"
category: "function"
name: "ldap_control_paged_result_response"
title: "Retrieve the LDAP pagination cookie"
signature: "bool ldap_control_paged_result_response(resource $link, resource $result, [string $cookie = ...], [int $estimated = ...])"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-control-paged-result-response.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the LDAP pagination cookie

## Description

```php
bool ldap_control_paged_result_response(resource $link, resource $result, [string $cookie = ...], [int $estimated = ...])
```

Retrieve the pagination information send by the server.

## Parameters

- **`$link`** — An LDAP resource, returned by `ldap_connect()`.
- **`$result`**
- **`$cookie`** — An opaque structure sent by the server.
- **`$estimated`** — The estimated number of entries to retrieve.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function has been removed. |
| 7.4.0 | This function has been deprecated. |

## See Also

`ldap_control_paged_result()` [RFC2696 : LDAP Control Extension for Simple Paged Results Manipulation](2696)
