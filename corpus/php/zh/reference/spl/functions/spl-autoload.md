---
id: "zh-php-function-function-spl-autoload"
language: "php"
lang: "zh"
category: "function"
name: "spl_autoload"
title: "__autoload() 函数的默认实现"
signature: "void spl_autoload(string $class, string|null $file_extensions = null)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.spl-autoload.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# __autoload() 函数的默认实现

## 说明

```php
void spl_autoload(string $class, string|null $file_extensions = null)
```

本函数用于 `__autoload()` 的默认实现。如果未指定任何参数调用 `spl_autoload_register()`，则此函数在 `__autoload()` 调用时会自动使用 `spl_autoload()`。

## 参数

- **`$class`** — 正在实例化的类的名称。 在调用该函数时，将类名与命名空间一起传递给参数。 `$class` 不包含完全限定标识符的前导反斜杠。
- **`$file_extensions`** — 在默认情况下，本函数先将类名转换成小写，再在小写的类名后加上 `.inc` 或 `.php` 的扩展名作为文件名，然后在所有的包含路径（include_paths）中检查是否存在该文件。

## 返回值

没有返回值。

## 错误／异常

当未找到类或者没有注册其它自动加载器时抛出 `LogicException`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$file_extensions` 现在允许为 null。 |
