---
id: "zh-php-function-closure-getcurrent"
language: "php"
lang: "zh"
category: "function"
name: "Closure::getCurrent"
title: "返回当前正在执行的闭包"
signature: "public static Closure Closure::getCurrent()"
module: "language"
source_url: "https://www.php.net/manual/zh/closure.getcurrent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前正在执行的闭包

## 说明

```php
public static Closure Closure::getCurrent()
```

返回当前正在执行的闭包。此方法主要用于实现递归闭包，无需使用 `use` 关键字捕获对闭包变量的引用。

此方法必须在闭包内部调用；在闭包上下文之外调用将导致 `Error: Current function is not a closure.`

## 参数

此函数没有参数。

## 返回值

返回当前正在执行的 `Closure` 实例。

## 错误／异常

如果在闭包上下文之外调用，则抛出 `Error`。

## 示例

**`Closure::getCurrent()` 示例**

使用 `Closure::getCurrent()` 实现递归斐波那契函数：

```php


<?php
$fibonacci = function (int $n) {
    if ($n === 0 || $n === 1) {
        return $n;
    }

    $fn = Closure::getCurrent();
    return $fn($n - 1) + $fn($n - 2);
};

echo $fibonacci(10); // Outputs: 55
?>

   
```

**与传统方法的比较**

在 PHP 8.5 之前，实现递归闭包需要使用 `use` 关键字捕获对闭包变量的引用：

```php


<?php
// Traditional approach (still works in PHP 8.5)
$fibonacci = function (int $n) use (&$fibonacci) {
    if ($n === 0) return 0;
    if ($n === 1) return 1;
    return $fibonacci($n - 1) + $fibonacci($n - 2);
};

echo $fibonacci(10); // Outputs: 55
?>

   
```

`Closure::getCurrent()` 方法消除了在 `use` 子句中使用引用声明变量的需要，使代码更简洁且不易出错。
