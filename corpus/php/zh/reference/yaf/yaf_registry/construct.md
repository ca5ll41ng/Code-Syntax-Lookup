---
id: "zh-php-function-yaf-registry-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Registry::__construct"
title: "Yaf_Registry 的构造函数"
signature: "private Yaf_Registry::__construct()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-registry.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Registry 的构造函数

## 说明

```php
private Yaf_Registry::__construct()
```

构造函数是私有的：`Yaf_Registry` 实现了单例模式，不能被直接实例化。请使用静态方法来读写注册表条目。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**`Yaf_Registry::__construct()` 示例**

构造函数是私有的，因此直接实例化会被拒绝：

```php


<?php
$registry = new Yaf_Registry();
?>

   
```

以上示例的输出类似于：

```text


PHP Fatal error:  Uncaught Error: Call to private Yaf_Registry::__construct() from invalid context

   
```

**通过静态方法使用 `Yaf_Registry`**

```php


<?php
Yaf_Registry::set("version", Yaf_Application::app()->getConfig()->application->version);
var_dump(Yaf_Registry::get("version"));
?>

   
```

以上示例的输出类似于：

```text


string(7) "1.0.0.1"

   
```

## 参见

 `Yaf_Registry::set()` `Yaf_Registry::get()` `Yaf_Registry::has()`
