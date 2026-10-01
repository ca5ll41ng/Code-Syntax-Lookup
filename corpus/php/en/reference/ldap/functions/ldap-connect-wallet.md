---
id: "en-php-function-function-ldap-connect-wallet"
language: "php"
lang: "en"
category: "function"
name: "ldap_connect_wallet"
title: "Connect to an LDAP server"
signature: "#[\\Deprecated(since: \"8.5\", message: \"as it is broken since PHP 8.0\")] LDAP\\Connection|false ldap_connect_wallet(string|null $uri = null, string $wallet, string $password, int $auth_mode = GSLC_SSL_NO_AUTH)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-connect-wallet.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Connect to an LDAP server

## Description

```php
#[\Deprecated(since: "8.5", message: "as it is broken since PHP 8.0")] LDAP\Connection|false ldap_connect_wallet(string|null $uri = null, string $wallet, string $password, int $auth_mode = GSLC_SSL_NO_AUTH)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$uri`**
- **`$wallet`**
- **`$password`**
- **`$auth_mode`**

## Return Values

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | This function has been deprecated. Oracle LDAP (Oracle Instant Client) support is deprecated in PHP 8.5.0. |

## See Also

`ldap_connect()`
