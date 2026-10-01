---
id: "en-php-function-function-rpmexpand"
language: "php"
lang: "en"
category: "function"
name: "rpmexpand"
title: "Retrieve expanded value of a RPM macro"
signature: "string rpmexpand(string $text)"
module: "rpminfo"
source_url: "https://www.php.net/manual/en/function.rpmexpand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve expanded value of a RPM macro

## Description

```php
string rpmexpand(string $text)
```

Retrieve expanded value of a RPM macro.

## Parameters

- **`$text`** — Text with RPM macros to expand.

## Return Values

A `string` with concatenated macro expansions.

## Examples

**A `rpmexpand()` example**

```php


<?php
$distro = rpmexpand("%{?fedora:Fedora %{fedora}}%{?rhel:Enterprise Linux %{rhel}}");
print_r($distro);
?>

   
```

The above example will output:

```text


Fedora 41

   
```

## See Also

 `rpmexpandnumeric()`
