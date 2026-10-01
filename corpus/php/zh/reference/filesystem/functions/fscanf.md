---
id: "zh-php-function-function-fscanf"
language: "php"
lang: "zh"
category: "function"
name: "fscanf"
title: "从文件中格式化输入"
signature: "array|int|false|null fscanf(resource $stream, string $format, mixed $vars)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fscanf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从文件中格式化输入

## 说明

```php
array|int|false|null fscanf(resource $stream, string $format, mixed $vars)
```

`fscanf()` 函数和 `sscanf()` 相似，但是它从与 `$stream` 关联的文件中接受输入并根据指定的 `$format` 来解释输入。

格式字符串中的任何空白会与输入流中的任何空白匹配。这意味着甚至格式字符串中的制表符（`\t`）也会与输入流中的一个空格字符匹配。

每次调用 `fscanf()` 都会从文件中读取一行。

## 参数

- **`$stream`** — 文件系统指针，是典型地由 `fopen()` 创建的 `resource`(资源)。
- **`$format`** — `$string` 的格式解释，在 `sprintf()` 的文档中进行了描述，但有以下区别： 函数不支持区域设置。 不支持 `F`、`g`、`G` 和 `b`。 `D` 代表十进制数字。 `i` stands for integer with base detection. `n` 代表到目前为止处理的字符数。 `s` 在任何空白字符处停止阅读。 `*` 代替 `argnum$` 禁止分配此转换规范。
- **`$vars`** — 可选赋值。

## 返回值

如果只给此函数传递了两个参数，解析后的值会被作为数组返回。否则，如果提供了可选参数，此函数将返回被赋值的数目。 可选参数必须用引用传递。

如果 `$format` 中预期的子字符串超出 `$string` 中有效的子字符串，则返回 `null`。其它错误将返回 `false`。

## 示例

**`fscanf()` 例子**

```php


<?php
$handle = fopen("users.txt", "r");
while ($userinfo = fscanf($handle, "%s\t%s\t%s\n")) {
    list ($name, $profession, $countrycode) = $userinfo;
    //... do something with the values
}
fclose($handle);
?>

    
```

**users.txt 的内容**

```txt


javier  argonaut        pe
hiroshi sculptor        jp
robert  slacker us
luigi   florist it

    
```

## 参见

`fread()` `fgets()` `fgetss()` `sscanf()` `printf()` `sprintf()`
