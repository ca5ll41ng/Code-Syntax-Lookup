---
id: "zh-php-function-function-preg-replace-callback-array"
language: "php"
lang: "zh"
category: "function"
name: "preg_replace_callback_array"
title: "执行一个正则表达式搜索并使用回调进行替换"
signature: "string|array|null preg_replace_callback_array(array $pattern, string|array $subject, int $limit = -1, int $count = null, int $flags = 0)"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-replace-callback-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行一个正则表达式搜索并使用回调进行替换

## 说明

```php
string|array|null preg_replace_callback_array(array $pattern, string|array $subject, int $limit = -1, int $count = null, int $flags = 0)
```

此函数的行为类似于 `preg_replace_callback()`，不同之处在于回调函数是基于每个模式分别执行的。

## 参数

- **`$pattern`** — 一个关联数组，将模式（键）映射到 `callable`（值）。
- **`$subject`** — 要搜索替换的目标字符串或字符串数组。
- **`$limit`** — 对于每个模式用于每个 `$subject` 字符串的最大可替换次数。 默认是 `-1`（无限制）。
- **`$count`** — 如果指定，这个变量将被填充为替换执行的次数。
- **`$flags`** — `$flags` 可以是 `PREG_OFFSET_CAPTURE` 和 `PREG_UNMATCHED_AS_NULL` 标志的组合，这会影响匹配到的结果的格式。 相关详情请参阅 `preg_match()` 中的描述。

## 返回值

如果 `$subject` 是一个数组， `preg_replace_callback_array()` 返回一个数组，其他情况返回字符串。错误发生时返回 `null`。

如果查找到了匹配，返回替换后的目标字符串，其他情况 `$subject` 将会无变化返回。

## 错误／异常

如果传递的正则表达式无法正常解析，会发出 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.4.0 | 新增 `$flags` 参数。 |

## 示例

**`preg_replace_callback_array()` 示例**

```php


<?php
$subject = 'Aaaaaa Bbb';

preg_replace_callback_array(
    [
        '~[a]+~i' => function ($match) {
            echo strlen($match[0]), ' matches for "a" found', PHP_EOL;
        },
        '~[b]+~i' => function ($match) {
            echo strlen($match[0]), ' matches for "b" found', PHP_EOL;
        }
    ],
    $subject
);
?>

    
```

以上示例会输出：

```text


6 matches for "a" found
3 matches for "b" found

    
```

## 参见

PCRE 模式 `preg_replace_callback()` `preg_quote()` `preg_replace()` `preg_last_error()` 匿名函数
