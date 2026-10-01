---
id: "zh-php-function-closure-fromcallable"
language: "php"
lang: "zh"
category: "function"
name: "Closure::fromCallable"
title: "将 callable 转换为闭包"
signature: "public static Closure Closure::fromCallable(callable $callback)"
module: "language"
source_url: "https://www.php.net/manual/zh/closure.fromcallable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 callable 转换为闭包

## 说明

```php
public static Closure Closure::fromCallable(callable $callback)
```

使用当前范围从给定的 `$callback` 创建并返回一个新的 匿名函数。 此方法检查 `$callback` 函数在作用域是否可调用， 如果不能，就抛出 `TypeError`。

> 从 PHP 8.1.0 开始，First-class 可调用语法 的语义与此方法相同。

## 参数

- **`$callback`** — 要转换的回调。

## 返回值

返回新创建的 `Closure`， 或者如果 `$callback` 在当前作用域无法调用， 则抛出 `TypeError`。

## 参见

 匿名函数 First-class 可调用语法
