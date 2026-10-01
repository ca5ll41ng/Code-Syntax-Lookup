---
id: "zh-php-function-yaf-dispatcher-getinstance"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::getInstance"
title: "获取分发器实例"
signature: "public static Yaf_Dispatcher|null Yaf_Dispatcher::getInstance()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.getinstance.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取分发器实例

## 说明

```php
public static Yaf_Dispatcher|null Yaf_Dispatcher::getInstance()
```

获取唯一的 `Yaf_Dispatcher` 实例。

## 参数

此函数没有参数。

## 返回值

`Yaf_Dispatcher` 实例，如果尚未初始化 `Yaf_Application` 则返回 `null`。

## 示例

**`Yaf_Dispatcher::getInstance()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

$dispatcher = Yaf_Dispatcher::getInstance();

var_dump($dispatcher === Yaf_Dispatcher::getInstance());
?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

`Yaf_Application::getDispatcher()`
