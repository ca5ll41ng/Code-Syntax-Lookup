---
id: "zh-php-function-yaf-dispatcher-getdefaultcontroller"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::getDefaultController"
title: "获取默认控制器名称"
signature: "public string|null Yaf_Dispatcher::getDefaultController()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.getdefaultcontroller.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取默认控制器名称

## 说明

```php
public string|null Yaf_Dispatcher::getDefaultController()
```

获取默认控制器名称，当无法从请求 URI 中解析出控制器名称时使用。 默认为 `"Index"`。

## 参数

此函数没有参数。

## 返回值

返回默认控制器名称，如果应用尚未初始化则返回 `null`。

## 示例

**`Yaf_Dispatcher::getDefaultController()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

var_dump(Yaf_Dispatcher::getInstance()->getDefaultController());
?>

   
```

以上示例的输出类似于：

```text


string(5) "Index"

   
```

## 参见

`Yaf_Dispatcher::setDefaultController()`
