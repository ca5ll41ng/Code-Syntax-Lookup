---
id: "zh-php-guide-class-arrayiterator"
language: "php"
lang: "zh"
category: "guide"
name: "class.arrayiterator"
title: "ArrayIterator 类"
module: "spl"
source_url: "https://www.php.net/manual/zh/class.arrayiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# ArrayIterator 类

ArrayIterator

   简介  允许在遍历 `array`s 或 `object`s 时删除元素，修改键或值。    要多次迭代同一个数组，建议实例化 `ArrayObject` 并使用 `ArrayIterator` 实例，当使用  隐式创建时，可以迭代内部存储的数组， 或者通过手动调用 `ArrayObject::getIterator()` 方法创建一个。      类摘要    `ArrayIterator`   `implements` SeekableIterator   ArrayAccess   Serializable   Countable  常量  `public` `const` `int` `ArrayIterator::STD_PROP_LIST`   `public` `const` `int` `ArrayIterator::ARRAY_AS_PROPS`  方法      预定义常量  ArrayIterator 标记 
- **`ArrayIterator::STD_PROP_LIST`** — 当以列表形式访问对象时（例如 `var_dump()`、 等），对象的属性将具有正常的功能。
- **`ArrayIterator::ARRAY_AS_PROPS`** — 可以通过属性访问条目（读写都支持）。

     更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 类常量现在是有类型的。 |
