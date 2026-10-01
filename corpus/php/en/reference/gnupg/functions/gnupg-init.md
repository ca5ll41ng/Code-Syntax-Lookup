---
id: "en-php-function-function-gnupg-init"
language: "php"
lang: "en"
category: "function"
name: "gnupg_init"
title: "Initialize a connection"
signature: "resource gnupg_init(array|null $options = null)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initialize a connection

## Description

```php
resource gnupg_init(array|null $options = null)
```

## Parameters

- **`$options`** — Must be an associative array. It is used to change the default configuration of the crypto engine. | key | type | description | | --- | --- | --- | | file_name | `string` | It is the file name of the executable program implementing this protocol which is usually path of the `gpg` executable. | | home_dir | `string` | It is the directory name of the configuration directory. It also overrides `GNUPGHOME` environment variable that is used for the same purpose. |

## Return Values

A GnuPG `resource` connection used by other GnuPG functions.

## Changelog

|  |  |
| --- | --- |
| PECL gnupg 1.5.0 | The `$options` parameter was added. |

## Examples

**Procedural `gnupg_init()` example with default setting**

```php


<?php
$res = gnupg_init();
?>

    
```

**Procedural `gnupg_init()` example with overridden file name and home dir**

```php


<?php
$res = gnupg_init(["file_name" => "/usr/bin/gpg2", "home_dir" => "/var/www/.gnupg"]);
?>

    
```

**OO gnupg initializer example with default setting**

```php


<?php
$gpg = new gnupg();
?>

    
```

**OO gnupg initializer example with overridden file name and home dir**

```php


<?php
$gpg = new gnupg(["file_name" => "/usr/bin/gpg2", "home_dir" => "/var/www/.gnupg"]);
?>

    
```
