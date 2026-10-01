---
id: "zh-php-function-function-is-callable"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"validator","params":[1]}
name: "is_callable"
title: "验证值是否可以在当前范围内作为函数调用"
signature: "bool is_callable(mixed $value, bool $syntax_only = false, string $callable_name = null)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.is-callable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 验证值是否可以在当前范围内作为函数调用

## 说明

```php
bool is_callable(mixed $value, bool $syntax_only = false, string $callable_name = null)
```

验证 `$value` 是 `callable`，或者其可以使用 `call_user_func()` 函数调用。

## 参数

- **`$value`** — 要验证的值。
- **`$syntax_only`** — 如果设置为 `true`，则函数仅验证 `$value` 是函数还是方法。它将拒绝任何不是可调用对象、`Closure`、`string` 或者不能用作回调的无效结构的数组的值。有效的可调用数组只有 2 个条目，第一个是对象或者字符串，第二个是字符串。
- **`$callable_name`** — 接受 “callable 名称”，例如 `"SomeClass::someMethod"`。注意，尽管 `SomeClass::someMethod()` 暗示是可调用静态方法，但事实并非如此。

## 返回值

如果 `$value` 可调用则返回 `true`，否则返回 `false`。

## 示例

**检查字符串是否可以作为函数调用**

```php


<?php

function someFunction() {}

$functionVariable = 'someFunction';

var_dump(is_callable($functionVariable, false, $callable_name));

var_dump($callable_name);

?>

    
```

以上示例会输出：

```text


bool(true)
string(12) "someFunction"

    
```

**检查数组是否可以作为函数调用**

```php


<?php

class SomeClass
{
    public function someMethod() {}
}

$anObject = new SomeClass();

$methodVariable = [$anObject, 'someMethod'];

var_dump(is_callable($methodVariable, true, $callable_name));

var_dump($callable_name);

?>

    
```

以上示例会输出：

```text


bool(true)
string(21) "SomeClass::someMethod"

    
```

**`is_callable()` 和构造方法**

尽管构造方法是创建对象时调用的方法，但它们不是静态方法，`is_callable()` 将对它们返回 `false`。无法使用 `is_callable()` 检查类是否可以从当前作用域实例化。

```php


<?php

class Foo
{
    public function __construct() {}

    public function foo() {}
}

var_dump(
    is_callable(['Foo', '__construct']),
    is_callable(['Foo', 'foo'])
);

$foo = new Foo();
var_dump(is_callable([$foo, '__construct']));

?>

    
```

以上示例会输出：

```text


bool(false)
bool(false)
bool(true)

    
```

## 注释

  如果对象实现了 __invoke() 且该方法在当前作用域可见，则始终可调用。   如果类名实现了 __callStatic()，则可调用。   如果对象实现 __call()，则此函数对该对象的任何方法将返回 `true`，即使该方法没有定义。   如果使用类名调用此函数，则会触发自动加载。  

## 参见

`call_user_func()` `function_exists()` `method_exists()`
