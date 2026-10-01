---
id: "zh-php-function-yaf-plugin-abstract-postdispatch"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Plugin_Abstract::postDispatch"
title: "每次分发之后的钩子"
signature: "public void Yaf_Plugin_Abstract::postDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-plugin-abstract.postdispatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 每次分发之后的钩子

## 说明

```php
public void Yaf_Plugin_Abstract::postDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
```

这个钩子会在每次分发迭代结束（即动作执行完毕）后触发。与 `Yaf_Plugin_Abstract::preDispatch()` 类似，它在一次请求中可能会被调用多次。

## 参数

- **`$request`** — 正在被分发的 `Yaf_Request_Abstract` 实例。
- **`$response`** — `Yaf_Response_Abstract` 实例。

## 返回值

没有返回值。

## 示例

**`Yaf_Plugin_Abstract::postDispatch()` 示例**

```php


<?php
class BenchmarkPlugin extends Yaf_Plugin_Abstract
{
    public function postDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        /* 动作已经执行完毕：向响应体中追加
         * 一些调试信息 */
        $elapsed = microtime(true) - Yaf_Registry::get("request_start");
        $response->appendBody(sprintf(
            "\n<!-- rendered in %.3f seconds -->",
            $elapsed
        ));
    }
}

/* 插件在引导（bootstrap）中注册 */
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initPlugin(Yaf_Dispatcher $dispatcher)
    {
        $dispatcher->registerPlugin(new BenchmarkPlugin());
    }
}
?>

   
```

## 参见

 `Yaf_Plugin_Abstract::routerStartup()` `Yaf_Plugin_Abstract::routerShutdown()` `Yaf_Plugin_Abstract::dispatchLoopStartup()` `Yaf_Plugin_Abstract::preDispatch()` `Yaf_Plugin_Abstract::dispatchLoopShutdown()` `Yaf_Plugin_Abstract::preResponse()`
