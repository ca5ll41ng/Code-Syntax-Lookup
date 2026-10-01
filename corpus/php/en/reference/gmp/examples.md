---
id: "en-php-guide-gmp-examples"
language: "php"
lang: "en"
category: "guide"
name: "gmp.examples"
title: "Examples"
module: "gmp"
source_url: "https://www.php.net/manual/en/gmp.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

**Factorial function using GMP**

```php


<?php
function fact($x) 
{
    $return = 1;
    for ($i=2; $i <= $x; $i++) {
        $return = gmp_mul($return, $i);
    }
    return $return;
}

echo gmp_strval(fact(1000)) . "\n";
?>

   
```

This will calculate factorial of 1000 (pretty big number) very fast.
