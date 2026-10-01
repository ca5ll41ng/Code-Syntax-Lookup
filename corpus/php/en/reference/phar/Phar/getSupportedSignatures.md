---
id: "en-php-function-phar-getsupportedsignatures"
language: "php"
lang: "en"
category: "function"
name: "Phar::getSupportedSignatures"
title: "Return array of supported signature types"
signature: "final public static array Phar::getSupportedSignatures()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.getsupportedsignatures.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return array of supported signature types

## Description

```php
final public static array Phar::getSupportedSignatures()
```

Return array of supported signature types

## Parameters

No parameters.

## Return Values

Returns an array containing any of `MD5`, `SHA-1`, `SHA-256`, `SHA-512`, or `OpenSSL`.

## See Also

`Phar::getSignature()` `Phar::setSignatureAlgorithm()`
