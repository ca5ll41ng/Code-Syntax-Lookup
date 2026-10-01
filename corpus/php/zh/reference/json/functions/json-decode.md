---
id: "zh-php-function-function-json-decode"
language: "php"
lang: "zh"
category: "function"
name: "json_decode"
title: "对 JSON 格式的字符串进行解码"
signature: "mixed json_decode(string $json, bool|null $associative = null, int $depth = 512, int $flags = 0)"
module: "json"
source_url: "https://www.php.net/manual/zh/function.json-decode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对 JSON 格式的字符串进行解码

## 说明

```php
mixed json_decode(string $json, bool|null $associative = null, int $depth = 512, int $flags = 0)
```

接受一个 JSON 编码的字符串并且把它转换为 PHP 值。

## 参数

- **`$json`** — 待解码的 `$json` `string` 格式的字符串。 — 这个函数仅能处理 UTF-8 编码的数据。
  > PHP 实现了 JSON 的一个超集，参考 [RFC 7159](7159).


- **`$associative`** — 当为 `true` 时，JSON 对象将返回关联 `array`；当为 `false` 时，JSON 对象将返回 `object`。当为 `null` 时，JSON 对象将返回关联 `array` 或 `object`，这取决于是否在 `$flags` 中设置 `JSON_OBJECT_AS_ARRAY`。
- **`$depth`** — 需要解码的结构，其最大嵌套深度。该值必须大于 `0` 或者小于等于 `2147483647`。
- **`$flags`** — 由 `JSON_BIGINT_AS_STRING`、`JSON_INVALID_UTF8_IGNORE`、`JSON_INVALID_UTF8_SUBSTITUTE`、`JSON_OBJECT_AS_ARRAY`、`JSON_THROW_ON_ERROR` 组成的掩码。这些常量的行为在 JSON constants 页面有进一步描述。

## 返回值

返回在 `$json` 中编码的数据作为合适的 PHP 类型。没有引号的值 `true`、`false` 和 `null` 会相应地返回 `true`、`false` 和 `null`。如果 `$json` 无法被解码，或者编码数据深度超过了嵌套限制的话，将会返回 `null`。

## 错误／异常

如果 `$depth` 超出允许的范围，自 PHP 8.0.0 起将会抛出 `ValueError`，在此之前的版本将会引发 `E_WARNING` 级别的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | `$flags` 新增 `JSON_THROW_ON_ERROR`。 |
| 7.2.0 | 现在 `$associative` 允许为 null。 |
| 7.2.0 | `$flags` 新增 `JSON_INVALID_UTF8_IGNORE`、`JSON_INVALID_UTF8_SUBSTITUTE`。 |
| 7.1.0 | 空的 JSON key（""）可以被编码为空的对象属性，而不是使用值为 `_empty_` 的键。 |

## 示例

**`json_decode()` 的例子**

```php


<?php
$json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

var_dump(json_decode($json));
var_dump(json_decode($json, true));

?>

    
```

以上示例会输出：

```text


object(stdClass)#1 (5) {
    ["a"] => int(1)
    ["b"] => int(2)
    ["c"] => int(3)
    ["d"] => int(4)
    ["e"] => int(5)
}

array(5) {
    ["a"] => int(1)
    ["b"] => int(2)
    ["c"] => int(3)
    ["d"] => int(4)
    ["e"] => int(5)
}

    
```

**访问无效的对象属性**

可以通过将元素名称用花括号和单引号括起来，来访问对象中包含 PHP 命名约定不允许的字符（例如连字符）的元素。

```php


<?php

$json = '{"foo-bar": 12345}';

$obj = json_decode($json);
print $obj->{'foo-bar'}; // 12345

?>

    
```

**使用 `json_decode()` 的常见错误**

```php


<?php

// the following strings are valid JavaScript but not valid JSON

// the name and value must be enclosed in double quotes
// single quotes are not valid 
$bad_json = "{ 'bar': 'baz' }";
json_decode($bad_json); // null

// the name must be enclosed in double quotes
$bad_json = '{ bar: "baz" }';
json_decode($bad_json); // null

// trailing commas are not allowed
$bad_json = '{ bar: "baz", }';
json_decode($bad_json); // null

?>

    
```

**`$depth` 错误**

```php


<?php
// Encode some data with a maximum depth  of 4 (array -> array -> array -> string)
$json = json_encode(
    array(
        1 => array(
            'English' => array(
                'One',
                'January'
            ),
            'French' => array(
                'Une',
                'Janvier'
            )
        )
    )
);

// Show the errors for different depths.
var_dump(json_decode($json, true, 4));
echo 'Last error: ', json_last_error_msg(), PHP_EOL, PHP_EOL;

var_dump(json_decode($json, true, 3));
echo 'Last error: ', json_last_error_msg(), PHP_EOL, PHP_EOL;
?>

    
```

以上示例会输出：

```text


array(1) {
  [1]=>
  array(2) {
    ["English"]=>
    array(2) {
      [0]=>
      string(3) "One"
      [1]=>
      string(7) "January"
    }
    ["French"]=>
    array(2) {
      [0]=>
      string(3) "Une"
      [1]=>
      string(7) "Janvier"
    }
  }
}
Last error: No error

NULL
Last error: Maximum stack depth exceeded

    
```

**`json_decode()` 处理大整数**

```php


<?php
$json = '{"number": 12345678901234567890}';

var_dump(json_decode($json));
var_dump(json_decode($json, false, 512, JSON_BIGINT_AS_STRING));

?>

    
```

以上示例会输出：

```text


object(stdClass)#1 (1) {
  ["number"]=>
  float(1.2345678901235E+19)
}
object(stdClass)#1 (1) {
  ["number"]=>
  string(20) "12345678901234567890"
}

    
```

## 注释

> JSON 规范不是 JavaScript，而是 JavaScript 的一个子集。

> 如果解码失败，可以使用 `json_last_error()` 来确定错误的确切性质。

## 参见

`json_encode()` `json_last_error()` `json_last_error_msg()`
