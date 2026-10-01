---
id: "zh-php-function-function-stream-context-set-option"
language: "php"
lang: "zh"
category: "function"
name: "stream_context_set_option"
title: "对资源流、数据包或者上下文设置参数"
signature: "bool stream_context_set_option(resource $stream_or_context, string $wrapper, string $option_name, mixed $value)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-context-set-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对资源流、数据包或者上下文设置参数

## 说明

```php
bool stream_context_set_option(resource $stream_or_context, string $wrapper, string $option_name, mixed $value)
```

自 PHP 8.4.0 起，下面的替代签名已被弃用，请使用 `stream_context_set_options()` 代替。 `bool``stream_context_set_option()` `resource``$stream_or_context` `array``$options`

给指定的上下文设置参数。参数 `$value` 是设置 `$wrapper` 的 `$option` 参数的值。

## 参数

 {{{ 

- **`$stream_or_context`** — 需要添加参数的资源流或者上下文。
- **`$wrapper`** — 封装协议的名称（可能与协议不同）。 请参考 上下文（Context）选项和参数 查看资源流参数列表。
- **`$option_name`** — 选项的名称。
- **`$value`** — 选项的值。
- **`$options`** — 给 `$stream_or_context` 设置的选项。
  > `$options` 必须是一个 `$arr['wrapper']['option'] = $value` 格式二维关联数组 。
  >
  > 请参考 上下文（Context）选项和参数 查看资源流参数列表。



 }}} 

## 返回值

 {{{ 

成功时返回 `true`， 或者在失败时返回 `false`。

 }}} 

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 替代的双参数签名已被弃用。 请使用 `stream_context_set_options()` 代替。 |
