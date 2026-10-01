---
id: "zh-php-function-function-proc-open"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["command_injection"],"cwe":["CWE-78"],"params":[1]}
name: "proc_open"
title: "执行一个命令，并且打开用来输入/输出的文件指针。"
signature: "resource|false proc_open(array|string $command, array $descriptor_spec, array $pipes, string|null $cwd = null, array|null $env_vars = null, array|null $options = null)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.proc-open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行一个命令，并且打开用来输入/输出的文件指针。

## 说明

```php
resource|false proc_open(array|string $command, array $descriptor_spec, array $pipes, string|null $cwd = null, array|null $env_vars = null, array|null $options = null)
```

类似 `popen()` 函数， 但是 `proc_open()` 提供了更加强大的控制程序执行的能力。

 ptys are currently disabled in the sources <para> PHP 5 introduces pty support for systems with Unix98 ptys. This allows your script to interact with applications that expect to be talking to a terminal. A pty works like a pipe, but is bi-directional, so there is no need to specify a read/write mode. The example below shows how to use a pty; note that you don't have to have all descriptors talking to a pty. Also note that only one pty is created, even though pty is specified 3 times. In a future version of PHP, it might be possible to do more than just read and write to the pty. </para> 

## 参数

- **`$command`** — 以 `string` 形式执行的命令行。特殊字符必须经过转义，并且使用正确的引号。
  > 在 *Windows* 上, 除非在 `$options` 中 把 `bypass_shell` 设置为 `true` ，否则 `$command` 会被传递给 cmd.exe （实际上是 `%ComSpec%`） 其中的 `/c` 标志是 *未加引号的* 字符串 （也就是和 `proc_open()` 一样）。 这可能会导致 cmd.exe 删除 `$command` 中的引号 （详见 cmd.exe 文档）， 从而导致意外的，甚至是潜在的危险行为，因为 cmd.exe 错误消息可能包含 （部分） 传递的 `$command` （见下面的例子）。

 — 从 PHP 7.4.0 开始，`$command` 参数可以使用 `array` 类型传递。 在这种情况下，进程将直接打开（不通过 shell ）。 而 PHP 会处理任何必要的参数转义。
  > 在 Windows 上， `array` 元素的参数转义假定 执行命令的命令行解析与 VC 运行时进行的命令行参数解析兼容。


- **`$descriptor_spec`** — 一个索引数组。 数组的键表示描述符，数组元素值表示 PHP 如何将这些描述符传送至子进程。 0 表示标准输入（stdin），1 表示标准输出（stdout），2 表示标准错误（stderr）。 — 数组中的元素可以是： 包含了要传送至进程的管道的描述信息的数组。第一个元素为描述符类型，第二个元素是针对该描述符的选项。有效的类型有：`pipe`（第二个元素可以是：`r` 向进程传送该管道的读取端，`w` 向进程传送该管道的写入端），以及 `file`（第二个元素为文件名）。注意除了 `w` 之外的任何内容都视为 `r`。 流资源表示真实文件描述符（例如：已打开的文件，套接字，`STDIN`）。 — 文件描述符的值不限于 0，1 和 2，你可以使用任何有效的文件描述符 并将其传送至子进程。 这使得你的脚本可以和其他脚本交互操作。 例如，可以通过指定文件描述符将密码以更加安全的方式 传送至诸如 PGP，GPG 和 openssl 程序， 同时也可以很方便的获取这些程序的状态信息。
- **`$pipes`** — 将被置为索引数组， 其中的元素是被执行程序创建的管道对应到 PHP 这一端的文件指针。
- **`$cwd`** — 要执行命令的初始工作目录。 必须是 *绝对* 路径， 设置此参数为 `null` 表示使用默认值（当前 PHP 进程的工作目录）。
- **`$env_vars`** — 要执行的命令所使用的环境变量。 设置此参数为 `null` 表示使用和当前 PHP 进程相同的环境变量。
- **`$options`** — 你还可以指定一些附加选项。 目前支持的选项包括： `suppress_errors` （仅用于 Windows 平台）： 设置为 `true` 表示抑制本函数产生的错误。 `bypass_shell` （仅用于 Windows 平台）： 设置为 `true` 表示绕过 `cmd.exe` shell。 `blocking_pipes` （仅用于 Windows 平台）： 设置为 `true` 表示强制堵塞管道。 `create_process_group` （仅用于 Windows 平台）： 设置为 `true` 表示允许子进程处理 `CTRL` 事件。 `create_new_console` （仅用于 Windows 平台）： 表示新进程有一个新的控制台，用于代替父进程的控制台。

## 返回值

返回表示进程的资源类型， 当使用完毕之后，请调用 `proc_close()` 函数来关闭此资源。 如果失败，返回 `false`。

## 错误／异常

自 PHP 8.3.0 起，如果 `$command` 是没有元素的空数组，则会抛出 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 如果 `$command` 是没有元素的空数组，将会抛出 ValueError。 |
| 7.4.4 | 为 `$options` 参数增加 `create_new_console` 选项。 |
| 7.4.0 | `proc_open()` 的 `$command` 参数现在也允许数组类型。 |
| 7.4.0 | 为 `$options` 参数增加 `create_process_group` 选项。 |

## 示例

**`proc_open()` 示例**

```php


<?php
$descriptorspec = array(
   0 => array("pipe", "r"),  // 标准输入，子进程从此管道中读取数据
   1 => array("pipe", "w"),  // 标准输出，子进程向此管道中写入数据
   2 => array("file", "/tmp/error-output.txt", "a") // 标准错误，写入到一个文件
);

$cwd = '/tmp';
$env = array('some_option' => 'aeiou');

$process = proc_open('php', $descriptorspec, $pipes, $cwd, $env);

if (is_resource($process)) {
    // $pipes 现在看起来是这样的：
    // 0 => 可以向子进程标准输入写入的句柄
    // 1 => 可以从子进程标准输出读取的句柄
    // 错误输出将被追加到文件 /tmp/error-output.txt

    fwrite($pipes[0], '<?php print_r($_ENV); ?>');
    fclose($pipes[0]);

    echo stream_get_contents($pipes[1]);
    fclose($pipes[1]);
    

    // 切记：在调用 proc_close 之前关闭所有的管道以避免死锁。
    $return_value = proc_close($process);

    echo "command returned $return_value\n";
}
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [some_option] => aeiou
    [PWD] => /tmp
    [SHLVL] => 1
    [_] => /usr/local/bin/php
)
command returned 0

    
```

**`proc_open()` 在 Windows 上的怪异行为**

虽然人们可能期望下面的程序能够搜索文件 `filename.txt` 进行文本搜索， 并打印结果，但它的行为相当不同。

```php

     
<?php
$descriptorspec = [STDIN, STDOUT, STDOUT];
$cmd = '"findstr" "search" "filename.txt"';
$proc = proc_open($cmd, $descriptorspec, $pipes);
proc_close($proc);
?>

    
```

以上示例会输出：

```text

     
'findstr" "search" "filename.txt' is not recognized as an internal or external command,
operable program or batch file.

    
```

要解决该行为，通常只需将 `$command` 加上引号：

```php

     
$cmd = '""findstr" "search" "filename.txt""';

    
```

 ptys are currently disabled <para> <example> <title>ptys usage</title> <programlisting role="php"> <![CDATA[ <?php // Create a pseudo terminal for the child process $descriptorspec = array( 0 => array("pty"), 1 => array("pty"), 2 => array("pty") ); $process = proc_open("cvs -d:pserver:cvsread@cvs.php.net:/repository login", $descriptorspec, $pipes); if (is_resource($process)) { // work with it here } ?> ]]> </programlisting> </example> </para> 

## 注释

> Windows 兼容性：超过 2 的描述符也可以作为可继承的句柄传送到子进程。 但是，由于 Windows 的架构并不将文件描述符和底层句柄进行关联， 所以，子进程无法访问这样的句柄。 标准输入，标准输出和标注错误会按照预期工作。

> 如果你只需要单向的进程管道， 使用 `popen()` 函数会更加简单。

## 参见

`popen()` `exec()` `system()` `passthru()` `stream_select()` The 执行运算符
