---
id: "zh-php-function-yaf-loader-registerlocalnamespace"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::registerLocalNamespace"
title: "注册本地命名空间"
signature: "public Yaf_Loader|false|null Yaf_Loader::registerLocalNamespace(string|array $namespace, string $path = null)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.registerlocalnamespace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注册本地命名空间

## 说明

```php
public Yaf_Loader|false|null Yaf_Loader::registerLocalNamespace(string|array $namespace, string $path = null)
```

注册本地命名空间。前缀属于本地命名空间的类，将在给定的路径下查找（未指定路径时为本地库目录），而不是全局库目录。

这样，你就可以把自己的类放在本地库目录中，而共享类则存放在全局库目录中（参见 `yaf.library` ini 配置项）。

## 参数

- **`$namespace`** — 命名空间前缀字符串，或者前缀/路径对的数组（值为路径字符串时），或前缀字符串的数组。
- **`$path`** — 查找该命名空间的目录。未指定时使用本地库目录。

## 返回值

成功时返回加载器实例自身；如果提供了无效的参数，则返回 `false`。

## 示例

**`Yaf_Loader::registerLocalNamespace()` 示例**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initLoader()
    {
        $loader = Yaf_Loader::getInstance();

        /* Models_User 现在将在
         * APPLICATION_PATH/library/Models/User.php 中查找 */
        $loader->registerLocalNamespace("Models");

        /* 一次注册多个前缀，每个都有自己的查找目录 */
        $loader->registerLocalNamespace(array(
            "Services" => APPLICATION_PATH . "/services",
            "Vendor"   => APPLICATION_PATH . "/vendor",
        ));
    }
}
?>

   
```

## 参见

 `Yaf_Loader::getLocalNamespace()` `Yaf_Loader::clearLocalNamespace()` `Yaf_Loader::isLocalName()`
