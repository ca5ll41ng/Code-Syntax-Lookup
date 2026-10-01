---
id: "zh-php-guide-class-datetime"
language: "php"
lang: "zh"
category: "guide"
name: "class.datetime"
title: "DateTime 类"
module: "datetime"
source_url: "https://www.php.net/manual/zh/class.datetime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# DateTime 类

DateTime

   简介  日期和时间表示。    此类与 `DateTimeImmutable` 行为相同。区别就是调用有修改行为的方法（比如 `DateTime::modify()`）时，会修改对象本身。   
> 在 `DateTime` 类的对象上调用方法会改变对象中封装的信息，如果想要避免这种情况，就得使用 `clone` 操作符创建新的对象。推荐使用 `DateTimeImmutable` 代替 `DateTime` 来获得这个默认行为。

    类摘要    `DateTime`   `implements` DateTimeInterface  继承的常量  方法        更新日志  
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 类常量现已类型化。 |
| 7.2.0 | `DateTime` 的类常量现在定义在 `DateTimeInterface` 上。 |
| 7.1.0 | 现在 `DateTime` 构造器在构造值中包含了当前微秒。在此之前，微秒会一直初始化为 `0`。 |
