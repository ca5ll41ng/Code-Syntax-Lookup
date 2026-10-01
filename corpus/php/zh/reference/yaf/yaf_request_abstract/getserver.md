---
id: "zh-php-function-yaf-request-abstract-getserver"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getServer"
title: "检索 SERVER 变量"
signature: "public mixed Yaf_Request_Abstract::getServer(string $name, [mixed $default = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索 SERVER 变量

## 说明

```php
public mixed Yaf_Request_Abstract::getServer(string $name, [mixed $default = ...])
```

检索一个 SERVER 变量。

## 参数

- **`$name`** — 变量名。
- **`$default`** — 当变量未找到时返回的值。

## 返回值

变量的值；如果未找到，则返回 `$default`。

## 示例

**`Yaf_Request_Abstract::getServer()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $request = $this->getRequest();

        $host     = $request->getServer("HTTP_HOST");
        $protocol = $request->getServer("SERVER_PROTOCOL", "HTTP/1.1");

        var_dump($host, $protocol);
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(15) "www.example.com"
string(8) "HTTP/1.1"

   
```

## 参见

 `Yaf_Request_Abstract::getQuery()` `Yaf_Request_Abstract::getRequest()` `Yaf_Request_Abstract::getPost()` `Yaf_Request_Abstract::getCookie()` `Yaf_Request_Abstract::getFiles()` `Yaf_Request_Abstract::getParam()`
