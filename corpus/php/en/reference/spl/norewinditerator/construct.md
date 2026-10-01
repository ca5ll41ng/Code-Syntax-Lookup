---
id: "en-php-function-norewinditerator-construct"
language: "php"
lang: "en"
category: "function"
name: "NoRewindIterator::__construct"
title: "Construct a NoRewindIterator"
signature: "public NoRewindIterator::__construct(Iterator $iterator)"
module: "spl"
source_url: "https://www.php.net/manual/en/norewinditerator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a NoRewindIterator

## Description

```php
public NoRewindIterator::__construct(Iterator $iterator)
```

Constructs a NoRewindIterator.

## Parameters

- **`$iterator`** — The iterator being used.

## Examples

**`NoRewindIterator::__construct()` example**

The second loop does not output because the iterator is only used once, as it does not rewind.

```php


<?php
$fruit = array('apple', 'banana', 'cranberry');

$arr = new ArrayObject($fruit);
$it  = new NoRewindIterator($arr->getIterator());

echo "Fruit A:\n";
foreach( $it as $item ) {
    echo $item . "\n";
}

echo "Fruit B:\n";
foreach( $it as $item ) {
    echo $item . "\n";
}
?>

    
```

The above example will output something similar to:

```text


Fruit A:
apple
banana
cranberry
Fruit B:

    
```

## See Also

`NoRewindIterator::valid()`
