---
id: "zh-php-function-yaf-router-addconfig"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Router::addConfig"
title: "向 Router 中添加配置文件中定义的路由"
signature: "public bool Yaf_Router::addConfig(Yaf_Config_Abstract $config)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-router.addconfig.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向 Router 中添加配置文件中定义的路由

## 说明

```php
public bool Yaf_Router::addConfig(Yaf_Config_Abstract $config)
```

将 application.ini 配置中定义的路由规则添加到 `Yaf_Router` 的路由栈中

> 本函数还未编写文档，仅有参数列表。

## 参数

此函数没有参数。

## 返回值

`Yaf_Config_Abstract` 实例，包含一个或多个有效的路由配置

## 示例

**`application.ini()` 示例**

```ini

    
;the order is very important, the prior one will be called first

;a rewrite route match request /product/*/*
routes.route_name.type="rewrite"
routes.route_name.match="/product/:name/:value"
routes.route_name.route.controller=product
routes.route_name.route.action=info

;a regex route match request /list/*/*
routes.route_name1.type="regex"
routes.route_name1.match="#^list/([^/]*)/([^/]*)#"
routes.route_name1.route.controller=Index
routes.route_name1.route.action=action
routes.route_name1.map.1=name
routes.route_name1.map.2=value

;a simple route match /**?c=controller&a=action&m=module
routes.route_name2.type="simple"
routes.route_name2.controller=c
routes.route_name2.module=m
routes.route_name2.action=a

;a simple router match /**?r=PATH_INFO
routes.route_name3.type="supervar"
routes.route_name3.varname=r

;a map route match any request to controller
routes.route_name4.type="map"
routes.route_name4.controllerPrefer=TRUE
routes.route_namer.delimiter="#!"

   
```

**`Yaf_Dispatcher::autoConfig()` 示例**

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
    }
}
?>

   
```

## 参见

 `Yaf_Router::addRoute()` `Yaf_Route_Static` `Yaf_Route_Supervar` `Yaf_Route_Simple` `Yaf_Route_Regex` `Yaf_Route_Rewrite` `Yaf_Route_Map`
