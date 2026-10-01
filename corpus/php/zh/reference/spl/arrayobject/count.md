---
id: "zh-php-function-arrayobject-count"
language: "php"
lang: "zh"
category: "function"
name: "ArrayObject::count"
title: "统计 ArrayObject 内 public 属性的数量"
signature: "public int ArrayObject::count()"
module: "spl"
source_url: "https://www.php.net/manual/zh/arrayobject.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 统计 ArrayObject 内 public 属性的数量

## 说明

```php
public int ArrayObject::count()
```

获取 `ArrayObject` 的 public 属性数量

## 参数

此函数没有参数。

## 返回值

对象 `ArrayObject` 的 public 属性数量

> 当对象 `ArrayObject` 是从数组构造而来时，所有属性都是 public 的。

## 示例

**`ArrayObject::count()` 例子**

```php


<?php
class Example {
    public $public = 'prop:public';
    private $prv   = 'prop:private';
    protected $prt = 'prop:protected';
}

$arrayobj = new ArrayObject(new Example());
var_dump($arrayobj->count());

$arrayobj = new ArrayObject(array('first','second','third'));
var_dump($arrayobj->count());
?>

    
```

以上示例会输出：

```text


int(1)
int(3)

    
```
