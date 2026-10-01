---
id: "zh-php-function-function-seaslog-get-version"
language: "php"
lang: "zh"
category: "function"
name: "seaslog_get_version"
title: "获取 SeasLog 的版本"
signature: "string seaslog_get_version()"
module: "seaslog"
source_url: "https://www.php.net/manual/zh/function.seaslog-get-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 SeasLog 的版本

## 说明

```php
string seaslog_get_version()
```

## 参数

此函数没有参数。

## 返回值

返回一个 SeasLog 版本号的字符串

## 示例

**`seaslog_get_version()` 示例**

```php


<?php

var_dump(seaslog_get_version());

?>

   
```

以上示例的输出类似于：

```text


string(5) "1.8.4"

   
```
