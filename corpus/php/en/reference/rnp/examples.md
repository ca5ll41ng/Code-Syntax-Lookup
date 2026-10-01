---
id: "en-php-guide-rnp-examples"
language: "php"
lang: "en"
category: "guide"
name: "rnp.examples"
title: "Examples"
module: "rnp"
source_url: "https://www.php.net/manual/en/rnp.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

## Clearsign text

This example will clearsign a given text.

**RNP clearsign example**

```php


<?php
// init FFI object
$ffi = rnp_ffi_create('GPG', 'GPG');

// generate RSA key
$key = rnp_op_generate_key($ffi, 'test@example.com', 'RSA');

// sign
$data = "Example text to sign";
$signature = rnp_op_sign_cleartext($ffi, $data, array($key));

echo $signature;

// destroy FFI object
rnp_ffi_destroy($ffi);
?>

   
```
