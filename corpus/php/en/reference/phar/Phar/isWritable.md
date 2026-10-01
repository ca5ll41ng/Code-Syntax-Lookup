---
id: "en-php-function-phar-iswritable"
language: "php"
lang: "en"
category: "function"
name: "Phar::isWritable"
title: "Returns true if the phar archive can be modified"
signature: "public bool Phar::isWritable()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.iswritable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns true if the phar archive can be modified

## Description

```php
public bool Phar::isWritable()
```

This method returns `true` if `phar.readonly` is `0`, and the actual phar archive on disk is not read-only.

## Parameters

No parameters.

## Return Values

Returns `true` if the phar archive can be modified

## See Also

`Phar::canWrite()` `PharData::isWritable()`
