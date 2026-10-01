---
id: "zh-php-function-function-strtok"
language: "php"
lang: "zh"
category: "function"
name: "strtok"
title: "标记分割字符串"
signature: "string|false strtok(string $string, string $token)"
module: "strings"
source_url: "https://www.php.net/manual/zh/function.strtok.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 标记分割字符串

## 说明

```php
string|false strtok(string $string, string $token)
```

可选 token （不支持命名参数）：

```php
string|false strtok(string $token)
```

`strtok()` 将字符串 `$string` 分割为若干子字符串，每个子字符串以 `$token` 中的字符分割。这也就意味着，如果有个字符串是 "This is an example string"， 你可以使用空格字符作为 `$token`，将这句话分割成独立的单词。

注意，仅第一次调用 strtok 函数时才使用 `$string` 参数。 随后每次调用 strtok 都将只使用 `$token` 参数，因为它会记住它在当前字符串中的位置。 如果要重新开始分割一个新的字符串，你需要再次使用 `$string` 参数来调用 strtok 函数来对其进行初始化。 注意，可以在 `$token` 参数中使用多个字符。字符串将被 `$token` 参数中任何一个字符分割。

> 这个函数的行为可能与熟悉 `explode()` 的人期望略有不同。 首先，在解析的字符串中，两个或多个连续的 `$token` 的 字符被认为是单一的分隔符。 此外，位于字符串开始或结束处的 `$token` 将被忽略。 例如，如果使用一个字符串 `";aaa;;bbb;"` ，连续调用 `strtok()` 并将 `";"` 作为一个 `$token` 将返回字符串 "aaa" 和 "bbb"，然后返回 `false` 。 因此，字符串将仅被拆分为两个元素，而 `explode(";", $string)` 将返回一个包含 5 个元素的数组。

## 参数

- **`$string`** — 被分成若干子字符串的原始`字符串`。
- **`$token`** — 分割 `$string` 时使用的分界字符。

## 返回值

标记后的`字符串`，如果没有更多标记可用，则返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 现在，当未提供 `$token` 时，会抛出 `E_WARNING`。 |

## 示例

**`strtok()` 示例**

```php


<?php
$string = "This is\tan example\nstring";
/* 使用制表符和换行符作为分界符 */
$tok = strtok($string, " \n\t");

while ($tok !== false) {
    echo "Word={$tok}\n";
    $tok = strtok(" \n\t");
}
?>

    
```

**当 `strtok()` 找不到标记时的反应**

```php


<?php
$first_token  = strtok('/something', '/');
$second_token = strtok('/');
var_dump($first_token, $second_token);
?>

    
```

以上示例会输出：

```text


    string(9) "something"
    bool(false)

    
```

**`strtok()` 和 `explode()` 的不同点**

```php

     
<?php
$string = ";aaa;;bbb;";
$parts = [];
$tok = strtok($string, ";");
while ($tok !== false) {
    $parts[] = $tok;
    $tok = strtok(";");
}
echo json_encode($parts),"\n";
$parts = explode(";", $string);
echo json_encode($parts),"\n";

    
```

以上示例会输出：

```text

     
["aaa","bbb"]
["","aaa","","bbb",""]

    
```

## 注释

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 参见

`explode()`
