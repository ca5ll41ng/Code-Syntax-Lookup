---
id: "zh-php-guide-class-apcuiterator"
language: "php"
lang: "zh"
category: "guide"
name: "class.apcuiterator"
title: "APCUIterator 类"
module: "apcu"
source_url: "https://www.php.net/manual/zh/class.apcuiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# APCUIterator 类

APCUIterator

   简介  `APCUIterator` 类可以更轻松的迭代大型 APCu 缓存。 它所支持的逐步迭代功能对于遍历大型缓存非常有用，每次加锁后只会获取指定数量（默认 100 条）的缓存条目就会释放锁而非一直锁住整个缓存，以便其他活动对缓存进行操作。 此外，使用正则表达式匹配是更高效的，因为它已经被移到了 C 语言层级（C level）。      类摘要   `APCUIterator`    `APCUIterator`   Iterator    方法
