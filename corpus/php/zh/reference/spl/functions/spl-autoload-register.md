---
id: "zh-php-function-function-spl-autoload-register"
language: "php"
lang: "zh"
category: "function"
name: "spl_autoload_register"
title: "注册指定的函数作为 __autoload 的实现"
signature: "bool spl_autoload_register(callable|null $callback = null, bool $throw = true, bool $prepend = false)"
module: "spl"
source_url: "https://www.php.net/manual/zh/function.spl-autoload-register.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 注册指定的函数作为 __autoload 的实现

## 说明

```php
bool spl_autoload_register(callable|null $callback = null, bool $throw = true, bool $prepend = false)
```

使用 spl 提供的 __autoload 队列注册函数。如果队列尚未激活，则将激活。

如果在代码中已经实现了 `__autoload()` 函数，必须显式注册到 `__autoload()` 队列中。因为 `spl_autoload_register()` 通过 `spl_autoload()` 或 `spl_autoload_call()` 有效替换 `__autoload()` 函数的存储缓存。

如果需要多个自动加载函数，则 `spl_autoload_register()` 允许这么做。它有效的创建了自动加载函数队列，并按定义的顺序进行遍历。相比之下，`__autoload()` 只能定义一次。

## 参数

- **`$callback`** — 正在注册的自动装载函数。如果为 `null`，则将注册 `spl_autoload()` 的默认实现。
  ```php
  void {callback}(string $class)
  ```

 — `$class` 将是不包含开头反斜线的完整标识符。
- **`$throw`** — 此参数指定 `spl_autoload_register()` 在无法注册 `$callback` 时是否应抛出异常。
  > 从 PHP 8.0.0 开始，将忽略该参数，如果设置为 `false`，则会发出 notice。`spl_autoload_register()` 现在总是会在无效参数上抛出 `TypeError`。


- **`$prepend`** — 如果是 `true`，`spl_autoload_register()` 会添加函数到队列之首，而不是队列尾部。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$callback` 现在可以为 null。 |

## 示例

**`spl_autoload_register()` 作为 `__autoload()` 函数的替代**

```php


<?php

// function __autoload($class) {
//     include 'classes/' . $class . '.class.php';
// }

function my_autoloader($class) {
    include 'classes/' . $class . '.class.php';
}

spl_autoload_register('my_autoloader');

// 或者可以使用匿名函数
spl_autoload_register(function ($class) {
    include 'classes/' . $class . '.class.php';
});

?>

    
```

**类未能加载的 `spl_autoload_register()` 例子**

```php


<?php

namespace Foobar;

class Foo {
    static public function test($class) {
        print '[['. $class .']]';
    }
}

spl_autoload_register(__NAMESPACE__ .'\Foo::test');

new InexistentClass;

?>

    
```

以上示例的输出类似于：

```text


[[Foobar\InexistentClass]]
Fatal error: Class 'Foobar\InexistentClass' not found in ...

    
```

**提供的标识符将不包含开头的反斜线**

```php


<?php

spl_autoload_register(static function ($class) {
    var_dump($class);
});

class_exists('RelativeName');
class_exists('RelativeName\\WithNamespace');
class_exists('\\AbsoluteName');
class_exists('\\AbsoluteName\\WithNamespace');

?>

    
```

以上示例会输出：

```text


string(12) "RelativeName"
string(26) "RelativeName\WithNamespace"
string(12) "AbsoluteName"
string(26) "AbsoluteName\WithNamespace"

    
```

## 参见

`__autoload()`
