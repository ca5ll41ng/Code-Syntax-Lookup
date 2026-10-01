---
id: "zh-php-function-function-proc-nice"
language: "php"
lang: "zh"
category: "function"
name: "proc_nice"
title: "修改当前进程的优先级"
signature: "bool proc_nice(int $priority)"
module: "exec"
source_url: "https://www.php.net/manual/zh/function.proc-nice.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 修改当前进程的优先级

## 说明

```php
bool proc_nice(int $priority)
```

`proc_nice()` 修改当前进程的优先级， 修改量由 `$priority` 参数指定。 `$priority` 为正数会降低当前进程优先级， 反之，为负数会提高优先级。

`proc_nice()` 和 `proc_open()` 函数以及和 `proc_open()` 相关的函数并无什么关系。

## 参数

- **`$priority`** — 新的优先级值，具体的设定取决于所运行的平台。 — 在 Unix 系统上，较小的值表示较高的优先级，例如：`-20`， 而正数值表示更低的优先级。 — 在 Windows 平台上，`$priority` 参数 的含义如下：
  | 优先级 | 可能的值 |
  | --- | --- |
  | 高优先级 | `$priority` `< -9` |
  | 较高优先级 | `$priority` `< -4` |
  | 正常优先级 | `$priority` `< 5` & `$priority` `> -5` |
  | 较低优先级 | `$priority` `> 5` |
  | 低优先级 | `$priority` `> 9` |



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。。 如果发生错误，例如用户无权修改当前进程的优先级， 会生成 `E_WARNING` 级别的错误。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 在 Windows 平台上可用。 |

## 示例

**使用 `proc_open()` 函数将进程设置为高优先级**

```php


<?php
// Highest priority
proc_nice(-20);
?>

    
```

## 注释

> 可用性
>
> 仅在具有 'nice' 能力的系统上才可以使用 `proc_nice()` 函数。 下列系统含有 'nice'：SVr4, SVID EXT, AT&T, X/OPEN, BSD 4.3。

> Windows 平台
>
> `proc_nice()` 函数会改变当前*进程*优先级，即使 PHP 是使用线程安全模式编译的。

## 参见

 `pcntl_setpriority()`
