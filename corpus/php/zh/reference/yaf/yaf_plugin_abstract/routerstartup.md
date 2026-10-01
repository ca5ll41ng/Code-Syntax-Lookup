---
id: "zh-php-function-yaf-plugin-abstract-routerstartup"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Plugin_Abstract::routerStartup"
title: "路由开始前的钩子"
signature: "public void Yaf_Plugin_Abstract::routerStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-plugin-abstract.routerstartup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 路由开始前的钩子

## 说明

```php
public void Yaf_Plugin_Abstract::routerStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
```

该钩子在请求被路由之前触发。它是调度流程中最早的钩子，因此通常用于 URL 重写，或者用于必须在 `Yaf_Router::route` 运行之前完成的路由决策。

## 参数

- **`$request`** — 正在被调度的 `Yaf_Request_Abstract` 实例。
- **`$response`** — `Yaf_Response_Abstract` 实例。

## 返回值

没有返回值。

## 示例

**`Yaf_Plugin_Abstract::routerStartup()` 示例**

```php


<?php
class RewritePlugin extends Yaf_Plugin_Abstract
{
    public function routerStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        /* 在路由运行之前，把 "/about" 形式的 URI
         * 重写为 "/page/about" */
        $uri = $request->getRequestUri();
        if (preg_match("#^/[a-z]+$#", $uri)) {
            $request->setRequestUri("/page" . $uri);
        }
    }
}

/* 插件在引导类中注册 */
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initPlugin(Yaf_Dispatcher $dispatcher)
    {
        $dispatcher->registerPlugin(new RewritePlugin());
    }
}
?>

   
```

## 参见

 `Yaf_Plugin_Abstract::routerShutdown()` `Yaf_Plugin_Abstract::dispatchLoopStartup()` `Yaf_Plugin_Abstract::preDispatch()` `Yaf_Plugin_Abstract::postDispatch()` `Yaf_Plugin_Abstract::dispatchLoopShutdown()` `Yaf_Plugin_Abstract::preResponse()`
