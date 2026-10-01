---
id: "zh-php-function-function-get-resource-type"
language: "php"
lang: "zh"
category: "function"
name: "get_resource_type"
title: "返回资源类型"
signature: "string get_resource_type(resource $resource)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.get-resource-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回资源类型

## 说明

```php
string get_resource_type(resource $resource)
```

此函数获取指定资源的类型。

## 参数

- **`$resource`** — 要求值的资源句柄。

## 返回值

如果指定 `$resource` 是资源，则此函数将返回表示其类型的字符串。如果此函数未识别类型，则返回值是字符串 `Unknown`。

如果 `$resource` 不是 `resource`，则此函数将返回 `null` 并生成错误。

## 示例

**`get_resource_type()` 示例**

```php


<?php
$fp = fopen("foo", "w");
echo get_resource_type($fp) . "\n";
?>

    
```

以上示例在 PHP 7 中的输出：

```php


stream

    
```

## 参见

`get_resource_id()`
