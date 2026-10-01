---
id: "zh-php-function-yaf-request-abstract-getlanguage"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getLanguage"
title: "检索客户端的首选语言"
signature: "public string|null Yaf_Request_Abstract::getLanguage()"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getlanguage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索客户端的首选语言

## 说明

```php
public string|null Yaf_Request_Abstract::getLanguage()
```

检索客户端的首选语言

## 参数

此函数没有参数。

## 返回值

首选语言字符串；如果无法确定，则返回 `null`。

## 示例

**`Yaf_Request_Abstract::getLanguage()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        // 假设客户端发送了 "Accept-Language: zh-CN"
        $language = $this->getRequest()->getLanguage();

        var_dump($language);
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(5) "zh-CN"

   
```

## 参见

 `Yaf_Request_Abstract::getServer()` `Yaf_Request_Abstract::getEnv()`
