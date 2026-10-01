---
id: "zh-php-function-function-parse-ini-file"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "parse_ini_file"
title: "解析一个配置文件"
signature: "array|false parse_ini_file(string $filename, bool $process_sections = false, int $scanner_mode = INI_SCANNER_NORMAL)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.parse-ini-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解析一个配置文件

## 说明

```php
array|false parse_ini_file(string $filename, bool $process_sections = false, int $scanner_mode = INI_SCANNER_NORMAL)
```

`parse_ini_file()` 载入一个由 `$filename` 指定的 ini 文件，并将其中的设置作为一个关联数组返回。

ini 文件的结构和 php.ini 的相同。

> 此函数不得用于不可信的输入，除非 `$scanner_mode` 设置为 `INI_SCANNER_RAW`，因为解析后的输出可能包含敏感常量的值，例如存储数据库密码的常量。

## 参数

- **`$filename`** — 要解析的 ini 文件的文件名。如果使用相对路径，则优先在相对于当前工作目录的目录中查找文件，如果未找到则在 include_path 中查找文件进行解析。
- **`$process_sections`** — 如果将 `$process_sections` 参数设为 `true`，将得到多维数组，包括了配置文件中的节名和配置。`$process_sections` 的默认值是 `false`。
- **`$scanner_mode`** — 可以是 `INI_SCANNER_NORMAL`（默认），也可以是 `INI_SCANNER_RAW`。如果提供了 `INI_SCANNER_RAW`，然后将不会解析选项值。 — As of PHP 5.6.1 can also be specified as `INI_SCANNER_TYPED`. In this mode boolean, null and integer types are preserved when possible. String values `"true"`, `"on"` and `"yes"` are converted to `true`. `"false"`, `"off"`, `"no"` and `"none"` are considered `false`. `"null"` is converted to `null` in typed mode. Also, all numeric strings are converted to integer type if it is possible.

## 返回值

成功时以关联数组 `array` 返回设置，失败时返回 `false`。

## 示例

**`sample.ini` 的内容**

```text


; This is a sample configuration file
; Comments start with ';', as in php.ini

[first_section]
one = 1
five = 5
animal = BIRD

[second_section]
path = "/usr/local/bin"
URL = "http://www.example.com/~username"

[third_section]
phpversion[] = "5.0"
phpversion[] = "5.1"
phpversion[] = "5.2"
phpversion[] = "5.3"

urls[svn] = "http://svn.php.net"
urls[git] = "http://git.php.net"

    
```

**`parse_ini_file()` 例子**

常量（并非像 `__FILE__` 之类的“魔术常量”）也可以在 ini 文件中被解析，因此如果在运行 `parse_ini_file()` 之前定义了常量作为 ini 的值，将会被集成到结果中去。只有 ini 的值会被求值，且该值必须是常量。例如：

```php


<?php

define('BIRD', 'Dodo bird');

// Parse without sections
$ini_array = parse_ini_file("sample.ini");
print_r($ini_array);

// Parse with sections
$ini_array = parse_ini_file("sample.ini", true);
print_r($ini_array);

?>

    
```

以上示例的输出类似于：

```text


Array
(
    [one] => 1
    [five] => 5
    [animal] => Dodo bird
    [path] => /usr/local/bin
    [URL] => http://www.example.com/~username
    [phpversion] => Array
        (
            [0] => 5.0
            [1] => 5.1
            [2] => 5.2
            [3] => 5.3
        )

    [urls] => Array
        (
            [svn] => http://svn.php.net
            [git] => http://git.php.net
        )

)
Array
(
    [first_section] => Array
        (
            [one] => 1
            [five] => 5
            [animal] => Dodo bird
        )

    [second_section] => Array
        (
            [path] => /usr/local/bin
            [URL] => http://www.example.com/~username
        )

    [third_section] => Array
        (
            [phpversion] => Array
                (
                    [0] => 5.0
                    [1] => 5.1
                    [2] => 5.2
                    [3] => 5.3
                )

            [urls] => Array
                (
                    [svn] => http://svn.php.net
                    [git] => http://git.php.net
                )

        )

)

    
```

**`parse_ini_file()` 格式化 php.ini 文件**

```php


<?php
// 简单的函数，用于比较下面的结果
function yesno($expression)
{
    return($expression ? 'Yes' : 'No');
}

// 使用 php_ini_loaded_file() 函数获取 php.ini 的路径
$ini_path = php_ini_loaded_file();

// 解析 php.ini
$ini = parse_ini_file($ini_path);

// Print and compare the values, note that using get_cfg_var()
// will give the same results for parsed and loaded here
echo '(parsed) magic_quotes_gpc = ' . yesno($ini['magic_quotes_gpc']) . PHP_EOL;
echo '(loaded) magic_quotes_gpc = ' . yesno(get_cfg_var('magic_quotes_gpc')) . PHP_EOL;
?>

    
```

以上示例的输出类似于：

```text


(parsed) magic_quotes_gpc = Yes
(loaded) magic_quotes_gpc = Yes

    
```

**内插值**

除了对常量求值之外，某些字符在 ini 值中具有特殊含义。此外，可以使用 ${} 语法读取环境变量和之前定义的配置项（参阅 `get_cfg_var()`）。

```text


; | is used for bitwise OR
three = 2|3

; & is used for bitwise AND
four = 6&5

; ^ is used for bitwise XOR
five = 3^6

; ~ is used for bitwise negate
negative_two = ~1

; () is used for grouping
seven = (8|7)&(6|5)

; Interpolate the PATH environment variable
path = ${PATH}

; Interpolate the configuration option 'memory_limit'
configured_memory_limit = ${memory_limit}


    
```

**转义字符**

Some characters have special meaning in double-quoted strings and must be escaped by the backslash prefix. First of all, these are the double quote " as the boundary marker, and the backslash \ itself (if followed by one of the special characters):

```text


quoted = "She said \"Exactly my point\"." ; Results in a string with quote marks in it.
hint = "Use \\\" to escape double quote" ; Results in: Use \" to escape double quote

    
```

There is an exception made for Windows-like paths: it's possible to not escape trailing backslash if the quoted string is directly followed by a linebreak:

```text


save_path = "C:\Temp\"

    
```

If one does need to escape double quote followed by linebreak in a multiline value, it's possible to use value concatenation in the following way (there is one double-quoted string directly followed by another one):

```text


long_text = "Lorem \"ipsum\"""
 dolor" ; Results in: Lorem "ipsum"\n dolor

    
```

Another character with special meaning is $ (the dollar sign). It must be escaped if followed by the open curly brace:

```text


code = "\${test}"

    
```

`INI_SCANNER_RAW` 模式不支持转义字符（在此模式下，所有字符都会“不做任何处理”）。

注意 ini 解析器不支持标准转义序列（\n、\t 等）。如有必要，使用 `stripcslashes()` 函数对 `parse_ini_file()` 后的结果进行后处理。

## 注释

> 本函数和 php.ini 文件无关，该文件在运行脚本时就已经处理过了。本函数可以用来读取应用程序的配置文件。

> 如果 ini 文件中的值包含任何非字母数字的字符，需要将其括在双引号中（"）。

> 有些保留字不能作为 ini 文件中的键名，包括：`null`、`yes`、`no`、`true`、`false`、`on`、`off`、`none`。除非使用 `INI_SCANNER_TYPED` 模式，否则 `null`、`off`、`no` 和 `false` 的值等效于 `""`，`on`、`yes` 和 `true` 的值等效于 `"1"`。字符 `?{}|&~!()^"` 也不能用在键名的任何地方，而且这些字符在选项值中有着特殊的意义。

> 不带等号的条目会忽略。例如“foo”会忽略，而“bar =”将会解析并添加空值。例如，会忽略 MySQL 在 `my.cnf` 中不带值的“no-auto-rehash”设置。

> ini 文件通常被 Web 服务器视为纯文本，因此在请求时会提供给浏览器。这意味着为了安全起见，必须将 ini 文件保存在 docroot 之外，或者重新配置 Web 服务器，不会提供这些文件。如果不这么做，可能会带来安全风险。

## 参见

`parse_ini_string()`
