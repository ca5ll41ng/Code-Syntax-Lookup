---
id: "zh-php-function-function-json-last-error"
language: "php"
lang: "zh"
category: "function"
name: "json_last_error"
title: "返回最后发生的错误"
signature: "int json_last_error()"
module: "json"
source_url: "https://www.php.net/manual/zh/function.json-last-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后发生的错误

## 说明

```php
int json_last_error()
```

没有指定 `JSON_THROW_ON_ERROR`时，返回上一次 JSON 验证/编码/解码时发生的最后一个错误（如果有）。

## 参数

此函数没有参数。

## 返回值

返回一个整型（integer），这个值会是以下的常量之一：

| 常量 | 含义 | 可用性 |
| --- | --- | --- |
| `JSON_ERROR_NONE` | 没有错误发生 |  |
| `JSON_ERROR_DEPTH` | 到达了最大堆栈深度 |  |
| `JSON_ERROR_STATE_MISMATCH` | 无效或异常的 JSON |  |
| `JSON_ERROR_CTRL_CHAR` | 控制字符错误，可能是编码不对 |  |
| `JSON_ERROR_SYNTAX` | 语法错误 |  |
| `JSON_ERROR_UTF8` | 异常的 UTF-8 字符，也许是因为不正确的编码。 |  |
| `JSON_ERROR_RECURSION` | 待编码的值中存在一个或多个递归引用 |  |
| `JSON_ERROR_INF_OR_NAN` | 待编码的值中存在一个或多个 `NAN` 或 `INF` 值 |  |
| `JSON_ERROR_UNSUPPORTED_TYPE` | 指定的类型，值无法编码。 |  |
| `JSON_ERROR_INVALID_PROPERTY_NAME` | 指定的属性名无法编码。 |  |
| `JSON_ERROR_UTF16` | 畸形的 UTF-16 字符，可能因为字符编码不正确。 |  |
| `JSON_ERROR_NON_BACKED_ENUM` | 值包含无法序列化的非回退枚举。自 PHP 8.1.0 起可用。 |  |

## 示例

**`json_last_error()` 例子**

```php


<?php
// 一个有效的 json 字符串
$json[] = '{"Organization": "PHP Documentation Team"}';

// 一个无效的 json 字符串会导致一个语法错误，在这个例子里我们使用 ' 代替了 " 作为引号
$json[] = "{'Organization': 'PHP Documentation Team'}";


foreach ($json as $string) {
    echo 'Decoding: ' . $string;
    json_decode($string);

    switch (json_last_error()) {
        case JSON_ERROR_NONE:
            echo ' - No errors';
        break;
        case JSON_ERROR_DEPTH:
            echo ' - Maximum stack depth exceeded';
        break;
        case JSON_ERROR_STATE_MISMATCH:
            echo ' - Underflow or the modes mismatch';
        break;
        case JSON_ERROR_CTRL_CHAR:
            echo ' - Unexpected control character found';
        break;
        case JSON_ERROR_SYNTAX:
            echo ' - Syntax error, malformed JSON';
        break;
        case JSON_ERROR_UTF8:
            echo ' - Malformed UTF-8 characters, possibly incorrectly encoded';
        break;
        default:
            echo ' - Unknown error';
        break;
    }

    echo PHP_EOL;
}
?>

    
```

以上示例会输出：

```text


Decoding: {"Organization": "PHP Documentation Team"} - No errors
Decoding: {'Organization': 'PHP Documentation Team'} - Syntax error, malformed JSON

    
```

**`json_encode()` 的 `json_last_error()`**

```php


<?php
// 无效的 UTF8 序列
$text = "\xB1\x31";

$json  = json_encode($text);
$error = json_last_error();

var_dump($json, $error === JSON_ERROR_UTF8);
?>

    
```

以上示例会输出：

```text


string(4) "null"
bool(true)

    
```

**`json_last_error()` 和 `JSON_THROW_ON_ERROR`**

```php


<?php
// 导致 JSON_ERROR_UTF8 的无效 UTF8 序列
json_encode("\xB1\x31");

// 以下不会导致 JSON 错误
json_encode('okay', JSON_THROW_ON_ERROR);

// 前者的 json_encode() 不会改变全局错误状态
var_dump(json_last_error() === JSON_ERROR_UTF8);
?>

    
```

以上示例会输出：

```text


bool(true)

    
```

## 参见

`json_last_error_msg()` `json_decode()` `json_encode()`
