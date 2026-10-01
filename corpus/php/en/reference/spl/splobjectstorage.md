---
id: "en-php-guide-class-splobjectstorage"
language: "php"
lang: "en"
category: "guide"
name: "class.splobjectstorage"
title: "The SplObjectStorage class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.splobjectstorage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SplObjectStorage class

SplObjectStorage

   Introduction  The SplObjectStorage class provides a map from objects to data or, by ignoring data, an object set. This dual purpose can be useful in many cases involving the need to uniquely identify objects.      Class Synopsis    `SplObjectStorage`   `implements` Countable   SeekableIterator   Serializable   ArrayAccess         Examples  
**`SplObjectStorage` as a set**

```php

<?php
// As an object set
$s = new SplObjectStorage();

$o1 = new stdClass;
$o2 = new stdClass;
$o3 = new stdClass;

$s->attach($o1);
$s->attach($o2);

var_dump($s->contains($o1));
var_dump($s->contains($o2));
var_dump($s->contains($o3));

$s->detach($o2);

var_dump($s->contains($o1));
var_dump($s->contains($o2));
var_dump($s->contains($o3));
?>

    
```

The above example will output:

```text

bool(true)
bool(true)
bool(false)
bool(true)
bool(false)
bool(false)

     
```

 
**`SplObjectStorage` as a map**

```php

<?php
// As a map from objects to data
$s = new SplObjectStorage();

$o1 = new stdClass;
$o2 = new stdClass;
$o3 = new stdClass;

$s[$o1] = "data for object 1";
$s[$o2] = array(1,2,3);

if (isset($s[$o2])) {
    var_dump($s[$o2]);
}
?>

    
```

The above example will output:

```text

array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

     
```

      Changelog 
|  |  |
| --- | --- |
| 8.4.0 | Implement SeekableIterator, previously only Iterator was implemented. |
