---
id: "en-php-function-function-gnupg-getengineinfo"
language: "php"
lang: "en"
category: "function"
name: "gnupg_getengineinfo"
title: "Returns the engine info"
signature: "array gnupg_getengineinfo(resource $identifier)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-getengineinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the engine info

## Description

```php
array gnupg_getengineinfo(resource $identifier)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.

## Return Values

Returns an array with engine info consisting of `protocol`, `file_name` and `home_dir`.

## Examples

**Procedural `gnupg_getengineinfo()` example**

```php


<?php
$res = gnupg_init();
print_r(gnupg_getengineinfo($res));
?>

    
```

The above example will output:

```text


array(3) {
  ["protocol"]=>
  int(0)
  ["file_name"]=>
  string(12) "/usr/bin/gpg"
  ["home_dir"]=>
  string(0) ""
}

    
```

**OO `gnupg_getengineinfo()` example**

```php


<?php
$gpg = new gnupg(["file_name" => "/usr/bin/gpg2", "home_dir" => "/var/www/.gnupg"]);
print_r($gpg->getengineinfo());
?>

    
```

The above example will output:

```text


array(3) {
  ["protocol"]=>
  int(0)
  ["file_name"]=>
  string(13) "/usr/bin/gpg2"
  ["home_dir"]=>
  string(15) "/var/www/.gnupg"
}

    
```
