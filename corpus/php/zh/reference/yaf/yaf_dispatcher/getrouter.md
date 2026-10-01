---
id: "zh-php-function-yaf-dispatcher-getrouter"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::getRouter"
title: "获取路由器实例"
signature: "public Yaf_Router|null Yaf_Dispatcher::getRouter()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.getrouter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取路由器实例

## 说明

```php
public Yaf_Router|null Yaf_Dispatcher::getRouter()
```

获取分发器用来路由请求的 `Yaf_Router` 实例。

## 参数

此函数没有参数。

## 返回值

`Yaf_Router` 实例，如果应用未初始化则返回 `null`。

## 示例

**`Yaf_Dispatcher::getRouter()` 示例**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initRoute(Yaf_Dispatcher $dispatcher)
    {
        $router = $dispatcher->getRouter();

        // 将 /product/42 路由到 ProductController::detailAction
        $router->addRoute("product", new Yaf_Route_Rewrite(
            "product/:id",
            array("controller" => "product", "action" => "detail")
        ));
    }
}
?>

   
```

## 参见

`Yaf_Router`
