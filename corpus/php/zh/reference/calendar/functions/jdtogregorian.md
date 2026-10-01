---
id: "zh-php-function-function-jdtogregorian"
language: "php"
lang: "zh"
category: "function"
name: "jdtogregorian"
title: "将儒略日数转换为公历日期"
signature: "string jdtogregorian(int $julian_day)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.jdtogregorian.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将儒略日数转换为公历日期

## 说明

```php
string jdtogregorian(int $julian_day)
```

将儒略日数转换为“月/日/年”格式，string 类型的公历日期。

## 参数

- **`$julian_day`** — int 类型的儒略日数

## 返回值

格式为 “月/日/年”，string 类型的公历日期

## 参见

`gregoriantojd()` `cal_from_jd()`
