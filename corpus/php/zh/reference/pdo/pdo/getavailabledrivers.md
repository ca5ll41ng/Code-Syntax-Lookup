---
id: "zh-php-function-pdo-getavailabledrivers"
language: "php"
lang: "zh"
category: "function"
name: "PDO::getAvailableDrivers"
aliases: ["pdo_drivers"]
title: "返回一个可用驱动的数组"
signature: "public static array PDO::getAvailableDrivers()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.getavailabledrivers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回一个可用驱动的数组

## 说明

```php
public static array PDO::getAvailableDrivers()
```

```php
array pdo_drivers()
```

此方法返回所有当前可用在 `PDO::__construct()` 的 `$DSN` 参数中的 PDO 驱动。

## 参数

此函数没有参数。

## 返回值

`PDO::getAvailableDrivers()` 返回包含可用 PDO 驱动名字的数组。如果没有可用的驱动，则返回空数组。

## 示例

**`PDO::getAvailableDrivers()` 示例**

```php


<?php
print_r(PDO::getAvailableDrivers());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => mysql
    [1] => sqlite
)

    
```
