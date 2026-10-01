---
id: "en-php-function-recursivefilteriterator-construct"
language: "php"
lang: "en"
category: "function"
name: "RecursiveFilterIterator::__construct"
title: "Create a RecursiveFilterIterator from a RecursiveIterator"
signature: "public RecursiveFilterIterator::__construct(RecursiveIterator $iterator)"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivefilteriterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a RecursiveFilterIterator from a RecursiveIterator

## Description

```php
public RecursiveFilterIterator::__construct(RecursiveIterator $iterator)
```

Create a `RecursiveFilterIterator` from a `RecursiveIterator`.

## Parameters

- **`$iterator`** — The `RecursiveIterator` to be filtered.

## Examples

**Basic `RecursiveFilterIterator()` example**

```php


<?php
class TestsOnlyFilter extends RecursiveFilterIterator {
    public function accept() {
        // Accept the current item if we can recurse into it
        // or it is a value starting with "test"
        return $this->hasChildren() || (strpos($this->current(), "test") !== FALSE);
    }
}

$array    = array("test1", array("taste2", "test3", "test4"), "test5");
$iterator = new RecursiveArrayIterator($array);
$filter   = new TestsOnlyFilter($iterator);

foreach(new RecursiveIteratorIterator($filter) as $key => $value)
{
    echo $value . "\n";
}
?>

    
```

The above example will output something similar to:

```text


test1
test3
test4
test5

    
```

**`RecursiveFilterIterator()` example**

```php


<?php
class StartsWithFilter extends RecursiveFilterIterator {

    protected $word;

    public function __construct(RecursiveIterator $rit, $word) {
        $this->word = $word;
        parent::__construct($rit);
    }

    public function accept() {
        return $this->hasChildren() OR strpos($this->current(), $this->word) === 0;
    }
    
    public function getChildren() {
        return new self($this->getInnerIterator()->getChildren(), $this->word);
    }
}

$array    = array("test1", array("taste2", "test3", "test4"), "test5");
$iterator = new RecursiveArrayIterator($array);
$filter   = new StartsWithFilter($iterator, "test");

foreach(new RecursiveIteratorIterator($filter) as $key => $value)
{
    echo $value . "\n";
}
?>

    
```

The above example will output something similar to:

```text


test1
test3
test4
test5

    
```

## See Also

`RecursiveFilterIterator::getChildren()` `RecursiveFilterIterator::hasChildren()` `FilterIterator::accept()`
