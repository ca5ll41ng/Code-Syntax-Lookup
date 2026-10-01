---
id: "zh-php-function-yaf-response-abstract-clearbody"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::clearBody"
title: "丢弃所有已存在的响应 body"
signature: "public Yaf_Response_Abstract|false|null Yaf_Response_Abstract::clearBody([string $key = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.clearbody.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 丢弃所有已存在的响应 body

## 说明

```php
public Yaf_Response_Abstract|false|null Yaf_Response_Abstract::clearBody([string $key = ...])
```

丢弃所有已存在的响应 body。

## 参数

- **`$key`** — 内容 key。若指定，则只清除该内容块；否则清除所有内容块。

## 返回值

成功时返回响应对象自身，失败时返回 `null`。

## 示例

**`Yaf_Response_Abstract::clearBody()` 示例**

```php


<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $response = $this->getResponse();

        $response->setBody("Hello", "intro");
        $response->setBody("World");

        $response->clearBody("intro"); // 仅丢弃 "intro" 块
        var_dump($response->getBody(null));

        $response->clearBody(); // 丢弃所有 body 块
        var_dump($response->getBody(null));
    }
}
?>

   
```

以上示例的输出类似于：

```text


array(1) {
  ["content"]=>
  string(5) "World"
}
array(0) {
}
   
```

## 参见

 `Yaf_Response_Abstract::setBody()` `Yaf_Response_Abstract::appendBody()` `Yaf_Response_Abstract::prependBody()` `Yaf_Response_Abstract::getBody()`
