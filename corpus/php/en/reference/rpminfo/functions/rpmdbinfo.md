---
id: "en-php-function-function-rpmdbinfo"
language: "php"
lang: "en"
category: "function"
name: "rpmdbinfo"
title: "Get information from installed RPM"
signature: "array|null rpmdbinfo(string $nevr, bool $full = false)"
module: "rpminfo"
source_url: "https://www.php.net/manual/en/function.rpmdbinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get information from installed RPM

## Description

```php
array|null rpmdbinfo(string $nevr, bool $full = false)
```

Retrieve information about an installed package, from the system RPM database.

## Parameters

- **`$nevr`** — Name with optional epoch, version and release.
- **`$full`** — If `true` all information headers for the file are retrieved, else only a minimal set.

## Return Values

An `array` of `array` of information, or `null` on error.

## Examples

**A `rpmdbinfo()` example**

```php


<?php
rpmaddtag(RPMTAG_INSTALLTIME);
$info = rpmdbinfo("php-pecl-rpminfo");
print_r($info);
?>

   
```

The above example will output:

```text


Array
(
    [0] => Array
        (
            [Name] => php-pecl-rpminfo
            [Version] => 0.4.2
            [Release] => 1.fc31
            [Summary] => RPM information
            [Installtime] => 1586244687
            [Arch] => x86_64
        )
)

   
```

## See Also

 `rpmaddtag()`
