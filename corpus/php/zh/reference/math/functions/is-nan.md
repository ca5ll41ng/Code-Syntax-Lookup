---
id: "zh-php-function-function-is-nan"
language: "php"
lang: "zh"
category: "function"
name: "is_nan"
title: "判断浮点数是否是否为 NAN"
signature: "bool is_nan(float $num)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.is-nan.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断浮点数是否是否为 NAN

## 说明

```php
bool is_nan(float $num)
```

返回指定的 `$num` 是否是 `NAN`（非数值）。

`NAN` 是从未定义的数学运算中返回的，例如传递的参数在函数的输入域之外的时候。平方根（`sqrt()`）仅对正数定义，传递负数将导致 `NAN`。返回 `NAN` 的其它操作示例有 `INF` 除以 `INF` 以及涉及现有 `NAN` 值的任何操作。

> 尽管名字叫 Not A Number，但 `NAN` 是有效的 `float` 类型。

> `NAN` 不能与 `NAN` 进行比较。要检测浮点数是否是 `NAN`，必须使用 `is_nan()`。使用 $float === NAN 检测将不起作用。

## 参数

- **`$num`** — 要检查的 `float`

## 返回值

如果 `$num` 是 `NAN`，返回 `true`，否则返回 `false`。

## 示例

**`is_nan()` 示例**

```php


<?php
$nan = sqrt(-1);

var_dump($nan, is_nan($nan));
?>

    
```

以上示例会输出：

```text


float(NAN)
bool(true)

    
```

## 参见

`is_finite()` `is_infinite()`
