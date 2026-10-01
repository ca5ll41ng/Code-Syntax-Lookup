---
id: "zh-php-function-function-bccomp"
language: "php"
lang: "zh"
category: "function"
name: "bccomp"
title: "比较两个任意精度的数字"
signature: "int bccomp(string $num1, string $num2, int|null $scale = null)"
module: "bc"
source_url: "https://www.php.net/manual/zh/function.bccomp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 比较两个任意精度的数字

## 说明

```php
int bccomp(string $num1, string $num2, int|null $scale = null)
```

将 `$num1` 与 `$num2` 进行比较，并返回整型数字的比较结果。

## parameters



## 返回值

如果所有的操作数相等返回 `0`；如果 `$num1` 大于 `$num2` 时返回 `1`，否则返回 `-1`。



## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$scale` 可以为 null。 |

## 示例

**`bccomp()` 示例**

```php


<?php

echo bccomp('1', '2') . "\n";   // -1
echo bccomp('1.00001', '1', 3); // 0
echo bccomp('1.00001', '1', 5); // 1

?>

   
```

## 参见

 `BcMath\Number::compare()`
