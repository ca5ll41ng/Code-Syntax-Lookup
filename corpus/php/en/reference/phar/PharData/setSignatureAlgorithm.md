---
id: "en-php-function-phardata-setsignaturealgorithm"
language: "php"
lang: "en"
category: "function"
name: "PharData::setSignatureAlgorithm"
title: "Set the signature algorithm for a phar and apply it"
signature: "public void PharData::setSignatureAlgorithm(int $algo, string|null $privateKey = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.setsignaturealgorithm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the signature algorithm for a phar and apply it

## Description

```php
public void PharData::setSignatureAlgorithm(int $algo, string|null $privateKey = null)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

Set the signature algorithm for a phar and apply it. The signature algorithm must be one of `Phar::MD5`, `Phar::SHA1`, `Phar::SHA256`, `Phar::SHA512`, or `Phar::OPENSSL`.

## Parameters

- **`$algo`** — One of `Phar::MD5`, `Phar::SHA1`, `Phar::SHA256`, `Phar::SHA512`, or `Phar::OPENSSL`
- **`$privateKey`** — The contents of an OpenSSL private key, as extracted from a certificate or OpenSSL key file: ```php <?php $p = new PharData('archive.tar'); $private = openssl_get_privatekey(file_get_contents('private.pem')); $pkey = ''; openssl_pkey_export($private, $pkey); $p->setSignatureAlgorithm(Phar::OPENSSL, $pkey); ?> ``` See phar introduction for instructions on naming and placement of the public key file.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `UnexpectedValueException` for many errors, `BadMethodCallException` if called for a zip- or a tar-based phar archive, and a `PharException` if any problems occur flushing changes to disk.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$privateKey` is now nullable. |

## See Also

`Phar::getSupportedSignatures()` `Phar::getSignature()`
