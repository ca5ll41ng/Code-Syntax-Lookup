---
id: "zh-php-function-yaf-loader-getnamespacepath"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Loader::getNamespacePath"
title: "获取类的库文件路径"
signature: "public string Yaf_Loader::getNamespacePath(string $class_name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-loader.getnamespacepath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取类的库文件路径

## 说明

```php
public string Yaf_Loader::getNamespacePath(string $class_name)
```

获取某个类将被查找的库目录。

## 参数

- **`$class_name`** — 要查询其库目录的类名。

## 返回值

如果该类属于已注册的本地命名空间，则返回本地库目录，否则返回全局库目录（当全局库目录未设置时回退到本地库目录）。

## 示例

**`Yaf_Loader::getNamespacePath()` 示例**

```php


<?php
$app    = new Yaf_Application(__DIR__ . "/conf/application.ini");
$loader = Yaf_Loader::getInstance();

$loader->registerLocalNamespace("Models");
$loader->setLibraryPath("/usr/local/share/yaf/library", true);

/* "Models" 是一个已注册的本地命名空间 */
echo $loader->getNamespacePath("Models_Product"), PHP_EOL;

/* 其他类回退到全局库目录 */
echo $loader->getNamespacePath("Vendor_Payment"), PHP_EOL;
?>

   
```

以上示例的输出类似于：

```text


/var/www/shop/application/library
/usr/local/share/yaf/library

   
```

## 参见

 `Yaf_Loader::isLocalName()` `Yaf_Loader::getLibraryPath()`
