---
id: "zh-php-function-yaf-request-abstract-get"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::get"
title: "从请求中获取变量"
signature: "public mixed Yaf_Request_Abstract::get(string $name, [mixed $default = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从请求中获取变量

## 说明

```php
public mixed Yaf_Request_Abstract::get(string $name, [mixed $default = ...])
```

从请求中获取变量。搜索顺序为：由 `Yaf_Request_Abstract::setParam()` 设置的请求参数，然后是 POST、GET、COOKIE、SERVER。

## 参数

- **`$name`** — 变量名。
- **`$default`** — 如果未找到变量则要返回的值。

## 返回值

如果找到则返回该值，否则如果提供了 `$default` 则返回该值，未提供则返回 `null`。

## 示例

**`Yaf_Request_Abstract::get()` 示例**

```php


<?php
class SearchController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        $request = $this->getRequest();

        // 假设请求为 /search?keyword=yaf&page=2
        $keyword = $request->get("keyword");
        $page    = (int) $request->get("page", 1);
        $sort    = $request->get("sort", "relevance");

        var_dump($keyword, $page, $sort);
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(3) "yaf"
int(2)
string(9) "relevance"

   
```

## 参见

 `Yaf_Request_Abstract::getQuery()` `Yaf_Request_Abstract::getRequest()` `Yaf_Request_Abstract::getPost()` `Yaf_Request_Abstract::getCookie()` `Yaf_Request_Abstract::getFiles()` `Yaf_Request_Abstract::getParam()`
