---
id: "zh-php-function-yaf-loader-getinstance"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::getInstance"
title: "获取 Yaf_Loader 实例"
signature: "public static Yaf_Loader|false Yaf_Loader::getInstance(string $local_library_path = null, string $global_library_path = null)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.getinstance.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 Yaf_Loader 实例

## 说明

```php
public static Yaf_Loader|false Yaf_Loader::getInstance(string $local_library_path = null, string $global_library_path = null)
```

获取 `Yaf_Loader` 单例实例。

如果指定了库路径，则会应用到已存在的实例上。

## 参数

- **`$local_library_path`** — 本地库目录，通常与 `application.library.directory` ini 配置项相同。
- **`$global_library_path`** — 全局库目录。未指定时使用本地库目录。

## 返回值

返回 `Yaf_Loader` 实例；如果加载器尚未初始化（通常由 `Yaf_Application` 完成），则返回 `false`。

## 示例

**`Yaf_Loader::getInstance()` 示例**

```php


<?php
$app = new Yaf_Application(__DIR__ . "/conf/application.ini");

/* Yaf_Application 已经初始化了加载器，
 * 因此单例实例现在可用 */
$loader = Yaf_Loader::getInstance();
$loader->registerNamespace("Vendor", APPLICATION_PATH . "/library/Vendor");
?>

   
```

**初始化之前的 `Yaf_Loader::getInstance()`**

```php


<?php
/* 尚未创建任何 Yaf_Application */
var_dump(Yaf_Loader::getInstance());
?>

   
```

以上示例的输出类似于：

```text


bool(false)

   
```

## 参见

 `Yaf_Loader::setLibraryPath()` `Yaf_Loader::getLibraryPath()`
