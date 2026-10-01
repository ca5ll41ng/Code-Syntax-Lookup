---
id: "zh-php-function-reflectionextension-construct"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::__construct"
title: "构造 ReflectionExtension"
signature: "public ReflectionExtension::__construct(string $name)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造 ReflectionExtension

## 说明

```php
public ReflectionExtension::__construct(string $name)
```

构造 `ReflectionExtension` `object`。

## 参数

- **`$name`** — 扩展名。

## 错误／异常

如果要反射的扩展不存在，则抛出 `ReflectionException`。

## 示例

**`ReflectionExtension` 示例**

```php


<?php
$ext = new ReflectionExtension('Reflection');

printf('Extension: %s (version: %s)', $ext->getName(), $ext->getVersion());
?>

    
```

以上示例的输出类似于：

```text


Extension: Reflection (version: 8.3.17)

    
```

## 参见

`ReflectionExtension::info()` 构造函数
