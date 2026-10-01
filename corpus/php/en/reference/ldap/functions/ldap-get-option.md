---
id: "en-php-function-function-ldap-get-option"
language: "php"
lang: "en"
category: "function"
name: "ldap_get_option"
title: "Get the current value for given option"
signature: "bool ldap_get_option(LDAP\\Connection|null $ldap, int $option, array|string|int $value = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-get-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the current value for given option

## Description

```php
bool ldap_get_option(LDAP\Connection|null $ldap, int $option, array|string|int $value = null)
```

Sets `$value` to the value of the specified option.

## Parameters

- **`$ldap`** — Either an `LDAP\Connection` instance, returned by `ldap_connect()`, to get the option for that connection, or `null` to get the global option.
- **`$option`** — The parameter `$option` can be one of: | Option | Type | since | | --- | --- | --- | | `LDAP_OPT_DEREF` | `int` | | | `LDAP_OPT_SIZELIMIT` | `int` | | | `LDAP_OPT_TIMELIMIT` | `int` | | | `LDAP_OPT_NETWORK_TIMEOUT` | `int` | | | `LDAP_OPT_PROTOCOL_VERSION` | `int` | | | `LDAP_OPT_ERROR_NUMBER` | `int` | | | `LDAP_OPT_DIAGNOSTIC_MESSAGE` | `string` | | | `LDAP_OPT_REFERRALS` | `int` | | | `LDAP_OPT_RESTART` | `int` | | | `LDAP_OPT_HOST_NAME` | `string` | | | `LDAP_OPT_ERROR_STRING` | `string` | | | `LDAP_OPT_MATCHED_DN` | `string` | | | `LDAP_OPT_SERVER_CONTROLS` | `array` | | | `LDAP_OPT_CLIENT_CONTROLS` | `array` | | | `LDAP_OPT_X_KEEPALIVE_IDLE` | `int` | 7.1 | | `LDAP_OPT_X_KEEPALIVE_PROBES` | `int` | 7.1 | | `LDAP_OPT_X_KEEPALIVE_INTERVAL` | `int` | 7.1 | | `LDAP_OPT_X_TLS_CACERTDIR` | `string` | 7.1 | | `LDAP_OPT_X_TLS_CACERTFILE` | `string` | 7.1 | | `LDAP_OPT_X_TLS_CERTFILE` | `string` | 7.1 | | `LDAP_OPT_X_TLS_CIPHER_SUITE` | `string` | 7.1 | | `LDAP_OPT_X_TLS_CRLCHECK` | `int` | 7.1 | | `LDAP_OPT_X_TLS_CRL_NONE` | `int` | 7.1 | | `LDAP_OPT_X_TLS_CRL_PEER` | `int` | 7.1 | | `LDAP_OPT_X_TLS_CRL_ALL` | `int` | 7.1 | | `LDAP_OPT_X_TLS_CRLFILE` | `string` | 7.1 | | `LDAP_OPT_X_TLS_DHFILE` | `string` | 7.1 | | `LDAP_OPT_X_TLS_KEYFILE` | `string` | 7.1 | | `LDAP_OPT_X_TLS_PACKAGE` | `string` | 7.1 | | `LDAP_OPT_X_TLS_PROTOCOL_MIN` | `int` | 7.1 | | `LDAP_OPT_X_TLS_PROTOCOL_MAX` | `int` | 8.4 | | `LDAP_OPT_X_TLS_RANDOM_FILE` | `string` | 7.1 | | `LDAP_OPT_X_TLS_REQUIRE_CERT` | `int` | |
- **`$value`** — This will be set to the option value.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | `$ldap` is now nullable. A ValueError is now thrown when passing an invalid `$option`. |
| 8.1.0 | The `$ldap` parameter expects an `LDAP\Connection` instance now; previously, a valid `ldap link` `resource` was expected. |

## Examples

**Check protocol version**

```php


<?php
// $ds is a valid LDAP\Connection instance for a directory server
if (ldap_get_option($ds, LDAP_OPT_PROTOCOL_VERSION, $version)) {
    echo "Using protocol version $version\n";
} else {
    echo "Unable to determine protocol version\n";
}
?>

    
```

## Notes

> This function is only available when using OpenLDAP 2.x.x OR Netscape Directory SDK x.x.

## See Also

`ldap_set_option()`
