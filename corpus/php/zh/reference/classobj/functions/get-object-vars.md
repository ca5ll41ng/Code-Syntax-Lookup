---
id: "zh-php-function-function-get-object-vars"
language: "php"
lang: "zh"
category: "function"
name: "get_object_vars"
title: "获取指定对象的属性"
signature: "array get_object_vars(object $object)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.get-object-vars.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取指定对象的属性

## 说明

```php
array get_object_vars(object $object)
```

根据作用域获取指定 `$object` 的可访问非静态属性。

## 参数

- **`$object`** — 对象实例。

## 返回值

返回指定 `$object` 在当前作用域的属性组成的关联数组，属性为已定义、非静态、可访问。

## 示例

**`get_object_vars()` 使用**

```php


<?php

class foo {
    private $a;
    public $b = 1;
    public $c;
    private $d;
    static $e;
   
    public function test() {
        var_dump(get_object_vars($this));
    }
}

$test = new foo;
var_dump(get_object_vars($test));

$test->test();

?>

    
```

以上示例会输出：

```text


array(2) {
  ["b"]=>
  int(1)
  ["c"]=>
  NULL
}
array(4) {
  ["a"]=>
  NULL
  ["b"]=>
  int(1)
  ["c"]=>
  NULL
  ["d"]=>
  NULL
}

    
```

> 未初始化的属性认为是不可访问的，因此不会包含在数组中。

## 参见

`get_class_methods()` `get_class_vars()`
