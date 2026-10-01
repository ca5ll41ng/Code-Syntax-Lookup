---
id: "zh-php-function-yaf-router-route"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Router::route"
title: "路由请求"
signature: "public bool|null Yaf_Router::route(Yaf_Request_Abstract $request)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-router.route.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 路由请求

## 说明

```php
public bool|null Yaf_Router::route(Yaf_Request_Abstract $request)
```

使用已注册的路由对请求进行路由。

路由按注册顺序的倒序依次尝试。第一个认领该请求的路由胜出；随后请求被标记为已路由（参见 `Yaf_Request_Abstract::setRouted()`），并记录胜出的路由名，可通过 `Yaf_Router::getCurrentRoute()` 获取。

除非配置了自定义的默认路由，否则默认路由注册为 `_default`，即 `Yaf_Route_Static`。

## 参数

- **`$request`** — 要路由的 `Yaf_Request_Abstract` 实例。

## 返回值

请求成功路由时返回 `true`，没有路由匹配时（例如畸形的 URI）返回 `false`，此时调度器会停止。

## 示例

**`Yaf_Router::route()` 示例**

```php


<?php
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initRoute(Yaf_Dispatcher $dispatcher)
    {
        $router = $dispatcher->getRouter();

        $router->addRoute("rewrite", new Yaf_Route_Rewrite(
            "/product/:id",
            ["controller" => "product", "action" => "detail"]
        ));

        /* 路由一个手工构造的请求，例如在单元测试中 */
        $request = new Yaf_Request_Simple("CLI", null, "index.php",
            "/product/123", null);

        if ($router->route($request)) {
            var_dump($router->getCurrentRoute());
            var_dump($request->getControllerName());
            var_dump($request->getActionName());
            var_dump($request->getParam("id"));
        } else {
            /* 没有路由匹配 */
        }
    }
}
?>

   
```

以上示例的输出类似于：

```text


string(7) "rewrite"
string(7) "product"
string(6) "detail"
string(3) "123"

   
```

## 参见

 `Yaf_Router::addRoute()` `Yaf_Router::getCurrentRoute()` `Yaf_Dispatcher::dispatch()`
