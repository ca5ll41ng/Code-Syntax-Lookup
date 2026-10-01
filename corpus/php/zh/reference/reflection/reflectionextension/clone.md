---
id: "zh-php-function-reflectionextension-clone"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionExtension::__clone"
title: "克隆"
signature: "private void ReflectionExtension::__clone()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionextension.clone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 克隆

## 说明

```php
private void ReflectionExtension::__clone()
```

clone 方法阻止对象克隆。不允许克隆反射对象。

## 参数

此函数没有参数。

## 返回值

没有返回值，如果被调用将产生 fatal 错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 此函数不再是 `final`。 |

## 参见

`ReflectionExtension::__construct()` 对象克隆
