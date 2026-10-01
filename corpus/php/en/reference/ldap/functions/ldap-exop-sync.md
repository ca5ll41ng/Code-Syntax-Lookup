---
id: "en-php-function-function-ldap-exop-sync"
language: "php"
lang: "en"
category: "function"
name: "ldap_exop_sync"
title: "Performs an extended operation"
signature: "LDAP\\Result|bool ldap_exop_sync(LDAP\\Connection $ldap, string $request_oid, string|null $request_data = null, array|null $controls = null, string $response_data = null, string $response_oid = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-exop-sync.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Performs an extended operation

## Description

```php
LDAP\Result|bool ldap_exop_sync(LDAP\Connection $ldap, string $request_oid, string|null $request_data = null, array|null $controls = null, string $response_data = null, string $response_oid = null)
```

Performs an extended operation on the specified `$ldap` with `$request_oid` the OID of the operation and `$request_data` the data.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$request_oid`** — The extended operation request OID. Can be one of the `LDAP_EXOP_{*}` constants, or a string with the OID of the operation.
- **`$request_data`** — The extended operation request data. May be `null` for some operations like `LDAP_EXOP_WHO_AM_I`, may also need to be BER encoded.
- **`$controls`** — Array of LDAP Controls to send with the request.
- **`$response_data`** — Will be filled with the extended operation response data if provided. If not provided `ldap_parse_exop()` may be used on the result object later to get this data.
- **`$response_oid`** — Will be filled with the response OID if provided, usually equal to the request OID.

## Return Values

When used with `$response_data`, returns `true` on success or `false` on error. When used without `$response_data`, returns a result identifier or `false` on error.

## See Also

 `ldap_exop()` `ldap_exop_whoami()` `ldap_exop_refresh()` `ldap_exop_passwd()` `ldap_parse_result()` `ldap_parse_exop()`
