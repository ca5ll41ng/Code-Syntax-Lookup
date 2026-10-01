---
id: "en-php-guide-ds-examples"
language: "php"
lang: "en"
category: "guide"
name: "ds.examples"
title: "Examples"
module: "ds"
source_url: "https://www.php.net/manual/en/ds.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

**Vector**

```php


<?php

$vector = new \Ds\Vector();

$vector->push('a');
$vector->push('b', 'c');

$vector[] = 'd';

print_r($vector);

?>

  
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
)

  
```

**Map**

```php


<?php

$map = new \Ds\Map();

$map->put('a', 1);
$map->put('b', 2);

$map['c'] = 3;

print_r($map);

?>

  
```

The above example will output something similar to:

```text


Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => a
            [value] => 1
        )

    [1] => Ds\Pair Object
        (
            [key] => b
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 3
        )

)

  
```
