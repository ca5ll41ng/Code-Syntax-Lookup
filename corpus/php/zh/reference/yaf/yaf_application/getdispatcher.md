---
id: "zh-php-function-yaf-application-getdispatcher"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Application::getDispatcher"
title: "获取 Yaf_Dispatcher 的实例"
signature: "public Yaf_Dispatcher|null Yaf_Application::getDispatcher()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-application.getdispatcher.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 Yaf_Dispatcher 的实例

## 说明

```php
public Yaf_Dispatcher|null Yaf_Application::getDispatcher()
```

获取该应用使用的 `Yaf_Dispatcher` 实例。

## 参数

此函数没有参数。

## 返回值

`Yaf_Dispatcher` 实例，如果应用没有正确初始化 则返回 `null`。

## 示例

**`Yaf_Application::getDispatcher()` 示例**

```php


<?php
$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
print_r($application->getDispatcher());
?>

   
```

以上示例的输出类似于：

```text


Yaf_Dispatcher Object
(
    [_router:protected] => Yaf_Router Object
        (
            [_routes:protected] => Array
                (
                    [_default] => Yaf_Route_Static Object
                        (
                        )

                )

            [_current:protected] => 
        )

    [_view:protected] => 
    [_request:protected] => Yaf_Request_Http Object
        (
            [method] => Cli
        )

    [_plugins:protected] => Array
        (
        )

    [_auto_render:protected] => 1
    [_return_response:protected] => 
    [_instantly_flush:protected] => 1
    [_default_module:protected] => Index
    [_default_controller:protected] => Index
    [_default_action:protected] => index
)

   
```
