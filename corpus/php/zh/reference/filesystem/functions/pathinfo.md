---
id: "zh-php-function-function-pathinfo"
language: "php"
lang: "zh"
category: "function"
name: "pathinfo"
title: "返回文件路径的信息"
signature: "array|string pathinfo(string $path, int $flags = PATHINFO_ALL)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.pathinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回文件路径的信息

## 说明

```php
array|string pathinfo(string $path, int $flags = PATHINFO_ALL)
```

`pathinfo()` 返回一个关联数组包含有 `$path` 的信息。返回关联数组还是字符串取决于 `$flags`。

> 有关取得当前路径信息的说明，请阅读 预定义变量 一节。

> `pathinfo()` 纯粹基于输入字符串操作， 它不会受实际文件系统和类似 "`..`" 的路径格式影响。

> 反斜线字符 `\` 仅在 Windows 系统上会解释为目录分隔符。在其他系统上，它将视为普通字符。

> `pathinfo()` 是本地化的，所以为了让它能正确地解析一个包含多字节编码的路径， 必须使用 `setlocale()` 函数来设置地区信息。

## 参数

- **`$path`** — 要解析的路径。
- **`$flags`** — 如果指定了，将会返回指定元素；它们包括： `PATHINFO_DIRNAME`、 `PATHINFO_BASENAME`、 `PATHINFO_EXTENSION`、 `PATHINFO_FILENAME`。 — 如果没有指定 `$flags` 默认是返回全部的单元。

## 返回值

如果没有传入 `$options` ，将会返回包括以下单元的数组 `array`：`dirname`，`basename` 和 `extension`（如果有），以及`filename`。

> 如果 `$path` 有一个以上的扩展名， `PATHINFO_EXTENSION` 只返回最后一个，而 `PATHINFO_FILENAME` 仅剥离最后一个。 （参考第一个示例）。

> 如果 `$path` 没有扩展名，返回数据中就不会有 `extension` 元素。（参考第二个示例）

> 如果 `$path` 中的 `basename` 以点开始， 那后面的字符串将被解释为 `extension` ， 并且 `filename` 为空。（参考第三个示例）

如果 `$flags` 存在的， 则返回一个包含请求元素的 `string`。

## 示例

**`pathinfo()` 例子**

```php


<?php
$path_parts = pathinfo('/www/htdocs/inc/lib.inc.php');

echo $path_parts['dirname'], "\n";
echo $path_parts['basename'], "\n";
echo $path_parts['extension'], "\n";
echo $path_parts['filename'], "\n";
?>

    
```

以上示例会输出：

```text


/www/htdocs/inc
lib.inc.php
php
lib.inc

    
```

**`pathinfo()` 对比空扩展名和无扩展名之间区别的示例**

```php


<?php
$path_parts = pathinfo('/path/emptyextension.');
var_dump($path_parts['extension']);

$path_parts = pathinfo('/path/noextension');
var_dump($path_parts['extension']);
?>

    
```

以上示例的输出类似于：

```text


string(0) ""

Notice: Undefined index: extension in test.php on line 6
NULL

    
```

**`pathinfo()` 形如 .file 的示例**

```php

     
<?php
print_r(pathinfo('/some/path/.test'));
?>

    
```

以上示例的输出类似于：

```text

     
Array
(
    [dirname] => /some/path
    [basename] => .test
    [extension] => test
    [filename] =>
)

    
```

**`pathinfo()` 示例和解除数组引用**

`$flags` 参数不是位掩码。只能提供单个值。要是只选择某些格式化值，请使用数组解构，如下所示：

```php


<?php
['basename' => $basename, 'dirname' => $dirname] = pathinfo('/www/htdocs/inc/lib.inc.php');

var_dump($basename, $dirname);
?>

    
```

以上示例的输出类似于：

```text


string(11) "lib.inc.php"
string(15) "/www/htdocs/inc"

    
```

## 参见

`dirname()` `basename()` `parse_url()` `realpath()`
