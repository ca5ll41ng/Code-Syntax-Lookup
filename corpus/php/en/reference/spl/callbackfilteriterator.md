---
id: "en-php-guide-class-callbackfilteriterator"
language: "php"
lang: "en"
category: "guide"
name: "class.callbackfilteriterator"
title: "The CallbackFilterIterator class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.callbackfilteriterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The CallbackFilterIterator class

CallbackFilterIterator

   Introduction       Class Synopsis    `CallbackFilterIterator`   `extends` `FilterIterator`             Examples  The callback should accept up to three arguments: the current item, the current key and the iterator, respectively.   
**Available callback arguments**

```php

<?php

/**
 * Callback for CallbackFilterIterator
 *
 * @param $current   Current item's value
 * @param $key       Current item's key
 * @param $iterator  Iterator being filtered
 * @return boolean   TRUE to accept the current item, FALSE otherwise
 */
function my_callback($current, $key, $iterator) {
    // Your filtering code here
}

?>

    
```

  Any `callable` may be used; such as a string containing a function name, an array for a method, or an anonymous function.   
**Callback basic examples**

```php

<?php

$dir = new FilesystemIterator(__DIR__);

// Filter large files ( > 100MB)
function is_large_file($current) {
    return $current->isFile() && $current->getSize() > 104857600;
}
$large_files = new CallbackFilterIterator($dir, 'is_large_file');

// Filter directories
$files = new CallbackFilterIterator($dir, function ($current, $key, $iterator) {
    return $current->isDir() && ! $iterator->isDot();
});

?>

    
```
