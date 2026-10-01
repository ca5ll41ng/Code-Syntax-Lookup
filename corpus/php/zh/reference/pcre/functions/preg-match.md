---
id: "zh-php-function-function-preg-match"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[2,1]}
name: "preg_match"
title: "执行匹配正则表达式"
signature: "int|false preg_match(string $pattern, string $subject, array $matches = null, int $flags = 0, int $offset = 0)"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-match.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行匹配正则表达式

## 说明

```php
int|false preg_match(string $pattern, string $subject, array $matches = null, int $flags = 0, int $offset = 0)
```

搜索`$subject`与`$pattern`给定的正则表达式的一个匹配.

## 参数

- **`$pattern`** — 要搜索的模式，字符串类型。
- **`$subject`** — 输入字符串。
- **`$matches`** — 如果提供了参数`$matches`，它将被填充为搜索结果。 `$matches[0]`将包含完整模式匹配到的文本， `$matches[1]` 将包含第一个捕获子组匹配到的文本，以此类推。
- **`$flags`** — `$flags` 可以被设置为以下标记值的组合： - **`PREG_OFFSET_CAPTURE`** — 如果传递了这个标记，对于每一个出现的匹配返回时会附加字符串偏移量(相对于目标字符串的字节数)。 注意：这会改变填充到`$matches`参数的数组，使其每个元素成为一个由 第`0`个元素是匹配到的字符串，第`1`个元素是该匹配字符串 在目标字符串`$subject`中的偏移量。 ```php <?php preg_match('/(foo)(bar)(baz)/', 'foobarbaz', $matches, PREG_OFFSET_CAPTURE); print_r($matches); ?> ``` 以上示例会输出： ```text Array ( [0] => Array ( [0] => foobarbaz [1] => 0 ) [1] => Array ( [0] => foo [1] => 0 ) [2] => Array ( [0] => bar [1] => 3 ) [3] => Array ( [0] => baz [1] => 6 ) ) ``` - **`PREG_UNMATCHED_AS_NULL`** — 使用该标记，未匹配的子组会报告为 `null`；未使用时，报告为空的 `string`。 ```php <?php preg_match('/(a)(b)*(c)/', 'ac', $matches); var_dump($matches); preg_match('/(a)(b)*(c)/', 'ac', $matches, PREG_UNMATCHED_AS_NULL); var_dump($matches); ?> ``` 以上示例会输出： ```text array(4) { [0]=> string(2) "ac" [1]=> string(1) "a" [2]=> string(0) "" [3]=> string(1) "c" } array(4) { [0]=> string(2) "ac" [1]=> string(1) "a" [2]=> NULL [3]=> string(1) "c" } ```
- **`$offset`** — 通常，搜索从目标字符串的开始位置开始。可选参数 `$offset` 用于 指定从目标字符串的某个位置开始搜索(单位是字节)。
  > 使用`$offset`参数不同于向`preg_match()` 传递按照位置通过`substr($subject, $offset)`截取目标字符串结果， 因为`$pattern`可以包含断言比如*^*， *$* 或者*(?<=x)*。 比较： ```php <?php $subject = "abcdef"; $pattern = '/^def/'; preg_match($pattern, $subject, $matches, PREG_OFFSET_CAPTURE, 3); print_r($matches); ?> ``` 以上示例会输出： ```text Array ( ) ``` 当这个示例使用截取后传递时 ```php <?php $subject = "abcdef"; $pattern = '/^def/'; preg_match($pattern, substr($subject,3), $matches, PREG_OFFSET_CAPTURE); print_r($matches); ?> ``` 将会产生匹配 ```text Array ( [0] => Array ( [0] => def [1] => 0 ) ) ``` 要避免使用 `substr()`，可以用 `\G` 断言而不是 `^` 锚，或者 `A` 修改器，它们都能和 `$offset` 参数一起运行。



## 返回值

如果 `$pattern` 匹配到指定 `$subject`，则 `preg_match()` 返回 1，如果没有匹配到则返回 0， 或者在失败时返回 `false`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

## 错误／异常

如果传递的正则表达式无法正常解析，会发出 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 现在 `$$flags` 参数支持 `PREG_UNMATCHED_AS_NULL`。 |

## 示例

**查找文本字符串"php"**

```php


<?php
//模式分隔符后的"i"标记这是一个大小写不敏感的搜索
if (preg_match("/php/i", "PHP is the web scripting language of choice.")) {
    echo "A match was found.";
} else {
    echo "A match was not found.";
}
?>

    
```

**查找单词"word"**

```php


<?php
/* 模式中的\b标记一个单词边界，所以只有独立的单词"web"会被匹配，而不会匹配
 * 单词的部分内容比如"webbing" 或 "cobweb" */
if (preg_match("/\bweb\b/i", "PHP is the web scripting language of choice.")) {
    echo "A match was found.";
} else {
    echo "A match was not found.";
}

echo "\n";

if (preg_match("/\bweb\b/i", "PHP is the website scripting language of choice.")) {
    echo "A match was found.";
} else {
    echo "A match was not found.";
}
?>

    
```

**获取URL中的域名**

```php


<?php
//从URL中获取主机名称
preg_match('@^(?:http://)?([^/]+)@i',
    "http://www.php.net/index.html", $matches);
$host = $matches[1];

//获取主机名称的后面两部分
preg_match('/[^.]+\.[^.]+$/', $host, $matches);
echo "domain name is: {$matches[0]}\n";
?>

    
```

以上示例会输出：

```text


domain name is: php.net

    
```

**使用命名子组**

```php


<?php

$str = 'foobar: 2008';

preg_match('/(?P<name>\w+): (?P<digit>\d+)/', $str, $matches);

/* 可选的方式 */
// preg_match('/(?<name>\w+): (?<digit>\d+)/', $str, $matches);

print_r($matches);

?>

    
```

以上示例会输出：

```text


Array
(
    [0] => foobar: 2008
    [name] => foobar
    [1] => foobar
    [digit] => 2008
    [2] => 2008
)

    
```

## 注释

> 如果你仅仅想要检查某个字符串是否包含另外一个字符串，不要使用`preg_match()`。 使用 `strpos()` 会更快。

## 参见

PCRE 模式 `preg_quote()` `preg_match_all()` `preg_replace()` `preg_split()` `preg_last_error()` `preg_last_error_msg()`
