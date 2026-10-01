---
id: "zh-php-function-yaf-loader-import"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::import"
title: "加载 PHP 脚本"
signature: "public static bool Yaf_Loader::import(string $file)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.import.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 加载 PHP 脚本

## 说明

```php
public static bool Yaf_Loader::import(string $file)
```

加载一次 PHP 脚本文件。如果文件不是绝对路径，则在本地库目录下查找。

一个文件只会被包含一次；再次用相同的文件调用 `Yaf_Loader::import()` 会返回 `true` 而不会重复包含。

## 参数

- **`$file`** — 要加载的文件。

## 返回值

成功时返回 `true`（包括文件已经加载过的情况），失败时返回 `false`。

## 示例

**`Yaf_Loader::import()` 示例**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initHelpers()
    {
        /* 相对路径在库目录下查找，
         * 即 APPLICATION_PATH/library/functions/format.php */
        Yaf_Loader::import("functions/format.php");
    }
}
?>

   
```

**文件只会被导入一次**

```php


<?php
/* 绝对路径直接使用 */
Yaf_Loader::import("/var/www/shop/application/library/Legacy/csv_export.php");

/* 再次导入相同的文件不会有任何操作，直接返回 true */
var_dump(
    Yaf_Loader::import("/var/www/shop/application/library/Legacy/csv_export.php")
);
?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

 `Yaf_Loader::autoload()`
