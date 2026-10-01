---
id: "zh-php-function-function-get-meta-tags"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]},{"type":"source"}]
name: "get_meta_tags"
title: "从一个文件中提取所有的 meta 标签 content 属性，返回一个数组"
signature: "array|false get_meta_tags(string $filename, bool $use_include_path = false)"
module: "url"
source_url: "https://www.php.net/manual/zh/function.get-meta-tags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从一个文件中提取所有的 meta 标签 content 属性，返回一个数组

## 说明

```php
array|false get_meta_tags(string $filename, bool $use_include_path = false)
```

打开 `$filename` 逐行解析文件中的 <meta> 标签。解析工作将在 `</head>` 处停止。

## 参数

- **`$filename`** — HTML 文件的路径字符串。 此参数可以是本地文件也可以是一个 URL。 — **`get_meta_tags()` 解析了什么** ```html <meta name="author" content="name"> <meta name="keywords" content="php documentation"> <meta name="DESCRIPTION" content="a php manual"> <meta name="geo.position" content="49.33;-86.59"> </head> <!-- 解析工作在此处停止 --> ```
- **`$use_include_path`** — 将 `$use_include_path` 设置为 `true` 将使 PHP 尝试按照 include_path 标准包含路径中的每个指向去打开文件。这只用于本地文件，不适用于 URL。

## 返回值

返回一个数组，包含所有解析过的 meta 标签。

返回的关联数组以属性 name 的值作为键，属性 content 的值作为值，所以你可以很容易地使用标准数组函数遍历此关联数组或访问某个值。 属性 name 中的特殊字符将使用‘_’替换，而其它字符则转换成小写。如果有两个 meta 标签拥有相同的 name，则只返回最后出现的那一个。

失败时返回 `false` 。

## 示例

**`get_meta_tags()` 返回了什么**

```php


<?php
// 假设上边的标签是在 www.example.com 中
$tags = get_meta_tags('http://www.example.com/');

// 注意所有的键（key）均为小写，而键中的‘.’则转换成了‘_’。
echo $tags['author'];       // name
echo $tags['keywords'];     // php documentation
echo $tags['description'];  // a php manual
echo $tags['geo_position']; // 49.33;-86.59
?>

    
```

## 注释

> 只有包含 name 属性的 meta 标签才会被解析。不需要引号。

## 参见

`htmlentities()` `urlencode()`
