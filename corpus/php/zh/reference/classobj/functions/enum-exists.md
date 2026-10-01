---
id: "zh-php-function-function-enum-exists"
language: "php"
lang: "zh"
category: "function"
name: "enum_exists"
title: "检测是否定义对应的枚举"
signature: "bool enum_exists(string $enum, bool $autoload = true)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.enum-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测是否定义对应的枚举

## 说明

```php
bool enum_exists(string $enum, bool $autoload = true)
```

本函数检测是否定义指定的枚举。

## 参数

- **`$enum`** — 枚举的名称。名称的匹配不区分大小写。
- **`$autoload`** — 如果尚未加载，是否自动加载。

## 返回值

如果 `$enum` 已定义，返回 `true`，否则就返回 `false`。

## 示例

**`enum_exists()` 示例**

```php


<?php
// 在使用之前检测枚举是否存在
if (enum_exists(Suit::class)) {
    $myclass = Suit::Hearts;
}
?>

    
```

## 参见

`function_exists()` `class_exists()` `interface_exists()` `get_declared_classes()`
