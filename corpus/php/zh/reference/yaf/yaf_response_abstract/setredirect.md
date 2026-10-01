---
id: "zh-php-function-yaf-response-abstract-setredirect"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Response_Abstract::setRedirect"
title: "重定向到另一个 URL"
signature: "public bool|null Yaf_Response_Abstract::setRedirect(string $url)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-response-abstract.setredirect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重定向到另一个 URL

## 说明

```php
public bool|null Yaf_Response_Abstract::setRedirect(string $url)
```

将客户端重定向到另一个 URL（发送 Location 响应头）。

## 参数

- **`$url`** — 要重定向到的地址。

## 返回值

成功时返回 `true`，失败时返回 `null`。

## 示例

**`Yaf_Response_Abstract::setRedirect()` 示例**

```php


<?php
class AccountController extends Yaf_Controller_Abstract
{
    public function indexAction()
    {
        if (!Yaf_Session::getInstance()->has("login")) {
            /* 发送指向登录页的 Location 响应头 */
            $this->getResponse()->setRedirect("/account/login");
            return false; // 这里没有可渲染的内容
        }
    }
}
?>

   
```

## 参见

 `Yaf_Controller_Abstract::redirect()`
