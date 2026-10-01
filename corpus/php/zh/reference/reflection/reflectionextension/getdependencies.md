---
id: "zh-php-function-reflectionextension-getdependencies"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::getDependencies"
title: "获取依赖"
signature: "public array ReflectionExtension::getDependencies()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.getdependencies.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取依赖

## 说明

```php
public array ReflectionExtension::getDependencies()
```

获取依赖，包括必需的、冲突的、可选的。

## 参数

此函数没有参数。

## 返回值

返回以依赖的扩展名称为索引的数组，每一项的取值为 `Required`、`Optional` 或者 `Conflicts`。

## 示例

**`ReflectionExtension::getDependencies()` example**

```php


<?php
$dom = new ReflectionExtension('dom');

print_r($dom->getDependencies());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [libxml] => Required
    [domxml] => Conflicts
)

    
```

## 参见

`ReflectionClass::getVersion()`
