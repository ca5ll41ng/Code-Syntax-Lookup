---
id: "zh-php-function-function-jdtojulian"
language: "php"
lang: "zh"
category: "function"
name: "jdtojulian"
title: "将儒略日数转换为儒略历日期"
signature: "string jdtojulian(int $julian_day)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.jdtojulian.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将儒略日数转换为儒略历日期

## 说明

```php
string jdtojulian(int $julian_day)
```

将儒略日数转换成格式为“月/日/年”，string 类型的儒略历日期。

## 参数

- **`$julian_day`** — int 类型的儒略日数

## 返回值

“月/日/年”格式，string 类型的儒略日期

## 参见

`juliantojd()` `cal_from_jd()`
