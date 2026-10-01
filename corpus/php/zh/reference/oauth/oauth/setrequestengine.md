---
id: "zh-php-function-oauth-setrequestengine"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::setRequestEngine"
title: "设置目标请求引擎"
signature: "public void OAuth::setRequestEngine(int $reqengine)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.setrequestengine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置目标请求引擎

## 说明

```php
public void OAuth::setRequestEngine(int $reqengine)
```

设置请求引擎，用于发送 HTTP 请求。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$reqengine`** — 想要的请求引擎。 设为 `OAUTH_REQENGINE_STREAMS` 则使用 PHP 流，设为 `OAUTH_REQENGINE_CURL` 则使用 Curl。

## 返回值

没有返回值。

## 错误／异常

如果选择了一个无效的请求引擎，则发出一个 `OAuthException` 异常。

## 示例

**`OAuth::setRequestEngine()` 例子**

```php


<?php
$consumer = new OAuth();

$consumer->setRequestEngine(OAUTH_REQENGINE_STREAMS);
?>

   
```

## 参见

 Curl PHP 流 `OAuthException`
