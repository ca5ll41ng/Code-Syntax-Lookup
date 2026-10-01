---
id: "zh-php-function-yaf-router-getroutes"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Router::getRoutes"
title: "检索已注册的路由"
signature: "public mixed Yaf_Router::getRoutes()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-router.getroutes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索已注册的路由

## 说明

```php
public mixed Yaf_Router::getRoutes()
```

检索已注册的路由

## 参数

此函数没有参数。

## 返回值

## 示例

**`Yaf_Router::getRoutes()` 示例**

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

        /* 除了自定义路由之外，内置的 "_default" 路由
           也是路由表的一部分 */
        var_dump(array_keys($router->getRoutes()));
    }
}
?>

   
```

以上示例的输出类似于：

```text


array(2) {
  [0]=>
  string(8) "_default"
  [1]=>
  string(7) "rewrite"
}

   
```

## 参见

 `Yaf_Router::getRoute()` `Yaf_Router::addRoute()` `Yaf_Dispatcher::getRouter()`
