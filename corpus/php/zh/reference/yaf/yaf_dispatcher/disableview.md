---
id: "zh-php-function-yaf-dispatcher-disableview"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::disableView"
title: "禁用视图渲染"
signature: "public Yaf_Dispatcher|null Yaf_Dispatcher::disableView()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.disableview.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 禁用视图渲染

## 说明

```php
public Yaf_Dispatcher|null Yaf_Dispatcher::disableView()
```

关闭视图渲染。通常用于那些自己产生输出的动作，例如返回 JSON 数据的动作。

## 参数

此函数没有参数。

## 返回值

成功时返回 `Yaf_Dispatcher` 对象自身，应用未初始化时 返回 `null`。

## 示例

**`Yaf_Dispatcher::disableView()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

// 全局关闭视图渲染，每个动作都需要自己产生输出
// （例如一个 JSON API 服务）。
Yaf_Dispatcher::getInstance()->disableView();

$app->run();
?>

   
```

## 参见

`Yaf_Dispatcher::enableView()` `Yaf_Dispatcher::autoRender()`
