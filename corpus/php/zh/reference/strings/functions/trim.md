---
id: "zh-php-function-function-trim"
language: "php"
lang: "zh"
category: "function"
name: "trim"
title: "去除字符串首尾处的空白字符（或者其他字符）"
signature: "string trim(string $string, string $characters = \" \\n\\r\\t\\v\\x00\")"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.trim.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 去除字符串首尾处的空白字符（或者其他字符）

## 说明

```php
string trim(string $string, string $characters = " \n\r\t\v\x00")
```

此函数返回字符串 `$string` 去除首尾空白字符后的结果。如果不指定第二个参数，`trim()` 将去除这些字符：

- `" "`： ASCII SP 字符 `0x20`，一个普通的空格。
- `"\t"`： ASCII HT 字符 `0x09`，一个制表符。
- `"\n"`： ASCII LF 字符 `0x0A`，一个换行符。
- `"\r"`： ASCII CR 字符 `0x0D`，一个回车符。
- `"\0"`： ASCII NUL 字符 `0x00`，一个 NUL 字节。
- `"\v"`： ASCII VT 字符 `0x0B`，一个垂直制表符。

## 参数

- **`$string`** — 待处理的 `string`。
- **`$characters`** — 可选，也可以使用 `$characters` 参数指定要剥离的字符。 只需列出所有需要剥离的字符。 使用 `..` 可以指定一个递增的字符范围。

## 返回值

过滤后的字符串。

## 示例

**`trim()` 使用示例**

```php


<?php

$text   = "\t\tThese are a few words :) ...  ";
$binary = "\x09Example string\x0A";
$hello  = "Hello World";
var_dump($text, $binary, $hello);

print "\n";

$trimmed = trim($text);
var_dump($trimmed);

$trimmed = trim($text, " \t.");
var_dump($trimmed);

$trimmed = trim($hello, "Hdle");
var_dump($trimmed);

// 清除 $binary 首位的 ASCII 控制字符
// （包括 0-31）
$clean = trim($binary, "\x00..\x1F");
var_dump($clean);

?>

    
```

以上示例会输出：

```text


string(32) "        These are a few words :) ...  "
string(16) "    Example string
"
string(11) "Hello World"

string(28) "These are a few words :) ..."
string(24) "These are a few words :)"
string(5) "o Wor"
string(14) "Example string"

    
```

**使用 `trim()` 清理数组值**

```php


<?php
function trim_value(&$value) 
{ 
    $value = trim($value); 
}

$fruit = array('apple','banana ', ' cranberry ');
var_dump($fruit);

array_walk($fruit, 'trim_value');
var_dump($fruit);

?>

    
```

以上示例会输出：

```text


array(3) {
  [0]=>
  string(5) "apple"
  [1]=>
  string(7) "banana "
  [2]=>
  string(11) " cranberry "
}
array(3) {
  [0]=>
  string(5) "apple"
  [1]=>
  string(6) "banana"
  [2]=>
  string(9) "cranberry"
}


    
```

## 注释

> 可能的问题：删除中间字符
>
> 因为 `trim()` 从字符串的开始和末尾修剪字符。所以中间是否删除字符可能会造成混淆。`trim('abc', 'bad')` 移除了“a”和“b”，是因为修剪了“a”之后，“b”移动到了开头，所以也被修剪了。所以这就是为什么能正常工作而 `trim('abc', 'b')` 看起来没有的原因。

## 参见

 `ltrim()` `rtrim()` `str_replace()`
