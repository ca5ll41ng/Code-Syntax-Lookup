---
id: "zh-php-function-reflectionextension-getversion"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::getVersion"
title: "获取扩展版本"
signature: "public string|null ReflectionExtension::getVersion()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.getversion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取扩展版本

## 说明

```php
public string|null ReflectionExtension::getVersion()
```

获取扩展的版本。

## 参数

此函数没有参数。

## 返回值

扩展的版本，如果扩展没有版本返回 `null`。

## 示例

**`ReflectionExtension::getVersion()` 示例**

```php


<?php
$ext = new ReflectionExtension('mysqli');
var_dump($ext->getVersion());
?>

    
```

以上示例的输出类似于：

```text


string(3) "0.1"

    
```

## 参见

`ReflectionExtension::info()`
