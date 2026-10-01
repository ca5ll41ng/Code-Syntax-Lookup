---
id: "zh-php-function-reflectionextension-tostring"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::__toString"
title: "生成字符串"
signature: "public string ReflectionExtension::__toString()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成字符串

## 说明

```php
public string ReflectionExtension::__toString()
```

以 `string` 形式返回扩展的反射信息。等同于 `ReflectionExtension::export()` `$return` 参数设置为 `true`。

## 参数

此函数没有参数。

## 返回值

返回扩展的反射信息，同 `ReflectionExtension::export()`。

## 参见

`ReflectionExtension::__construct()` `ReflectionExtension::export()` __toString()
