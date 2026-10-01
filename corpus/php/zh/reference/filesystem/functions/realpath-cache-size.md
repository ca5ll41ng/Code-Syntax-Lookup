---
id: "zh-php-function-function-realpath-cache-size"
language: "php"
lang: "zh"
category: "function"
name: "realpath_cache_size"
title: "获取真实路径缓冲区的大小"
signature: "int realpath_cache_size()"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.realpath-cache-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取真实路径缓冲区的大小

## 说明

```php
int realpath_cache_size()
```

获取真实路径缓存区大小在内存中的使用量。

## 参数

此函数没有参数。

## 返回值

返回真实路径缓存区使用内存的用量。

## 示例

**`realpath_cache_size()` 示例**

```php


<?php
var_dump(realpath_cache_size());
?>

    
```

以上示例的输出类似于：

```text


int(412)

    
```

## 参见

`realpath_cache_get()` realpath_cache_size 方法的配置选项
