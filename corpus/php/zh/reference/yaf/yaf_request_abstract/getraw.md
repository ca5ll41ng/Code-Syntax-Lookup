---
id: "zh-php-function-yaf-request-abstract-getraw"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getRaw"
title: "获取原始请求体"
signature: "public string|null Yaf_Request_Abstract::getRaw()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getraw.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取原始请求体

## 说明

```php
public string|null Yaf_Request_Abstract::getRaw()
```

获取原始请求体。

## 参数

此函数没有参数。

## 返回值

返回字符串形式的原始请求体，失败时返回 `null`。

## 示例

**`Yaf_Request_Abstract::getRaw()` 示例**

```php


<?php
class ApiController extends Yaf_Controller_Abstract
{
    public function createAction()
    {
        // 假定客户端 POST 了 '{"name":"yaf","version":3}'
        $raw  = $this->getRequest()->getRaw();
        $data = json_decode($raw, true);

        var_dump($data);
    }
}
?>
   
```

以上示例的输出类似于：

```text


array(2) {
  ["name"]=>
  string(3) "yaf"
  ["version"]=>
  int(3)
}

   
```

## 参见

 `Yaf_Request_Abstract::getQuery()` `Yaf_Request_Abstract::getRequest()` `Yaf_Request_Abstract::getPost()` `Yaf_Request_Abstract::getCookie()` `Yaf_Request_Abstract::getFiles()` `Yaf_Request_Abstract::getParam()`
