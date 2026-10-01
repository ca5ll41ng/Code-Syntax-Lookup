---
id: "zh-php-function-function-get-resource-id"
language: "php"
lang: "zh"
category: "function"
name: "get_resource_id"
title: "返回给定资源的整数标识符"
signature: "int get_resource_id(resource $resource)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.get-resource-id.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回给定资源的整数标识符

## 说明

```php
int get_resource_id(resource $resource)
```

此函数提供了一种类型安全的方式来生成资源的整数标识符。

## 参数

- **`$resource`** — 需要获取的资源句柄。

## 返回值

给定 `$resource` 的 `int` 标识符。

此函数本质上是对 `$resource` 的 `int` 转换，使得更容易获取资源的标识符。

## 示例

**`get_resource_id()` 与 `int` 转换的结果相同**

```php


<?php
$handle = fopen("php://stdout", "w");

echo (int) $handle . "\n";

echo get_resource_id($handle);

?>

    
```

以上示例的输出类似于：

```php


698
698

    
```

## 参见

`get_resource_type()`
