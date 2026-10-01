---
id: "zh-php-function-function-curl-exec"
language: "php"
lang: "zh"
category: "function"
name: "curl_exec"
title: "执行 cURL 会话"
signature: "string|bool curl_exec(CurlHandle $handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行 cURL 会话

## 说明

```php
string|bool curl_exec(CurlHandle $handle)
```

执行指定 cURL 会话。

这个函数应该在初始化 cURL 会话并且设置所有选项后调用。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。

## 返回值

成功时，函数会将结果直接冲刷到 `stdout` 并返回 `true`， 或者在失败时返回 `false`。然而，如果设置了 `CURLOPT_RETURNTRANSFER` 选项，将会在成功时返回结果，失败时返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

> 注意：指示错误的响应状态码（例如 `404 Not found`）不会视为失败。这种情况可以使用 `curl_getinfo()` 来检查。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 示例

**获取网页**

```php


<?php
// 创建新的 cURL 资源
$ch = curl_init();

// 设置 URL 和相应的选项
curl_setopt($ch, CURLOPT_URL, "http://www.example.com/");
curl_setopt($ch, CURLOPT_HEADER, 0);

// 抓取 URL 并把它传递给浏览器
curl_exec($ch);
?>

    
```

## 参见

`curl_multi_exec()`
