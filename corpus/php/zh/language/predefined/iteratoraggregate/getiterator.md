---
id: "zh-php-function-iteratoraggregate-getiterator"
language: "php"
lang: "zh"
category: "function"
name: "IteratorAggregate::getIterator"
title: "获取一个外部迭代器或可遍历对象"
signature: "public Traversable IteratorAggregate::getIterator()"
module: "language"
source_url: "https://www.php.net/manual/zh/iteratoraggregate.getiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个外部迭代器或可遍历对象

## 说明

```php
public Traversable IteratorAggregate::getIterator()
```

返回一个外部迭代器或可遍历对象。

## 参数

此函数没有参数。

## 返回值

实现了 `Iterator` 或 `Traversable` 接口的类的一个实例。

## 错误／异常

 {{{ 

失败时抛出 `Exception`。

 }}}
