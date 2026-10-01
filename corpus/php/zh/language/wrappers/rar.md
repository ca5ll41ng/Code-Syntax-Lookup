---
id: "zh-php-function-wrappers-rar"
language: "php"
lang: "zh"
category: "function"
name: "rar://"
title: "RAR"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.rar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# RAR

## 说明

 {{{ 

封装协议采用 url 编码，（相对/绝对）路径的 RAR 归档、一个可选的星号（`*`）、一个可选的井号（`#` ）和一个可选的存储在归档中的 url 编码条目名称。指定条目名称必须带有井号，条目名称开头的斜线是可选的。

该封装协议可以打开文件和目录。当打开目录时，星号会强制返回未编码的目录条目名称。如果不指定星号，将返回 URL 编码的目录条目名称 —— 这样做的原因是存在类似 URL 编码的文件名时，允许封装协议能够与内置方法（比如 `RecursiveDirectoryIterator`）一起正确使用。

如果不包含井号和条目名称部分，将会显示归档的根目录。与常规目录不同的是生成的流不会包含诸如修改时间之类的信息， 因为根目录不会存储在归档的条目中。当访问根目录时， `RecursiveDirectoryIterator` 与封装协议一起使用时需要在 ULR 中包含井号，以便正确构建子级 URL。

> 该封装协议不会默认启用
>
> 为了使用 `rar://` 封装协议，必须从  中安装有效的 [rar](rar) 扩展。

`rar://` 自 PECL rar 3.0.0 起可用

 }}} 

## 用法

 {{{ 

- `rar://<url encoded archive name>[*][#[<url encoded entry name>]]`

 }}} 

## 可选项

 {{{ 

| 属性 | 支持 |
| --- | --- |
| 受限于 allow_url_fopen | No |
| 受限于 allow_url_include | No |
| 允许读取 | Yes |
| 允许写入 | No |
| 允许附加 | No |
| 允许同时读写 | No |
| 支持 `stat()` | Yes |
| 支持 `unlink()` | No |
| 支持 `rename()` | No |
| 支持 `mkdir()` | No |
| 支持 `rmdir()` | No |

 FIXME: This should be context.rar ! 

| 名称 | 用法 | 默认 |
| --- | --- | --- |
| `open_password` | 用于加密归档报头的密码（如果有）。如果存在后者，WinRAR 将使用相同的密码作为报头密码加密所有文件， 因此对于带有加密报头的归档， `file_password` 将会被忽略。 |  |
| `file_password` | 用于加密文件的密码（如果有）。如果报头也加密，这个选项将会被忽略以支持 `open_password`。 有两个选项的原因是为了支持可能会出现的报头和文件密码不同的归档。请注意，如果归档没有加密它的报头， `open_password` 将会忽略且必须使用此选项代替。 |  |
| `volume_callback` | 确定缺失卷的路径回调。请参阅 `RarArchive::open()` 获取更多信息。 |  |

 }}} 

## 示例

 {{{ 

**遍历 RAR 归档**

```php


<?php

class MyRecDirIt extends RecursiveDirectoryIterator {
    function current() {
        return rawurldecode($this->getSubPathName()) .
            (is_dir(parent::current())?" [DIR]":"");
    }
}

$f = "rar://" . rawurlencode(dirname(__FILE__)) .
    DIRECTORY_SEPARATOR . 'dirs_and_extra_headers.rar#';

$it = new RecursiveTreeIterator(new MyRecDirIt($f));

foreach ($it as $s) {
    echo $s, "\n";
}
?>

   
```

以上示例的输出类似于：

```text


|-allow_everyone_ni [DIR]
|-file1.txt
|-file2_אּ.txt
|-with_streams.txt
\-אּ [DIR]
  |-אּ\%2Fempty%2E [DIR]
  | \-אּ\%2Fempty%2E\file7.txt
  |-אּ\empty [DIR]
  |-אּ\file3.txt
  |-אּ\file4_אּ.txt
  \-אּ\אּ_2 [DIR]
    |-אּ\אּ_2\file5.txt
    \-אּ\אּ_2\file6_אּ.txt

   
```

**打开加密文件（报头加密）**

```php


<?php
$stream = fopen("rar://" .
    rawurlencode(dirname(__FILE__)) . DIRECTORY_SEPARATOR .
    'encrypted_headers.rar' . '#encfile1.txt', "r", false,
    stream_context_create(
        array(
            'rar' =>
                array(
                    'open_password' => 'samplepassword'
                )
            )
        )
    );
var_dump(stream_get_contents($stream));
/* 在 WinRAR 中创建日期和最后访问日期是可选的，
 * 因此大多数文件都没有 */
var_dump(fstat($stream));
?>

   
```

以上示例的输出类似于：

```text


string(26) "Encrypted file 1 contents."
Array
(
    [0] => 0
    [1] => 0
    [2] => 33206
    [3] => 1
    [4] => 0
    [5] => 0
    [6] => 0
    [7] => 26
    [8] => 0
    [9] => 1259550052
    [10] => 0
    [11] => -1
    [12] => -1
    [dev] => 0
    [ino] => 0
    [mode] => 33206
    [nlink] => 1
    [uid] => 0
    [gid] => 0
    [rdev] => 0
    [size] => 26
    [atime] => 0
    [mtime] => 1259550052
    [ctime] => 0
    [blksize] => -1
    [blocks] => -1
)

   
```

 }}}
