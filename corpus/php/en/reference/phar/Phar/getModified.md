---
id: "en-php-function-phar-getmodified"
language: "php"
lang: "en"
category: "function"
name: "Phar::getModified"
title: "Return whether phar was modified"
signature: "public bool Phar::getModified()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.getmodified.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return whether phar was modified

## Description

```php
public bool Phar::getModified()
```

This method can be used to determine whether a phar has either had an internal file deleted, or contents of a file changed in some way.

## Parameters

No parameters.

## Return Values

`true` if the phar has been modified since opened, `false` if not.
