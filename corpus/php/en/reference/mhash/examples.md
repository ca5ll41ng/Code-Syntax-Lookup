---
id: "en-php-guide-mhash-examples"
language: "php"
lang: "en"
category: "guide"
name: "mhash.examples"
title: "Examples"
module: "mhash"
source_url: "https://www.php.net/manual/en/mhash.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

**Computes the MD5 digest and hmac and print it out as hex**

```php


<?php
$input = "what do ya want for nothing?";
$hash = mhash(MHASH_MD5, $input);
echo "The hash is " . bin2hex($hash) . "<br />\n";
$hash = mhash(MHASH_MD5, $input, "Jefe");
echo "The hmac is " . bin2hex($hash) . "<br />\n";
?>

   
```

The above example will output:

```text


The hash is d03cb659cbf9192dcd066272249f8412 
The hmac is 750c783e6ab0b503eaa86e310a5db738 

   
```
