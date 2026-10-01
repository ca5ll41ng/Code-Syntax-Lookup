---
id: "zh-php-function-function-http-response-code"
language: "php"
lang: "zh"
category: "function"
name: "http_response_code"
title: "获取/设置响应的 HTTP 状态码"
signature: "int|bool http_response_code(int $response_code = 0)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.http-response-code.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取/设置响应的 HTTP 状态码

## 说明

```php
int|bool http_response_code(int $response_code = 0)
```

获取或者设置响应的 HTTP 状态码。

## 参数

- **`$response_code`** — 可选的 `$response_code` 会设置响应的状态码。

## 返回值

如果提供了 `$response_code`，将返回先前的状态码。 如果未提供 `$response_code`，会返回当前的状态码。 在 Web 服务器环境里，这些状态码的默认值都是 `200`。

如果在非 Web 服务器环境里调用（比如 CLI 应用里）， 不提供 `$response_code` 就会返回 `false` 。 在非 Web 服务器环境里，提供 `$response_code` 会返回 `true` （仅仅在先前没有设置过状态码的时候）。

## 示例

**Web 服务器环境内使用 `http_response_code()`**

```php


<?php

// 获取当前状态码，并设置新的状态码
var_dump(http_response_code(404));

//获取新的状态码
var_dump(http_response_code());
?>

    
```

以上示例会输出：

```text


int(200)
int(404)

    
```

**在 CLI 环境内使用 `http_response_code()`**

```php


<?php

// 获取当前默认的响应状态码 
var_dump(http_response_code());

// 设置状态码
var_dump(http_response_code(201));

// 获取新的状态码
var_dump(http_response_code());
?>

    
```

以上示例会输出：

```text


bool(false)
bool(true)
int(201)

    
```

## 参见

`header()` `headers_list()`
