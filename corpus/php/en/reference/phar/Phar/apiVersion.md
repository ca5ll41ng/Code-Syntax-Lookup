---
id: "en-php-function-phar-apiversion"
language: "php"
lang: "en"
category: "function"
name: "Phar::apiVersion"
title: "Returns the api version"
signature: "final public static string Phar::apiVersion()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.apiversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the api version

## Description

```php
final public static string Phar::apiVersion()
```

Return the API version of the phar file format that will be used when creating phars. The Phar extension supports reading API version 1.0.0 or newer. API version 1.1.0 is required for SHA-256 and SHA-512 hash, and API version 1.1.1 is required to store empty directories.

## Parameters

## Return Values

The API version string as in `"1.0.0"`.

## Examples

**A `Phar::apiVersion()` example**

```php


<?php
echo Phar::apiVersion();
?>

    
```

The above example will output:

```text


1.1.1

    
```
