---
id: "zh-php-function-function-taint"
language: "php"
lang: "zh"
category: "function"
name: "taint"
title: "将字符串标记为已污染"
signature: "bool taint(string $string, string $strings)"
module: "taint"
source_url: "https://www.php.net/manual/zh/function.taint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将字符串标记为已污染

## 说明

```php
bool taint(string $string, string $strings)
```

手动把指定的字符串标记为已污染，效果如同它们来自用户输入。 变量以引用方式传入，但标记本身存储于字符串而非变量之上： 共享同一字符串的所有变量会同时变为已污染状态。

该函数主要用于测试，以及在 $_GET、 $_POST 和 $_COOKIE 超全局变量没有数据的 CLI 脚本中模拟用户输入。

## 参数

- **`$string`** — 持有待标记字符串的变量。
- **`$strings`** — 更多待标记的变量。

## 返回值

始终返回 `true`。当 taint.enable 未开启时， 该函数不做任何事，但仍然返回 `true`。

## 示例

**`taint()` 示例**

```php


<?php
$name = "world";
taint($name);
var_dump(is_tainted($name));
?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 注释

> 只有非空字符串会被标记；持有其他类型或空字符串的变量会被静默忽略。

> interned、persistent 和 permanent 字符串（字符串字面量、 opcache 共享的字符串）永远无法携带标记，会被静默跳过。

## 参见

`untaint()` `is_tainted()`
