---
id: "zh-php-function-yaf-request-abstract-getrequest"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getRequest"
title: "获取 REQUEST 变量"
signature: "public mixed Yaf_Request_Abstract::getRequest([string $name = ...], [mixed $default = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getrequest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 REQUEST 变量

## 说明

```php
public mixed Yaf_Request_Abstract::getRequest([string $name = ...], [mixed $default = ...])
```

从 $_REQUEST 中获取变量。

## 参数

- **`$name`** — 变量名。如果省略，则返回整个数组。
- **`$default`** — 如果未找到变量则要返回的值。

## 返回值

返回 $_REQUEST 变量值，如果未设置则返回 `$default`。

## 示例

**`Yaf_Request_Abstract::getRequest()` 示例**

```php


<?php
class SearchController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        // 假设请求为 /search?keyword=yaf
        $keyword = $this->getRequest()->getRequest("keyword");
        $source  = $this->getRequest()->getRequest("source", "web");

        var_dump($keyword, $source);
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(3) "yaf"
string(3) "web"

   
```

## 参见

 `Yaf_Request_Abstract::getQuery()` `Yaf_Request_Abstract::getRequest()` `Yaf_Request_Abstract::getPost()` `Yaf_Request_Abstract::getCookie()` `Yaf_Request_Abstract::getFiles()` `Yaf_Request_Abstract::getParam()`
