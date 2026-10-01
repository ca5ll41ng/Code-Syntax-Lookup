---
id: "zh-php-function-function-assert"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["assert code_injection"],"cwe":["CWE-95"],"params":[1]}
name: "assert"
title: "断言检测"
signature: "bool assert(mixed $assertion, Throwable|string|null $description = null)"
module: "info"
source_url: "https://www.php.net/manual/zh/function.assert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 断言检测

## 说明

```php
bool assert(mixed $assertion, Throwable|string|null $description = null)
```

`assert()` 允许定义预期（expectations）：在开发和测试环境中生效的断言，但在生产环境中会优化掉以达到零成本。

断言可用于帮助调试。其中一个用例是检查健全性的前提条件，应该始终为 `true`，如果不满足这些条件，则表示存在某些编程错误。 另一个用例是确保某些功能的存在，例如扩展函数或某些系统限制和特性。

由于断言可以配置为已消除，因此*不*应该用于普通运行时操作，比如检查输入参数。一般来说，代码应该在禁用断言检查的情况下仍然按预期运行。

`assert()` 将检查 `$assertion` 中指定的预期（expectations）是否成立。如果不成立，也就是结果为 `false`，它将根据 `assert()` 的配置采取适当的操作。

`assert()` 的行为由以下 INI 设置决定：

| 名字 | 默认 | 说明 | 更新日志 |
| --- | --- | --- | --- |
| zend.assertions | `1` | `1`：生成并执行代码（开发模式）    `0`：生成代码但在运行时跳转   `-1`：生成代码但在运行时跳转（生产模式） |  |
| assert.active | `true` | 为 `false` 时，`assert()` 将不会检查预期（expectation）并且无条件返回 `true`。 | 自 PHP 8.3.0 起弃用。 |
| assert.callback | `null` | 当断言失败时，将调用用户定义的函数，其签名应该是：  `void``assert_callback()` `string``$file` `int``$line` `null``$assertion` `string``$description` | 在 PHP 8.0.0 之前，回调的签名应该是：  `void``assert_callback()` `string``$file` `int``$line` `string``$assertion` `string``$description`     自 PHP 8.3.0 起弃用。 |
| assert.exception | `true` | 如果为 `true`，则如果不能满足预期（expectations），将抛出 `AssertionError` 异常。 | 自 PHP 8.3.0 起弃用 |
| assert.bail | `false` | 为 `true` 时，如果预期（expectation）不支持，将会中止 PHP 脚本的执行。 | 自 PHP 8.3.0 起弃用 |
| assert.warning | `true` | 为 `true` 时，则如果预期（expectation）不支持，将发出 `E_WARNING` 警告。如果启用了 assert.exception，此 INI 设置将无效。 | 自 PHP 8.3.0 起弃用 |

## 参数

- **`$assertion`** — 可以是任何带返回值的表达式，运行后的结果用于表示断言成功还是失败。
  > 在 PHP 8.0.0 之前，如果 `$assertion` 是 `string`，将解释为 PHP 代码，并通过 `eval()` 执行。这个字符串将作为第三个参数传递给回调函数。这种行为在 PHP 7.2.0 中*弃用*，并在 PHP 8.0.0 中*移除*。


- **`$description`** — 如果 `$description` 是 `Throwable` 的实例，只有在 `$assertion` 执行失败时才会抛出。 > 自 PHP 8.0.0 开始，在调用可能定义的断言回调*之前*执行此操作。 > 自 PHP 8.0.0 开始，无论 assert.exception 的配置如何，都将会抛出该 `object`。 > 自 PHP 8.0.0 开始，在这种情况下，assert.bail 设置不起作用。 — 如果 `$description` 是 `string`，当发出异常或警告时，将使用该消息。 如果 `$assertion` 失败了，可选的 description 将会包括在失败信息里。 — 如果省略 `$description`， 将在编译时创建默认 description，该 description 等于对 `assert()` 调用的源代码。

## 返回值

`assert()` 总是返回 `true`，前提是以下条件中至少有一个为真：

 `zend.assertions=0` `zend.assertions=-1` `assert.active=0` `assert.exception=1` `assert.bail=1` 将自定义异常对象传递给 `$description`。 

如果所有条件都不满足， `assert()` 将在 `$assertion` 为真时返回 `true`，否则返回 `false`。urn `true` if `$assertion` is truthy and `false` otherwise.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 弃用所有的 `assert.` INI 设置。 |
| 8.0.0 | `assert()` 将不再对字符串参数求值，而是跟其他参数一样对待。应该使用 assert($a == $b) 替代 assert('$a == $b')。已移除 `assert.quiet_eval` php.ini 指令和 `ASSERT_QUIET_EVAL` 常量，因为它们不再有任何作用。 |
| 8.0.0 | 如果 `$description` 是 `Throwable` 的实例，无论 assert.exception 的值如何，如果断言失败，该对象都会被抛出。 |
| 8.0.0 | 如果 `$description` 是 `Throwable` 的实例，即使设置了用户回调，也不会调用该回调。 |
| 8.0.0 | 不再允许在命名空间中声明叫做 `assert()` 的函数，并发出 `E_COMPILE_ERROR`。 |
| 7.3.0 | 弃用在命名空间中声明 `assert()` 函数。这样声明会发出 `E_DEPRECATED`。 |
| 7.2.0 | 弃用使用 `string` 作为 `$assertion`。当 assert.active 和 zend.assertions 都设为 `1` 时，现在会发出 `E_DEPRECATED` 通知。 |

## 示例

**`assert()` 示例**

```php


<?php
assert(1 > 2);
echo 'Hi!';

    
```

如果启用断言（`zend.assertions=1`） 以上示例会输出：

```text


Fatal error: Uncaught AssertionError: assert(1 > 2) in example.php:2
Stack trace:
#0 example.php(2): assert(false, 'assert(1 > 2)')
#1 {main}
  thrown in example.php on line 2

    
```

如果禁用断言（`zend.assertions=0` 或 `zend.assertions=-1`） 以上示例会输出：

```text


Hi!

    
```

**使用自定义信息**

```php


<?php
assert(1 > 2, "Expected one to be greater than two");
echo 'Hi!';
?>

    
```

如果启用断言，以上示例会输出：

```text


Fatal error: Uncaught AssertionError: Expected one to be greater than two in example.php:2
Stack trace:
#0 example.php(2): assert(false, 'Expected one to...')
#1 {main}
  thrown in example.php on line 2

    
```

如果禁用断言，以上示例会输出：

```text


Hi!

    
```

**使用自定义异常类**

```php

    
<?php
class ArithmeticAssertionError extends AssertionError {}

assert(1 > 2, new ArithmeticAssertionError("Expected one to be greater than two"));
echo 'Hi!';

   
```

如果启用断言，以上示例会输出：

```text


Fatal error: Uncaught ArithmeticAssertionError: Expected one to be greater than two in example.php:4
Stack trace:
#0 {main}
  thrown in example.php on line 4

    
```

如果禁用断言，以上示例会输出：

```text


Hi!

   
```

## 参见

`assert_options()`
