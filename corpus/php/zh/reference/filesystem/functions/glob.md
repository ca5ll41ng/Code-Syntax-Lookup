---
id: "zh-php-function-function-glob"
language: "php"
lang: "zh"
category: "function"
danger: [{"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]},{"type":"source"}]
name: "glob"
title: "寻找与模式匹配的文件路径"
signature: "array|false glob(string $pattern, int $flags = 0)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.glob.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 寻找与模式匹配的文件路径

## 说明

```php
array|false glob(string $pattern, int $flags = 0)
```

`glob()` 函数依照 libc glob() 函数使用的规则寻找所有与 `$pattern` 匹配的文件路径，类似于一般 shells 所用的规则一样。

Unix 系统和 macOS 上的行为由系统级 glob() 实现来决定。在 Windows 上，使用符合 POSIX 1003.2 定义的 glob() 实现，它包含一个扩展来处理 `[!...]` 约定以否定范围。

## 参数

- **`$pattern`** — 匹配模式（pattern）。 不进行缩写扩展或参数替代。 — 特殊字符： - `*` - 匹配零个或多个字符。 - `?` - 只匹配单个字符（任意字符）。 - `[...]` - 匹配一组字符中的一个字符。 如果第一个字符是 `!`，则为否定模式， 即匹配不在这组字符中的任意字符。 - `{a,b,c}` - 当使用 `GLOB_BRACE` 标志时，匹配以逗号分隔的字符串组中的一个字符串。 - `\` - 只要没有使用 `GLOB_NOESCAPE` 标记，该字符会转义后面的字符。
- **`$flags`** — 任何 `GLOB_{*}` 常量。

## 返回值

返回包含有匹配文件和目录的数组，没有匹配文件时返回空数组，出错返回 `false`。除非使用了 `GLOB_NOSORT`，否则名称将按字母顺序排序。

## 示例

**怎样用 `glob()` 方便地替代 `opendir()` 和相关函数**

```php


<?php
foreach (glob("*.txt") as $filename) {
    echo "$filename size " . filesize($filename) . "\n";
}
?>

    
```

以上示例的输出类似于：

```text


funclist.txt size 44686
funcsummary.txt size 267625
quickref.txt size 137820

    
```

**更复杂模式的示例**

```php


<?php
foreach (glob("path/*/*.{txt,md}", \GLOB_BRACE) as $filename) {
    echo "$filename\n";
}
?>

    
```

以上示例的输出类似于：

```text


path/docs/mailinglist-rules.md
path/docs/README.md
path/docs/release-process.md
path/pear/install-pear.txt
path/Zend/README.md

    
```

## 注释

> 此函数不能作用于远程文件，被检查的文件必须是可通过服务器的文件系统访问的。

> 此函数在一些系统上还不能工作（例如一些旧的 Sun OS）。

## 参见

`opendir()` `readdir()` `closedir()` `fnmatch()`
