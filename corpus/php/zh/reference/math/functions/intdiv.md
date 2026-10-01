---
id: "zh-php-function-function-intdiv"
language: "php"
lang: "zh"
category: "function"
name: "intdiv"
title: "对除法结果取整"
signature: "int intdiv(int $num1, int $num2)"
module: "math"
source_url: "https://www.php.net/manual/zh/function.intdiv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对除法结果取整

## 说明

```php
int intdiv(int $num1, int $num2)
```

返回 `$num1` 除以 `$num2` 商数的整数部分。

## 参数

- **`$num1`** — 被除数。
- **`$num2`** — 除数。

## 返回值

`$num1` 除以 `$num2` 的商，对该商取整。

## 错误／异常

如果 `$num2` 是 `0`，将抛出 `DivisionByZeroError` 异常。如果 `$num1` 是 `PHP_INT_MIN` 并且 `$num2` 是 `-1`，将抛出 `ArithmeticError` 异常.

## 示例

**`intdiv()` 的一些示例**

```php


<?php
var_dump(intdiv(3, 2));
var_dump(intdiv(-3, 2));
var_dump(intdiv(3, -2));
var_dump(intdiv(-3, -2));
var_dump(intdiv(PHP_INT_MAX, PHP_INT_MAX));
var_dump(intdiv(PHP_INT_MIN, PHP_INT_MIN));
?>

    
```

以上示例会输出：

```text


int(1)
int(-1)
int(-1)
int(1)
int(1)
int(1)

    
```

**`intdiv()` 无效除数的示例**

```php


<?php
try {
    intdiv(PHP_INT_MIN, -1);
} catch (Error $e) {
    echo get_class($e), ': ', $e->getMessage(), PHP_EOL;
}

try {
    intdiv(1, 0);
} catch (Error $e) {
    echo get_class($e), ': ', $e->getMessage(), PHP_EOL;
}
?>

    
```

以上示例会输出：

```text


ArithmeticError: Division of PHP_INT_MIN by -1 is not an integer
DivisionByZeroError: Division by zero

    
```

## 参见

`/`——浮点除法 `%`——整数取模 `fmod()`——浮点数取模
