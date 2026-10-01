---
id: "zh-php-guide-class-dateinterval"
language: "php"
lang: "zh"
category: "guide"
name: "class.dateinterval"
title: "DateInterval 类"
module: "datetime"
source_url: "https://www.php.net/manual/zh/class.dateinterval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# DateInterval 类

DateInterval

   简介  表示时间间隔。    时间间隔表示固定量的时间（多少年，月，天，小时等），也可以表示一个字符串格式的相对时间，当表示相对时间的时候，字符串格式是 `DateTimeImmutable` 和 `DateTime` 类的构造函数所支持的格式。    更具体的说，`DateInterval` 类的对象中的信息是从一个日期/时间到另一个日期/时间的指令。这个过程并不始终可逆。    创建 `DateInterval` 对象的常用方法是通过 `DateTimeInterface::diff()` 计算两个日期/时间对象之间的差异。    由于没有明确定义的方法来比较日期间隔，因此 `DateInterval` 实例是无法比较的。      类摘要    `DateInterval`  属性  `public` `int` `y`   `public` `int` `m`   `public` `int` `d`   `public` `int` `h`   `public` `int` `i`   `public` `int` `s`   `public` `float` `f`   `public` `int` `invert`   `public` `mixed` `days`   `public` `bool` `from_string`   `public` `string` `date_string`  方法       属性 
> 下列列出的有效属性依赖 PHP 版本，应视为 *readonly*。

 
- **`y`** — 多少年。
- **`m`** — 多少月。
- **`d`** — 多少天。
- **`h`** — 多少小时。
- **`i`** — 多少分钟。
- **`s`** — 多少秒。
- **`f`** — 多少微秒。
- **`invert`** — 如果是负的时间段，则为 `1`，否则为 `0`。请参见 `DateInterval::format()`。
- **`days`** — 如果 DateInterval 对象是由 `DateTimeImmutable::diff()` 或者 `DateTime::diff()` 函数创建的，那么它表示开始日期和结束日期之间的完整天数。否则，`days` 属性为 `false`。
- **`from_string`** — 如果 DateInterval 对象是通过 `DateInterval::createFromDateString()` 创建，则此属性值设为 `true` 并且 `date_string` 属性将填充数据。否则，此值设为 `false` 且为从 `y` 到 `f`、`invert` 和 `days` 属性填充数据。
- **`date_string`** — 字符串，用作 `DateInterval::createFromDateString()` 的参数。

   更新日志  
| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 为使用 `DateInterval::createFromDateString()` 方法创建的 `DateInterval` 实例添加了 `from_string` 和 `date_string` 属性。 |
| 8.2.0 | 仅从 `y` 到 `f`、`invert` 和 `days` 将可见。 |
| 7.4.0 | 现在 `DateInterval` 无法比较；之前所有的 `DateInterval` 实例都认为相等。 |
| 7.1.0 | 增加 `f` 属性。 |
