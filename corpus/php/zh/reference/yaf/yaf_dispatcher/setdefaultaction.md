---
id: "zh-php-function-yaf-dispatcher-setdefaultaction"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::setDefaultAction"
title: "更改默认动作名"
signature: "public Yaf_Dispatcher|null|false Yaf_Dispatcher::setDefaultAction(string $action)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.setdefaultaction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 更改默认动作名

## 说明

```php
public Yaf_Dispatcher|null|false Yaf_Dispatcher::setDefaultAction(string $action)
```

更改当无法从请求 URI 中提取动作名时所使用的动作名。该名称会被规范化为 小写。

## 参数

- **`$action`** — 动作的名称。

## 返回值

成功时返回 `Yaf_Dispatcher` 对象自身，如果应用未初始化 则返回 `false`。

## 示例

**`Yaf_Dispatcher::setDefaultAction()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

// 现在不含动作部分的请求会被路由到 "main" 而不是 "index"，
// 例如 /user 会被映射到 UserController::mainAction
Yaf_Dispatcher::getInstance()->setDefaultAction("main");

$app->run();
?>

   
```

## 参见

`Yaf_Dispatcher::setDefaultModule()` `Yaf_Dispatcher::setDefaultController()` `Yaf_Dispatcher::getDefaultAction()`
