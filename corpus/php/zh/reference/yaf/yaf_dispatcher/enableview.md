---
id: "zh-php-function-yaf-dispatcher-enableview"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Dispatcher::enableView"
title: "开启视图渲染"
signature: "public Yaf_Dispatcher|null Yaf_Dispatcher::enableView()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-dispatcher.enableview.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 开启视图渲染

## 说明

```php
public Yaf_Dispatcher|null Yaf_Dispatcher::enableView()
```

开启视图渲染。与 `Yaf_Dispatcher::disableView()` 作用 相反。

## 参数

此函数没有参数。

## 返回值

成功时返回 `Yaf_Dispatcher` 对象自身，应用未初始化时 返回 `null`。

## 示例

**`Yaf_Dispatcher::enableView()` 示例**

```php


<?php
class ApiPlugin extends Yaf_Plugin_Abstract
{
    public function routerStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        $dispatcher = Yaf_Dispatcher::getInstance();

        if ($request->getModuleName() === "Api") {
            // API 动作自己输出 JSON，不需要视图渲染
            $dispatcher->disableView();
        } else {
            $dispatcher->enableView();
        }
    }
}
?>

   
```

## 参见

`Yaf_Dispatcher::disableView()` `Yaf_Dispatcher::autoRender()`
