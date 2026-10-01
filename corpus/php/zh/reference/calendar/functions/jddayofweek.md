---
id: "zh-php-function-function-jddayofweek"
language: "php"
lang: "zh"
category: "function"
name: "jddayofweek"
title: "返回星期几"
signature: "int|string jddayofweek(int $julian_day, int $mode = CAL_DOW_DAYNO)"
module: "calendar"
source_url: "https://www.php.net/manual/zh/function.jddayofweek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回星期几

## 说明

```php
int|string jddayofweek(int $julian_day, int $mode = CAL_DOW_DAYNO)
```

返回星期几，根据模式不同返回 string 或 int。

## 参数

- **`$julian_day`** — int 类型的儒略日数
- **`$mode`**
  | 模式 | 含义 |
  | --- | --- |
  | 0 (默认) | 返回 int 类型的星期几（0 = Sunday， 1 = Monday，等等） |
  | 1 | 以英文返回公历形式的 string 类型的星期几 |
  | 2 | 以英文返回公历形式的 string 类型的星期几缩写 |



## 返回值

int 或 string 类型的公历星期几。
