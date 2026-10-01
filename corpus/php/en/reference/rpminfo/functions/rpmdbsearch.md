---
id: "en-php-function-function-rpmdbsearch"
language: "php"
lang: "en"
category: "function"
name: "rpmdbsearch"
title: "Search RPM packages"
signature: "array|null rpmdbsearch(string $pattern, int $rpmtag = RPMTAG_NAME, int $rpmmire = -1, bool $full = false)"
module: "rpminfo"
source_url: "https://www.php.net/manual/en/function.rpmdbsearch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Search RPM packages

## Description

```php
array|null rpmdbsearch(string $pattern, int $rpmtag = RPMTAG_NAME, int $rpmmire = -1, bool $full = false)
```

Search packages in the system RPM database.

## Parameters

- **`$pattern`** — Value to search for.
- **`$rpmtag`** — Search criterion, which is one of the `RPMTAG_{*}` constants.
- **`$rpmmire`** — Pattern type, which is one of the `RPMMIRE_{*}` constants. When < 0 the criterion must equal the value, and database index is used if possible.
- **`$full`** — If `true` all information headers for the file are retrieved, else only a minimal set.

## Return Values

An `array` of `array` of information, or `null` on error.

## Examples

**Searching for the package owning a file**

```php


<?php
$info = rpmdbsearch("/usr/bin/php", RPMTAG_INSTFILENAMES);
print_r($info);
?>

   
```

The above example will output:

```text


Array
(
    [0] => Array
        (
            [Name] => php-cli
            [Version] => 7.4.4
            [Release] => 1.fc32
            [Summary] => Command-line interface for PHP
            [Arch] => x86_64
        )

)

   
```

## See Also

 `rpmaddtag()`
