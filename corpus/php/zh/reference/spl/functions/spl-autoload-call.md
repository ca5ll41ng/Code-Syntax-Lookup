---
id: "zh-php-function-function-spl-autoload-call"
language: "php"
lang: "zh"
category: "function"
name: "spl_autoload_call"
title: "尝试所有已注册的 __autoload() 函数来装载请求类"
signature: "void spl_autoload_call(string $class)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.spl-autoload-call.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 尝试所有已注册的 __autoload() 函数来装载请求类

## 说明

```php
void spl_autoload_call(string $class)
```

此函数可以用来使用已注册的 __autoload() 函数手动搜索类、接口、trait 或枚举。

## 参数

- **`$class`** — 搜索的类名。

## 返回值

没有返回值。
