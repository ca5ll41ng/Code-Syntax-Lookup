---
id: "zh-php-function-yaf-loader-registernamespace"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::registerNamespace"
title: "registerLocalNamespace 的别名"
signature: "public Yaf_Loader|false|null Yaf_Loader::registerNamespace(string|array $name_prefix, string $path = null)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.registernamespace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# registerLocalNamespace 的别名

## 说明

```php
public Yaf_Loader|false|null Yaf_Loader::registerNamespace(string|array $name_prefix, string $path = null)
```

`Yaf_Loader::registerLocalNamespace()` 的别名。

## 参数

- **`$name_prefix`** — 命名空间前缀字符串，或者前缀/路径对（当值为路径字符串时）或前缀字符串组成的数组。
- **`$path`** — 查找该命名空间的目录。如果未提供，则使用本地库目录。

## 返回值

成功时返回加载器实例自身，如果提供了无效参数则返回 `false`。

## 示例

**`Yaf_Loader::registerNamespace()` 示例**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initLoader()
    {
        /* registerNamespace() 是 registerLocalNamespace() 的别名 */
        Yaf_Loader::getInstance()->registerNamespace(
            "Vendor",
            APPLICATION_PATH . "/library/Vendor"
        );
    }
}

/* new Vendor_Payment_Gateway() 现在会在
 * APPLICATION_PATH/library/Vendor/Payment/Gateway.php 中查找 */
?>

   
```

## 参见

 `Yaf_Loader::registerLocalNamespace()`
