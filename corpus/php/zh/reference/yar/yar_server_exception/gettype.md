---
id: "zh-php-function-yar-server-exception-gettype"
language: "php"
lang: "zh"
category: "function"
name: "Yar_Server_Exception::getType"
title: "获取异常的类型"
signature: "public string|int Yar_Server_Exception::getType()"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar-server-exception.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取异常的类型

## 说明

```php
public string|int Yar_Server_Exception::getType()
```

当远程方法抛出异常时，服务器会把原始异常嵌入响应中， 客户端会将其作为 Yar_Server_Exception 重新抛出。 此方法返回该原始异常的类名。

## 参数

此函数没有参数。

## 返回值

远程服务抛出的异常的类名；如果服务器端的异常不携带类名， 则返回 `"Yar_Exception_Server"`。

## 示例

**`Yar_Server_Exception::getType()` 示例**

```php


<?php
/* Server.php */
class Custom_Exception extends Exception {};

class API {
    public function throw_exception($name) {
        throw new Custom_Exception($name);
    }
}

$service = new Yar_Server(new API());
$service->handle();
?>

   
```

```php


<?php
/* Client.php */
$client = new Yar_Client("http://api.example.com/operator.php");

try {
    $client->throw_exception("client");
} catch (Yar_Server_Exception $e) {
    var_dump($e->getType());
    var_dump($e->getMessage());
}
?>

   
```

以上示例的输出类似于：

```text


string(16) "Custom_Exception"
string(6) "client"

   
```

## 参见

 `Yar_Client_Exception::getType()`
