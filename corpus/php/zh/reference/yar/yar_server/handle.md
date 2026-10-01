---
id: "zh-php-function-yar-server-handle"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Server::handle"
title: "启动 RPC 服务端"
signature: "public bool Yar_Server::handle()"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-server.handle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 启动 RPC 服务端

## 说明

```php
public bool Yar_Server::handle()
```

开始处理传入的 RPC 请求。

> 普通的 RPC 调用以 HTTP POST 请求的方式发起。 如果发起的是 HTTP GET 请求，则会根据执行对象的公开方法及其文档注释生成并输出服务信息页面。 该行为可以通过 yar.expose_info 配置项禁用；禁用后，GET 请求会抛出 Yar_Server_Exception 异常。

> 自 Yar 2.3.0 起，执行对象可以定义受保护的魔法方法 `__info` 和 `__auth`， 分别用于自定义服务信息页面和验证请求的身份； 详情参见 `Yar_Server::__construct()`。

## 参数

此函数没有参数。

## 返回值

返回 `true`。

## 错误／异常

| 触发条件 | 异常 |
| --- | --- |
| 远程方法抛出了异常。 | Yar_Server_Exception（其 `_type` 属性中携带原始异常的类名）。 |
| 找不到远程方法，或该方法不是公开方法。 | Yar_Server_Request_Exception。 |
| 无法解包请求体。 | Yar_Server_Packager_Exception。 |
| 请求在协议层面格式错误。 | Yar_Server_Protocol_Exception。 |
| 无法捕获服务器的输出。 | Yar_Server_Output_Exception。 |
| 身份验证失败，或在 yar.expose_info 关闭时请求了信息页面。 | 错误码为 `YAR_ERR_FORBIDDEN` 的 Yar_Server_Exception。 |

## 示例

**`Yar_Server::handle()` 示例**

```php


<?php
class API {
    /**
     * The doc block is shown on the service info page.
     * @param string $parameter
     * @return string
     */
    public function some_method($parameter, $option = "foo") {
        return "some_method";
    }

    protected function client_can_not_see() {
    }
}

$service = new Yar_Server(new API());
$service->handle();
?>

   
```

**使用 `__info` 自定义服务信息页面（自 Yar 2.3.0 起）**

```php


<?php
class API {
    public function some_method($parameter, $option = "foo") {
        return "some_method";
    }

    /*
     * 必须声明为 protected。当收到 GET 请求时调用，
     * 传入 Yar 原本要渲染的页面标记（markup），
     * 其返回的字符串会被发送给客户端以替代默认页面。
     */
    protected function __info($markup) {
        return "Hello world";
    }
}

$service = new Yar_Server(new API());
$service->handle();
?>

   
```

## 参见

`Yar_Server::__construct()`
