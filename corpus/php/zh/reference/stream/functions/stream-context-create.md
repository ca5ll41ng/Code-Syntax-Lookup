---
id: "zh-php-function-function-stream-context-create"
language: "php"
lang: "zh"
category: "function"
name: "stream_context_create"
title: "创建资源流上下文"
signature: "resource stream_context_create(array|null $options = null, array|null $params = null)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-context-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建资源流上下文

## 说明

```php
resource stream_context_create(array|null $options = null, array|null $params = null)
```

创建并返回一个资源流上下文，该资源流中包含了 `$options` 中提前设定的所有参数的值。

## 参数

- **`$options`** — 必须是一个二维关联数组或 `null`，二维关联数组格式如下：`$arr['wrapper']['option'] = $value`。请参考 上下文（Context）选项 中可用的封装协议和选项列表。 — 默认为 `null`。
- **`$params`** — 必须是 `$arr['parameter'] = $value` 格式的关联数组或 `null`。 请参考 上下文（Context）参数 里的标准资源流参数列表。

## 返回值

上下文资源流，类型为 `resource` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$options` 和 `$params` 可以为 null。 |

## 示例

**使用 `stream_context_create()`**

```php


<?php
$opts = [
  'http' => [
    'method' => "GET",
    // 使用 CRLF \r\n 分隔多个 header
    'header' => "Accept-language: en\r\n" .
                "Cookie: foo=bar",
  ]
];

$context = stream_context_create($opts);

/* 包含上面的 header 头，向 www.example.com
   发送 HTTP 请求 */
$fp = fopen('http://www.example.com', 'r', false, $context);
fpassthru($fp);
fclose($fp);
?>

   
```

## 参见

 `stream_context_set_option()` 支持的封装协议列表（`wrappers`） 上下文选项（`context`）
