---
id: "zh-php-function-function-php-ini-loaded-file"
language: "php"
lang: "zh"
category: "function"
name: "php_ini_loaded_file"
title: "取得已加载的 php.ini 文件的路径"
signature: "string|false php_ini_loaded_file()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.php-ini-loaded-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得已加载的 php.ini 文件的路径

## 说明

```php
string|false php_ini_loaded_file()
```

检查是否有加载的 php.ini 文件，并取回它的路径。

## 参数

此函数没有参数。

## 返回值

已加载的 php.ini 路径，或在没有时返回 `false`。

## 示例

**`php_ini_loaded_file()` 示例**

```php


<?php
$inipath = php_ini_loaded_file();

if ($inipath) {
    echo 'Loaded php.ini: ' . $inipath;
} else {
    echo 'A php.ini file is not loaded';
}
?>

    
```

以上示例的输出类似于：

```text


Loaded php.ini: /usr/local/php/php.ini

    
```

## 参见

`php_ini_scanned_files()` `phpinfo()` 配置文件
