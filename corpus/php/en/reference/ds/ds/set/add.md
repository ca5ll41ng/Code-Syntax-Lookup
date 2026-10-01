---
id: "en-php-function-ds-set-add"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::add"
title: "Adds values to the set"
signature: "public void Ds\\Set::add(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds values to the set

## Description

```php
public void Ds\Set::add(mixed $values)
```

Adds all given values to the set that haven't already been added.

> Values of type `object` are supported. If an object implements `Ds\Hashable`, equality will be determined by the object's equals function. If an object does not implement `Ds\Hashable`, objects must be references to the same instance to be considered equal.

> All comparisons are strict (type and value).

## Parameters

- **`$values`** — Values to add to the set.

## Return Values

No value is returned.

## Examples

**`Ds\Set::add()` example using integers**

```php


<?php
$set = new \Ds\Set();

$set->add(1);
$set->add(1);
$set->add(2);
$set->add(3);

// Strict comparison would not treat these the same as int(1)
$set->add("1");
$set->add(true);

var_dump($set);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#1 (5) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
  [3]=>
  string(1) "1"
  [4]=>
  bool(true)
}

   
```

**`Ds\Set::add()` example using objects**

```php


<?php
class HashableObject implements \Ds\Hashable
{
    /**
     * An arbitrary value to use as the hash value. Does not define equality.
     */
    private $value;

    public function __construct($value)
    {
        $this->value = $value;
    }

    public function hash()
    {
        return $this->value;
    }

    public function equals($obj): bool
    {
        return $this->value === $obj->value;
    }
}

$set = new \Ds\Set();

$obj = new \ArrayIterator([]);

// Adding the same instance multiple times will only add the first.
$set->add($obj);
$set->add($obj);

// Adding multiple instances of the same object will add them all.
$set->add(new \stdClass());
$set->add(new \stdClass());

// Adding multiple instances of equal hashable objects will only add the first.
$set->add(new \HashableObject(1));
$set->add(new \HashableObject(1));
$set->add(new \HashableObject(2));
$set->add(new \HashableObject(2));

var_dump($set);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#1 (5) {
  [0]=>
  object(ArrayIterator)#2 (1) {
    ["storage":"ArrayIterator":private]=>
    array(0) {
    }
  }
  [1]=>
  object(stdClass)#3 (0) {
  }
  [2]=>
  object(stdClass)#4 (0) {
  }
  [3]=>
  object(HashableObject)#5 (1) {
    ["value":"HashableObject":private]=>
    int(1)
  }
  [4]=>
  object(HashableObject)#6 (1) {
    ["value":"HashableObject":private]=>
    int(2)
  }
}

   
```
