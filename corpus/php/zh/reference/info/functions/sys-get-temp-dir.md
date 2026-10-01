---
id: "zh-php-function-function-sys-get-temp-dir"
language: "php"
lang: "zh"
category: "function"
name: "sys_get_temp_dir"
title: "返回用于临时文件的目录"
signature: "string sys_get_temp_dir()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.sys-get-temp-dir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回用于临时文件的目录

## 说明

```php
string sys_get_temp_dir()
```

返回 PHP 储存临时文件的默认目录的路径。

## 参数

此函数没有参数。

## 返回值

返回临时目录的路径。

## 示例

**`sys_get_temp_dir()` 示例**

```php


<?php
// 使用 sys_get_temp_dir() 在目录里创建临时文件
$temp_file = tempnam(sys_get_temp_dir(), 'Tux');

echo $temp_file;
?>

    
```

以上示例的输出类似于：

```text


C:\Windows\Temp\TuxA318.tmp

    
```

## 参见

`tmpfile()` `tempnam()`
