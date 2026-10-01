---
id: "zh-php-function-oauthprovider-consumerhandler"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::consumerHandler"
title: "设置 consumerHandler 句柄回调函数"
signature: "public void OAuthProvider::consumerHandler(callable $callback_function)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.consumerhandler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 consumerHandler 句柄回调函数

## 说明

```php
public void OAuthProvider::consumerHandler(callable $callback_function)
```

设置消费者句柄回调函数，并将在后面通过 `OAuthProvider::callConsumerHandler()` 被调用。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$callback_function`** — `回调类型` 函数名。

## 返回值

没有返回值。

## 示例

**`OAuthProvider::consumerHandler()` 回调的例子**

```php


<?php
function lookupConsumer($provider) {

    if ($provider->consumer_key === 'unknown') {
        return OAUTH_CONSUMER_KEY_UNKNOWN;
    } else if($provider->consumer_key == 'blacklisted' || $provider->consumer_key === 'throttled') {
        return OAUTH_CONSUMER_KEY_REFUSED;
    }

    $provider->consumer_secret = "the_consumers_secret";

    return OAUTH_OK;
}
?>

   
```

## 参见

 `OAuthProvider::callConsumerHandler()`
