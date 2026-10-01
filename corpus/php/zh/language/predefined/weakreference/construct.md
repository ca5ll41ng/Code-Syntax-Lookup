---
id: "zh-php-function-weakreference-construct"
language: "php"
lang: "zh"
category: "function"
name: "WeakReference::__construct"
title: "不允许实例化的构造函数"
signature: "public WeakReference::__construct()"
module: "language"
source_url: "https://www.php.net/manual/zh/weakreference.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 不允许实例化的构造函数

## 说明

```php
public WeakReference::__construct()
```

这个方法的存在只是为了禁止实例化 `WeakReference` 类。 弱引用使用工厂方法 `WeakReference::create()` 进行实例化。

## 参数

此函数没有参数。

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title xmlns="http://docbook.org/ns/docbook">返回值</title> <para> </para> </refsect1> 

## 参见

 `WeakReference::create()`
