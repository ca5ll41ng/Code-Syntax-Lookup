---
id: "zh-php-function-yaf-router-getroute"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Router::getRoute"
title: "通过名称检索路由"
signature: "public Yaf_Route_Interface Yaf_Router::getRoute(string $name)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-router.getroute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 通过名称检索路由

## 说明

```php
public Yaf_Route_Interface Yaf_Router::getRoute(string $name)
```

通过名字检索路由，参阅 `Yaf_Router::getCurrentRoute()`

## 参数

此函数没有参数。

## 返回值

## 示例

**`Yaf_Router::getRoute()` 示例**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initRoutes(Yaf_Dispatcher $dispatcher)
    {
        $router = $dispatcher->getRouter();

        $router->addRoute("rewrite", new Yaf_Route_Rewrite(
            "/product/:id",
            ["controller" => "product", "action" => "detail"]
        ));

        /* 查看指定名字下注册的是什么 */
        var_dump($router->getRoute("rewrite"));

        /* 未知的名字返回 NULL */
        var_dump($router->getRoute("unknown"));
    }
}
?>

   
```

以上示例的输出类似于：

```text


object(Yaf_Route_Rewrite)#7 (0) {
}
NULL

   
```

## 参见

 `Yaf_Bootstrap_Abstract` `Yaf_Plugin_Abstract` `Yaf_Router::addRoute()` `Yaf_Router::getCurrentRoute()`
