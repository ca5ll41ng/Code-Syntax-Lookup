---
id: "zh-php-syntax-class-iterator"
language: "php"
lang: "zh"
category: "syntax"
name: "class.iterator"
title: "Iterator（迭代器）接口"
module: "language"
source_url: "https://www.php.net/manual/zh/class.iterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Iterator（迭代器）接口

Iterator

   简介  可在内部迭代自己的外部迭代器或类的接口。      接口摘要    Iterator   `extends` Traversable  方法      预定义迭代器  PHP 已经提供了一些用于日常任务的迭代器。 详细列表参见 SPL 迭代器。     示例 
**基本用法**

 {{{ 

这个例子展示了使用  时，迭代器方法的调用顺序。

```php

<?php
class myIterator implements Iterator {
    private $position = 0;
    private $array = array(
        "firstelement",
        "secondelement",
        "lastelement",
    );  

    public function __construct() {
        $this->position = 0;
    }

    public function rewind(): void {
        var_dump(__METHOD__);
        $this->position = 0;
    }

    #[\ReturnTypeWillChange]
    public function current() {
        var_dump(__METHOD__);
        return $this->array[$this->position];
    }

    #[\ReturnTypeWillChange]
    public function key() {
        var_dump(__METHOD__);
        return $this->position;
    }

    public function next(): void {
        var_dump(__METHOD__);
        ++$this->position;
    }

    public function valid(): bool {
        var_dump(__METHOD__);
        return isset($this->array[$this->position]);
    }
}

$it = new myIterator;

foreach($it as $key => $value) {
    var_dump($key, $value);
    echo "\n";
}
?>

    
```

以上示例的输出类似于：

```text

string(18) "myIterator::rewind"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(0)
string(12) "firstelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(1)
string(13) "secondelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(2)
string(11) "lastelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"

    
```

   参见 参见 遍历对象。
