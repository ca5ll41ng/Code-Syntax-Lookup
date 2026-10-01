---
id: "zh-php-function-yar-client-call"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Client::call"
title: "调用一个远程服务"
signature: "public mixed Yar_Client::call(string $method, array $arguments)"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-client.call.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用一个远程服务

## 说明

```php
public mixed Yar_Client::call(string $method, array $arguments)
```

对远程方法 `method` 发起一次 RPC 调用。 这与在 `Yar_Client` 对象上调用一个不存在的方法时发生的事情完全相同 （通过 PHP 的 `__call` 魔法方法）； `Yar_Client::call()` 的存在只是为了让名字恰好叫 `call` 或 `__call` 的远程方法仍然可以被调用。

## 参数

- **`$method`** — 远程服务方法的名称。
- **`$arguments`** — 传递给远程方法的参数列表。

## 返回值

返回远程服务方法的返回值。

## 错误／异常

当远程方法在服务器上不存在，或不是公开方法时，客户端会抛出错误码为 `YAR_ERR_REQUEST` 的 Yar_Client_Exception。 其他客户端侧的失败情况及其对应的异常类，参见 Yar_Client_Exception。

## 示例

**`Yar_Client::call()` 示例**

```php


<?php
$client = new Yar_Client("http://api.example.com/operator.php");

/* The usual way: invoke the remote method as if it were local.
 * This is translated into call("add", array(1, 2)) behind the scenes. */
var_dump($client->add(1, 2));

/* Equivalent: call the method explicitly by name */
var_dump($client->call("add", array(1, 2)));

/* Needed only when the remote service literally exposes a method
 * named call (or __call), which the magic __call cannot reach */
var_dump($client->call("call", array($some_argument)));
?>

   
```

以上示例的输出类似于：

```text


int(3)
int(3)
...

   
```

## 参见

 `Yar_Client::setOpt()`
