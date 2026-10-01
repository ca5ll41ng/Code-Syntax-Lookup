---
id: "en-php-function-function-radius-salt-encrypt-attr"
language: "php"
lang: "en"
category: "function"
name: "radius_salt_encrypt_attr"
title: "Salt-encrypts a value"
signature: "string|false radius_salt_encrypt_attr(resource $radius_handle, string $data)"
module: "radius"
source_url: "https://www.php.net/manual/en/function.radius-salt-encrypt-attr.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Salt-encrypts a value

## Description

```php
string|false radius_salt_encrypt_attr(resource $radius_handle, string $data)
```

Applies the RADIUS salt-encryption algorithm to the given value.

In general, this is achieved automatically by providing the `RADIUS_OPTION_SALT` option to an attribute setter function, but this function can be used if low-level request construction is required.

## Parameters

- **`$data`** — The data to be salt-encrypted.

## Return Values

Returns the salt-encrypted data or `false` on failure.

## See Also

 `radius_put_addr()` `radius_put_attr()` `radius_put_int()` `radius_put_string()`
