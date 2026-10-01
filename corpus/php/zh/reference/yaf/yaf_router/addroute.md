---
id: "zh-php-function-yaf-router-addroute"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Router::addRoute"
title: "往 Router 中添加新的路由"
signature: "public bool Yaf_Router::addRoute(string $name, Yaf_Route_Abstract $route)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-router.addroute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 往 Router 中添加新的路由

## 说明

```php
public bool Yaf_Router::addRoute(string $name, Yaf_Route_Abstract $route)
```

默认地，Yaf_Router 使用 `Yaf_Route_Static` 作为它的默认的路由。可以通过调用此方法往 Router 的堆栈中添加新的路由

在路由栈中，新的路由规则会比老的规则先调用，如果新路由规则返回 `true`，那么路由进程将会结束。否则，老的规则将会被调用。

> 本函数还未编写文档，仅有参数列表。

## 参数

此函数没有参数。

## 返回值

## 示例

**`Yaf_Dispatcher::autoRender()` 示例**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract{
    public function _initConfig() {
        $config = Yaf_Application::app()->getConfig();
        Yaf_Registry::set("config", $config);
    }

    public function _initRoute(Yaf_Dispatcher $dispatcher) {
        $router = $dispatcher->getRouter();
        /**
         * we can add some pre-defined routes in application.ini
         */
        $router->addConfig(Yaf_Registry::get("config")->routes);
        /**
         * add a Rewrite route, then for a request uri: 
         * http://example.com/product/list/22/foo
         * will be matched by this route, and result:
         *
         *  [module] => 
         *  [controller] => product
         *  [action] => info
         *  [method] => GET
         *  [params:protected] => Array
         *      (
         *          [id] => 22
         *          [name] => foo
         *      )
         * 
         */
        $route  = new Yaf_Route_Rewrite(
            "/product/list/:id/:name",
            array(
                "controller" => "product",
                "action"     => "info",
            )
        ); 
        
        $router->addRoute('dummy', $route);
    }
}
?>

   
```

## 参见

 `Yaf_Router::addConfig()` `Yaf_Route_Static` `Yaf_Route_Supervar` `Yaf_Route_Simple` `Yaf_Route_Regex` `Yaf_Route_Rewrite` `Yaf_Route_Map`
