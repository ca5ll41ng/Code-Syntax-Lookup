---
id: "zh-php-function-function-json-encode"
language: "php"
lang: "zh"
category: "function"
name: "json_encode"
title: "对变量进行 JSON 编码"
signature: "string|false json_encode(mixed $value, int $flags = 0, int $depth = 512)"
module: "json"
source_url: "https://www.php.net/manual/zh/function.json-encode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对变量进行 JSON 编码

## 说明

```php
string|false json_encode(mixed $value, int $flags = 0, int $depth = 512)
```

返回字符串，包含了 `$value` 值 JSON 形式的表示。如果参数是 `array` 或 `object`，则会递归序列化。

如果要序列化的值是对象，则默认仅包含公开可见的属性，或者类可以实现 JsonSerializable 控制其值如何序列化为 JSON。

编码受传入的 `$flags` 参数影响，此外浮点值的编码依赖于 serialize_precision。

## 参数

- **`$value`** — 待编码的 `$value` ，除了 `resource` 类型之外，可以为任何数据类型。 — 所有字符串数据的编码必须是 UTF-8。
  > PHP 实现了 JSON 的一个超集，参考 [RFC 7159](7159).


- **`$flags`** — 由以下常量组成的二进制掩码： `JSON_FORCE_OBJECT`、 `JSON_HEX_QUOT`、 `JSON_HEX_TAG`、 `JSON_HEX_AMP`、 `JSON_HEX_APOS`、 `JSON_INVALID_UTF8_IGNORE`、 `JSON_INVALID_UTF8_SUBSTITUTE`、 `JSON_NUMERIC_CHECK`、 `JSON_PARTIAL_OUTPUT_ON_ERROR`、 `JSON_PRESERVE_ZERO_FRACTION`、 `JSON_PRETTY_PRINT`、 `JSON_UNESCAPED_LINE_TERMINATORS`、 `JSON_UNESCAPED_SLASHES`、 `JSON_UNESCAPED_UNICODE`、 `JSON_THROW_ON_ERROR`。 关于 JSON 常量详情参考 JSON 常量页面。
- **`$depth`** — 设置最大深度。 必须大于0。

## 返回值

成功则返回 JSON 编码的 `string` 或者在失败时返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | `$flags` 参数新增 `JSON_THROW_ON_ERROR` 常量。 |
| 7.2.0 | `$flags` 参数新增 `JSON_INVALID_UTF8_IGNORE` 和 `JSON_INVALID_UTF8_SUBSTITUTE` 常量。 |
| 7.1.0 | `$flags` 参数新增 `JSON_UNESCAPED_LINE_TERMINATORS` 常量。 |
| 7.1.0 | 对 `float` 值进行编码时，使用 serialize_precision 代替 precision。 |

## 示例

**`json_encode()` 例子**

```php


<?php
$arr = array ('a'=>1,'b'=>2,'c'=>3,'d'=>4,'e'=>5);

echo json_encode($arr);
?>

    
```

以上示例会输出：

```text


{"a":1,"b":2,"c":3,"d":4,"e":5}

    
```

**`json_encode()` 函数中 flags 参数的用法**

```php


<?php
$a = array('<foo>',"'bar'",'"baz"','&blong&', "\xc3\xa9");

echo "Normal: ",  json_encode($a), "\n";
echo "Tags: ",    json_encode($a, JSON_HEX_TAG), "\n";
echo "Apos: ",    json_encode($a, JSON_HEX_APOS), "\n";
echo "Quot: ",    json_encode($a, JSON_HEX_QUOT), "\n";
echo "Amp: ",     json_encode($a, JSON_HEX_AMP), "\n";
echo "Unicode: ", json_encode($a, JSON_UNESCAPED_UNICODE), "\n";
echo "All: ",     json_encode($a, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE), "\n\n";

$b = array();

echo "Empty array output as array: ", json_encode($b), "\n";
echo "Empty array output as object: ", json_encode($b, JSON_FORCE_OBJECT), "\n\n";

$c = array(array(1,2,3));

echo "Non-associative array output as array: ", json_encode($c), "\n";
echo "Non-associative array output as object: ", json_encode($c, JSON_FORCE_OBJECT), "\n\n";

$d = array('foo' => 'bar', 'baz' => 'long');

echo "Associative array always output as object: ", json_encode($d), "\n";
echo "Associative array always output as object: ", json_encode($d, JSON_FORCE_OBJECT), "\n\n";
?>

    
```

以上示例会输出：

```text


Normal: ["<foo>","'bar'","\"baz\"","&blong&","\u00e9"]
Tags: ["\u003Cfoo\u003E","'bar'","\"baz\"","&blong&","\u00e9"]
Apos: ["<foo>","\u0027bar\u0027","\"baz\"","&blong&","\u00e9"]
Quot: ["<foo>","'bar'","\u0022baz\u0022","&blong&","\u00e9"]
Amp: ["<foo>","'bar'","\"baz\"","\u0026blong\u0026","\u00e9"]
Unicode: ["<foo>","'bar'","\"baz\"","&blong&","é"]
All: ["\u003Cfoo\u003E","\u0027bar\u0027","\u0022baz\u0022","\u0026blong\u0026","é"]

Empty array output as array: []
Empty array output as object: {}

Non-associative array output as array: [[1,2,3]]
Non-associative array output as object: {"0":{"0":1,"1":2,"2":3}}

Associative array always output as object: {"foo":"bar","baz":"long"}
Associative array always output as object: {"foo":"bar","baz":"long"}

    
```

**选项 JSON_NUMERIC_CHECK 例子**

```php


<?php
echo "Strings representing numbers automatically turned into numbers".PHP_EOL;
$numbers = array('+123123', '-123123', '1.2e3', '0.00001');
var_dump(
 $numbers,
 json_encode($numbers, JSON_NUMERIC_CHECK)
);
echo "Strings containing improperly formatted numbers".PHP_EOL;
$strings = array('+a33123456789', 'a123');
var_dump(
 $strings,
 json_encode($strings, JSON_NUMERIC_CHECK)
);
?>

    
```

以上示例的输出类似于：

```text


Strings representing numbers automatically turned into numbers
array(4) {
  [0]=>
  string(7) "+123123"
  [1]=>
  string(7) "-123123"
  [2]=>
  string(5) "1.2e3"
  [3]=>
  string(7) "0.00001"
}
string(28) "[123123,-123123,1200,1.0e-5]"
Strings containing improperly formatted numbers
array(2) {
  [0]=>
  string(13) "+a33123456789"
  [1]=>
  string(4) "a123"
}
string(24) "["+a33123456789","a123"]"

    
```

**连续与非连续数组示例**

```php


<?php
echo "连续数组".PHP_EOL;
$sequential = array("foo", "bar", "baz", "blong");
var_dump(
 $sequential,
 json_encode($sequential)
);

echo PHP_EOL."非连续数组".PHP_EOL;
$nonsequential = array(1=>"foo", 2=>"bar", 3=>"baz", 4=>"blong");
var_dump(
 $nonsequential,
 json_encode($nonsequential)
);

echo PHP_EOL."删除一个连续数组值的方式产生的非连续数组".PHP_EOL;
unset($sequential[1]);
var_dump(
 $sequential,
 json_encode($sequential)
);
?>

    
```

以上示例会输出：

```text


连续数组
array(4) {
  [0]=>
  string(3) "foo"
  [1]=>
  string(3) "bar"
  [2]=>
  string(3) "baz"
  [3]=>
  string(5) "blong"
}
string(27) "["foo","bar","baz","blong"]"

非连续数组
array(4) {
  [1]=>
  string(3) "foo"
  [2]=>
  string(3) "bar"
  [3]=>
  string(3) "baz"
  [4]=>
  string(5) "blong"
}
string(43) "{"1":"foo","2":"bar","3":"baz","4":"blong"}"

删除一个连续数组值的方式产生的非连续数组
array(3) {
  [0]=>
  string(3) "foo"
  [2]=>
  string(3) "baz"
  [3]=>
  string(5) "blong"
}
string(33) "{"0":"foo","2":"baz","3":"blong"}"

    
```

**`选项 JSON_PRESERVE_ZERO_FRACTION` 的例子**

```php


<?php
var_dump(json_encode(12.0, JSON_PRESERVE_ZERO_FRACTION));
var_dump(json_encode(12.0));
?>

    
```

以上示例会输出：

```text


string(4) "12.0"
string(2) "12"

    
```

## 注释

> 如果执行失败，可以通过 `json_last_error()` 函数来获取详细错误信息。

> 如果要编码的数组的键不是从0开始的数字，所有的键将会被当作字符串，并明确声明为 key-value 对。

> 参考 JSON 解析器，如果指定简单的 `string`、`integer`、`float` 或 `boolean` 作为输入 `$value`，`json_encode()` 将生成简单的值的 JSON（既不是对象又不是数组）。虽然大多数解码器会接受这些值作为有效的 JSON，但有些可能不会，因为在这一点上规范是模棱两可的。
>
> 总而言之，应该测试下 JSON decoder 能否处理 `json_encode()` 生成的数据。

## 参见

JsonSerializable `json_decode()` `json_last_error()` `json_last_error_msg()` `serialize()`
