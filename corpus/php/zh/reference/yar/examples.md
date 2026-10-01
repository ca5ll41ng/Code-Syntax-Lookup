---
id: "zh-php-guide-yar-examples"
language: "php"
lang: "zh"
category: "guide"
name: "yar.examples"
title: "示例"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

下面的示例演示了一个完整的服务：一个暴露若干算术方法的服务端、 一个调用它们的同步客户端、一个一次性发出多个并发调用的客户端， 以及一个通过 TCP 与服务器通信的客户端。

**Yar 服务端示例**

Yar 服务就是一个由 `Yar_Server` 包装的普通 PHP 类。对象的每一个公开方法都会成为一个 RPC 端点，而受保护方法、私有方法以及方法名以下划线开头的方法， 对客户端不可见。公开方法的文档注释会被收集起来， 显示在服务信息页面上。

RPC 请求以 HTTP POST 请求的形式到达，请求体携带 Yar 二进制协议 负载，因此这个脚本通常被映射为常规 Web 服务器上的一个 URI。

```php


<?php

/* 假设这个页面可以通过 http://api.example.com/operator.php 访问 */

class Operator {

    /**
     * Add two operands
     * @param integer
     * @return integer
     */
    public function add($a, $b) {
        return $this->_add($a, $b);
    }

    /**
     * Sub
     */
    public function sub($a, $b) {
        return $a - $b;
    }

    /**
     * Mul
     */
    public function mul($a, $b) {
        return $a * $b;
    }

    /**
     * Protected methods will not be exposed
     * @param integer
     * @return integer
     */
    protected function _add($a, $b) {
        return $a + $b;
    }
}

$server = new Yar_Server(new Operator());
$server->handle();
?>

  
```

**通过浏览器访问服务端（GET 请求）**

当向服务地址发起 GET 请求时（例如直接在浏览器中打开它）， Yar 不会执行 RPC 调用，而是渲染一个信息页面， 列出执行对象的每一个公开方法及其文档注释。 该行为由 yar.expose_info 配置项控制；当它关闭时，GET 请求将失败。

以上示例的输出类似于：

**Yar 客户端示例**

`Yar_Client` 绑定到单一的服务地址。 在它上面调用任何未定义的方法，都会被透明地转换为同步 RPC 调用，远程方法用起来和本地方法一样； `Yar_Client::call()` 显式地按方法名做同样的事情。

受保护方法不会被暴露：调用它们会失败，并抛出错误码为 `YAR_ERR_REQUEST` 的 Yar_Client_Exception。

```php


<?php
$client = new Yar_Client("http://api.example.com/operator.php");

/* 直接调用 */
var_dump($client->add(1, 2));

/* 通过 call() 调用 */
var_dump($client->call("add", array(3, 2)));

/* _add 无法被调用：它不是公开方法 */
var_dump($client->_add(1, 2));
?>

  
```

以上示例的输出类似于：

```text


int(3)
int(5)
PHP Fatal error:  Uncaught Yar_Client_Exception: call to undefined api Operator::_add() in *

  
```

**Yar 并发客户端示例**

`Yar_Concurrent_Client` 不是逐个调用服务，而是先注册多个调用，然后通过 `Yar_Concurrent_Client::loop()` 一次性发出所有调用。响应按到达的顺序传递给回调函数， 而不是按调用注册的顺序。

在全部请求发送完毕后，回调函数会以 `null` 参数被调用一次，以便调用方知道没有更多请求等待发送； 下面的示例检查了这个通知。

```php


<?php
function callback($ret, $callinfo) {
    if ($callinfo == NULL) {
        /* all requests are sent, waiting for the responses */
        return;
    }
    echo $callinfo['method'], " result: ", $ret, "\n";
}

function error_callback($type, $error, $callinfo) {
    error_log("[$type] $error");
}

/* 注册对远程服务的异步调用 */
Yar_Concurrent_Client::call("http://api.example.com/operator.php", "add", array(1, 2), "callback");
Yar_Concurrent_Client::call("http://api.example.com/operator.php", "sub", array(2, 1), "callback");
Yar_Concurrent_Client::call("http://api.example.com/operator.php", "mul", array(2, 2), "callback");

/* 发送所有请求并等待响应 */
Yar_Concurrent_Client::loop("callback", "error_callback");
?>

  
```

以上示例的输出类似于：

```text


mul result: 4
sub result: 1
add result: 3

  
```

**Yar TCP 客户端示例**

除了 HTTP 之外，`Yar_Client` 还可以 通过 TCP 或 Unix socket 与兼容 Yar 协议的服务器通信， 例如一个由 [Yar C 框架](laruence/yar-c) 实现的服务，它提供的二进制 Yar 协议与 PHP 服务端使用的相同。

```php


<?php
$client = new Yar_Client("tcp://127.0.0.1:8600");

var_dump($client->add(1, 2));
?>

  
```
