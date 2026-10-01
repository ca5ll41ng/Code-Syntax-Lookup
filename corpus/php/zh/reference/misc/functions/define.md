---
id: "zh-php-function-function-define"
language: "php"
lang: "zh"
category: "function"
name: "define"
title: "定义一个常量"
signature: "bool define(string $constant_name, mixed $value, bool $case_insensitive = false)"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.define.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 定义一个常量

## 说明

```php
bool define(string $constant_name, mixed $value, bool $case_insensitive = false)
```

在运行时定义一个常量。

## 参数

- **`$constant_name`** — 常量名。
  > 可以用 `define()` 定义保留关键词甚至无效名称的常量，它的值可以（仅可以）通过 `constant()` 获取。 不过，不推荐这么做。


- **`$value`** — 常量的值。
  > 常量还可以定义为 `resource` 类型，但并不推荐这样做，因为可能会有不可预知的行为发生。


- **`$case_insensitive`** — 如果设置为 `true`，则该常量不区分大小写。默认是区分大小写的。比如， `CONSTANT` 和 `Constant` 代表了不同的值。
  > PHP 7.3.0 起，废弃定义不区分大小写的常量。自 PHP 8.0.0 开始， 只接受 `false` 值，传递 `true` 将产生警告。


  > 不区分大小写的常量以小写的形式储存。



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | `$value` 现在可以是一个对象。 |
| 8.0.0 | 现在传递 `true` 到 `$case_insensitive` 会发出 `E_WARNING`。仍然允许传递 `false`。 |
| 7.3.0 | 废弃了 `$case_insensitive`，并将在 8.0.0 版中移除。 |

## 示例

**定义常量**

```php


<?php
define("CONSTANT", "Hello world.");
echo CONSTANT; // 输出 "Hello world."
echo Constant; // 输出 "Constant" 并导致 Notice

define("GREETING", "Hello you.", true);
echo GREETING; // 输出 "Hello you."
echo Greeting; // 输出 "Hello you."

// PHP 7 起就可以运行了
define('ANIMALS', array(
    'dog',
    'cat',
    'bird'
));
echo ANIMALS[1]; // 输出 "cat"

?>

    
```

**以保留名称定义常量**

本例子说明了以 魔术常量相同名称定义常量的*能力*。由于行为结果过于令人迷惑，所以实践中不推荐。

```php


<?php
var_dump(defined('__LINE__'));
var_dump(define('__LINE__', 'test'));
var_dump(constant('__LINE__'));
var_dump(__LINE__);
?>

    
```

以上示例会输出：

```text


bool(false)
bool(true)
string(4) "test"
int(5)

   
```

## 参见

`defined()` `constant()` 关于常量的章节
