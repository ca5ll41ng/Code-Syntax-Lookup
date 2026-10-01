---
id: "zh-php-function-function-set-error-handler"
language: "php"
lang: "zh"
category: "function"
name: "set_error_handler"
title: "设置用户自定义的错误处理函数"
signature: "callable|null set_error_handler(callable|null $callback, int $error_levels = E_ALL)"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.set-error-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置用户自定义的错误处理函数

## 说明

```php
callable|null set_error_handler(callable|null $callback, int $error_levels = E_ALL)
```

设置用户的函数 (`$callback`) 来处理脚本中出现的错误。

本函数可用于在运行时定义自定义错误处理程序，例如，在应用程序中发生严重错误，或者在特定条件下触发了错误（使用 `trigger_error()`），应用程序需要执行文件/数据清理。

重要的是要记住 `$error_levels` 里指定的错误类型都会绕过 PHP 标准错误处理程序， 除非回调函数返回了 `false`。 `error_reporting()` 设置将不会起到作用而继续会调用错误处理函数 —— 不过仍然可以获取 error_reporting 的当前值，并做适当处理。

同时注意，处理程序有责任在必要时使用 `exit()` 停止脚本执行。 如果错误处理程序返回了，脚本将会在发生错误的后一行继续执行。

以下级别的错误不能由用户定义的函数来处理，独立于发生错误的地方： `E_ERROR`、 `E_PARSE`、 `E_CORE_ERROR`、 `E_CORE_WARNING`、 `E_COMPILE_ERROR`、 `E_COMPILE_WARNING`，和在 调用 `set_error_handler()` 函数所在文件中产生的大多数 `E_STRICT`。

如果错误发生在脚本执行之前（比如文件上传时），将不会 调用自定义的错误处理程序因为它尚未在那时注册。

## 参数

- **`$callback`** — 如果传递 `null`，则处理程序重置为默认状态。否则，处理程序是具有以下签名的回调。 — `bool``{handler}()` `int``$errno` `string``$errstr` `string``$errfile` `int``$errline` `array``$errcontext` - **`$errno`** — 第一个参数 `$errno`，将会以 int 形式传递错误的级别。 - **`$errstr`** — 第二个参数 `$errstr`，将会以 string 形式传递错误的信息。 - **`$errfile`** — 如果回调接受第三个参数，`$errfile`，将会以 string 形式传递错误的文件名。 - **`$errline`** — 如果回调接受第四个参数，`$errline`，将会以 int 形式传递错误发生的行号。 - **`$errcontext`** — 如果回调接受第五个参数，`$errcontext` 将会传递数组，该数组指向错误发生时活动符号表。也就是说，`$errcontext` 会包含错误触发处作用域内所有变量的数组。用户的错误处理程序不应该修改错误上下文（context）。 > 此参数自 PHP 7.2.0 后*弃用*并自 PHP 8.0.0 *移除*。如果函数没有为该参数定义默认值，那么在调用时会出现“too few arguments”的错误。 — 如果函数返回 `false`，标准错误处理处理程序将会继续调用。
- **`$error_levels`** — 就像 error_reporting 的 ini 设置能够控制错误的显示一样，此参数能够用于屏蔽 `$callback` 的触发。如果没有该掩码，无论 error_reporting 是如何设置的，`$callback` 都会在每个错误发生时被调用。

## 返回值

Returns the previously defined error handler (if any) as a `callable`. If the built-in error handler is used `null` is returned.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 删除 `$errcontext` 并不再传递给用户回调。 |
| 7.2.0 | `$errcontext` 被废弃。使用此参数时会导致 `E_DEPRECATED` 提醒。 |

## 示例

**用 `set_error_handler()` 和 `trigger_error()` 进行错误处理**

以下示例展示了通过触发错误并以用户自定义的程序来进行内部异常的处理。

```php


<?php
// error handler function
function myErrorHandler($errno, $errstr, $errfile, $errline)
{
    if (!(error_reporting() & $errno)) {
        // This error code is not included in error_reporting, so let it fall
        // through to the standard PHP error handler
        return false;
    }

    // $errstr may need to be escaped:
    $errstr = htmlspecialchars($errstr);

    switch ($errno) {
    case E_USER_ERROR:
        echo "<b>My ERROR</b> [$errno] $errstr<br />\n";
        echo "  Fatal error on line $errline in file $errfile";
        echo ", PHP " . PHP_VERSION . " (" . PHP_OS . ")<br />\n";
        echo "Aborting...<br />\n";
        exit(1);

    case E_USER_WARNING:
        echo "<b>My WARNING</b> [$errno] $errstr<br />\n";
        break;

    case E_USER_NOTICE:
        echo "<b>My NOTICE</b> [$errno] $errstr<br />\n";
        break;

    default:
        echo "Unknown error type: [$errno] $errstr<br />\n";
        break;
    }

    /* Don't execute PHP internal error handler */
    return true;
}

// function to test the error handling
function scale_by_log($vect, $scale)
{
    if (!is_numeric($scale) || $scale <= 0) {
        trigger_error("log(x) for x <= 0 is undefined, you used: scale = $scale", E_USER_ERROR);
    }

    if (!is_array($vect)) {
        trigger_error("Incorrect input vector, array of values expected", E_USER_WARNING);
        return null;
    }

    $temp = array();
    foreach($vect as $pos => $value) {
        if (!is_numeric($value)) {
            trigger_error("Value at position $pos is not a number, using 0 (zero)", E_USER_NOTICE);
            $value = 0;
        }
        $temp[$pos] = log($scale) * $value;
    }

    return $temp;
}

// set to the user defined error handler
$old_error_handler = set_error_handler("myErrorHandler");

// trigger some errors, first define a mixed array with a non-numeric item
echo "vector a\n";
$a = array(2, 3, "foo", 5.5, 43.3, 21.11);
print_r($a);

// now generate second array
echo "----\nvector b - a notice (b = log(PI) * a)\n";
/* Value at position $pos is not a number, using 0 (zero) */
$b = scale_by_log($a, M_PI);
print_r($b);

// this is trouble, we pass a string instead of an array
echo "----\nvector c - a warning\n";
/* Incorrect input vector, array of values expected */
$c = scale_by_log("not array", 2.3);
var_dump($c); // NULL

// this is a critical error, log of zero or negative number is undefined
echo "----\nvector d - fatal error\n";
/* log(x) for x <= 0 is undefined, you used: scale = $scale" */
$d = scale_by_log($a, -2.5);
var_dump($d); // Never reached
?>

    
```

以上示例的输出类似于：

```text


vector a
Array
(
    [0] => 2
    [1] => 3
    [2] => foo
    [3] => 5.5
    [4] => 43.3
    [5] => 21.11
)
----
vector b - a notice (b = log(PI) * a)
<b>My NOTICE</b> [1024] Value at position 2 is not a number, using 0 (zero)<br />
Array
(
    [0] => 2.2894597716988
    [1] => 3.4341896575482
    [2] => 0
    [3] => 6.2960143721717
    [4] => 49.566804057279
    [5] => 24.165247890281
)
----
vector c - a warning
<b>My WARNING</b> [512] Incorrect input vector, array of values expected<br />
NULL
----
vector d - fatal error
<b>My ERROR</b> [256] log(x) for x <= 0 is undefined, you used: scale = -2.5<br />
  Fatal error on line 35 in file trigger_error.php, PHP 5.2.1 (FreeBSD)<br />
Aborting...<br />

    
```

## 参见

`ErrorException` `error_reporting()` `get_error_handler()` `trigger_error()` error level constants
