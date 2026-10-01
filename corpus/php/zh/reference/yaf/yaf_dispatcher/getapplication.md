---
id: "zh-php-function-yaf-dispatcher-getapplication"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::getApplication"
title: "获取应用实例"
signature: "public Yaf_Application|null Yaf_Dispatcher::getApplication()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.getapplication.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取应用实例

## 说明

```php
public Yaf_Application|null Yaf_Dispatcher::getApplication()
```

获取 `Yaf_Application` 实例。与 `Yaf_Application::app()` 相同。

## 参数

此函数没有参数。

## 返回值

`Yaf_Application` 实例，如果尚未初始化应用则返回 `null`。

## 示例

**`Yaf_Dispatcher::getApplication()` 示例**

```php


<?php
$app = new Yaf_Application(dirname(__FILE__) . "/conf/application.ini");

var_dump(Yaf_Dispatcher::getInstance()->getApplication() === Yaf_Application::app());
?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

`Yaf_Application::app()`
