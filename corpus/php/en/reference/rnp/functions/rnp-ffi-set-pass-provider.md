---
id: "en-php-function-function-rnp-ffi-set-pass-provider"
language: "php"
lang: "en"
category: "function"
name: "rnp_ffi_set_pass_provider"
title: "Set password provider callback function"
signature: "bool rnp_ffi_set_pass_provider(RnpFFI $ffi, callable $password_callback)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-ffi-set-pass-provider.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set password provider callback function

## Description

```php
bool rnp_ffi_set_pass_provider(RnpFFI $ffi, callable $password_callback)
```

Sets password provider function. This function can ask for the password on a standard input (if PHP script is executed in a command line environment), display GUI dialog or provide password in any other possible ways. Requested passwords are used to encrypt or decrypt secret keys or perform symmetric encryption/decryption operations.

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$password_callback`** — The function that is to be called for every password request. It has the following signature: `bool``{password_callback}()` `string``$key_fp` `string``$pgp_context` `string``$password` `$key_fp` - The key fingerprint, if any. Can be empty. `$pgp_context` - String describing why the key is being requested. `$password` - Password string reference where provided password should be stored to. Callback function should return `true` if password was successfully set or `false` on failure.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**simple callback function example**

```php


<?php
function password_callback(string $key_fp, string $pgp_context, string &$password)
{
    $password = "password";

    return true;
}

$ffi = rnp_ffi_create('GPG', 'GPG');

rnp_ffi_set_pass_provider($ffi, 'password_callback');

      
```
