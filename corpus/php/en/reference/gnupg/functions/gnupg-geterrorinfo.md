---
id: "en-php-function-function-gnupg-geterrorinfo"
language: "php"
lang: "en"
category: "function"
name: "gnupg_geterrorinfo"
title: "Returns the error info"
signature: "array gnupg_geterrorinfo(resource $identifier)"
module: "gnupg"
source_url: "https://www.php.net/manual/en/function.gnupg-geterrorinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the error info

## Description

```php
array gnupg_geterrorinfo(resource $identifier)
```

## Parameters

- **`$identifier`** — The gnupg identifier, from a call to `gnupg_init()` or `gnupg`.

## Return Values

Returns an array with error info.

## Examples

**Procedural `gnupg_geterrorinfo()` example**

```php


<?php
$res = gnupg_init();
// this is called without any error
print_r(gnupg_geterrorinfo($res));
?>

    
```

The above example will output:

```text


array(4) {
  ["generic_message"]=>
  bool(false)
  ["gpgme_code"]=>
  int(0)
  ["gpgme_source"]=>
  string(18) "Unspecified source"
  ["gpgme_message"]=>
  string(7) "Success"
}

    
```

**OO `gnupg_geterrorinfo()` example**

```php


<?php
$gpg = new gnupg();
// error call
$gpg->decrypt('abc');
// error info should be displayed
print_r($gpg->geterrorinfo());
?>

    
```

The above example will output:

```text


array(4) {
  ["generic_message"]=>
  string(14) "decrypt failed"
  ["gpgme_code"]=>
  int(117440570)
  ["gpgme_source"]=>
  string(5) "GPGME"
  ["gpgme_message"]=>
  string(7) "No data"
}

    
```
