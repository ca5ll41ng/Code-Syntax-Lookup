---
id: "zh-php-function-yaf-request-abstract-setactionname"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::setActionName"
title: "设置 action 名"
signature: "public Yaf_Request_Abstract|null Yaf_Request_Abstract::setActionName(string $action, bool $format_name = true)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.setactionname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 action 名

## 说明

```php
public Yaf_Request_Abstract|null Yaf_Request_Abstract::setActionName(string $action, bool $format_name = true)
```

设置请求对象的 action 名，通常由自定义路由器用于设置路由结果的 action 名。

## 参数

- **`$action`** — `string`，action 名，应该是小写风格，比如 "index" 或 "foo_bar"
- **`$format_name`** — 该参数自 Yaf 3.2.0 引入，默认情况下 Yaf 会将名称格式化为小写风格， 如果设置为 `false`，Yaf 将直接使用原始名称。

## 返回值

成功时返回请求对象自身，失败时返回 `null`。

## 示例

**`Yaf_Request_Abstract::setActionName()` 示例**

```php


<?php
class RestRouter extends Yaf_Route_Interface
{
    public function route(Yaf_Request_Abstract $request)
    {
        // 将所有 /api 请求路由到 ApiController::ordersAction
        if (0 === strpos($request->getRequestUri(), "/api")) {
            $request->setControllerName("Api")
                    ->setActionName("orders");
            return true;
        }

        return false;
    }

    public function assemble(array $info, array $query = null) {}
}
?>
   
```

## 参见

 `Yaf_Request_Abstract::setControllerName()` `Yaf_Request_Abstract::setModuleName()` `Yaf_Request_Abstract::getActionName()`
