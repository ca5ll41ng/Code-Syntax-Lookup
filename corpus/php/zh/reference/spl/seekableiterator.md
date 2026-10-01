---
id: "zh-php-guide-class-seekableiterator"
language: "php"
lang: "zh"
category: "guide"
name: "class.seekableiterator"
title: "SeekableIterator 接口"
module: "spl"
source_url: "https://www.php.net/manual/zh/class.seekableiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SeekableIterator 接口

SeekableIterator

   简介  Seekable 迭代器。      接口摘要    SeekableIterator   `extends` Iterator  方法  继承的方法      示例 
**基础用法**

 {{{ 

本示例演示了如何创建自定义 `SeekableIterator`、查找位置和处理无效位置。

```php

<?php
class MySeekableIterator implements SeekableIterator {

    private $position;

    private $array = array(
        "first element",
        "second element",
        "third element",
        "fourth element"
    );

    /* SeekableIterator 接口所需的方法 */

    public function seek($position) {
      if (!isset($this->array[$position])) {
          throw new OutOfBoundsException("invalid seek position ($position)");
      }

      $this->position = $position;
    }

    /* Iterator 接口所需的方法 */
    
    public function rewind() {
        $this->position = 0;
    }

    public function current() {
        return $this->array[$this->position];
    }

    public function key() {
        return $this->position;
    }

    public function next() {
        ++$this->position;
    }

    public function valid() {
        return isset($this->array[$this->position]);
    }
}

try {

    $it = new MySeekableIterator;
    echo $it->current(), "\n";
    
    $it->seek(2);
    echo $it->current(), "\n";
    
    $it->seek(1);
    echo $it->current(), "\n";
    
    $it->seek(10);
    
} catch (OutOfBoundsException $e) {
    echo $e->getMessage();
}
?>

    
```

以上示例的输出类似于：

```text

first element
third element
second element
invalid seek position (10)

    
```
