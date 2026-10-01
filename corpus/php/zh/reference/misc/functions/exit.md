---
id: "zh-php-function-function-exit"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["xss"],"cwe":["CWE-79"],"params":[1]}
name: "exit"
title: "使用状态 code 或消息终止当前脚本"
signature: "never exit(string|int $status = 0)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.exit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用状态 code 或消息终止当前脚本

## 说明

```php
never exit(string|int $status = 0)
```

中止脚本的执行。即使调用了 `exit()`，Shutdown 函数 以及 对象析构方法 始终会执行。但  块永远不会执行。

退出 code `0` 表示程序已成功完成任务。其它任何值都表示执行过程中发生了某种错误。

`exit()` 是特殊函数，因为在解析器中有个专用记号，因此可以像语句一样使用（即没有括号），以使用默认状态 code 终止脚本。

> 无法禁用或创建命名空间函数来屏蔽全局 `exit()` 函数。

## 参数

- **`$status`** — 如果 `$status` 是字符串，此函数将在退出前打印 `$status`。PHP 返回的退出 code 为 `0`。 — 如果 `$status` 是 `int`，PHP 返回的退出 code 将为 `$status`。 > 退出 code 的范围应在 `0` 到 `254` 内，退出 code `255` 由 PHP 保留，不应使用。
  > PHP 8.4.0 之前，`exit()` 不遵循 PHP 的标准类型处理语义，也不遵守 `strict_types` 声明。
  >
  > 任何非 `int` 类型的值（包括 `resource` 和 `array` 值）均会转换为 `string`。自 PHP 8.4.0 起，遵循通用的类型处理语义，并在无效值上抛出 TypeError。



## 返回值

由于这会终止 PHP 脚本，因此没有返回任何值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | `exit()` 现在是真正的函数，因此遵循通用的类型处理语义，受 `strict_types` 声明的影响，可以用命名参数调用，并且是变量函数。 |

## 示例

**基础 `exit()` 示例**

```php


<?php

// 正常退出程序
exit();
exit(0);

// 带着错误 code 的退出
exit(1);

?>

   
```

**`exit()` 的 `string` 示例**

```php


<?php

$filename = '/path/to/data-file';
$file = fopen($filename, 'r')
    or exit("unable to open file ($filename)");

?>

   
```

**Shutdown 函数和析构方法无论如何都会运行**

```php


<?php
class Foo
{
    public function __destruct()
    {
        echo 'Destruct: ' . __METHOD__ . '()' . PHP_EOL;
    }
}

function shutdown()
{
    echo 'Shutdown: ' . __FUNCTION__ . '()' . PHP_EOL;
}

$foo = new Foo();
register_shutdown_function('shutdown');

exit();
echo 'This will not be output.';
?>

   
```

以上示例会输出：

```text


Shutdown: shutdown()
Destruct: Foo::__destruct()

   
```

**`exit()` 作为语句**

```php


<?php

// 程序正常退出，退出 code 为 0
exit;

?>

   
```

## 注释

> PHP 8.4.0 之前，`exit()` 是语言结构而不是函数，因此无法使用变量函数或命名参数调用。

## 参见

 `register_shutdown_function()` Shutdown 函数 对象析构方法
