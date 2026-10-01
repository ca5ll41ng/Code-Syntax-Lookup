---
id: "zh-php-function-function-autoload"
language: "php"
lang: "zh"
category: "function"
name: "__autoload"
title: "尝试加载未定义的类"
signature: "void __autoload(string $class)"
module: "classobj"
source_url: "https://www.php.net/manual/zh/function.autoload.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 尝试加载未定义的类

## 说明

```php
void __autoload(string $class)
```

你可以通过定义这个函数来启用类的自动加载。

## 参数

- **`$class`** — 待加载的类名。

## 返回值

没有返回值。

## 参见

`spl_autoload_register()`
