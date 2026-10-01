---
id: "zh-php-function-yaf-request-abstract-isrouted"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::isRouted"
title: "判断请求是否已路由"
signature: "public bool Yaf_Request_Abstract::isRouted()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.isrouted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 判断请求是否已路由

## 说明

```php
public bool Yaf_Request_Abstract::isRouted()
```

判断请求是否已被路由。

## 参数

此函数没有参数。

## 返回值

如果请求已被路由则返回 `true`，否则返回 `false`。

## 示例

**`Yaf_Request_Abstract::isRouted()` 示例**

```php


<?php
class ApiRouter extends Yaf_Route_Interface
{
    public function route(Yaf_Request_Abstract $request)
    {
        // 如果已有其他路由器完成了路由，则跳过
        if ($request->isRouted()) {
            return false;
        }

        if (0 === strpos($request->getRequestUri(), "/api/")) {
            $request->setControllerName("Api")
                    ->setActionName("handle");
            return true;
        }

        return false;
    }

    public function assemble(array $info, array $query = null) {}
}
?>
   
```

## 参见

 `Yaf_Router::route()` `Yaf_Request_Abstract::setRouted()`
