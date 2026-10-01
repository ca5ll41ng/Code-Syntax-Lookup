---
id: "zh-php-function-function-apache-get-modules"
language: "php"
lang: "zh"
category: "function"
name: "apache_get_modules"
title: "获得已加载的Apache模块列表"
signature: "array apache_get_modules()"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.apache-get-modules.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得已加载的Apache模块列表

## 说明

```php
array apache_get_modules()
```

获得已加载的Apache模块列表。

## 参数

此函数没有参数。

## 返回值

包含已加载的Apache模块的`数组`.

## 示例

**`apache_get_modules()` 示例**

```php


<?php
print_r(apache_get_modules());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => core
    [1] => http_core
    [2] => mod_so
    [3] => sapi_apache2
    [4] => mod_mime
    [5] => mod_rewrite
)

    
```
