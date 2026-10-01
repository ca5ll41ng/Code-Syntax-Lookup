---
id: "zh-php-function-function-php-ini-scanned-files"
language: "php"
lang: "zh"
category: "function"
name: "php_ini_scanned_files"
title: "返回从额外 ini 目录里解析的 .ini 文件列表"
signature: "string|false php_ini_scanned_files()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.php-ini-scanned-files.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回从额外 ini 目录里解析的 .ini 文件列表

## 说明

```php
string|false php_ini_scanned_files()
```

`php_ini_scanned_files()` 在 php.ini 之后解析的配置文件的逗号分割列表。搜索的目录由编译时选项设置，也可以在运行时由环境变量设置：更多信息可以从安装指南中找到。

返回的配置文件包含完整路径。

## 参数

此函数没有参数。

## 返回值

成功时返回逗号分隔的 .ini 文件字符串。每个逗号后紧跟新的一行。如果未设置配置指令 --with-config-file-scan-dir 并且没有设置环境变量 `PHP_INI_SCAN_DIR` 将会返回 `false`。如果它设置了，并且目录是空的，将会返回一个空字符串。如果有未识别的文件，此文件也会进入返回的字符串，但是会导致一个 PHP 错误。此 PHP 错误即会在编译时出现也会在使用 `php_ini_scanned_files()` 函数时出现。

## 示例

**列出返回的 ini 文件的简单示例**

```php


<?php
if ($filelist = php_ini_scanned_files()) {
    if (strlen($filelist) > 0) {
        $files = explode(',', $filelist);

        foreach ($files as $file) {
            echo "<li>" . trim($file) . "</li>\n";
        }
    }
}
?>

    
```

## 参见

`ini_set()` `phpinfo()` `php_ini_loaded_file()`
