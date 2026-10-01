---
id: "zh-php-syntax-class-serializable"
language: "php"
lang: "zh"
category: "syntax"
name: "class.serializable"
title: "Serializable 接口"
module: "language"
source_url: "https://www.php.net/manual/zh/class.serializable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Serializable 接口

Serializable

   简介  自定义序列化的接口。    实现此接口的类将不再支持 __sleep() 和 __wakeup() 。 不论何时，只要有实例需要被序列化， serialize 方法都将被调用。它不会调用 __destruct()，除非在该方法中编写了相关功能，否则它也不会有副作用（side effect）。 当数据被反序列化时，类将被感知并且调用合适的 unserialize() 方法而不是调用 __construct()。如果需要执行标准的构造器，应该在这个方法中进行处理。   
> 从 PHP 8.1.0 起，实现 Serializable 接口的类如果没有同时实现 __serialize()、__unserialize() 方法，将产生弃用警告。

    接口摘要    Serializable  方法      示例 
**基础用法**

 {{{ 

```php

<?php
class obj implements Serializable {
    private $data;
    public function __construct() {
        $this->data = "My private data";
    }
    public function serialize() {
        return serialize($this->data);
    }
    public function unserialize($data) {
        $this->data = unserialize($data);
    }
    public function getData() {
        return $this->data;
    }
}

$obj = new obj;
$ser = serialize($obj);

var_dump($ser);

$newobj = unserialize($ser);

var_dump($newobj->getData());
?>

    
```

以上示例的输出类似于：

```text

string(38) "C:3:"obj":23:{s:15:"My private data";}"
string(15) "My private data"

    
```
