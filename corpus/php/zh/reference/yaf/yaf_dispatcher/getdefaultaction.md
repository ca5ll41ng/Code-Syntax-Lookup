---
id: "zh-php-function-yaf-dispatcher-getdefaultaction"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::getDefaultAction"
title: "获取默认 action 名称"
signature: "public string|null Yaf_Dispatcher::getDefaultAction()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.getdefaultaction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取默认 action 名称

## 说明

```php
public string|null Yaf_Dispatcher::getDefaultAction()
```

获取默认 action 名称，当无法从请求 URI 中解析出 action 名称时使用。 默认为 `"index"`。

## 参数

此函数没有参数。

## 返回值

返回默认 action 名称，如果应用尚未初始化则返回 `null`。

## 示例

**`Yaf_Dispatcher::getDefaultAction()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

$dispatcher = Yaf_Dispatcher::getInstance();

var_dump($dispatcher->getDefaultAction());

$dispatcher->setDefaultAction("main");
var_dump($dispatcher->getDefaultAction());
?>

   
```

以上示例的输出类似于：

```text


string(5) "index"
string(4) "main"

   
```

## 参见

`Yaf_Dispatcher::setDefaultAction()`
