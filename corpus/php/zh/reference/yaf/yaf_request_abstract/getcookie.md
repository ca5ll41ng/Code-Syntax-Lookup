---
id: "zh-php-function-yaf-request-abstract-getcookie"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getCookie"
title: "获取 COOKIE 变量"
signature: "public mixed Yaf_Request_Abstract::getCookie([string $name = ...], [mixed $default = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getcookie.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 COOKIE 变量

## 说明

```php
public mixed Yaf_Request_Abstract::getCookie([string $name = ...], [mixed $default = ...])
```

从 $_COOKIE 中获取变量。

## 参数

- **`$name`** — 变量名。如果省略，则返回整个数组。
- **`$default`** — 如果未找到变量则要返回的值。

## 返回值

返回 cookie 值，如果未设置则返回 `$default`。

## 示例

**`Yaf_Request_Abstract::getCookie()` 示例**

```php


<?php
class UserController extends Yaf_Controller_Abstract
{
    public function profileAction()
    {
        $request = $this->getRequest();

        $theme     = $request->getCookie("theme", "light");
        $sessionId = $request->getCookie("sid");

        var_dump($theme, $sessionId);
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(4) "dark"
string(8) "1f2a3b4c"

   
```

## 参见

 `Yaf_Request_Abstract::getQuery()` `Yaf_Request_Abstract::getRequest()` `Yaf_Request_Abstract::getPost()` `Yaf_Request_Abstract::getCookie()` `Yaf_Request_Abstract::getFiles()` `Yaf_Request_Abstract::getParam()`
