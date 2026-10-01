---
id: "zh-php-guide-class-limititerator"
language: "php"
lang: "zh"
category: "guide"
name: "class.limititerator"
title: "LimitIterator 类"
module: "spl"
source_url: "https://www.php.net/manual/zh/class.limititerator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# LimitIterator 类

LimitIterator

   简介  `LimitIterator` 类允许遍历一个 `Iterator` 的限定子集的元素。      类摘要    `LimitIterator`   `extends` `IteratorIterator`  方法   继承的方法       示例  
**`LimitIterator` usage example**

```php

<?php

// Create an iterator to be limited
$fruits = new ArrayIterator(array(
    'apple',
    'banana',
    'cherry',
    'damson',
    'elderberry'
));

// Loop over first three fruits only
foreach (new LimitIterator($fruits, 0, 3) as $fruit) {
    var_dump($fruit);
}

echo "\n";

// Loop from third fruit until the end
// Note: offset starts from zero for apple
foreach (new LimitIterator($fruits, 2) as $fruit) {
    var_dump($fruit);
}

?>

    
```

以上示例会输出：

```text

string(5) "apple"
string(6) "banana"
string(6) "cherry"

string(6) "cherry"
string(6) "damson"
string(10) "elderberry"

     
```
