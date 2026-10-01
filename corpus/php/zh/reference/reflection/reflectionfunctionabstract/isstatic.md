---
id: "zh-php-function-reflectiofunctionabstract-isstatic"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionFunctionAbstract::isStatic"
title: "判断函数是否为 static"
signature: "public bool ReflectionFunctionAbstract::isStatic()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectiofunctionabstract.isstatic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断函数是否为 static

## 说明

```php
public bool ReflectionFunctionAbstract::isStatic()
```

判断函数是否是 static。

## 参数

此函数没有参数。

## 返回值

函数为 static，返回 `true`，否则为 `false`

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 此方法已提升。之前仅定义于 `ReflectionMethod`。 |

## 参见

`ReflectionMethod::isFinal()`
