---
id: "zh-php-function-yaf-loader-setlibrarypath"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::setLibraryPath"
title: "更改库路径"
signature: "public Yaf_Loader Yaf_Loader::setLibraryPath(string $library_path, bool $is_global = false)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.setlibrarypath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 更改库路径

## 说明

```php
public Yaf_Loader Yaf_Loader::setLibraryPath(string $library_path, bool $is_global = false)
```

更改库目录。

## 参数

- **`$library_path`** — 新的库目录。
- **`$is_global`** — 是否更改全局库目录而不是本地库目录。

## 返回值

返回加载器实例自身。

## 示例

**`Yaf_Loader::setLibraryPath()` 示例**

```php


<?php
$app    = new Yaf_Application(__DIR__ . "/conf/application.ini");
$loader = Yaf_Loader::getInstance();

/* 更改本地库目录 */
$loader->setLibraryPath("/var/www/shop/application/library");

/* 更改全局库目录 */
$loader->setLibraryPath("/usr/local/share/yaf/library", true);

echo $loader->getLibraryPath(), PHP_EOL;
echo $loader->getLibraryPath(true), PHP_EOL;
?>

   
```

以上示例的输出类似于：

```text


/var/www/shop/application/library
/usr/local/share/yaf/library

   
```

## 参见

 `Yaf_Loader::getLibraryPath()`
