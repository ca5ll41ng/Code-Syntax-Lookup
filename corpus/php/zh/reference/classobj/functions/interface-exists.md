---
id: "zh-php-function-function-interface-exists"
language: "php"
lang: "zh"
category: "function"
name: "interface_exists"
title: "检查接口是否已被定义"
signature: "bool interface_exists(string $interface, bool $autoload = true)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.interface-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查接口是否已被定义

## 说明

```php
bool interface_exists(string $interface, bool $autoload = true)
```

检查接口是否已被定义。

## 参数

- **`$interface`** — 接口名。
- **`$autoload`** — 如果尚未加载，是否自动加载。

## 返回值

本函数在由 `$interface` 给出的接口已定义时返回 `true`，否则返回 `false`。

## 示例

**`interface_exists()` 示例**

```php


<?php
// 在尝试使用前先检查接口是否存在
if (interface_exists('MyInterface')) {
    class MyClass implements MyInterface
    {
        // Methods
    }
}

?>

    
```

## 参见

`get_declared_interfaces()` `class_implements()` `class_exists()` `enum_exists()`
