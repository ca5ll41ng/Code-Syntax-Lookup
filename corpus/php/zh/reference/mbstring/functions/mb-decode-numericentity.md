---
id: "zh-php-function-function-mb-decode-numericentity"
language: "php"
lang: "zh"
category: "function"
name: "mb_decode_numericentity"
title: "根据 HTML 数字字符串解码成字符"
signature: "string mb_decode_numericentity(string $string, array $map, string|null $encoding = null)"
module: "mbstring"
source_url: "https://www.php.net/manual/zh/function.mb-decode-numericentity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 根据 HTML 数字字符串解码成字符

## 说明

```php
string mb_decode_numericentity(string $string, array $map, string|null $encoding = null)
```

将 `string` 的数字字符串引用按指定的字符块转换成 `$string`。

## 参数

- **`$string`** — 要解码的 `string`。
- **`$map`** — `$map` 是 `array`，指定了要转换的代码区域。
- **`$encoding`** — `$encoding` 参数为字符编码。如果省略或是 `null`，则使用内部字符编码。

## 返回值

转换后的 `string`。

## 错误／异常

如果 `$map` 不是 `integer`s 的列表，抛出 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 如果 `$map` 不是 `integer`s 的列表， `mb_decode_numericentity()` 现在抛出 ValueError。 |
| 8.0.0 | 现在 `$encoding` 可以为 null。 |

## 示例

**`$map` 示例**

```php


<?php
$convmap = array (
   int start_code1, int end_code1, int offset1, int mask1,
   int start_code2, int end_code2, int offset2, int mask2,
   // ........
   int start_codeN, int end_codeN, int offsetN, int maskN );
// Specify Unicode value for start_codeN and end_codeN
// Add offsetN to value and take bit-wise 'AND' with maskN, 
// then convert value to numeric string reference.
?>

    
```

**`$map` 示例，转义 JavaScript 字符串**

```php


<?php
function escape_javascript_string($str) {
  $map = [
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,0,0, // 49
          0,0,0,0,0,0,0,0,1,1,
          1,1,1,1,1,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,1,1,1,1,1,1,0,0,0, // 99
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1, // 149
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1, // 199
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1,
          1,1,1,1,1,1,1,1,1,1, // 249
          1,1,1,1,1,1,1, // 255
          ];
  // Char encoding is UTF-8
  $mblen = mb_strlen($str, 'UTF-8');
  $utf32 = bin2hex(mb_convert_encoding($str, 'UTF-32', 'UTF-8'));
  for ($i=0, $encoded=''; $i < $mblen; $i++) {
      $u = substr($utf32, $i*8, 8);
      $v = base_convert($u, 16, 10);
      if ($v < 256 && $map[$v]) {
        $encoded .= '\\x'.substr($u, 6,2);
      } else if ($v == 2028) {
        $encoded .= '\\u2028';
      } else if ($v == 2029) {
        $encoded .= '\\u2029';
      } else {
        $encoded .= mb_convert_encoding(hex2bin($u), 'UTF-8', 'UTF-32');
      }
   }
   return $encoded;
}
 
// Test data
$convmap = [ 0x0, 0xffff, 0, 0xffff ];
$msg = '';
for ($i=0; $i < 1000; $i++) {
  // chr() cannot generate correct UTF-8 data larger value than 128, use mb_decode_numericentity().
  $msg .= mb_decode_numericentity('&#'.$i.';', $convmap, 'UTF-8');
}
 
// var_dump($msg);
var_dump(escape_javascript_string($msg));

    
```

## 参见

`mb_encode_numericentity()`
