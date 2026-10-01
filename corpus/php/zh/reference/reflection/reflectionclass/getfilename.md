---
id: "zh-php-function-reflectionclass-getfilename"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::getFileName"
title: "获取定义类的文件名"
signature: "public string|false ReflectionClass::getFileName()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.getfilename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取定义类的文件名

## 说明

```php
public string|false ReflectionClass::getFileName()
```

获取类被定义的文件的文件名。

## 参数

此函数没有参数。

## 返回值

返回类所定义的文件名。如果这个类是在 PHP 核心或 PHP 扩展中定义的，则返回 `false`。

## 参见

`ReflectionClass::getExtensionName()`
