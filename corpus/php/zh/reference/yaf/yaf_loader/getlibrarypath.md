---
id: "zh-php-function-yaf-loader-getlibrarypath"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::getLibraryPath"
title: "获取库路径"
signature: "public string Yaf_Loader::getLibraryPath(bool $is_global = false)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.getlibrarypath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取库路径

## 说明

```php
public string Yaf_Loader::getLibraryPath(bool $is_global = false)
```

获取库目录。

## 参数

- **`$is_global`** — 是否获取全局库目录而不是本地库目录。

## 返回值

返回库目录字符串；如果请求的是全局库目录但其未设置，则返回空字符串。

## 示例

**`Yaf_Loader::getLibraryPath()` 示例**

```php


<?php
$loader = Yaf_Loader::getInstance(
    "/var/www/shop/application/library",
    "/usr/local/share/yaf/library"
);

/* 本地库目录 */
echo $loader->getLibraryPath(), PHP_EOL;

/* 全局库目录 */
echo $loader->getLibraryPath(true), PHP_EOL;
?>

   
```

以上示例的输出类似于：

```text


/var/www/shop/application/library
/usr/local/share/yaf/library

   
```

## 参见

 `Yaf_Loader::setLibraryPath()`
