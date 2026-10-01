---
id: "zh-php-function-yaf-request-abstract-getenv"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getEnv"
title: "检索 ENV 变量"
signature: "public mixed Yaf_Request_Abstract::getEnv(string $name, [mixed $default = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getenv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索 ENV 变量

## 说明

```php
public mixed Yaf_Request_Abstract::getEnv(string $name, [mixed $default = ...])
```

检索一个 ENV 变量。

## 参数

- **`$name`** — 变量名。
- **`$default`** — 当变量未找到时返回的值。

## 返回值

变量的值；如果未找到，则返回 `$default`。

## 示例

**`Yaf_Request_Abstract::getEnv()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        // 假设进程以 APPLICATION_ENV=development 运行
        $env = $this->getRequest()->getEnv("APPLICATION_ENV", "production");

        var_dump($env);
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(11) "development"

   
```

## 参见

 `Yaf_Request_Abstract::getQuery()` `Yaf_Request_Abstract::getRequest()` `Yaf_Request_Abstract::getPost()` `Yaf_Request_Abstract::getCookie()` `Yaf_Request_Abstract::getFiles()` `Yaf_Request_Abstract::getParam()`
