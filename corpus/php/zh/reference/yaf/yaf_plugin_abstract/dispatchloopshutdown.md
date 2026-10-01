---
id: "zh-php-function-yaf-plugin-abstract-dispatchloopshutdown"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Plugin_Abstract::dispatchLoopShutdown"
title: "分发循环之后的钩子"
signature: "public void Yaf_Plugin_Abstract::dispatchLoopShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-plugin-abstract.dispatchloopshutdown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 分发循环之后的钩子

## 说明

```php
public void Yaf_Plugin_Abstract::dispatchLoopShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
```

这个钩子会在分发循环结束、所有动作执行完毕之后触发一次，且在响应发送给客户端之前。通常用于记录日志或清理工作。

## 参数

- **`$request`** — 正在被分发的 `Yaf_Request_Abstract` 实例。
- **`$response`** — `Yaf_Response_Abstract` 实例。

## 返回值

没有返回值。

## 示例

**`Yaf_Plugin_Abstract::dispatchLoopShutdown()` 示例**

```php


<?php
class AccessLogPlugin extends Yaf_Plugin_Abstract
{
    public function dispatchLoopShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        /* 这是响应发送之前的最后一个钩子：
         * 写一条访问日志 */
        error_log(sprintf(
            "[%s] %s dispatched to %s/%s",
            date("c"),
            $request->getRequestUri(),
            $request->getControllerName(),
            $request->getActionName()
        ));
    }
}

/* 插件在引导（bootstrap）中注册 */
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initPlugin(Yaf_Dispatcher $dispatcher)
    {
        $dispatcher->registerPlugin(new AccessLogPlugin());
    }
}
?>

   
```

## 参见

 `Yaf_Plugin_Abstract::routerStartup()` `Yaf_Plugin_Abstract::routerShutdown()` `Yaf_Plugin_Abstract::dispatchLoopStartup()` `Yaf_Plugin_Abstract::preDispatch()` `Yaf_Plugin_Abstract::postDispatch()` `Yaf_Plugin_Abstract::preResponse()`
