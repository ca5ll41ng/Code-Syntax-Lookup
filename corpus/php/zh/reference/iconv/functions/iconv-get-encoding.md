---
id: "zh-php-function-function-iconv-get-encoding"
language: "php"
lang: "zh"
category: "function"
name: "iconv_get_encoding"
title: "获取 iconv 扩展的内部配置变量"
signature: "array|string|false iconv_get_encoding(string $type = \"all\")"
module: "iconv"
source_url: "https://www.php.net/manual/zh/function.iconv-get-encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 iconv 扩展的内部配置变量

## 说明

```php
array|string|false iconv_get_encoding(string $type = "all")
```

获取 iconv 扩展的内部配置变量。

## 参数

- **`$type`** — 选项 `$type` 的值可以是： all input_encoding output_encoding internal_encoding

## 返回值

成功时返回当前内部配置变量的值， 或者在失败时返回 `false`。

如果省略了 `$type`，或者设置为 "all"，`iconv_get_encoding()` 返回包含所有这些变量的数组。

## 示例

**`iconv_get_encoding()` 示例**

```php


<pre>
<?php
iconv_set_encoding("internal_encoding", "UTF-8");
iconv_set_encoding("output_encoding", "ISO-8859-1");
var_dump(iconv_get_encoding('all'));
?>
</pre>

    
```

以上示例会输出：

```text


Array
(
    [input_encoding] => ISO-8859-1
    [output_encoding] => ISO-8859-1
    [internal_encoding] => UTF-8
)


    
```

## 参见

`iconv_set_encoding()` `ob_iconv_handler()`
