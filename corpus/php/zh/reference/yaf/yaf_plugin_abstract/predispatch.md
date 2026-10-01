---
id: "zh-php-function-yaf-plugin-abstract-predispatch"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Plugin_Abstract::preDispatch"
title: "每次分发之前的钩子"
signature: "public void Yaf_Plugin_Abstract::preDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-plugin-abstract.predispatch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 每次分发之前的钩子

## 说明

```php
public void Yaf_Plugin_Abstract::preDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
```

这个钩子会在分发循环中每次分发迭代之前触发。一次分发循环可能会运行多次迭代，因此这个钩子在一次请求中可能会被调用多次。

## 参数

- **`$request`** — 正在被分发的 `Yaf_Request_Abstract` 实例。
- **`$response`** — `Yaf_Response_Abstract` 实例。

## 返回值

没有返回值。

## 示例

**`Yaf_Plugin_Abstract::preDispatch()` 示例**

```php


<?php
class LayoutPlugin extends Yaf_Plugin_Abstract
{
    public function preDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        /* 在动作分发之前，根据模块选择模板目录 */
        $view = Yaf_Dispatcher::getInstance()->getView();
        if ($request->getModuleName() == "Admin") {
            $view->setScriptPath(APPLICATION_PATH . "/modules/admin/views");
        }
    }
}

/* 插件在引导（bootstrap）中注册 */
class Bootstrap extends Yaf_Bootstrap_Abstract
{
    public function _initPlugin(Yaf_Dispatcher $dispatcher)
    {
        $dispatcher->registerPlugin(new LayoutPlugin());
    }
}
?>

   
```

## 参见

 `Yaf_Plugin_Abstract::routerStartup()` `Yaf_Plugin_Abstract::routerShutdown()` `Yaf_Plugin_Abstract::dispatchLoopStartup()` `Yaf_Plugin_Abstract::postDispatch()` `Yaf_Plugin_Abstract::dispatchLoopShutdown()` `Yaf_Plugin_Abstract::preResponse()`
