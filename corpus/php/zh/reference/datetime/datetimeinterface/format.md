---
id: "zh-php-function-datetime-format"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "DateTimeInterface::format"
aliases: ["DateTimeImmutable::format","DateTime::format","date_format"]
title: "按照指定格式返回格式化后的日期"
signature: "public string DateTimeInterface::format(string $format)"
module: "datetime"
source_url: "https://www.php.net/manual/zh/datetime.format.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 按照指定格式返回格式化后的日期

## 说明

面向对象风格

```php
public string DateTimeInterface::format(string $format)
```

```php
public string DateTimeImmutable::format(string $format)
```

```php
public string DateTime::format(string $format)
```

过程化风格

```php
string date_format(DateTimeInterface $object, string $format)
```

按照指定格式返回格式化后的日期。

## 参数

- **`$object`** — 仅为过程化风格：由 `date_create()` 返回的 `DateTime` 类型的对象。
- **`$format`** — 输出的日期 `string` 的格式。参见下面的格式化选项。也有几个预定义日期常量可以代替。例如 `DATE_RSS` 包含格式化字符串 `'D, d M Y H:i:s'`。 — | `$format` 字符 | 说明 | 返回值示例 | | --- | --- | --- | | *日* | --- | --- | | `d` | 月份中的第几天，有补零的两位数字 | `01` 到 `31` | | `D` | 文字表示星期几，三个字母 | `Mon` 到 `Sun` | | `j` | 月份中的第几天，没有补零 | `1` 到 `31` | | `l`（小写 'L'） | 完整文本表示星期几 | `Sunday` 到 `Saturday` | | `N` | ISO 8601 数字表示星期几 | `1`（星期一）到 `7`（星期天） | | `S` | 月份中的第几天英文后缀，两个字符 | `st`、`nd`、`rd` 或 `th`。可以和 `j` 一起使用 | | `w` | 数字表示星期几 | `0`（星期天）到 `6`（星期六） | | `z` | 一年中的第几天（从 0 开始） | `0` 到 `365` | | *周* | --- | --- | | `W` | ISO 8601 格式当年中的第几周，每周从周一开始 | 示例：`42`（当年的第 42 周） | | *月* | --- | --- | | `F` | 月份的完整文本表示，比如 January 或者 March | `January` 到 `December` | | `m` | 月份的数字表示，补零 | `01` 到 `12` | | `M` | 简短文本表示月份，三个字母 | `Jan` 到 `Dec` | | `n` | 数字表示几月份，不补零 | `1` 到 `12` | | `t` | 指定月份的天数 | `28` 到 `31` | | *年* | --- | --- | | `L` | 是否是闰年 | 如果是闰年为 `1`，否则为 `0`。 | | `o` | ISO 8601 数字年份表示。这和 `Y` 值相同，但如果 ISO 周数（`W`）属于上一年或者下一年，则用那一年。 | 示例：`1999` 或 `2003` | | `X` | 年份的展开全数字表示，至少四位，`-` 表示公元前，`+` 表示公元。 | 示例：`-0055`、`+0787`、 `+1999`、`+10191` | | `x` | 如果需要，年份可以展开全数字表示，如果可能的话，也可以用标准的全数字（`Y`）表示。至少有四位数字。公元前以 `-` 为前缀，年份不小于 `10000` 时以 `+` 为前缀。 | 示例：`-0055`, `0787`, `1999`, `+10191` | | `Y` | 年份完整数字表示，至少四位，使用 `-` 表示公元前。 | 示例：`-0055`、`0787`、 `1999`、`2003`、`10191` | | `y` | 两位数的年份表示 | 示例：`99` 或 `03` | | *时间* | --- | --- | | `a` | 小写的上午和下午 | `am` 或 `pm` | | `A` | 大写的上午和下午 | `AM` 或 `PM` | | `B` | Swatch 互联网时间 | `000` 到 `999` | | `g` | 不补零的小时（12 小时制） | `1` 到 `12` | | `G` | 不补零的小时（24 小时制） | `0` 到 `23` | | `h` | 补零的小时（12 小时制） | `01` 到 `12` | | `H` | 补零的小时（24 小时制） | `00` 到 `23` | | `i` | 补零的分钟 | `00` 到 `59` | | `s` | 补零的秒 | `00` 到 `59` | | `u` | 微秒。注意 `date()` 总是生成 `000000`，因为它需要一个 `int` 参数，而如果 `DateTimeInterface` 是使用微秒创建的，则 `DateTimeInterface::format()` 支持微秒。 | 示例：`654321` | | `v` | 毫秒。与 `u` 的说明相同。 | 示例：`654` | | *时区* | --- | --- | | `e` | 时区标识符 | 示例：`UTC`、`GMT`、`Atlantic/Azores` | | `I`（大写 i） | 是否为夏令时 | 如果是夏令时为 `1`，否则为 `0`。 | | `O` | 跟格林尼治时间（GMT）的差异，小时和分钟时间没有冒号 | 示例：`+0200` | | `P` | 跟格林尼治时间（GMT）的差异，小时和分钟时间有冒号 | 示例：`+02:00` | | `p` | 跟 `P` 相同，区别是使用 `Z` 替换 `+00:00` 返回（PHP 8.0.0 起可用） | 示例：`Z` 或 `+02:00` | | `T` | 如果知道会返回时区缩写，否则返回 GMT 时差。 | 示例：`EST`、`MDT`、`+05` | | `Z` | 以秒为单位的时差。UTC 以西的时区为负的时差，以东为正的时差。 | `-43200` 到 `50400` | | *完整日期/时间* | --- | --- | | `c` | ISO 8601 日期。只兼容非扩展格式（最多到公元 9999 年）。 更晚的日期将导致无效字符串。对于更晚的日期和扩展格式，请参见 `x` and `X`。 | 2004-02-12T15:19:21+00:00 | | `r` | [RFC 2822](2822)/[RFC 5322](5322) 格式化时间 | 示例：`Thu, 21 Dec 2000 16:01:07 +0200` | | `U` | 从 Unix 纪元（January 1 1970 00:00:00 GMT）到至今的秒数 | 参见 `time()` | — 格式字符串中无法识别的字符将会原样打印。当使用 `gmdate()` 时，`Z` 格式将始终返回 `0`。
  > 由于本函数仅接受 `int` 类型时间戳，所以 `u` 格式化标识符仅在用户使用 `date_create()` 且使用 `date_format()` 创建时间戳时才有用。



## 返回值

成功时返回格式化后的日期字符串。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 新增 `X` 和 `x` 格式化字符。 |
| 8.0.0 | 新增 `p` 格式化字符。 |

## 示例

**`DateTimeInterface::format()` 示例**

面向对象风格

```php


<?php
$date = new DateTimeImmutable('2000-01-01');
echo $date->format('Y-m-d H:i:s');
?>

    
```

以上示例会输出：

```text


2000-01-01 00:00:00

    
```

过程化风格

```php


<?php
$date = date_create('2000-01-01');
echo date_format($date, 'Y-m-d H:i:s');
?>

    
```

以上示例会输出：

```text


2000-01-01 00:00:00

    
```

**更多示例**

```php


<?php
// 设置使用的默认时区。
date_default_timezone_set('UTC');

// 现在
$date = new DateTimeImmutable();

// 打印类似：Wednesday
echo $date->format('l'), "\n";
 
// 打印类似：Wednesday 19th of October 2022 08:40:48 AM
echo $date->format('l jS \o\f F Y h:i:s A'), "\n";

/* 在 format 参数中使用常量 */
// 打印类似：Wed, 19 Oct 2022 08:40:48 +0000
echo $date->format(DateTimeInterface::RFC2822), "\n";
?>

    
```

通过对格式化字符串中的识别字符添加反斜线，对其转义来防止被解析。如果带有反斜线的字符已经是特殊序列，那么还要对反斜线进行转义。

**格式化时转义字符**

```php


<?php
$date = new DateTimeImmutable();

// 打印类似：Wednesday the 19th
echo $date->format('l \t\h\e jS');
?>

    
```

要格式化其它语言的日期，可以使用 `IntlDateFormatter::format()` 代替 `DateTimeInterface::format()`。

## 注释

此方法不使用区域设置，所有的输出都是英文。

## 参见

 `IntlDateFormatter::format()`
