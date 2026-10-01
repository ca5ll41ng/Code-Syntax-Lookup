---
id: "en-php-function-function-svn-auth-set-parameter"
language: "php"
lang: "en"
category: "function"
name: "svn_auth_set_parameter"
title: "Sets an authentication parameter"
signature: "void svn_auth_set_parameter(string $key, string $value)"
module: "svn"
source_url: "https://www.php.net/manual/en/function.svn-auth-set-parameter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets an authentication parameter

## Description

```php
void svn_auth_set_parameter(string $key, string $value)
```

Sets authentication parameter at `$key` to `$value`. For a list of valid keys and their meanings, consult the authentication constants list.

## Parameters

- **`$key`** — String key name. Use the authentication constants defined by this extension to specify a key.
- **`$value`** — String value to set to parameter at key. Format of value varies with the parameter.

## Return Values

No value is returned.

## Examples

**Default authentication example**

This example configures SVN so that the default username to use is 'Bob' and the default password is 'abc123':

```php


<?php
svn_auth_set_parameter(SVN_AUTH_PARAM_DEFAULT_USERNAME, 'Bob');
svn_auth_set_parameter(SVN_AUTH_PARAM_DEFAULT_PASSWORD, 'abc123');
?>

   
```

## Notes

> This function is *EXPERIMENTAL*. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

## See Also

 `svn_auth_get_parameter()` Authentication constants
