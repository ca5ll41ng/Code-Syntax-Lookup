---
id: "zh-php-function-function-tmpfile"
language: "php"
lang: "zh"
category: "function"
name: "tmpfile"
title: "建立一个临时文件"
signature: "resource|false tmpfile()"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.tmpfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 建立一个临时文件

## 说明

```php
resource|false tmpfile()
```

以读写二进制（w+b）模式创建一个具有唯一文件名的临时文件，然后返回该文件的句柄。

文件在关闭后（例如，调用 `fclose()` 或 `tmpfile()` 返回的文件句柄已无引用的情况）或脚本运行结束后，会自动删除。

> 如果脚本运行被意外终止，可能不会删除该临时文件。

## 参数

此函数没有参数。

## 返回值

返回新文件的句柄，类似于 `fopen()` 返回的文件句柄， 或者在失败时返回 `false`。

## 示例

**`tmpfile()` 例子**

```php


<?php
$temp = tmpfile();
fwrite($temp, "writing to tempfile");
fseek($temp, 0);
echo fread($temp, 1024);
fclose($temp); // this removes the file
?>

    
```

以上示例会输出：

```text


writing to tempfile

    
```

## 参见

`tempnam()` `sys_get_temp_dir()`
