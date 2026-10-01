---
id: "en-php-function-appenditerator-key"
language: "php"
lang: "en"
category: "function"
name: "AppendIterator::key"
title: "Gets the current key"
signature: "public scalar AppendIterator::key()"
module: "spl"
source_url: "https://www.php.net/manual/en/appenditerator.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the current key

## Description

```php
public scalar AppendIterator::key()
```

Get the current key.

## Parameters

This function has no parameters.

## Return Values

The current key if it is valid or `null` otherwise.

## Examples

**`AppendIterator::key()` basic example**

```php


<?php
$array_a = new ArrayIterator(array('a' => 'aardwolf', 'b' => 'bear', 'c' => 'capybara'));
$array_b = new ArrayIterator(array('apple', 'orange', 'lemon'));

$iterator = new AppendIterator;
$iterator->append($array_a);
$iterator->append($array_b);

// Manual iteration
$iterator->rewind();
while ($iterator->valid()) {
    echo $iterator->key() . ' ' . $iterator->current() . PHP_EOL;
    $iterator->next();
}

echo PHP_EOL;

// With foreach
foreach ($iterator as $key => $current) {
    echo $key . ' ' . $current . PHP_EOL;
}
?>

    
```

The above example will output:

```text


a aardwolf
b bear
c capybara
0 apple
1 orange
2 lemon

a aardwolf
b bear
c capybara
0 apple
1 orange
2 lemon

    
```

## See Also

`Iterator::key()` `AppendIterator::current()` `AppendIterator::valid()` `AppendIterator::next()` `AppendIterator::rewind()`
