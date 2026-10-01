---
id: "zh-php-function-function-fwrite"
language: "php"
lang: "zh"
category: "function"
name: "fwrite"
title: "写入文件（可安全用于二进制文件）"
signature: "int|false fwrite(resource $stream, string $data, int|null $length = null)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.fwrite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 写入文件（可安全用于二进制文件）

## 说明

```php
int|false fwrite(resource $stream, string $data, int|null $length = null)
```

`fwrite()` 把 `$data` 的内容写入 文件指针 `$stream` 处。

## 参数

- **`$stream`** — 文件系统指针，是典型地由 `fopen()` 创建的 `resource`(资源)。
- **`$data`** — 要写入的字符串。
- **`$length`** — 如果 `$length` 是 `integer`，当写入了 `$length` 个字节或者写完了 `$string` 以后，写入就会停止，看先碰到哪种情况。

## 返回值

`fwrite()` 返回写入的字符数， 或者在失败时返回 `false`。

## 错误／异常

`fwrite()` 失败时会引发 `E_WARNING`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$length` 可以为 null。 |

## 示例

**简单的 `fwrite()` 示例**

```php


<?php
$filename = 'test.txt';
$somecontent = "Add this to the file\n";

// 首先确认文件存在且可写。
if (is_writable($filename)) {

    // 在示例中，使用追加模式打开 $filename。
    // 文件指针应该在文件的末尾，
    // 那就是使用 fwrite() 写入 $somecontent 的地方。
    if (!$fp = fopen($filename, 'a')) {
         echo "Cannot open file ($filename)";
         exit;
    }

    // 将 $somecontent 写入到打开的文件。
    if (fwrite($fp, $somecontent) === FALSE) {
        echo "Cannot write to file ($filename)";
        exit;
    }

    echo "Success, wrote ($somecontent) to file ($filename)";

    fclose($fp);

} else {
    echo "The file $filename is not writable";
}
?>

    
```

## 注释

> Writing to a network stream may end before the whole string is written. Return value of `fwrite()` may be checked:
>
> ```php
>
>
> <?php
> function fwrite_stream($fp, $string) {
>     for ($written = 0; $written < strlen($string); $written += $fwrite) {
>         $fwrite = fwrite($fp, substr($string, $written));
>         if ($fwrite === false) {
>             return $written;
>         }
>     }
>     return $written;
> }
> ?>
>
>     
> ```

> 在区分二进制文件和文本文件的系统上（如 Windows） 打开文件时，`fopen()` 函数的 mode 参数要加上 'b'。

> 如果 `$stream` 是 `fopen()` 追加模式，`fwrite()` 是原子操作（unless the size of `$data` exceeds the filesystem's block size, on some platforms, and as long as the file is on a local filesystem）。也就是说，在调用 `fwrite()` 之前不需要 `flock()` 资源；所有的数据都将会不间断写入。

> 如果向文件指针写入两次，然后数据将追加到文件内容的末尾：
>
> ```php
>
>
> <?php
> $fp = fopen('data.txt', 'w');
> fwrite($fp, '1');
> fwrite($fp, '23');
> fclose($fp);
>
> // “data.txt”的内容是 123 而不是 23！
> ?>
>
>     
> ```

## 参见

`fread()` `fopen()` `fsockopen()` `popen()` `file_get_contents()` `pack()`
