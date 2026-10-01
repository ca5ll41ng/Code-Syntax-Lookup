---
id: "zh-php-function-function-hrtime"
language: "php"
lang: "zh"
category: "function"
name: "hrtime"
title: "获取系统的高精度时间"
signature: "array|int|float|false hrtime(bool $as_number = false)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.hrtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取系统的高精度时间

## 说明

```php
array|int|float|false hrtime(bool $as_number = false)
```

从任意时间点开始统计，返回系统的高精度时间（high resolution time）。 获取的时间戳为单调时间，无法被用户调整。

## 参数

- **`$as_number`** — 以 `array` 还是数字返回高精度时间。

## 返回值

参数 `$as_number` 为 false 时，返回的整型数组格式为 [seconds, nanoseconds]。否则会以 `int` （64 位平台）或 `float` （32 位平台）返回奈秒（nanoseconds）。失败时返回 `false`。

## 示例

**`hrtime()` 的用法**

```php


<?php
echo hrtime(true), PHP_EOL;
print_r(hrtime());
?>

    
```

以上示例的输出类似于：

```text


10444739687370679
Array
(
    [0] => 10444739
    [1] => 687464812
)

    
```

## 参见

 高精度记时扩展 `microtime()`
