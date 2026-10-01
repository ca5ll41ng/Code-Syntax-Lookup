---
id: "en-php-function-function-ldap-set-option"
language: "php"
lang: "en"
category: "function"
name: "ldap_set_option"
title: "Set the value of the given option"
signature: "bool ldap_set_option(LDAP\\Connection|null $ldap, int $option, array|string|int|bool $value)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-set-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the value of the given option

## Description

```php
bool ldap_set_option(LDAP\Connection|null $ldap, int $option, array|string|int|bool $value)
```

Sets the value of the specified option to be `$value`.

> TLS-related options (`LDAP_OPT_X_TLS_*`) must be set globally by passing `null` as `$ldap`, because the TLS context is initialized before the per-connection state is available. These options must also be set before calling `ldap_bind()`.

## Parameters

- **`$ldap`** — Either an `LDAP\Connection` instance, returned by `ldap_connect()`, to set the option for that connection, or `null` to set the option globally.
- **`$option`** — The parameter `$option` can be one of: | Option | Type | Available since | | --- | --- | --- | | `LDAP_OPT_DEREF` | `int` | | | `LDAP_OPT_SIZELIMIT` | `int` | | | `LDAP_OPT_TIMELIMIT` | `int` | | | `LDAP_OPT_NETWORK_TIMEOUT` | `int` | | | `LDAP_OPT_PROTOCOL_VERSION` | `int` | | | `LDAP_OPT_ERROR_NUMBER` | `int` | | | `LDAP_OPT_REFERRALS` | `bool` | | | `LDAP_OPT_RESTART` | `bool` | | | `LDAP_OPT_HOST_NAME` | `string` | | | `LDAP_OPT_ERROR_STRING` | `string` | | | `LDAP_OPT_DIAGNOSTIC_MESSAGE` | `string` | | | `LDAP_OPT_MATCHED_DN` | `string` | | | `LDAP_OPT_SERVER_CONTROLS` | `array` | | | `LDAP_OPT_CLIENT_CONTROLS` | `array` | | | `LDAP_OPT_X_KEEPALIVE_IDLE` | `int` | PHP 7.1.0 | | `LDAP_OPT_X_KEEPALIVE_PROBES` | `int` | PHP 7.1.0 | | `LDAP_OPT_X_KEEPALIVE_INTERVAL` | `int` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_CACERTDIR` | `string` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_CACERTFILE` | `string` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_CERTFILE` | `string` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_CIPHER_SUITE` | `string` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_CRLCHECK` | `int` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_CRLFILE` | `string` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_DHFILE` | `string` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_KEYFILE` | `string` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_PROTOCOL_MIN` | `int` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_PROTOCOL_MAX` | `int` | PHP 8.4.0 | | `LDAP_OPT_X_TLS_RANDOM_FILE` | `string` | PHP 7.1.0 | | `LDAP_OPT_X_TLS_REQUIRE_CERT` | `int` | PHP 7.0.5 | — `LDAP_OPT_SERVER_CONTROLS` and `LDAP_OPT_CLIENT_CONTROLS` require a list of controls, this means that the value must be an array of controls. A control consists of an *oid* identifying the control, an optional *value*, and an optional flag for *criticality*. In PHP a control is given by an array containing an element with the key *oid* and string value, and two optional elements. The optional elements are key *value* with string value and key *iscritical* with boolean value. *iscritical* defaults to *`false`* if not supplied. See [draft-ietf-ldapext-ldap-c-api-xx.txt]() for details. See also the second example below.
  > All TLS options must be set globally before `ldap_connect()` for ldaps connection or for the connection before `ldap_start_tls()`.


- **`$value`** — The new value for the specified `$option`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | A ValueError is now thrown when passing an invalid `$option`. |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |

## Examples

**Set protocol version**

```php


<?php
// $ds is a valid LDAP\Connection instance for a directory server
if (ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3)) {
    echo "Using LDAPv3";
} else {
    echo "Failed to set protocol version to 3";
}
?>

    
```

**Set server controls**

```php


<?php
// $ds is a valid LDAP\Connection instance for a directory server
// control with no value
$ctrl1 = array("oid" => "1.2.752.58.10.1", "iscritical" => true);
// iscritical defaults to FALSE
$ctrl2 = array("oid" => "1.2.752.58.1.10", "value" => "magic");
// try to set both controls
if (!ldap_set_option($ds, LDAP_OPT_SERVER_CONTROLS, array($ctrl1, $ctrl2))) {
    echo "Failed to set server controls";
}
?>

    
```

**Debugging a connection issue**

```php


<?php
// A NULL connection sets the option for the whole process (OpenLDAP only).
// Set before ldap_connect(), it also traces the initialization; set later,
// only the operations that follow are traced.
// 7 combines the OpenLDAP levels 1 (trace), 2 (packets) and 4 (arguments).
// The traces are written to stderr, not to the output of the script.
ldap_set_option(null, LDAP_OPT_DEBUG_LEVEL, 7);

$ds = ldap_connect("ldaps://ldap.example.com:636");
ldap_bind($ds);
?>

    
```

## Notes

> This function is only available when using OpenLDAP 2.x.x OR Netscape Directory SDK x.x.

## See Also

`ldap_get_option()`
