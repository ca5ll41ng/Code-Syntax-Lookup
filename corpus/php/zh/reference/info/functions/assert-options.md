---
id: "zh-php-function-function-assert-options"
language: "php"
lang: "zh"
category: "function"
name: "assert_options"
title: "设置/获取各种断言 flag"
signature: "mixed assert_options(int $option, [mixed $value = ...])"
module: "info"
source_url: "https://www.php.net/manual/zh/function.assert-options.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置/获取各种断言 flag

## 说明

```php
mixed assert_options(int $option, [mixed $value = ...])
```

设置 `assert()` 的各种控制选项，或者是仅仅查询当前的设置。

> 不鼓励使用 `assert_options()`，而是分别使用 `ini_set()` 和 `ini_get()` 设置和获取 php.ini 指令 zend.assertions 和 assert.exception。

## 参数

- **`$option`** — | 选项 | INI 设置 | 默认值 | 描述 | | --- | --- | --- | --- | | ASSERT_ACTIVE | assert.active | 1 | 启用 `assert()` 断言 | | ASSERT_EXCEPTION | assert.exception | 1 | 每个失败断言，抛出 `AssertionError` | | ASSERT_WARNING | assert.warning | 1 | 为每个失败的断言产生一个 PHP 警告（warning） | | ASSERT_BAIL | assert.bail | 0 | 在断言失败时中止执行 | | ASSERT_QUIET_EVAL | assert.quiet_eval | 0 | 在断言表达式求值时禁用 error_reporting。PHP 8.0.0 起移除。 | | ASSERT_CALLBACK | assert.callback | (`null`) | 断言失败时调用回调函数 |
- **`$value`** — 可选的新选项值。 — 通过 `ASSERT_CALLBACK` 或 assert.callback 设置的回调函数应该有以下签名： `void``assert_callback()` `string``$file` `int``$line` `string|null``$assertion` `string``$description` - **`$file`** — 调用 `assert()` 的文件名。 - **`$line`** — 调用 `assert()` 的行数。 - **`$assertion`** — 在 PHP 8.0.0 之前，传递给 `assert()` 的断言，仅作为字符串给出。 （如果断言是 boolean 条件，则此参数将为空字符串。）从 PHP 8.0.0 开始，此参数始终为 `null`。 - **`$description`** — 传递给 `assert()` 的描述。

向 `$value` 传递空字符串会重置断言回调。

## 返回值

返回任意选项的原始设置。

## 错误／异常

如果 `$option` 是无效选项，抛出 `ValueError`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | `assert_option()` 现在已弃用。 |
| 8.0.0 | 如果 `$option` 是无效选项，抛出 `ValueError`。之前返回 `false`。 |

## 示例

**`assert_options()` 示例**

```php


<?php
// 处理断言失败时的函数
function assert_failure($file, $line, $assertion, $message)
{
    echo "The assertion $assertion in $file on line $line has failed: $message";
}

// 我们的测试函数
function test_assert($parameter)
{
    assert(is_bool($parameter));
}

// 设置断言选项
assert_options(ASSERT_ACTIVE,   true);
assert_options(ASSERT_BAIL,     true);
assert_options(ASSERT_WARNING,  false);
assert_options(ASSERT_CALLBACK, 'assert_failure');

// 让一个断言会失败
test_assert(1);

// 由于 ASSERT_BAIL 是 true，这里永远也到不了
echo 'Never reached';
?>

    
```

## 参见

`assert()`
