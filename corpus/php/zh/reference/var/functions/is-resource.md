---
id: "zh-php-function-function-is-resource"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "is_resource"
title: "查找变量是否为资源"
signature: "bool is_resource(mixed $value)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-resource.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查找变量是否为资源

## 说明

```php
bool is_resource(mixed $value)
```

检测变量是否是 `resource`。

## 参数

- **`$value`** — 要计算的变量。

## 返回值

如果 `$value` 是 `resource`，则返回 `true`，否则返回 `false`。

## 示例

**`is_resource()` 示例**

```php


<?php

$handle = fopen("php://stdout", "w");
if (is_resource($handle)) {
    echo '$handle is a resource';
}

?>

    
```

以上示例会输出：

```php


$handle is a resource

    
```

## 注释

> `is_resource()` 不是严格的类型检查方法：如果 `$value` 是已关闭的资源变量，将返回 `false`。

## 参见

资源类型文档 `get_resource_type()`
