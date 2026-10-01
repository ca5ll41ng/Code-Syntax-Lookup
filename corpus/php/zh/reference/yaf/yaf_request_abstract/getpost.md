---
id: "zh-php-function-yaf-request-abstract-getpost"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Request_Abstract::getPost"
title: "获取 POST 参数"
signature: "public mixed Yaf_Request_Abstract::getPost([string $name = ...], [mixed $default = ...])"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-request-abstract.getpost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 POST 参数

## 说明

```php
public mixed Yaf_Request_Abstract::getPost([string $name = ...], [mixed $default = ...])
```

从 $_POST 中获取变量。

## 参数

- **`$name`** — 变量名。如果省略，则返回整个数组。
- **`$default`** — 如果未找到变量则要返回的值。

## 返回值

返回 POST 参数值，如果未设置则返回 `$default`。

## 示例

**`Yaf_Request_Abstract::getPost()` 示例**

```php


<?php
class LoginController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        // 假设表单已通过 POST /login 提交
        if ($this->getRequest()->isPost()) {
            $username = $this->getRequest()->getPost("username");
            $remember = $this->getRequest()->getPost("remember", "no");

            var_dump($username, $remember);
        }
    }
}
?>
   
```

以上示例的输出类似于：

```text


string(8) "laruence"
string(3) "yes"

   
```

## 参见

 `Yaf_Request_Abstract::getQuery()` `Yaf_Request_Abstract::getRequest()` `Yaf_Request_Abstract::getPost()` `Yaf_Request_Abstract::getCookie()` `Yaf_Request_Abstract::getFiles()` `Yaf_Request_Abstract::getParam()`
