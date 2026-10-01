---
id: "zh-php-function-arrayobject-offsetset"
language: "php"
lang: "zh"
category: "function"
name: "ArrayObject::offsetSet"
title: "为指定索引设定新值"
signature: "public void ArrayObject::offsetSet(mixed $key, mixed $value)"
module: "spl"
source_url: "https://www.php.net/manual/zh/arrayobject.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为指定索引设定新值

## 说明

```php
public void ArrayObject::offsetSet(mixed $key, mixed $value)
```

设置指定的索引为新值。

## 参数

- **`$key`** — 将要被设置的索引。
- **`$value`** — 参数 `$key` 所对应的新值。

## 返回值

没有返回值。

## 示例

**`ArrayObject::offsetSet()` 例子**

```php


<?php
class Example {
    public $property = 'prop:public';
}
$arrayobj = new ArrayObject(new Example());
$arrayobj->offsetSet(4, 'four');
$arrayobj->offsetSet('group', array('g1', 'g2'));
var_dump($arrayobj);

$arrayobj = new ArrayObject(array('zero','one'));
$arrayobj->offsetSet(null, 'last');
var_dump($arrayobj);
?>

    
```

以上示例会输出：

```text


object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  object(Example)#2 (3) {
    ["property"]=>
    string(11) "prop:public"
    ["4"]=>
    string(4) "four"
    ["group"]=>
    array(2) {
      [0]=>
      string(2) "g1"
      [1]=>
      string(2) "g2"
    }
  }
}
object(ArrayObject)#3 (1) {
  ["storage":"ArrayObject":private]=>
  array(3) {
    [0]=>
    string(4) "zero"
    [1]=>
    string(3) "one"
    [2]=>
    string(4) "last"
  }
}

    
```

## 参见

`ArrayObject::append()`
