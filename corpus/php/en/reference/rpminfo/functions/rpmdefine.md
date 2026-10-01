---
id: "en-php-function-function-rpmdefine"
language: "php"
lang: "en"
category: "function"
name: "rpmdefine"
title: "Define or change a RPM macro value"
signature: "bool rpmdefine(string $text)"
module: "rpminfo"
source_url: "https://www.php.net/manual/en/function.rpmdefine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Define or change a RPM macro value

## Description

```php
bool rpmdefine(string $text)
```

Define or change a RPM macro value.

This can be used to select the database path and backend to use instead of system default one.

## Parameters

- **`$text`** — Macro name, options, body.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**A `rpmdefine()` example**

```php


<?php
// use an old database (bdb) from an EL-8 chroot
rpmdefine("_dbpath /var/lib/mock/almalinux-8-x86_64/root/var/lib/rpm");
rpmdefine("_db_backend bdb_ro");
print_r(rpmdbinfo("almalinux-release")[0]["Summary"]);

// use a new database (sqlite) from a Fedora-41 chroot
rpmdefine("_dbpath /var/lib/mock/fedora-41-x86_64/root/usr/lib/sysimage/rpm");
rpmdefine("_db_backend sqlite");
print_r(rpmdbinfo("fedora-release")[0]["Summary"]);
?>

   
```

The above example will output:

```text


AlmaLinux release file
Fedora release files

   
```

## See Also

 `rpmexpand()` `rpmdbinfo()`
