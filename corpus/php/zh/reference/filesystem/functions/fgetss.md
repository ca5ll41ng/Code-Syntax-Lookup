---
id: "zh-php-function-function-fgetss"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "fgetss"
title: "从文件指针中读取一行并过滤掉 HTML 标记"
signature: "string fgetss(resource $handle, [int $length = ...], [string $allowable_tags = ...])"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fgetss.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从文件指针中读取一行并过滤掉 HTML 标记

## 说明

```php
string fgetss(resource $handle, [int $length = ...], [string $allowable_tags = ...])
```

和 `fgets()` 相同，只除了 `fgetss()` 尝试从读取的文本中去掉任何 HTML 和 PHP 标记。 The function retains the parsing state from call to call, and as such is not equivalent to calling `strip_tags()` on the return value of `fgets()`.

## 参数

- **`$handle`** — 文件指针必须是有效的，必须指向由 `fopen()` 或 `fsockopen()` 成功打开的文件(并还未由 `fclose()` 关闭)。
- **`$length`** — 取回该长度的数据。
- **`$allowable_tags`** — 可以用可选的第三个参数指定哪些标记不被去掉。 See `strip_tags()` for details regarding `$allowable_tags`.

## 返回值

从 `$handle` 指向的文件中大读取 `$length` - 1 个字节的字符，并过滤了所有的 HTML 和 PHP 代码。

错误发生时返回 `false`。

## 示例

**一行行读取一个 PHP 文件**

```php


<?php
$str = <<<EOD
<html><body>
 <p>Welcome! Today is the <?php echo(date('jS')); ?> of <?= date('F'); ?>.</p>
</body></html>
Text outside of the HTML block.
EOD;
file_put_contents('sample.php', $str);

$handle = @fopen("sample.php", "r");
if ($handle) {
    while (!feof($handle)) {
        $buffer = fgetss($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}
?>

    
```

以上示例的输出类似于：

```text


 Welcome! Today is the  of .

Text outside of the HTML block.

    
```

## 注释

> 在 PHP 8.1.0 之前， 可以启用 auto_detect_line_endings 运行时配置选项，帮助 PHP 正确识别读取 Macintosh 系统创建的文件时的行结束符。 此选项自 PHP 8.1.0 起弃用。如有必要，请改为手动处理 `"\r"` 换行符。

## 参见

`fgets()` `fopen()` `popen()` `fsockopen()` `strip_tags()` `SplFileObject::fgetss()` string.strip_tags 过滤
