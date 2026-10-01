---
id: "zh-php-function-function-preg-filter"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["redos"],"cwe":["CWE-1333"],"params":[1]}
name: "preg_filter"
title: "执行一个正则表达式搜索和替换"
signature: "string|array|null preg_filter(string|array $pattern, string|array $replacement, string|array $subject, int $limit = -1, int $count = null)"
module: "pcre"
source_url: "https://www.php.net/manual/zh/function.preg-filter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行一个正则表达式搜索和替换

## 说明

```php
string|array|null preg_filter(string|array $pattern, string|array $replacement, string|array $subject, int $limit = -1, int $count = null)
```

`preg_filter()`等价于`preg_replace()` 除了它仅仅返回(可能经过转化)与目标匹配的结果. 这个函数怎样工作的更详细信息请阅读 `preg_replace()`文档.

## 参数

`preg_replace()` 文档中描述了参数。

## 返回值

如果`$subject`是一个`数组`，返回一个`数组`， 其他情况返回一个`字符串`。

如果没有找到匹配或者发生了错误，当`$subject`是`数组` 时返回一个空`数组`，其他情况返回`null`。

## 错误／异常

如果传递的正则表达式无法正常解析，会发出 `E_WARNING`。

## 示例

**比较`preg_filter()` 和`preg_replace()`的示例**

```php


<?php
$subject = array('1', 'a', '2', 'b', '3', 'A', 'B', '4'); 
$pattern = array('/\d/', '/[a-z]/', '/[1a]/'); 
$replace = array('A:$0', 'B:$0', 'C:$0'); 

echo "preg_filter returns\n";
print_r(preg_filter($pattern, $replace, $subject)); 

echo "preg_replace returns\n";
print_r(preg_replace($pattern, $replace, $subject)); 
?>

    
```

以上示例会输出：

```text


preg_filter returns
Array
(
    [0] => A:C:1
    [1] => B:C:a
    [2] => A:2
    [3] => B:b
    [4] => A:3
    [7] => A:4
)
preg_replace returns
Array
(
    [0] => A:C:1
    [1] => B:C:a
    [2] => A:2
    [3] => B:b
    [4] => A:3
    [5] => A
    [6] => B
    [7] => A:4
)

    
```

## 参见

PCRE 模式 `preg_quote()` `preg_replace()` `preg_replace_callback()` `preg_grep()` `preg_last_error()`
