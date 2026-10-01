---
id: "zh-php-function-yaf-dispatcher-flushinstantly"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::flushInstantly"
title: "打开/关闭即时刷新"
signature: "public Yaf_Dispatcher|bool Yaf_Dispatcher::flushInstantly(bool|null $flag = null)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.flushinstantly.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开/关闭即时刷新

## 说明

```php
public Yaf_Dispatcher|bool Yaf_Dispatcher::flushInstantly(bool|null $flag = null)
```

打开/关闭即时刷新。开启时（默认），一旦响应主体通过 `Yaf_Response_Abstract::setBody()` 设置，就会立即被刷新 （输出）到客户端。

## 参数

- **`$flag`** — 是否即时刷新响应主体。
  > 自 Yaf 2.2.0 起，如果未给出该参数，则会返回当前状态。



## 返回值

`Yaf_Dispatcher` 对象自身会在给出 `$flag` 时 返回；未给出该参数时则返回 `boolean`，指示当前状态。

## 示例

**`Yaf_Dispatcher::flushInstantly()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

$dispatcher = Yaf_Dispatcher::getInstance();

// 响应主体被设置后不立即刷新到客户端
$dispatcher->flushInstantly(false);

// 自 Yaf 2.2.0 起，不带参数调用会查询当前状态
var_dump($dispatcher->flushInstantly());

$app->run();
?>

   
```

以上示例的输出类似于：

```text


bool(false)

   
```

## 参见

`Yaf_Dispatcher::returnResponse()` `Yaf_Response_Abstract::setBody()`
