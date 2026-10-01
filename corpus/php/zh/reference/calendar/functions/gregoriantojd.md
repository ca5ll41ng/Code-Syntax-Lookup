---
id: "zh-php-function-function-gregoriantojd"
language: "php"
lang: "zh"
category: "function"
name: "gregoriantojd"
title: "将公历日期转为儒略日数"
signature: "int gregoriantojd(int $month, int $day, int $year)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.gregoriantojd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将公历日期转为儒略日数

## 说明

```php
int gregoriantojd(int $month, int $day, int $year)
```

公历的有效范围是从公元前 4714 年 11 月 25 日开始。至少到公元 9999 年 12 月 31 日

虽然这个函数可以处理追溯到公元前 4714 年以前的日期，但这样做可能没有意义。公历直到 1582 年 10 年 15 日（或是儒略历 1582 年 10 月 5 日）才被发明，一些国家直到很久以后才接受它。比如，英国是在 1752 年开始使用公历，苏联是在 1918 年，希腊是在 1923 年，大部分的欧洲国家在公历前使用儒略历。

## 参数

- **`$month`** — 月份的范围是 1（January）到 12（December）之间的数字。
- **`$day`** — 天的范围是 1 到 31 之间的数字。如果该月的天数小于指定的天数， 则会发生溢出。请参考下面的示例。
- **`$year`** — 年份的范围是 -4714 到 9999 之间的数字。负数表示公元前，正数表示公元。注意没有公元 `0` 年，公元前 1 年 12 月 31 日紧跟其后的是公元 1 年 1 月 1 日。

## 返回值

int 类型的指定公历日期的儒略日。日期超出范围值返回 `0`。

## 示例

**历法函数**

```php


<?php
$jd = gregoriantojd(10, 11, 1970);
echo "$jd\n";
$gregorian = jdtogregorian($jd);
echo "$gregorian\n";
?>

    
```

以上示例会输出：

```text


2440871
10/11/1970

    
```

**溢出行为**

```php


<?php
echo gregoriantojd(2, 31, 2018), PHP_EOL,
     gregoriantojd(3,  3, 2018), PHP_EOL;
?>

    
```

以上示例会输出：

```text


2458181
2458181

    
```

## 参见

`jdtogregorian()` `cal_to_jd()`
