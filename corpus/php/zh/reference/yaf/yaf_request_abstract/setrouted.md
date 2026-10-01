---
id: "zh-php-function-yaf-request-abstract-setrouted"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::setRouted"
title: "将请求标记为已路由"
signature: "final public Yaf_Request_Abstract Yaf_Request_Abstract::setRouted(bool $flag = true)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.setrouted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将请求标记为已路由

## 说明

```php
final public Yaf_Request_Abstract Yaf_Request_Abstract::setRouted(bool $flag = true)
```

将请求标记为已路由。

路由成功后路由器会调用该方法。手动调用可以阻止后续的自定义路由器继续执行。

## 参数

- **`$flag`** — 要设置的状态，默认为 `true`。

## 返回值

返回请求对象自身。

## 示例

**`Yaf_Request_Abstract::setRouted()` 示例**

```php


<?php
class ApiRouter extends Yaf_Route_Interface
{
    public function route(Yaf_Request_Abstract $request)
    {
        if (0 !== strpos($request->getRequestUri(), "/api/")) {
            return false;
        }

        $request->setControllerName("Api")
                ->setActionName("handle");

        // 阻止在此之后注册的路由器继续执行
        $request->setRouted();

        return true;
    }

    public function assemble(array $info, array $query = null) {}
}
?>
   
```

## 参见

 `Yaf_Request_Abstract::isRouted()` `Yaf_Router::route()`
