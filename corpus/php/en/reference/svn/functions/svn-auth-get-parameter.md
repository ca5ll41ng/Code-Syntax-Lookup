---
id: "en-php-function-function-svn-auth-get-parameter"
language: "php"
lang: "en"
category: "function"
name: "svn_auth_get_parameter"
title: "Retrieves authentication parameter"
signature: "string svn_auth_get_parameter(string $key)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-auth-get-parameter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves authentication parameter

## Description

```php
string svn_auth_get_parameter(string $key)
```

Retrieves authentication parameter at `$key`. For a list of valid keys and their meanings, consult the authentication constants list.

## Parameters

- **`$key`** — String key name. Use the authentication constants defined by this extension to specify a key.

## Return Values

Returns the string value of the parameter at `$key`; returns `null` if parameter does not exist.

## Notes

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## See Also

 `svn_auth_set_parameter()` Authentication constants
