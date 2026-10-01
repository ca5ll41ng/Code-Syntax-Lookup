---
id: "zh-php-guide-features-commandline"
language: "php"
lang: "zh"
category: "guide"
name: "features.commandline"
title: "PHP 的命令行模式"
module: "features"
source_url: "https://www.php.net/manual/zh/features.commandline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# PHP 的命令行模式

Introduction: {{{

## 简介

 主要是使用 PHP 开发 shell 应用。 与本章中解释的其它 SAPI 存在相当多的差异。值得一提的是，尽管  和 `CGI` 有很多共同的行为，但它们是不同的 SAPI。

 模块会通过默认的 --enable-cli 参数设置启用， 也可以在运行 ./configure 时用参数 --disable-cli 来屏蔽。

/CGI 二进制执行文件的文件名、位置和是否存在会根据 PHP 在系统上的安装而不同。在默认情况下，当运行 make 时，CGI 和  都会被编译并且分别放置在 PHP 源文件目录的 `sapi/cgi/php-cgi` 和 `sapi/cli/php` 下。可以注意到两个文件都被命名为了 php。在 make install 的过程中会发生什么取决于配置行。如果在配置的时候选择了一个 SAPI 模块，如 apxs，或者使用了 --disable-cgi 参数，则在 make install 的过程中， 将被拷贝到 `{PREFIX}/bin/php`，除非 CGI 已经被放置在了那个位置。因此，例如，如果在配置行中有 --with-apxs，则在 `make install` 的过程中， 将被拷贝到 `{PREFIX}/bin/php`。如果希望覆盖 CGI 执行文件的安装，请在 make install 之后运行 make install-cli。或者，也可以在配置行中加上 --disable-cgi 参数。

> 由于 --enable-cli 和 --enable-cgi 同时默认有效，因此，不必再配置行中加上 --enable-cli 来使得  在 make install 过程中被拷贝到 `{PREFIX}/bin/php`。

在 Windows 发行包中， 在主目录中的二进制文件名为 `php.exe`。CGI 版本的文件名为 `php-cgi.exe`。 如果 PHP 配置使用了 --enable-cli-win32，还会有一个额外的 `php-win.exe` 随包发布。 它相当于  版本，但是 php-win 不输出任何内容，便不提供控制台（不会弹出“DOS 窗口”）。

> 如何得知自己使用的是哪个 SAPI？
>
> 在命令行下，运行 php -v 便能得知该 `php` 是 CGI 还是 。请参考函数 `php_sapi_name()` 以及常量 `PHP_SAPI`。

> 在命令行中键入 man php 可以查看 Unix `man` 手册页面。

}}}

Differences: {{{

## 和其它 SAPI 模块的区别

以下为  SAPI 和其它 SAPI 模块相比的显著区别：

- 与 CGI SAPI 不同，其输出没有任何头信息。 尽管 CGI SAPI 提供了取消 HTTP 头信息的方法，但在  中并不存在类似的方法以开启 HTTP 头信息的输出。  默认以安静模式开始，但为了保证兼容性，-q 和 --no-header 参数为了向后兼容仍然保留，使得可以使用旧的 CGI 脚本。 在运行时，不会把工作目录改为脚本的当前目录（可以使用 -C 和 --no-chdir 参数来兼容 CGI 模式）。 出错时输出纯文本的错误信息（非 HTML 格式）。
-  强制覆盖了 php.ini 中的某些设置，因为这些设置在外壳环境下是没有意义的。 | 设置选项 |  SAPI 默认值 | 备注 | | --- | --- | --- | | html_errors | `false` | 无意义的 HTML 标记符会使得出错信息很凌乱，所以在外壳下阅读报错信息是十分困难的。因此将该选项的默认值改为 `false`。 | | implicit_flush | `true` | 在命令行模式下，所有来自 `print` 和 `echo` 的输出将被立即写到输出端，而不作任何地缓冲操作。如果希望延缓或控制标准输出，仍然可以使用 output buffering 设置项。 | | max_execution_time | 0（无限值） | 鉴于在外壳环境下使用 PHP 的无穷的可能性，最大运行时间被设置为了无限值。为 web 开发的应用程序可能只需运行几秒钟时间，而外壳应用程序的运行时间可能会长的多。 | | register_argc_argv | `true` | 由于该设置为 `true`，将总是可以在  SAPI 中访问到 *argc*（传送给应用程序参数的个数）和 *argv*（包含有实际参数的数组）。 在使用  SAPI 时，PHP 变量 `$argc` 和 `$argv` 已被注册并且设定了对应的值。随时可以通过 `$_SERVER` 数组 来访问它们，例如：`$_SERVER['argv']` > `$argv` 或 `$_SERVER['argv']` 的存在并不能表明脚本一定正在从命令行运行，因为当启用 register_argc_argv 时，它们可能在其他上下文中设置。应改为检查 `php_sapi_name()` 返回的值。 ```php <?php if (php_sapi_name() === 'cli') { echo "This is being run from the command line!\n"; } ``` | | output_buffering | `false` | 虽然 php.ini 设置已经硬编码为 `false`， 输出缓冲控制函数仍然有效。 | | max_input_time | `false` | PHP  不支持 GET、POST、文件上传。 | > 这些设置无法在设置文件 php.ini 或任何指定的其它文件中被初始化为其它值。这些默认值被限制在所有其它的设置文件被解析后改变。 不过，它们的值可以在程序运行的过程中被改变 （尽管对于该运行过程来说，这些设置项是没有意义的，例如 register_argc_argv）。 > 推荐命令行脚本设置 ignore_user_abort。 更多信息参见 `ignore_user_abort()`。
- 为了减轻外壳环境下的工作，我们为 I/O 流定义了一系列常量。
-  *不会*将当前目录改为已运行的脚本所在的目录。 以下范例显示了本模块与 CGI SAPI 模块之间的不同： ```php <?php // 名为 test.php 的简单测试程序 echo getcwd(), "\n"; ?> ``` 在使用 `CGI` 版本时，其输出为 ```text $ pwd /tmp $ php-cgi -f another_directory/test.php /tmp/another_directory ``` 明显可以看到 PHP 将当前目录改成了刚刚运行过的脚本所在的目录。 使用  模式，得到： ```text $ pwd /tmp $ php -q another_directory/test.php /tmp ``` 这使得在利用 PHP 编写外壳工具时获得了很大的便利。 > 可以在命令行运行时给该 CGI SAPI 加上 -C 参数，使其支持  的功能。

}}}

Options: {{{

## 命令行选项

选项

PHP 二进制文件可以随时通过执行带 -h 参数的 PHP 命令获取提供的命令行选项列表：

```text


Usage: php [options] [-f] <file> [--] [args...]
   php [options] -r <code> [--] [args...]
   php [options] [-B <begin_code>] -R <code> [-E <end_code>] [--] [args...]
   php [options] [-B <begin_code>] -F <file> [-E <end_code>] [--] [args...]
   php [options] -- [args...]
   php [options] -a

  -a               Run interactively
  -c <path>|<file> Look for php.ini file in this directory
  -n               No php.ini file will be used
  -d foo[=bar]     Define INI entry foo with value 'bar'
  -e               Generate extended information for debugger/profiler
  -f <file>        Parse and execute <file>.
  -h               This help
  -i               PHP information
  -l               Syntax check only (lint)
  -m               Show compiled in modules
  -r <code>        Run PHP <code> without using script tags <?..?>
  -B <begin_code>  Run PHP <begin_code> before processing input lines
  -R <code>        Run PHP <code> for every input line
  -F <file>        Parse and execute <file> for every input line
  -E <end_code>    Run PHP <end_code> after processing all input lines
  -H               Hide any passed arguments from external tools.
  -S <addr>:<port> Run with built-in web server.
  -t <docroot>     Specify document root <docroot> for built-in web server.
  -s               Output HTML syntax highlighted source.
  -v               Version number
  -w               Output source with stripped comments and whitespace.
  -z <file>        Load Zend extension <file>.

  args...          Arguments passed to script. Use -- args when first argument
                   starts with - or script is read from stdin

  --ini            Show configuration file names

  --rf <name>      Show information about function <name>.
  --rc <name>      Show information about class <name>.
  --re <name>      Show information about extension <name>.
  --rz <name>      Show information about Zend extension <name>.
  --ri <name>      Show configuration for extension <name>.

   
```

| 选项 | 长选项 | 说明 |
| --- | --- | --- |
| -a | --interactive | 运行交互式 PHP。参阅交互式 shell 章节获取更多信息。 |
| -b | --bindpath | 外部 FASTCGI 服务器模式绑定路径（仅 CGI 可用）。 |
| -C | --no-chdir | 不改变脚本的目录（仅 CGI 可用）。 |
| -q | --no-header | 安静模式。禁止输出 HTTP 头（仅 CGI 可用）。 |
| -T | --timing | 测量脚本重复 `count` 次的执行时间（仅 CGI 可用）。 |
| -c | --php-ini | 在指定目录查找 php.ini 或者自定义 `INI` 文件（名称可以不是 php.ini），例如：    
```text


$ php -c /custom/directory/ my_script.php

$ php -c /custom/directory/custom-file.ini my_script.php

         
```

    如果未指定此选项，php.ini 将在默认位置搜索。 |
| -n | --no-php-ini | 完全忽略 php.ini。 |
| -d | --define | 允许设置 php.ini 中配置指令的值。语法是： 
```text

 
 -d configuration_directive[=value]
 
         
```

   
**使用 `-d` 设置 INI 配置的示例**

```text


# 忽略值部分，将会设置配置指令为 "1"
$ php -d max_execution_time
        -r '$foo = ini_get("max_execution_time"); var_dump($foo);'
string(1) "1"

# 传递空值，将会设置配置指令为 ""
php -d max_execution_time=
        -r '$foo = ini_get("max_execution_time"); var_dump($foo);'
string(0) ""

# 配置指令将会设置为 '=' 字符之后传递的任何值
$  php -d max_execution_time=20
        -r '$foo = ini_get("max_execution_time"); var_dump($foo);'
string(2) "20"
$  php
        -d max_execution_time=doesntmakesense
        -r '$foo = ini_get("max_execution_time"); var_dump($foo);'
string(15) "doesntmakesense"

         
``` |
| -e | --profile-info | 激活扩展信息模式，用于调试/分析。 |
| -f | --file | 解析并执行指定文件。 -f 可选且可以忽略 —— 只需提供需要执行的文件名就足够。 |
| -h and -? | --help and --usage | 输出命令行选项列表并描述了这些选项的作用。 |
| -i | --info | 调用 `phpinfo()` 并输出结果。如果 PHP 不能正常工作，建议使用命令 php -i 查看在信息表输出之前或者中间某个位置是否有错误消息。注意当使用 CGI 模式时会输出 HTML， 这会非常大。 |
| -l | --syntax-check | 检查语法但不执行指定 PHP 代码。如果未指定文件，则将处理来自标准输入的输入，否则将检查每个文件。成功时，文本 `No syntax errors detected in <filename>` 将写入标准输出。失败时，除了内部解析器错误外，文本 `Errors parsing <filename>` 将写入标准输出。如果在指定文件（或标准输入）中发现任何错误，则将 shell 返回代码设置为 `-1`，否则将 shell 返回代码设置为 `0`。    此选项不会找到需要执行代码的致命错误（如未定义的函数）。   
> 在 PHP 8.3.0 之前，只能指定一个要检查的文件。

 
> 此选项不能和 -r 一起使用。 |
| -m | --modules | **打印内置（且已加载的） PHP 和 Zend 模块**

```text


$ php -m
[PHP Modules]
xml
tokenizer
standard
session
posix
pcre
overload
mysql
mbstring
ctype

[Zend Modules]

         
``` |
| -r | --run | 允许在命令行内直接执行单行 PHP 代码。 *不需要*加上 PHP 开始和结束标识符（`<?php` 和 `?>`），否则将会造成语法错误。   
> 使用这种形式的 PHP 时，应注意避免和 shell 环境进行的命令行参数替换相冲突。
>
> **当使用双引号时会造成语法错误**
>
> ```text
>
>
> $ php -r "$foo = get_defined_constants();"
> PHP Parse error:  syntax error, unexpected '=' in Command line code on line 1
>
> Parse error: syntax error, unexpected '=' in Command line code on line 1
>
>           
> ```
>
> 这里的问题是在使用双引号 `"` 时 sh/bash 会执行变量替换。 由于 `$foo` 变量没有被定义，因此它将替换为空字符， 从而导致传递给 PHP 执行的代码实际上会变成：
>
> ```text $ php -r " = get_defined_constants();" ```
>
> 正确的方式是使用单引号 `'` 。使用单引号时 sh/bash 不会进行变量替换。
>
> **使用单引号防止 shell 变量替换**
>
> ```text
>
>
> $ php -r '$foo = get_defined_constants(); var_dump($foo);'
> array(370) {
>   ["E_ERROR"]=>
>   int(1)
>   ["E_WARNING"]=>
>   int(2)
>   ["E_PARSE"]=>
>   int(4)
>   ["E_NOTICE"]=>
>   int(8)
>   ["E_CORE_ERROR"]=>
>   [...]
>
>           
> ```
>
> 如果使用的 shell 不是 sh/bash，可能会碰到更多的问题 —— 如果有的话，请向 []() 报告 bug。试图在命令行中使用（ shell/PHP ）变量或者使用反斜杠转义时需要格外小心，因为很容易遇到问题。勿谓言之不预！

 
> 可以在  中使用 -r，但不能在 *CGI* SAPI 中使用。

 
> 此选项仅适用于非常基本的代码，因此在此模式下会忽略某些配置指令（如 auto_prepend_file 和 auto_append_file）。 |
| -B | --process-begin | 处理 stdin 之前需要执行的 PHP 代码。 |
| -R | --process-code | 对每个输入行都执行的 PHP 代码。    此模式下有两个特殊变量： `$argn` 和 `$argi`。 `$argn` 将包含 PHP 正在处理的行， `$argi` 将包含正在处理的行号。 |
| -F | --process-file | 对每个输入行都执行的 PHP 文件。 |
| -E | --process-end | 在处理完输入后执行的 PHP 代码。   
**使用 -B 、 -R 、 -E 选项统计项目总行数。**

```text


$ find my_proj \| php -B '$l=0;' -R '$l += count(@file($argn));' -E 'echo "Total Lines: $l\n";'
Total Lines: 37328

         
``` |
| -S | --server | 启动 内置 web 服务器. |
| -t | --docroot | 为内置 web 服务器指定文档根目录。 |
| -s | --syntax-highlight 和 --syntax-highlighting | 为源代码添加语法高亮显示。    此选项将使用内部机制解析文件并将生成的 HTML 高亮版本写入到标准输出。 注意它所做的只是生成一块 `<code> [...] </code>` HTML 标记，没有 HTML header。   
> 此选项不能和 -r 一起使用。 |
| -v | --version | **使用 -v 获取 SAPI 的名称以及 PHP 和 Zend 的版本号**

```text


$ php -v
PHP 5.3.1 (cli) (built: Dec 11 2009 19:55:07)
Copyright (c) 1997-2009 The PHP Group
Zend Engine v2.3.0, Copyright (c) 1998-2009 Zend Technologies

         
``` |
| -w | --strip | 显示忽略注释和空格后的源代码。   
> 此选项不能和 -r 一起使用。 |
| -z | --zend-extension | 加载 Zend 扩展。如果仅指定了文件名，PHP 将尝试从当前系统默认函数库中尝试加载此扩展 （例如在 Linux 上通常是 `/etc/ld.so.conf`）。 传递绝对路径的文件名将不会使用系统库搜索路径。如果用相对路径指定的文件名，则 PHP 仅试图在当前目录的相对目录加载扩展库。 |
|  | --ini | 展示配置文件名和扫描目录。 
**`--ini` 示例**

```shell


$ php --ini
Configuration File (php.ini) Path: /usr/dev/php/5.2/lib
Loaded Configuration File:         /usr/dev/php/5.2/lib/php.ini
Scan for additional .ini files in: (none)
Additional .ini files parsed:      (none)

          
``` |
| --rf | --rfunction | 展示指定函数或者类方法的有关信息（例如参数名称和数量）。    如果 PHP 在编译时启用 Reflection 支持，该选项才可以使用。    
**基础 `--rf` 用法**

```shell


$ php --rf var_dump
Function [ <internal> public function var_dump ] {

  - Parameters [2] {
    Parameter #0 [ <required> $var ]
    Parameter #1 [ <optional> $... ]
  }
}

          
``` |
| --rc | --rclass | 展示指定类的有关信息（常量、属性和方法的列表）。    如果 PHP 在编译时启用 Reflection 支持，该选项才可以使用。    
**`--rc` 示例**

```shell


$ php --rc Directory
Class [ <internal:standard> class Directory ] {

  - Constants [0] {
  }

  - Static properties [0] {
  }

  - Static methods [0] {
  }

  - Properties [0] {
  }

  - Methods [3] {
    Method [ <internal> public method close ] {
    }

    Method [ <internal> public method rewind ] {
    }

    Method [ <internal> public method read ] {
    }
  }
}

          
``` |
| --re | --rextension | 展示指定扩展的有关信息（php.ini 选项、定义函数、常量和类的列表）。    如果 PHP 在编译时启用 Reflection 支持，该选项才可以使用。    
**`--re` 示例**

```shell


$ php --re json
Extension [ <persistent> extension #19 json version 1.2.1 ] {

  - Functions {
    Function [ <internal> function json_encode ] {
    }
    Function [ <internal> function json_decode ] {
    }
  }
}

          
``` |
| --rz | --rzendextension | 展示指定 Zend 扩展的配置信息（也可以通过 `phpinfo()` 返回相同信息）。 |
| --ri | --rextinfo | 展示指定扩展的配置信息（也可以通过 `phpinfo()` 返回相同信息）。 使用 “main” 作为扩展名可以获取到核心配置信息。    
**`--ri` 示例**

```shell


$ php --ri date

date

date/time support => enabled
"Olson" Timezone Database Version => 2009.20
Timezone Database => internal
Default timezone => Europe/Oslo

Directive => Local Value => Master Value
date.timezone => Europe/Oslo => Europe/Oslo
date.default_latitude => 59.930972 => 59.930972
date.default_longitude => 10.776699 => 10.776699
date.sunset_zenith => 90.583333 => 90.583333
date.sunrise_zenith => 90.583333 => 90.583333

          
``` |

> 选项 `-rBRFEH`、 `--ini` 、 `--r[fcezi]` 仅可以在  中使用。

}}}

Usage: {{{

## 执行 PHP 文件

用法

 有三种不同的方法执行 PHP 代码：

1. 让 PHP 运行指定文件。 ```text $ php my_script.php $ php -f my_script.php ``` 以上两种方法（使用或不使用 -f 参数）都能够运行给定的 `my_script.php` 文件。注意，没有限制可以执行哪种文件， 特别是文件名也不必用 `.php` 作为扩展名。
2. 在命令行中直接传递 PHP 代码执行。 ```text $ php -r 'print_r(get_defined_constants());' ``` 必须特别注意 shell 变量的替代及引号的使用。 > 请仔细阅读以上范例，它们没有开始和结束标识符！加上 -r 参数后不需要这些标记符，并且加上它们还会导致语法错误。
3. 通过标准输入（`stdin`）提供需要运行的 PHP 代码。 这为动态创建 PHP 代码并通过二进制文件执行提供了强大的能力，就像下面（虚构的）例子展示的一样： ```text $ some_application | some_filter | php | sort -u > final_output.txt ```

以上三种运行代码的方法不能混合使用。

和所有的 shell 应用程序一样，PHP 的二进制文件及其 PHP 脚本能够接受一系列的参数。PHP 没有限制传送给脚本的参数的个数（ shell 对传递的字符数有限制，但通常都不会超过该限制）。传递给脚本的参数可在全局数组 `$argv` 中获取。第一个索引（零）始终包含从命令行中调用的脚本名称。注意在命令行内使用 -r 执行 PHP 代码时， `$argv[0]` 的值将是 `"Standard input code"`； 在 PHP 7.2.0 之前是破折号（`-`）。如果代码是通过来自 `STDIN` 的管道执行的，同样如此。

另外，第二个全局变量 `$argc` 包含 `$argv` 数组中元素的个数（而*不是*传递给脚本的参数个数）。

只要传送给脚本的参数不是以 `-` 字符开头，就无需过多的注意什么。向脚本传递以 `-` 开头的参数会导致错误，因为 PHP 会认为在执行脚本之前应该由它自身来处理这些参数。为防止发生这种情况，可以用列表分隔符 `--` 参数来解决。在 PHP 解析此分隔符之后， 该符号后的所有参数将会被原样传递给脚本程序。

 
```text

# 以下命令将不会运行 PHP 代码，而只显示 PHP 命令行模式的使用说明
$ php -r 'var_dump($argv);' -h
Usage: php [options] [-f] <file> [args...]
[...]

# 将会传递 “-h” 参数传送给脚本，且 PHP 不会显示命令行模式的使用说明
$ php -r 'var_dump($argv);' -- -h
array(2) {
  [0]=>
  string(1) "-"
  [1]=>
  string(2) "-h"
}

   
```

 

然而，在 Unix 系统中还有一个将 PHP 用于 shell 脚本的方法：写个脚本，第一行以 `#!/usr/bin/php` 为开头 （如果 PHP  二进制文件路径不一样，则可以指定为任意实际的路径）。文件的剩余部分应该包含通用的 PHP 开始标签、正常的 PHP 代码、PHP 结束标签。一旦设置正确的文件执行属性（例如 chmod +x test），脚本就像其他 shell/perl 脚本一样可以执行。

**PHP 脚本作为 shell 脚本执行**

```php


#!/usr/bin/php
<?php
var_dump($argv);
?>

   
```

假设在当前目录下，该文件名为 `test`，可以做如下操作：

```text


$ chmod +x test
$ ./test -h -- foo
array(4) {
  [0]=>
  string(6) "./test"
  [1]=>
  string(2) "-h"
  [2]=>
  string(2) "--"
  [3]=>
  string(3) "foo"
}

   
```

正如看到的，在向该脚本传递以 `-` 开头的参数时，无需关心这种情况。

PHP 可执行文件可用于运行完全独立于 web 服务器的 PHP 脚本。在 Unix 系统上，需要在 PHP 脚本的第一行指定 `#!`（或者说 “shebang”）以便系统可以自动判断用哪个程序运行脚本。 在 Windows 平台上可以使用双击扩展名是`.php`的文件与 `php.exe` 相关联，也可以编写一个批处理文件使用 PHP 运行脚本。为 Unix 系统增加的指定 shebang 的第一行代码不会影响 Windows （它也是 PHP 注释的格式），因此也可以用该方法编写跨平台的程序。以下是编写的一个简单 PHP 命令行程序的示例。

**试图以命令行方式运行的 PHP 脚本（script.php）**

```php


#!/usr/bin/php
<?php

if ($argc != 2 || in_array($argv[1], array('--help', '-help', '-h', '-?'))) {
?>

This is a command line PHP script with one option.

  Usage:
  <?php echo $argv[0]; ?> <option>

  <option> can be some word you would like
  to print out. With the --help, -help, -h,
  or -? options, you can get this help.

<?php
} else {
    echo $argv[1];
}
?>

    
```

在以上脚本中，用包含 Unix shebang 的第一行代码来指明该文件应该由 PHP 来执行。这里使用  版本运行，因此不会输出 HTTP 头。

程序首先检查是否有需要的参数（除了脚本名，因为它也会被计算进来）。如果没有参数或者参数是 --help、 -help、 -h、 -?，将会打印出帮助消息， 在命令行上使用 `$argv[0]` 动态输出脚本名称。否则参数将按照接收的方式进行准确回显。

如果在 Unix 下运行以上脚本，它必须有可执行权限，并简单的以 script.php echothis 或者 script.php -h 方式调用。在 Windows 下，可以为此类任务编写与以下内容类似的批处理文件：

**运行 PHP 命令行脚本的批处理文件（script.bat）**

```winbat


@echo OFF
"C:\php\php.exe" script.php %*

    
```

假设将上述程序名为 `script.php`，且  版的 `php.exe` 位于 `C:\php\php.exe`， 该批处理文件将会运行并传递所有追加选项： script.bat echothis 或者 script.bat -h。

参阅 Readline 扩展文档获取更多函数，以用于 PHP 中增强命令行应用程序。

在 Windows 上， PHP 可以配置为无需提供 `C:\php\php.exe` 或者 扩展名为 `.php` 的文件运行，如 PHP 在 Microsoft Windows 下的命令行方式中所述。

> 在 Windows 上，推荐在真实用户账户下运行 PHP。在网络服务下运行某些操作时将会失败， 因为“帐户名与安全标识间无任何映射完成”。

}}}

I/O Streams: {{{

## 输入输出流

I/O 流

 为 I/O 流定义了一些常量，以使命令行变量编程更容易一些。

| 常量 | 描述 |
| --- | --- |
| `STDIN` | 已经打开的 `stdin` 流。使得无需再用以下方式打开： 
```php


<?php
$stdin = fopen('php://stdin', 'r');
?>

       
```

 如果想从 `stdin` 中读取一行内容，可以使用如下方式： 
```php


<?php
$line = trim(fgets(STDIN)); // 从 STDIN 读取一行
fscanf(STDIN, "%d\n", $number); // 从 STDIN 读取数字
?>

       
``` |
| `STDOUT` | 已经打开的 `stdout` 流。使得无需再用以下方式打开： 
```php


<?php
$stdout = fopen('php://stdout', 'w');
?>

       
``` |
| `STDERR` | 已经打开的 `stderr` 流。使得无需再用以下方式打开： 
```php


<?php
$stderr = fopen('php://stderr', 'w');
?>

         
``` |

综上所述，则无需打开 `stderr` 流，只需使用常量代替流资源：

```shell


php -r 'fwrite(STDERR, "stderr\n");'

   
```

无须显式关闭这些流，因为它们会在脚本结束时由 PHP 自动关闭。

> 如果从 `stdin` 中读取 PHP 脚本，则这些常量不可用。

}}}

Interactive shell: {{{

## 交互式 shell

如果 PHP 使用 --with-readline 选项编译，则  使用 -a 选项时会提供交互式 shell。自 PHP 7.1.0 起，如果启用了 readline 扩展 ，交互式 shell 也可以在 Windows 上使用。

使用交互式 shell，你可以输入 PHP 代码并直接执行。

**使用交互式 shell 执行代码**

```shell


$ php -a
Interactive shell

php > echo 5+8;
13
php > function addTwo($n)
php > {
php { return $n + 2;
php { }
php > var_dump(addtwo(2));
int(4)
php >

   
```

交互式 shell 还有对函数、常量、类名、变量、静态方法调用和类常量的 Tab 键补全功能。

**Tab 键补全**

当可能有多个补全时，按两次 Tab 键将会得到补全列表：

```shell


php > strp[TAB][TAB]
strpbrk   strpos    strptime  
php > strp

   
```

当仅可能有一个补全，按一次 Tab 键即可在同一行中补全剩余：

```shell


php > strpt[TAB]ime(

   
```

补全也适用于当前交互式 shell 会话期间定义的名称：

```shell


php > $fooThisIsAReallyLongVariableName = 42;
php > $foo[TAB]ThisIsAReallyLongVariableName

   
```

交互式 shell 会存储的操作历史记录，可以通过上下键访问。历史记录存储于 `~/.php_history` 文件。自 PHP 8.4.0 起，history 文件的路径可以使用 PHP_HISTFILE 环境变量设置。

 提供了 `$cli.pager` 和 `$cli.prompt` 两个 php.ini 配置。`$cli.pager` 配置允许外部程序（例如 `less`）充当分页器输出而不是直接在屏幕上显示。 `$cli.prompt` 配置可以更改 `php >` 提示符。

在交互式 shell 中还可以使用缩写符号设置 php.ini 配置。

**在交互式 shell 中设置 php.ini 配置**

`$cli.prompt` 配置：

```shell


php > #cli.prompt=hello world :> 
hello world :> 

   
```

使用反引号可以在提示中执行 PHP 代码：

```shell


php > #cli.prompt=`echo date('H:i:s');` php > 
15:49:35 php > echo 'hi';
hi
15:49:43 php > sleep(2);
15:49:45 php > 

   
```

设置分页器为 `less`：

```shell


php > #cli.pager=less
php > phpinfo();
(output displayed in less)
php > 

   
```

`$cli.prompt` 配置支持一些转义字符：

| 字符 | 描述 |
| --- | --- |
| `\e` | 用于添加提示符颜色。一个例子是 `\e[032m\v \e[031m\b \e[34m\> \e[0m` |
| `\v` | PHP 版本。 |
| `\b` | 指明 PHP 所在的块。例如 `/*` 表示在多行注释中。外部作用域用 `php` 来表示。 |
| `\>` | 指明提示字符。默认是 `>`，但当 shell 位于未结束的块或者字符串时会发生变化。可能的字符有 `' " { ( >` |

> 在该模式下，通过 auto_prepend_file 和 auto_append_file 解析加载的文件会有一些限制 —— 例如函数必须在调用前定义。

## 交互模式

如果 readline 扩展不可用，在 PHP 8.1.0 之前，使用 -a 选项调用  会提供交互模式。 在此模式中，一个完整的 PHP 脚本应该通过 STDIN 给出，并用 CTRL D （POSIX）或者 CTRL Z 终止然后 ENTER（Windows），脚本执行。这与不加 -a 选项调用  基本相同。

自 PHP 8.1.0 起，如果 readline 扩展不可用，使用 -a 调用  会失败。

}}}

Built-in CLI Web Server: {{{

## 内置 Web Server

> 该 Web 服务器目的是帮助应用程序开发。还可用于测试目的或在受控环境中运行的应用程序演示。但并不是一个功能齐全的 Web 服务器。不应该在公共网络上使用。

 提供了内置的 Web 服务器。

Web 服务器仅运行一个单线程进程，因此如果堵塞了请求，PHP 应用程序将停止运行。

URI 请求将从启动 PHP 的当前工作目录提供服务，除非使用 -t 选项指定文档根目录。如果 URI 请求未指定文件，则返回指定目录中的 index.php 或 index.html。如果两个文件都不存在，则将在父目录中继续查找 index.php 和 index.html，依此类推，直到找到一个文件或到达文档根目录。如果找到 index.php 或 index.html，则将其返回，并将 $_SERVER['PATH_INFO'] 设置为 URI 的尾部部分。否则将返回 404 响应代码。

如果在命令行上启动 Web 服务器时指定了 PHP 文件，则会将其视为“router”脚本。该脚本在每个 HTTP 请求开始时运行。如果此脚本返回 `false`，则按原样返回所请求的资源。否则脚本的输出将返回到浏览器。

对于有扩展名的文件，将返回标准的 MIME 类型： `.3gp` `.apk` `.avi` `.bmp` `.css` `.csv` `.doc` `.docx` `.flac` `.gif` `.gz` `.gzip` `.htm` `.html` `.ics` `.jpe` `.jpeg` `.jpg` `.js` `.kml` `.kmz` `.m4a` `.mov` `.mp3` `.mp4` `.mpeg` `.mpg` `.odp` `.ods` `.odt` `.oga` `.ogg` `.ogv` `.pdf` `.png` `.pps` `.pptx` `.qt` `.svg` `.swf` `.tar` `.text` `.tif` `.txt` `.wav` `.webm` `.wmv` `.xls` `.xlsx` `.xml` `.xsl` `.xsd` `.zip` 。

从 PHP 7.4.0 开始，内置 Web 服务器可以配置为派生多个工作线程，以便测试需要向内置 Web 服务器发出多个并发请求的代码。在启动服务器之前，将 PHP_CLI_SERVER_WORKERS 环境变量设置为所需的 worker 数量。

> 此功能不支持 Windows。

> 此*实验*功能*不*适用于生产用途。通常，内置 Web 服务器*不*适合生产用途。

**启动 Web 服务器**

```shell


$ cd ~/public_html
$ php -S localhost:8000

   
```

终端将显示:

```text


PHP 5.4.0 Development Server started at Thu Jul 21 10:43:28 2011
Listening on localhost:8000
Document root is /home/me/public_html
Press Ctrl-C to quit

   
```

在 URI 请求 http://localhost:8000/ 和 http://localhost:8000/myscript.html 之后，终端会显示类似以下的内容：

```text


PHP 5.4.0 Development Server started at Thu Jul 21 10:43:28 2011
Listening on localhost:8000
Document root is /home/me/public_html
Press Ctrl-C to quit.
[Thu Jul 21 10:48:48 2011] ::1:39144 GET /favicon.ico - Request read
[Thu Jul 21 10:48:50 2011] ::1:39146 GET / - Request read
[Thu Jul 21 10:48:50 2011] ::1:39147 GET /favicon.ico - Request read
[Thu Jul 21 10:48:52 2011] ::1:39148 GET /myscript.html - Request read
[Thu Jul 21 10:48:52 2011] ::1:39149 GET /favicon.ico - Request read

   
```

请注意，在 PHP 7.4.0 之前，在 Windows 上无法访问符号链接的静态资源，除非 router 脚本可以处理这些资源。

**启动时指定文档根目录**

```shell


$ cd ~/public_html
$ php -S localhost:8000 -t foo/

   
```

终端将显示：

```text


PHP 5.4.0 Development Server started at Thu Jul 21 10:50:26 2011
Listening on localhost:8000
Document root is /home/me/public_html/foo
Press Ctrl-C to quit

   
```

**使用 router 脚本**

在此示例中，请求图像将显示图片，但对 HTML 文件的请求将显示“Welcome to PHP”：

```php


<?php
// router.php
if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
    return false;    // 原样提供所请求的资源
} else { 
    echo "<p>Welcome to PHP</p>";
}
?>
   
```

```shell


$ php -S localhost:8000 router.php

   
```

**检查 CLI Web 服务器的使用**

要在使用 CLI Web 服务器开发期间以及稍后使用生产 Web 服务器重复使用的框架 router 脚本：

```php


<?php
// router.php
if (php_sapi_name() == 'cli-server') {
    /* 发送静态资源并返回 false */
}
/* 继续正常的 index.php 操作 */
?>
   
```

```shell


$ php -S localhost:8000 router.php

   
```

**处理不支持的文件类型**

如果需要提供不由 CLI Web 服务器处理的静态资源的 MIME 类型，请使用：

```php


<?php
// router.php
$path = pathinfo($_SERVER["SCRIPT_FILENAME"]);
if ($path["extension"] == "el") {
    header("Content-Type: text/x-script.elisp");
    readfile($_SERVER["SCRIPT_FILENAME"]);
}
else {
    return FALSE;
}
?>
   
```

```shell


$ php -S localhost:8000 router.php

   
```

**从远程计算机访问 CLI Web 服务器**

可以通过以下方式使 Web 服务器可通过端口 8000 接受任何链接：

```shell


$ php -S 0.0.0.0:8000

   
```

> 内置 Web 服务器不应该在公共网络上使用。

}}}

## INI 配置

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| cli_server.color | "0" | `INI_ALL` |

这是配置指令的简短说明。

- **`$cli_server.color` `boolean`** — 控制内置Web Server的终端输出有无颜色。
