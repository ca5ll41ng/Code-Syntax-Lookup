---
id: "zh-php-function-seaslog-getbasepath"
language: "php"
lang: "zh"
category: "function"
name: "SeasLog::getBasePath"
title: "获得 SeasLog 根目录"
signature: "public static string Seaslog::getBasePath()"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/seaslog.getbasepath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得 SeasLog 根目录

## 说明

```php
public static string Seaslog::getBasePath()
```

使用函数 `SeasLog::getBasePath()` 可以获得在 php.ini(seaslog.ini) 中设置的seaslog.default_basepath。

如果使用函数 `Seaslog::setBasePath()`，将改变函数取值。

## 参数

此函数没有参数。

## 返回值

seaslog.default_basepath 作为字符串返回。

## 示例

**`SeasLog::getBasePath()` 示例**

```php


<?php

var_dump(SeasLog::getBasePath());

?>

   
```

以上示例的输出类似于：

```text


string(12) "/var/log/www"

   
```
