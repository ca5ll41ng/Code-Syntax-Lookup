---
id: "zh-php-function-function-spl-autoload-extensions"
language: "php"
lang: "zh"
category: "function"
name: "spl_autoload_extensions"
title: "注册并返回 spl_autoload 的默认文件扩展名"
signature: "string spl_autoload_extensions(string|null $file_extensions = null)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.spl-autoload-extensions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注册并返回 spl_autoload 的默认文件扩展名

## 说明

```php
string spl_autoload_extensions(string|null $file_extensions = null)
```

本函数可以修改和检查 `__autoload()` 后备函数 `spl_autoload()` 将使用的扩展名。

> 在定义的文件扩展名之间不应该有空格。

## 参数

- **`$file_extensions`** — 如果为 `null`，只返回当前扩展名列表，每个扩展名用逗号分隔。要修改文件扩展名列表，只需在单个字符串中，用逗号分割的新文件扩展名列表调用此函数即可。

## 返回值

逗号分隔的 `spl_autoload()` 的默认文件扩展名。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$file_extensions` 现在可以为 null。 |

## 示例

**`spl_autoload_extensions()` 示例**

```php


<?php
spl_autoload_extensions(".php,.inc");
?>

   
```
