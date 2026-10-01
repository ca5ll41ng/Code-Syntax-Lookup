---
id: "zh-php-function-yaf-plugin-abstract-dispatchloopstartup"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Plugin_Abstract::dispatchLoopStartup"
title: "分发循环之前的钩子"
signature: "public void Yaf_Plugin_Abstract::dispatchLoopStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-plugin-abstract.dispatchloopstartup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 分发循环之前的钩子

## 说明

```php
public void Yaf_Plugin_Abstract::dispatchLoopStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
```

这个钩子会在分发循环开始、视图引擎初始化之前触发一次。

## 参数

- **`$request`** — 正在被分发的 `Yaf_Request_Abstract` 实例。
- **`$response`** — `Yaf_Response_Abstract` 实例。

## 返回值

没有返回值。

## 示例

**`Yaf_Plugin_Abstract::dispatchLoopStartup()` 示例**

```php


<?php
class BenchmarkPlugin extends Yaf_Plugin_Abstract
{
    public function dispatchLoopStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        /* 此时视图引擎尚未初始化，因此这个钩子是
         * 开始整个请求计时的好位置 */
        Yaf_Registry::set("request_start", microtime(true));
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

 `Yaf_Plugin_Abstract::routerStartup()` `Yaf_Plugin_Abstract::routerShutdown()` `Yaf_Plugin_Abstract::preDispatch()` `Yaf_Plugin_Abstract::postDispatch()` `Yaf_Plugin_Abstract::dispatchLoopShutdown()` `Yaf_Plugin_Abstract::preResponse()`
