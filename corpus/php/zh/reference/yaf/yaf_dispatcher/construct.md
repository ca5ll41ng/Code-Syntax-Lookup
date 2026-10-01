---
id: "zh-php-function-yaf-dispatcher-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::__construct"
title: "Yaf_Dispatcher 构造方法"
signature: "private Yaf_Dispatcher::__construct()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Dispatcher 构造方法

## 说明

```php
private Yaf_Dispatcher::__construct()
```

`Yaf_Dispatcher` 实现了单例模式，所以构造方法是私有的。 请使用 `Yaf_Dispatcher::getInstance()` 来获取分发器实例， 该实例由 `Yaf_Application` 创建。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 示例

**`Yaf_Dispatcher` 是单例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

// Yaf_Dispatcher 实现了单例模式，所以它的构造方法是私有的。
// 请使用 Yaf_Dispatcher::getInstance() 来获取实例，
// 而不是调用 `new`。
$dispatcher = Yaf_Dispatcher::getInstance();

var_dump($dispatcher instanceof Yaf_Dispatcher);
?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

`Yaf_Dispatcher::getInstance()` `Yaf_Application::getDispatcher()`
