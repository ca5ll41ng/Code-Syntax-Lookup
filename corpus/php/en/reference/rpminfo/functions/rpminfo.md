---
id: "en-php-function-function-rpminfo"
language: "php"
lang: "en"
category: "function"
name: "rpminfo"
title: "Get information from a RPM file"
signature: "array|null rpminfo(string $path, bool $full = false, [string $error = ...])"
module: "rpminfo"
source_url: "https://www.php.net/manual/en/function.rpminfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get information from a RPM file

## Description

```php
array|null rpminfo(string $path, bool $full = false, [string $error = ...])
```

Retrieve information about a local file, a RPM package.

## Parameters

- **`$path`** — Path of the RPM file.
- **`$full`** — If `true` all information headers for the file are retrieved, else only a minimal set.
- **`$error`** — If provided, will receive the possible error message, and will avoid a runtime warning.

## Return Values

An `array` of information, or `null` on error.

## Examples

**A `rpminfo()` example**

```php


<?php
rpmaddtag(RPMTAG_BUILDTIME);
$info = rpminfo("./php-pecl-rpminfo-0.4.2-1.el8.remi.7.4.x86_64.rpm");
print_r($info);
?>

   
```

The above example will output:

```text


Array
(
    [Name] => php-pecl-rpminfo
    [Version] => 0.4.2
    [Release] => 1.el8
    [Summary] => RPM information
    [Buildtime] => 1586244821
    [Arch] => x86_64
)

   
```

## See Also

 `rpmaddtag()`
