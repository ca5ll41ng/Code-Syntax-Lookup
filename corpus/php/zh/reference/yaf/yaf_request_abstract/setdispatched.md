---
id: "zh-php-function-yaf-request-abstract-setdispatched"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::setDispatched"
title: "将请求标记为已分发"
signature: "final public Yaf_Request_Abstract Yaf_Request_Abstract::setDispatched(bool $flag = true)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.setdispatched.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将请求标记为已分发

## 说明

```php
final public Yaf_Request_Abstract Yaf_Request_Abstract::setDispatched(bool $flag = true)
```

将请求标记为已分发。

分发器在执行完一个 action 后会调用该方法，用于停止分发循环。也可以手动调用，例如跳过剩余的分发迭代。

## 参数

- **`$flag`** — 要设置的状态，默认为 `true`。

## 返回值

返回请求对象自身。

## 示例

**`Yaf_Request_Abstract::setDispatched()` 示例**

```php


<?php
class AuthPlugin extends Yaf_Plugin_Abstract
{
    public function preDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response)
    {
        if (empty($_SESSION["user_id"])) {
            // 跳过本次请求的 action，重定向到登录页
            $request->setDispatched();
            $response->setRedirect("/account/login");
        }
    }
}
?>
   
```

## 参见

 `Yaf_Request_Abstract::isDispatched()` `Yaf_Dispatcher::dispatch()`
