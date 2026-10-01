---
id: "en-php-function-rarentry-isencrypted"
language: "php"
lang: "en"
category: "function"
name: "RarEntry::isEncrypted"
title: "Test whether an entry is encrypted"
signature: "public bool RarEntry::isEncrypted()"
module: "rar"
source_url: "https://www.php.net/manual/en/rarentry.isencrypted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Test whether an entry is encrypted

## Description

```php
public bool RarEntry::isEncrypted()
```

Tests whether the current entry contents are encrypted.

> The password used may differ between files inside the same RAR archive.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the current entry is encrypted and `false` otherwise.
