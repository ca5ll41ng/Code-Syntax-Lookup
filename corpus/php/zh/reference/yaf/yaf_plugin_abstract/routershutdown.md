---
id: "zh-php-function-yaf-plugin-abstract-routershutdown"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Plugin_Abstract::routerShutdown"
title: "路由完成后的钩子"
signature: "public void Yaf_Plugin_Abstract::routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-plugin-abstract.routershutdown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 路由完成后的钩子

## 说明

```php
public void Yaf_Plugin_Abstract::routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
```

该钩子在路由过程完成、控制器和动作名称已经解析之后触发，但在调度循环开始之前。由于目标控制器和动作已知，它通常用于访问控制检查，例如登录检查。

## 参数

- **`$request`** — 正在被调度的 `Yaf_Request_Abstract` 实例。
- **`$response`** — `Yaf_Response_Abstract` 实例。

## 返回值

没有返回值。

## 示例

**`Yaf_Plugin_Abstract::routerShutdown()` 示例**

```php


<?php
class AuthPlugin extends Yaf_Plugin_Abstract
{
    public function routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        /* 路由已经完成，目标控制器和动作已知：
         * 检查用户是否有权限访问它们 */
        $public = array("Index" => array("index"), "User" => array("login"));

        $controller = $request->getControllerName();
        $action = $request->getActionName();

        if (isset($public[$controller]) && in_array($action, $public[$controller])) {
            return;
        }

        if (!Yaf_Session::getInstance()->has("login")) {
            $response->setRedirect("/user/login");
            $request->setDispatched(true); // 不再调度该请求
        }
    }
}

/* 插件在引导类中注册 */
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initPlugin(Yaf_Dispatcher $dispatcher)
    {
        $dispatcher->registerPlugin(new AuthPlugin());
    }
}
?>

   
```

## 参见

 `Yaf_Plugin_Abstract::routerStartup()` `Yaf_Plugin_Abstract::dispatchLoopStartup()` `Yaf_Plugin_Abstract::preDispatch()` `Yaf_Plugin_Abstract::postDispatch()` `Yaf_Plugin_Abstract::dispatchLoopShutdown()` `Yaf_Plugin_Abstract::preResponse()`
