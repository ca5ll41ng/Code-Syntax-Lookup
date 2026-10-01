---
id: "zh-php-function-function-class-exists"
language: "php"
lang: "zh"
category: "function"
name: "class_exists"
title: "查类是否已经定义"
signature: "bool class_exists(string $class, bool $autoload = true)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.class-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查类是否已经定义

## 说明

```php
bool class_exists(string $class, bool $autoload = true)
```

该函数检查指定的类是否已经定义。

## 参数

- **`$class`** — 类名。名称以不区分大小写的方式匹配。
- **`$autoload`** — 如果尚未加载，是否自动加载。

## 返回值

如果 `$class` 是已经定义的类，则返回 `true`，否则返回 `false`。

## 示例

**`class_exists()` 示例**

```php


<?php
// 在尝试使用前检查类是否存在
if (class_exists('MyClass')) {
    $myclass = new MyClass();
}

?>

    
```

**`$autoload` 参数示例**

```php


<?php
spl_autoload_register(function ($class_name) {
    include $class_name . '.php';

    // 检查 include 后是否声明了类
    if (!class_exists($class_name, false)) {
        throw new LogicException("Unable to load class: $class_name");
    }
});

if (class_exists(MyClass::class)) {
    $myclass = new MyClass();
}

?>

    
```

## 参见

`function_exists()` `enum_exists()` `interface_exists()` `get_declared_classes()`
