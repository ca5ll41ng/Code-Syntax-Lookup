---
id: "zh-php-function-yaf-router-getcurrentroute"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Router::getCurrentRoute"
title: "取得当前有效的路由名"
signature: "public string Yaf_Router::getCurrentRoute()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-router.getcurrentroute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得当前有效的路由名

## 说明

```php
public string Yaf_Router::getCurrentRoute()
```

获取当前路由进程中正在起作用的路由名

> 需要在路由进程结束之后调用此方法，在这之前，这个方法会一直返回 `null`。

## 参数

此函数没有参数。

## 返回值

字符串，当前起效的路由的名字。

## 示例

**注册一些路由到 Bootstrap**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract{
    public function _initConfig() {
        $config = Yaf_Application::app()->getConfig();
        Yaf_Registry::set("config", $config);
    }

    public function _initRoute(Yaf_Dispatcher $dispatcher) {
        $router = $dispatcher->getRouter();
        $rewrite_route  = new Yaf_Route_Rewrite(
            "/product/list/:page",
            array(
                "controller" => "product",
                "action"     => "list",
            )
        ); 

        $regex_route  = new Yaf_Route_Rewrite(
            "#^/product/info/(\d+)",
            array(
                "controller" => "product",
                "action"     => "info",
            )
        ); 
        
        $router->addRoute('rewrite', $rewrite_route)->addRoute('regex', $regex_route);
    } 

    /**
     * register plugin 
     */
    public function __initPlugins(Yaf_Dispatcher $dispatcher) {
        $dispatcher->registerPlugin(new DummyPlugin());
    }
}
?>

   
```

**plugin Dummy.php (under application.directory/plugins)**

```php


<?php
class DummyPlugin extends Yaf_Plugin_Abstract {
    public function routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
         var_dump(Yaf_Dispatcher::getInstance()->getRouter()->getCurrentRoute());
    }
}
?>

   
```

以上示例的输出类似于：

```text


/* for http://yourdomain.com/product/list/1
 * DummyPlugin will output:
 */
string(7) "rewrite"

/* for http://yourdomain.com/product/info/34
 * DummyPlugin will output:
 */
string(5) "regex"

/* for other request URI
 * DummyPlugin will output:
 */
string(8) "_default"

   
```

## 参见

 `Yaf_Bootstrap_Abstract` `Yaf_Plugin_Abstract` `Yaf_Router::addRoute()`
