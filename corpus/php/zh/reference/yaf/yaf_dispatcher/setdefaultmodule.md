---
id: "zh-php-function-yaf-dispatcher-setdefaultmodule"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::setDefaultModule"
title: "更改默认模块名"
signature: "public Yaf_Dispatcher|null|false Yaf_Dispatcher::setDefaultModule(string $module)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.setdefaultmodule.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 更改默认模块名

## 说明

```php
public Yaf_Dispatcher|null|false Yaf_Dispatcher::setDefaultModule(string $module)
```

更改当无法从请求 URI 中提取模块名时所使用的模块名。该模块必须是已注册的， 参见 `Yaf_Application::getModules()`。

## 参数

- **`$module`** — 已注册模块的名称。

## 返回值

成功时返回 `Yaf_Dispatcher` 对象自身；如果给定的模块未注册或应用未初始化，则返回 `false`（模块未注册时会触发一个 `YAF_ERR_TYPE_ERROR`）；其他情况返回 `null`。

## 错误／异常

`YAF_ERR_TYPE_ERROR` 错误会在 `$module` 不是已注册的模块名时触发。

## 示例

**`Yaf_Dispatcher::setDefaultModule()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

// "Home" 必须是一个已注册的模块，例如通过
// conf/application.ini 中的 application.modules = "Index,Home,Admin"
Yaf_Dispatcher::getInstance()->setDefaultModule("Home");

$app->run();
?>

   
```

## 参见

`Yaf_Dispatcher::setDefaultController()` `Yaf_Dispatcher::setDefaultAction()` `Yaf_Dispatcher::getDefaultModule()`
