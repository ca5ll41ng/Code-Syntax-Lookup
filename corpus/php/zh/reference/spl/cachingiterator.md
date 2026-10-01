---
id: "zh-php-guide-class-cachingiterator"
language: "php"
lang: "zh"
category: "guide"
name: "class.cachingiterator"
title: "CachingIterator 类"
module: "spl"
source_url: "https://www.php.net/manual/zh/class.cachingiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# CachingIterator 类

CachingIterator

   简介  该对象支持在另一迭代器上缓存迭代。      类摘要    `CachingIterator`   `extends` `IteratorIterator`   `implements` ArrayAccess   Countable   Stringable  常量  `public` `const` `int` `CachingIterator::CALL_TOSTRING`   `public` `const` `int` `CachingIterator::CATCH_GET_CHILD`   `public` `const` `int` `CachingIterator::TOSTRING_USE_KEY`   `public` `const` `int` `CachingIterator::TOSTRING_USE_CURRENT`   `public` `const` `int` `CachingIterator::TOSTRING_USE_INNER`   `public` `const` `int` `CachingIterator::FULL_CACHE`  方法   继承的方法       预定义常量 
- **`CachingIterator::CALL_TOSTRING`** — 每个元素转换为字符串。
- **`CachingIterator::CATCH_GET_CHILD`** — 访问子元素时不要抛出异常。
- **`CachingIterator::TOSTRING_USE_KEY`** — 转换为字符串时使用 key。
- **`CachingIterator::TOSTRING_USE_CURRENT`** — 转换为字符串时使用 current。
- **`CachingIterator::TOSTRING_USE_INNER`** — 转换为字符串时使用 inner。
- **`CachingIterator::FULL_CACHE`** — 缓存所有读取的数据。

    更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `CachingIterator` 现在实现了 Stringable。 |

   更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 类常量现在是有类型的。 |
