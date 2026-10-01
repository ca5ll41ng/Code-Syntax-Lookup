---
id: "zh-php-function-oauthprovider-is2leggedendpoint"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::is2LeggedEndpoint"
title: "is2LeggedEndpoint"
signature: "public void OAuthProvider::is2LeggedEndpoint(mixed $params_array)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.is2leggedendpoint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# is2LeggedEndpoint

## 说明

```php
public void OAuthProvider::is2LeggedEndpoint(mixed $params_array)
```

2-legged 流程，或请求签名。不需要令牌。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$params_array`**

## 返回值

返回一个 `OAuthProvider` `对象`.

## 示例

**`OAuthProvider::is2LeggedEndpoint()` 例子**

```php


<?php

$provider = new OAuthProvider();

$provider->is2LeggedEndpoint(true);

?>

   
```

## 参见

 `OAuthProvider::__construct()`
