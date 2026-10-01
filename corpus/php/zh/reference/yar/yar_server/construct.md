---
id: "zh-php-function-yar-server-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Server::__construct"
title: "创建一个 RPC 服务端"
signature: "final public Yar_Server::__construct(object $executor)"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-server.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个 RPC 服务端

## 说明

```php
final public Yar_Server::__construct(object $executor)
```

创建一个 Yar HTTP RPC 服务器。 `$executor` 的所有公开方法都会被注册为 RPC 服务。

## 参数

- **`$executor`** — 任意一个对象，其公开方法将被作为 RPC 服务对外暴露。 受保护和私有方法，以及方法名以下划线开头的方法，不会被暴露。 — 执行对象还可以定义两个受保护的魔法方法， 它们会被 `Yar_Server::handle()` 识别，且永远不会作为 RPC 端点对外暴露：
  - `protected function __info(string $markup): string` — 自 Yar 2.3.0 起。在请求服务信息页面时被调用； 它接收 Yar 原本要渲染的页面标记（markup）， 如果返回一个 `string`，该字符串会被发送给客户端， 替代默认的页面。参见 `Yar_Server::handle()`。
  - `protected function __auth(string $provider, string $token): bool` — 自 Yar 2.3.0 起。在每个请求处理的最开始被调用， 请求头中的 `provider` 和 `token` 字段会作为参数传入， 这两个字段由客户端通过 `YAR_OPT_PROVIDER` 和 `YAR_OPT_TOKEN` 选项设置。 严格返回 `false` 表示拒绝该请求；任何其他返回值都会让请求继续。 参见 `Yar_Server::handle()`。

 — 这两个方法只有在声明为 `protected` 时才生效； 同名的公开或私有方法会被忽略。

## 返回值

一个 `Yar_Server` 实例。

## 示例

**`Yar_Server::__construct()` 示例**

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

## 参见

`Yar_Server::handle()`
