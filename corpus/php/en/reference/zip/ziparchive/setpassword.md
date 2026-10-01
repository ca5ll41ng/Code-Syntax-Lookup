---
id: "en-php-function-ziparchive-setpassword"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setPassword"
title: "Set the password for the active archive"
signature: "public bool ZipArchive::setPassword(string $password)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setpassword.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the password for the active archive

## Description

```php
public bool ZipArchive::setPassword(string $password)
```

Sets the password for the active archive.

## Parameters

- **`$password`** — The password to be used for the archive.

## Return Values

Returns `true` on success or `false` on failure.

## Notes

> As of PHP 7.2.0 and libzip 1.2.0 the password is used to decompress the archive, and is also the default password for `ZipArchive::setEncryptionName()` and `ZipArchive::setEncryptionIndex()`. Formerly, this function only set the password to be used to decompress the archive; it did not turn a non-password-protected `ZipArchive` into a password-protected `ZipArchive`.

## See Also

`ZipArchive::setEncryptionIndex()` `ZipArchive::setEncryptionName()`
