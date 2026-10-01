---
id: "zh-php-function-arrayobject-append"
language: "php"
lang: "zh"
category: "function"
name: "ArrayObject::append"
title: "追加新的值作为最后一个元素。"
signature: "public void ArrayObject::append(mixed $value)"
module: "spl"
source_url: "https://www.php.net/manual/zh/arrayobject.append.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 追加新的值作为最后一个元素。

## 说明

```php
public void ArrayObject::append(mixed $value)
```

追加新的值作为最后一个元素。

> 当 `ArrayObject` 从 object 初始化时不能调用此方法。使用 `ArrayObject::offsetSet()` 代替。

## 参数

- **`$value`** — 将要被追加的值

## 返回值

没有返回值。

## 示例

**`ArrayObject::append()` 例子**

```php


<?php
$arrayobj = new ArrayObject(array('first','second','third'));
$arrayobj->append('fourth');
$arrayobj->append(array('five', 'six'));
var_dump($arrayobj);
?>

    
```

以上示例会输出：

```text


object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(5) {
    [0]=>
    string(5) "first"
    [1]=>
    string(6) "second"
    [2]=>
    string(5) "third"
    [3]=>
    string(6) "fourth"
    [4]=>
    array(2) {
      [0]=>
      string(4) "five"
      [1]=>
      string(3) "six"
    }
  }
}

    
```

## 参见

`ArrayObject::offsetSet()`
