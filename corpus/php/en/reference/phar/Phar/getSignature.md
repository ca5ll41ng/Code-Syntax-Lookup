---
id: "en-php-function-phar-getsignature"
language: "php"
lang: "en"
category: "function"
name: "Phar::getSignature"
title: "Return MD5/SHA1/SHA256/SHA512/OpenSSL signature of a Phar archive"
signature: "public array|false Phar::getSignature()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.getsignature.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return MD5/SHA1/SHA256/SHA512/OpenSSL signature of a Phar archive

## Description

```php
public array|false Phar::getSignature()
```

Returns the verification signature of a phar archive in a hexadecimal string.

## Parameters

## Return Values

Array with the opened archive's signature in `hash` key and `MD5`, `SHA-1`, `SHA-256`, `SHA-512`, or `OpenSSL` in `hash_type`. This signature is a hash calculated on the entire phar's contents, and may be used to verify the integrity of the archive. A valid signature is absolutely required of all executable phar archives if the phar.require_hash INI variable is set to true. If there is no signature, the function returns `false`.
