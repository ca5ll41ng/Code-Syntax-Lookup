---
id: "zh-php-function-function-json-validate"
language: "php"
lang: "zh"
category: "function"
name: "json_validate"
title: "检查一个字符串是否包含有效的JSON"
signature: "bool json_validate(string $json, int $depth = 512, int $flags = 0)"
module: "json"
source_url: "https://www.php.net/manual/zh/function.json-validate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查一个字符串是否包含有效的JSON

## 说明

```php
bool json_validate(string $json, int $depth = 512, int $flags = 0)
```

返回给定的 `string` 是否是语法上有效的 JSON。 如果 `json_validate()` 返回 `true`，`json_decode()` 在使用相同的 `$depth` 和 `$flags` 时，将成功解码给定的字符串。

如果 `json_validate()` 返回 `false`，原因可以使用 `json_last_error()` 和 `json_last_error_msg()` 获取。

如果解码后的 JSON 内容未被使用，`json_validate()` 相比于 `json_decode()` 使用了较少的内存，因为它不需要构建包含有效载荷的数组或对象结构。

> 在 `json_decode()` 之前调用 `json_validate()` 将不必要地解析字符串两次， 因为 `json_decode()` 在解码过程中隐式地执行验证。
>
> `json_validate()` 只有在解码后的 JSON 内容不会立即使用，但需要知道字符串是否包含有效的 JSON 时才有用。

## 参数

- **`$json`** — 需要验证的字符串。 — 该函数仅适用于 UTF-8 编码字符串。
  > PHP 实现了 JSON 的一个超集，参考 [RFC 7159](7159).


- **`$depth`** — 解码结构的最大嵌套深度。 该值必须大于 `0`、 且小于或等于 `2147483647`。
- **`$flags`** — 当前只接受 `JSON_INVALID_UTF8_IGNORE`。

## 返回值

如果给定字符串是语法有效的 JSON，则返回 `true`，否则返回 `false`。

## 错误／异常

如果 `$depth` 超出允许的范围，将抛出 `ValueError`。

如果 `$flags` 不是一个有效的 flag，将抛出 `ValueError`。

## 示例

**`json_validate()` 示例**

```php


<?php
var_dump(json_validate('{ "test": { "foo": "bar" } }'));
var_dump(json_validate('{ "": "": "" } }'));
?>

    
```

以上示例会输出：

```text


bool(true)
bool(false)

    
```

## 参见

`json_decode()` `json_last_error()` `json_last_error_msg()`
