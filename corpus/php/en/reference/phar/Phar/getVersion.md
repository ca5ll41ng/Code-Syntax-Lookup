---
id: "en-php-function-phar-getversion"
language: "php"
lang: "en"
category: "function"
name: "Phar::getVersion"
title: "Return version info of Phar archive"
signature: "public string Phar::getVersion()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.getversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return version info of Phar archive

## Description

```php
public string Phar::getVersion()
```

Returns the API version of an opened Phar archive.

## Parameters

## Return Values

The opened archive's API version. This is not to be confused with the API version that the loaded phar extension will use to create new phars. Each Phar archive has the API version hard-coded into its manifest. See Phar file format documentation for more information.

## See Also

`Phar::apiVersion()`
