---
id: "zh-php-function-function-apache-get-version"
language: "php"
lang: "zh"
category: "function"
name: "apache_get_version"
title: "获得Apache版本信息"
signature: "string|false apache_get_version()"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.apache-get-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得Apache版本信息

## 说明

```php
string|false apache_get_version()
```

获得Apache版本信息。

## 参数

此函数没有参数。

## 返回值

成功时返回 Apache 版本信息 或者在失败时返回 `false`.

## 示例

**`apache_get_version()` 示例**

```php


<?php
$version = apache_get_version();
echo "$version\n";
?>

    
```

以上示例的输出类似于：

```text


Apache/1.3.29 (Unix) PHP/4.3.4 

    
```

## 参见

`phpinfo()`
