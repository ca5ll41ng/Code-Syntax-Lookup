---
id: "zh-php-function-reflectionfunctionabstract-getclosurethis"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionFunctionAbstract::getClosureThis"
title: "返回闭包内与 $this 对应的对象"
signature: "public object|null ReflectionFunctionAbstract::getClosureThis()"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionfunctionabstract.getclosurethis.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回闭包内与 $this 对应的对象

## 说明

```php
public object|null ReflectionFunctionAbstract::getClosureThis()
```

如果函数是非静态闭包，获取绑定到闭包内部 `$this` 的对象。

## 参数

此函数没有参数。

## 返回值

返回 `Closure` 中 `$this` 所表示的对象实例。如果函数不是闭包或者没有 `$this`，则返回 `null`。



## 参见

 `ReflectionFunctionAbstract::getClosureCalledClass()` `ReflectionFunctionAbstract::getClosureScopeClass()` `language.oop5.late-static-bindings`
