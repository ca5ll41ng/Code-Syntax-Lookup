---
id: "en-php-function-function-ldap-exop"
language: "php"
lang: "en"
category: "function"
name: "ldap_exop"
title: "Performs an extended operation"
signature: "LDAP\\Result|bool ldap_exop(LDAP\\Connection $ldap, string $request_oid, string|null $request_data = null, array|null $controls = null, [string $response_data = ...], [string $response_oid = ...])"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-exop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Performs an extended operation

## Description

```php
LDAP\Result|bool ldap_exop(LDAP\Connection $ldap, string $request_oid, string|null $request_data = null, array|null $controls = null, [string $response_data = ...], [string $response_oid = ...])
```

Performs an extended operation on the specified `$ldap` with `$request_oid` the OID of the operation and `$request_data` the data.

> Using more than 4 parameters has been deprecated, use `ldap_exop_sync()` instead.

## Parameters

- **`$ldap`** — An `LDAP\Connection` instance, returned by `ldap_connect()`.
- **`$request_oid`** — The extended operation request OID. Can be one of the `LDAP_EXOP_{*}` constants, or a string with the OID of the operation.
- **`$request_data`** — The extended operation request data. May be NULL for some operations like `LDAP_EXOP_WHO_AM_I`, may also need to be BER encoded.
- **`$controls`** — Array of LDAP Controls to send with the request.
- **`$response_data`** — Will be filled with the extended operation response data if provided. If not provided `ldap_parse_exop()` may be used on the result object later to get this data.
- **`$response_oid`** — Will be filled with the response OID if provided, usually equal to the request OID.

## Return Values

When used with `$response_data`, returns `true` on success or `false` on error. When used without `$response_data`, returns a result identifier or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | Using more than 4 parameters has been deprecated, use `ldap_exop_sync()` instead. |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |
| 7.3.0 | Support for `$controls` added |

## Examples

**Whoami extended operation**

```php


<?php
$ds = ldap_connect("localhost");  // assuming the LDAP server is on this host

if ($ds) {
    // bind with appropriate dn to give update access
    $bind = ldap_bind($ds, "cn=root, o=My Company, c=US", "secret");
    if (!$bind) {
      echo "Unable to bind to LDAP server";
      exit;
    }

    // Call WHOAMI EXOP
    $r = ldap_exop($ds, LDAP_EXOP_WHO_AM_I);

    // Parse the result object
    ldap_parse_exop($ds, $r, $retdata);
    // Output: string(31) "dn:cn=root, o=My Company, c=US"
    var_dump($retdata);

    // Same thing using $response_data parameter
    $success = ldap_exop($ds, LDAP_EXOP_WHO_AM_I, NULL, NULL, $retdata, $retoid);
    if ($success) {
      var_dump($retdata);
    }

    ldap_close($ds);
} else {
    echo "Unable to connect to LDAP server";
}
?>

    
```

## See Also

 `ldap_exop_sync()` `ldap_exop_whoami()` `ldap_exop_refresh()` `ldap_exop_passwd()` `ldap_parse_result()` `ldap_parse_exop()`
