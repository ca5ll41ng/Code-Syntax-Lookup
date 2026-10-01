---
id: "en-php-guide-class-recursivecallbackfilteriterator"
language: "php"
lang: "en"
category: "guide"
name: "class.recursivecallbackfilteriterator"
title: "The RecursiveCallbackFilterIterator class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.recursivecallbackfilteriterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The RecursiveCallbackFilterIterator class

RecursiveCallbackFilterIterator

   Introduction       Class Synopsis    `RecursiveCallbackFilterIterator`   `extends` `CallbackFilterIterator`   `implements` RecursiveIterator              Examples  The callback should accept up to three arguments: the current item, the current key and the iterator, respectively.   
**Available callback arguments**

```php

<?php

/**
 * Callback for RecursiveCallbackFilterIterator
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

  Filtering a recursive iterator generally involves two conditions. The first is that, to allow recursion, the callback function should return `true` if the current iterator item has children. The second is the normal filter condition, such as a file size or extension check as in the example below.   
**Recursive callback basic example**

```php

<?php

$dir = new RecursiveDirectoryIterator(__DIR__);

// Filter large files ( > 100MB)
$files = new RecursiveCallbackFilterIterator($dir, function ($current, $key, $iterator) {
    // Allow recursion
    if ($iterator->hasChildren()) {
        return TRUE;
    }
    // Check for large file
    if ($current->isFile() && $current->getSize() > 104857600) {
        return TRUE;
    }
    return FALSE;
});
 
foreach (new RecursiveIteratorIterator($files) as $file) {
    echo $file->getPathname() . PHP_EOL;
}

?>

    
```
