---
id: "zh-php-function-function-bcsub"
language: "php"
lang: "zh"
category: "function"
name: "bcsub"
title: "两个任意精度数字的减法"
signature: "string bcsub(string $num1, string $num2, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/zh/function.bcsub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 两个任意精度数字的减法

## 说明

```php
string bcsub(string $num1, string $num2, int|null $scale = null)
```

`$num1` 减去 `$num2`。

## parameters



## 返回值

以 string 类型返回减法之后的结果。



## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$scale` 可以为 null。 |

## 示例

**`bcsub()` 示例**

```php


<?php

$a = '1.234';
$b = '5';

echo bcsub($a, $b);     // -3
echo bcsub($a, $b, 4);  // -3.7660

?>

   
```

## 参见

`bcadd()` `BcMath\Number::sub()`
