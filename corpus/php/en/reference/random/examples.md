---
id: "en-php-guide-random-examples"
language: "php"
lang: "en"
category: "guide"
name: "random.examples"
title: "Examples"
module: "random"
source_url: "https://www.php.net/manual/en/random.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

**Random Example**

```php


<?php
$r = new \Random\Randomizer();

// Generating a random domain name
printf(
    "%s.example.com\n",
    $r->getBytesFromString('abcdefghijklmnopqrstuvwxyz0123456789', 16)
);

// Shuffle array:
$fruits = [ 'red' => '🍎', 'green' => '🥝', 'yellow' => '🍌', 'pink' => '🍑', 'purple' => '🍇' ];
echo "Salad: ", implode(', ', $r->shuffleArray($fruits)), "\n";

// Shuffeling array keys
$fruits = [ 'red' => '🍎', 'green' => '🥝', 'yellow' => '🍌', 'pink' => '🍑', 'purple' => '🍇' ];

$keys = $r->pickArrayKeys($fruits, 2);
// Look up the values for the picked keys.
$selection = array_map(
    static fn ($key) => $fruits[$key],
    $keys
);

echo "Values: ", implode(', ', $selection), "\n";
?>

  
```

The above example will output something similar to:

```text


j87fzv1p0daiwmlo.example.com
Salad: 🥝, 🍇, 🍎, 🍌, 🍑
Values: 🍌, 🍑

  
```
