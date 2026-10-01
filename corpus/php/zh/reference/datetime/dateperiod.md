---
id: "zh-php-guide-class-dateperiod"
language: "php"
lang: "zh"
category: "guide"
name: "class.dateperiod"
title: "DatePeriod 类"
module: "datetime"
source_url: "https://www.php.net/manual/zh/class.dateperiod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# DatePeriod 类

DatePeriod

   简介  DatePeriod 类表示一个时间周期。    时间周期内允许对一组日期和时间进行迭代，在指定的时间间隔内定期重复。      类摘要    `DatePeriod`   `implements` IteratorAggregate  常量  `public` `const` `int` `DatePeriod::EXCLUDE_START_DATE`   `public` `const` `int` `DatePeriod::INCLUDE_END_DATE`  属性  `public` `readonly` `DateTimeInterface|null` `start`   `public` `readonly` `DateTimeInterface|null` `current`   `public` `readonly` `DateTimeInterface|null` `end`   `public` `readonly` `DateInterval|null` `interval`   `public` `readonly` `int` `recurrences`   `public` `readonly` `bool` `include_start_date`   `public` `readonly` `bool` `include_end_date`  方法        预定义常量 
- **`DatePeriod::EXCLUDE_START_DATE` `int`** — 在 `DatePeriod::__construct()` 构造函数中使用，排除开始时间。
- **`DatePeriod::INCLUDE_END_DATE` `int`** — 在 `DatePeriod::__construct()` 构造函数中使用，包含结束时间。

    属性 
- **`recurrences`** — 迭代器返回的最小实例数。 — 如果在 `DatePeriod` 实例的构造函数中显式通过 `recurrences` 参数传递重复次数，然后此属性将包含该值，如果开始时间没有通过 `DatePeriod::EXCLUDE_START_DATE` 禁用，则该属性*加* 1，如果结束时间已经通过 `DatePeriod::INCLUDE_END_DATE` 启用，则该属性*加* 1。 — 如果没有显式传递重复次数，则此属性包含返回实例的最小数量。这将是 `0`，如果开始时间没有通过 `DatePeriod::EXCLUDE_START_DATE` 禁用，则该属性*加* 1，如果结束时间已经通过 `DatePeriod::INCLUDE_END_DATE` 启用，则该属性*加* 1。 — ```php <?php $start = new DateTime('2018-12-31 00:00:00'); $end = new DateTime('2021-12-31 00:00:00'); $interval = new DateInterval('P1M'); $recurrences = 5; // 通过构造函数显式设置重复次数 $period = new DatePeriod($start, $interval, $recurrences, DatePeriod::EXCLUDE_START_DATE); echo $period->recurrences, "\n"; $period = new DatePeriod($start, $interval, $recurrences); echo $period->recurrences, "\n"; $period = new DatePeriod($start, $interval, $recurrences, DatePeriod::INCLUDE_END_DATE); echo $period->recurrences, "\n"; // 构造函数中没有设置重复次数 $period = new DatePeriod($start, $interval, $end); echo $period->recurrences, "\n"; $period = new DatePeriod($start, $interval, $end, DatePeriod::EXCLUDE_START_DATE); echo $period->recurrences, "\n"; ``` 以上示例会输出： ```php 5 6 7 1 0 ``` — 参见 `DatePeriod::getRecurrences()`。
- **`include_end_date`** — 在循环过程中，是否包含结束时间。
- **`include_start_date`** — 在循环过程中，是否包含开始时间。
- **`start`** — 时间周期的开始时间。
- **`current`** — 表示在时间周期内迭代的时候，当前的时间。
- **`end`** — 时间周期的结束时间。
- **`interval`** — ISO 8601 格式的间隔。

   更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 类常量现已类型化。 |
| 8.2.0 | 新增 `DatePeriod::INCLUDE_END_DATE` 常量和 include_end_date 属性。 |
| 8.0.0 | 现在 `DatePeriod` 实现了（implement） IteratorAggregate。之前实现的是 Traversable。 |
