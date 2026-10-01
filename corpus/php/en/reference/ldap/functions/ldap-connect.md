---
id: "en-php-function-function-ldap-connect"
language: "php"
lang: "en"
category: "function"
name: "ldap_connect"
title: "Connect to an LDAP server"
signature: "LDAP\\Connection|false ldap_connect(string|null $uri = null)"
module: "ldap"
source_url: "https://www.php.net/manual/en/function.ldap-connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Connect to an LDAP server

## Description

```php
LDAP\Connection|false ldap_connect(string|null $uri = null)
```

> As of PHP 8.3.0, the *following* signature is deprecated.

```php
LDAP\Connection|false ldap_connect(string|null $host = null, int $port = 389)
```

Creates an `LDAP\Connection` instance and checks whether the given `$uri` is plausible.

> This function does *not* open a network connection. It only validates the URI syntax and initializes connection parameters. The actual TCP connection is established when `ldap_bind()` is called.

> Options that affect the connection setup, such as `LDAP_OPT_PROTOCOL_VERSION` and TLS-related options (`LDAP_OPT_X_TLS_*`), must be set using `ldap_set_option()` after calling this function and before calling `ldap_bind()`. TLS-related options must be set globally (by passing `null` as the first argument to `ldap_set_option()`).

## Parameters

- **`$uri`** — A full LDAP URI of the form `ldap://hostname:port` or `ldaps://hostname:port` for SSL encryption. — You can also provide multiple LDAP-URIs separated by a space as one string — Note that `hostname:port` is not a supported LDAP URI as the schema is missing.
- **`$host`** — The hostname to connect to.
- **`$port`** — The port to connect to.

## Return Values

Returns an `LDAP\Connection` instance when the provided LDAP URI seems plausible. It's a syntactic check of the provided parameter but the server(s) will not be contacted! If the syntactic check fails it returns `false`. `ldap_connect()` will otherwise return a `LDAP\Connection` instance as it does not actually connect but just initializes the connecting parameters. The actual connect happens with the next calls to ldap_* functions, usually with `ldap_bind()`.

If no argument is specified then the `LDAP\Connection` instance of the already opened connection will be returned.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Calling `ldap_connect()` with Oracle wallet arguments is deprecated. Oracle LDAP (Oracle Instant Client) support is deprecated as of PHP 8.5.0. |
| 8.4.0 | Calling `ldap_connect()` with more than two arguments is now deprecated. |
| 8.3.0 | Calling `ldap_connect()` with separate `$hostname` and `$port` is now deprecated. |
| 8.1.0 | Returns an `LDAP\Connection` instance now; previously, a `resource` was returned. |

## Examples

**Example of connecting to LDAP server.**

```php


<?php

// LDAP variables
$ldapuri = "ldap://ldap.example.com:389";  // your ldap-uri

// Connecting to LDAP
$ldapconn = ldap_connect($ldapuri)
          or die("That LDAP-URI was not parseable");

?>

    
```

**Example of connecting securely to LDAP server.**

```php


<?php

// make sure your host is the correct one
// that you issued your secure certificate to
$ldaphost = "ldaps://ldap.example.com/";

// Connecting to LDAP
$ldapconn = ldap_connect($ldaphost)
          or die("That LDAP-URI was not parseable");

?>

    
```

## See Also

`ldap_bind()`
