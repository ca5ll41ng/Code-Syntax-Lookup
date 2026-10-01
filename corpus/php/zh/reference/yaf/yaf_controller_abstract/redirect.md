---
id: "zh-php-function-yaf-controller-abstract-redirect"
language: "php"
lang: "zh"
category: "function"
name: "Yaf_Controller_Abstract::redirect"
title: "重定向到 URL"
signature: "public bool|null Yaf_Controller_Abstract::redirect(string $url)"
module: "yaf"
source_url: "https://www.php.net/manual/zh/yaf-controller-abstract.redirect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重定向到 URL

## 说明

```php
public bool|null Yaf_Controller_Abstract::redirect(string $url)
```

通过发送 `Location` 头（HTTP 状态 302）将客户端重定向到另一个 URL。

## 参数

- **`$url`** — 要重定向到的 URL。

## 返回值

成功时返回 `true`，失败时返回 `false` / `null`。

## 示例

**`Yaf_Controller_Abstract::redirect()` 示例**

```php


<?php
class AccountController extends Yaf_Controller_Abstract
{
    public function loginAction() {
        if (!$this->getRequest()->getParam("user")) {
            // 发送带 302 状态的 Location 头
            $this->redirect("http://www.example.com/account/login/");
            return false; // 跳过自动渲染
        }
    }
}
?>

   
```

## 参见

`Yaf_Controller_Abstract::forward()` `Yaf_Response_Abstract::setRedirect()`
