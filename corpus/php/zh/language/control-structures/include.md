---
id: "zh-php-syntax-function-include"
language: "php"
lang: "zh"
category: "syntax"
name: "function.include"
title: "include"
module: "language"
source_url: "https://www.php.net/manual/zh/function.include.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# include

`include` 表达式包含并运行指定文件。

以下文档也适用于 `require()`。

被包含文件先按参数给出的路径寻找，如果没有给出目录（只有文件名）时则按照 include_path 指定的目录寻找。如果在 include_path 下没找到该文件则 `include` 最后才在调用脚本文件所在的目录和当前工作目录下寻找。如果最后仍未找到文件则 `include` 结构会发出一条 `E_WARNING` ；这一点和 `require()` 不同，后者会发出一个 `E_ERROR` 。

注意如果文件无法访问， `include` 和 `require` 在分别发出最后的 `E_WARNING` 或 `E_ERROR` 之前，都会发出额外一条 `E_WARNING`。

如果定义了路径——不管是绝对路径（在 Windows 下以盘符或者 `\` 开头，在 Unix/Linux 下以 `/` 开头）还是当前目录的相对路径（以 `.` 或者 `..` 开头）——include_path 都会被完全忽略。例如一个文件以 `../` 开头，则解析器会在当前目录的父目录下寻找该文件。

有关 PHP 怎样处理包含文件和包含路径的更多信息参见 include_path 部分的文档。

当一个文件被包含时，其中所包含的代码继承了 include 所在行的变量范围。从该处开始，调用文件在该行处可用的任何变量在被调用的文件中也都可用。不过所有在包含文件中定义的函数和类都具有全局作用域。

**基本的 `include` 例子**

```php


vars.php
<?php

$color = 'green';
$fruit = 'apple';

?>

test.php
<?php

echo "A $color $fruit"; // A

include 'vars.php';

echo "A $color $fruit"; // A green apple

?>

   
```

如果 include 出现于调用文件中的一个函数里，则被调用的文件中所包含的所有代码将表现得如同它们是在该函数内部定义的一样。所以它将遵循该函数的变量范围。此规则的一个例外是魔术常量，它们是在发生包含之前就已被解析器处理的。

**函数中的包含**

```php


<?php

function foo()
{
    global $color;

    include 'vars.php';

    echo "A $color $fruit";
}

/* vars.php 在 foo() 范围内，所以 $fruit 在范围为不可用。 *
 * $color 能用是因为声明成全局变量。 */

foo();                    // A green apple
echo "A $color $fruit";   // A green

?>

   
```

当一个文件被包含时，语法解析器在目标文件的开头脱离 PHP 模式并进入 HTML 模式，到文件结尾处恢复。由于此原因，目标文件中需要作为 PHP 代码执行的任何代码都必须被包括在有效的 PHP 起始和结束标记之中。

如果“URL include wrappers”在 PHP 中被激活，可以用 URL（通过 HTTP 或者其它支持的封装协议——见`wrappers`）而不是本地文件来指定要被包含的文件。如果目标服务器将目标文件作为 PHP 代码解释，则可以用适用于 HTTP GET 的 URL 请求字符串来向被包括的文件传递变量。严格的说这和包含一个文件并继承父文件的变量空间并不是一回事；该脚本文件实际上已经在远程服务器上运行了，而本地脚本则包括了其结果。

**通过 HTTP 进行的 `include`**

```php


<?php

/* 这个示例假定 www.example.com 配置为解析 .php 文件而不解析 .txt 文件。 *
 * 此外 “Works” 意味着 $foo 和 $bar 变量在包含的文件中是可用的。         */

// 无法执行； file.txt 没有被 www.example.com 当作 PHP 处理。
include 'http://www.example.com/file.txt?foo=1&bar=2';

// 无法执行；在本地文件系统中查找名为 “file.php?foo=1&bar=2” 的文件。
include 'file.php?foo=1&bar=2';

// 正常。
include 'http://www.example.com/file.php?foo=1&bar=2';
?>

   
```

> 安全警告
>
> 远程文件可能会经远程服务器处理（根据文件后缀以及远程服务器是否在运行 PHP 而定），但必须产生出一个合法的 PHP 脚本，因为其将被本地服务器处理。如果来自远程服务器的文件应该在远端运行而只输出结果，那用 `readfile()` 函数更好。另外还要格外小心以确保远程的脚本产生出合法并且是所需的代码。

相关信息参见使用远程文件，`fopen()` 和 `file()`。

处理返回值：在失败时 `include` 返回 `FALSE` 并且发出警告。成功的包含则返回 `1`，除非在包含文件中另外给出了返回值。可以在被包括的文件中使用 `return()` 语句来终止该文件中程序的执行并返回调用它的脚本。同样也可以从被包含的文件中返回值。可以像普通函数一样获得 include 调用的返回值。不过这在包含远程文件时却不行，除非远程文件的输出具有合法的 PHP 开始和结束标记（如同任何本地文件一样）。可以在标记内定义所需的变量，该变量在文件被包含的位置之后就可用了。

因为 `include` 是一个特殊的语言结构，其参数不需要括号。在比较其返回值时要注意。

**比较 include 的返回值**

```php


<?php
// 不能运行，执行 include(('vars.php') == TRUE) 就等于执行 include('1')
if (include('vars.php') == TRUE) {
    echo 'OK';
}

// 正常
if ((include 'vars.php') == TRUE) {
    echo 'OK';
}
?>

   
```

**`include` 和 `return()` 语句**

```php


return.php
<?php

$var = 'PHP';

return $var;

?>

noreturn.php
<?php

$var = 'PHP';

?>

testreturns.php
<?php

$foo = include 'return.php';

echo $foo; // 打印 'PHP'

$bar = include 'noreturn.php';

echo $bar; // 打印 1

?>

   
```

`$bar` 的值为 `1` 是因为 include 成功运行了。注意以上例子中的区别。第一个在被包含的文件中用了 `return()` 而另一个没有。如果文件不能被包含，则返回 `false` 并发出一个 `E_WARNING` 警告。

如果在包含文件中定义了函数，无论是在 `return()` 之前还是之后，都可以独立在主文件（main）中使用。如果文件被包含两次，由于函数重复定义，PHP 会 发出致命错误（fatal error）。推荐使用 `include_once()` 而不是检查文件是否已包含并在包含文件中有条件返回。

另一个将 PHP 文件“包含”到一个变量中的方法是用输出控制函数结合 `include()` 来捕获其输出，例如：

**使用输出缓冲来将 PHP 文件包含入一个字符串**

```php


<?php
$string = get_include_contents('somefile.php');

function get_include_contents($filename) {
    if (is_file($filename)) {
        ob_start();
        include $filename;
        $contents = ob_get_contents();
        ob_end_clean();
        return $contents;
    }
    return false;
}

?>

   
```

要在脚本中自动包含文件，参见 php.ini 中的 auto_prepend_file 和 auto_append_file 配置选项。

> 因为是语言构造器而不是函数，不能被 可变函数 或者 命名参数 调用。

参见 `require()`、`require_once()`、`include_once()`、`get_included_files()`、`readfile()`、`virtual()`、include_path。
