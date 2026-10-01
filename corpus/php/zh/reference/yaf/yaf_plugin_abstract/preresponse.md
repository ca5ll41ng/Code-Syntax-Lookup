---
id: "zh-php-function-yaf-plugin-abstract-preresponse"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Plugin_Abstract::preResponse"
title: "响应发出前的钩子"
signature: "public void Yaf_Plugin_Abstract::preResponse(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-plugin-abstract.preresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 响应发出前的钩子

## 说明

```php
public void Yaf_Plugin_Abstract::preResponse(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
```

该钩子用于在响应发送给客户端之前触发。

> 在当前版本中，该钩子永远不会被调用：它注册在 `Yaf_Plugin_Abstract` 上，但并未接入调度流程。重写它没有任何效果。

## 参数

- **`$request`** — 正在被调度的 `Yaf_Request_Abstract` 实例。
- **`$response`** — `Yaf_Response_Abstract` 实例。

## 返回值

没有返回值。

## 示例

**`Yaf_Plugin_Abstract::preResponse()` 示例**

```php


<?php
class MinifyPlugin extends Yaf_Plugin_Abstract
{
    public function preResponse(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        /* 用于在响应体发送前进行压缩；注意：
         * 在当前版本中，该钩子实际上并不会被调用 */
        $response->setBody(
            preg_replace("/>\s+</", "><", $response->getBody())
        );
    }
}

/* 插件在引导类中注册 */
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initPlugin(Yaf_Dispatcher $dispatcher)
    {
        $dispatcher->registerPlugin(new MinifyPlugin());
    }
}
?>

   
```

## 参见

 `Yaf_Plugin_Abstract::routerStartup()` `Yaf_Plugin_Abstract::routerShutdown()` `Yaf_Plugin_Abstract::dispatchLoopStartup()` `Yaf_Plugin_Abstract::preDispatch()` `Yaf_Plugin_Abstract::postDispatch()` `Yaf_Plugin_Abstract::dispatchLoopShutdown()`
