---
id: "zh-php-guide-ffi-examples"
language: "php"
lang: "zh"
category: "guide"
name: "ffi.examples"
title: "示例"
module: "ffi"
source_url: "https://www.php.net/manual/zh/ffi.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 示例

## 基础 FFI 用法

在深入了解 FFI API 细节之前，先看几个示例，展示 FFI API 在常规任务中的简单使用。

> 其中一些示例需要 `libc.so.6`，因此在没有该库的系统上无法运行。

**从共享库中调用函数**

```php


<?php
// 创建 FFI 对象，加载 libc 和输出函数 printf()
$ffi = FFI::cdef(
    "int printf(const char *format, ...);", // 这是普遍的 C 声明
    "libc.so.6");
// call C's printf()
$ffi->printf("Hello %s!\n", "world");
?>

   
```

以上示例会输出：

```text


Hello world!

   
```

> 请注意，一些 C 函数需要特定的调用规则，例如 `__fastcall`、`__stdcall` 或 `__vectorcall`。

**调用函数，通过参数返回结构体**

```php


<?php
// 创建 gettimeofday() 绑定
$ffi = FFI::cdef("
    typedef unsigned int time_t;
    typedef unsigned int suseconds_t;

    struct timeval {
        time_t      tv_sec;
        suseconds_t tv_usec;
    };

    struct timezone {
        int tz_minuteswest;
        int tz_dsttime;
    };

    int gettimeofday(struct timeval *tv, struct timezone *tz);
", "libc.so.6");
// 创建 C 数据结构
$tv = $ffi->new("struct timeval");
$tz = $ffi->new("struct timezone");
// 调用 C 的 gettimeofday()
var_dump($ffi->gettimeofday(FFI::addr($tv), FFI::addr($tz)));
// 访问 C 数据结构的字段
var_dump($tv->tv_sec);
// 打印完整数据结构
var_dump($tz);
?>

   
```

以上示例的输出类似于：

```text


int(0)
int(1555946835)
object(FFI\CData:struct timezone)#3 (2) {
  ["tz_minuteswest"]=>
  int(0)
  ["tz_dsttime"]=>
  int(0)
}

   
```

**访问已存在的 C 变量**

```php


<?php
// 创建 FFI 对象，加载 libc 和输出 errno 变量
$ffi = FFI::cdef(
    "int errno;", // 这是普遍的 C 声明
    "libc.so.6");
// print C's errno
var_dump($ffi->errno);
?>

   
```

以上示例会输出：

```text


int(0)

   
```

**创建和修改 C 变量**

```php


<?php
// 创建新的 C int 变量
$x = FFI::new("int");
var_dump($x->cdata);

// 简单赋值
$x->cdata = 5;
var_dump($x->cdata);

// 复合赋值
$x->cdata += 2;
var_dump($x->cdata);
?>

   
```

以上示例会输出：

```text


int(0)
int(5)
int(7)

   
```

**使用 C 数组**

```php


<?php
// 创建 C 数据结构
$a = FFI::new("long[1024]");
// 使用它就像使用常规数组
for ($i = 0; $i < count($a); $i++) {
    $a[$i] = $i;
}
var_dump($a[25]);
$sum = 0;
foreach ($a as $n) {
    $sum += $n;
}
var_dump($sum);
var_dump(count($a));
var_dump(FFI::sizeof($a));
?>

    
```

以上示例会输出：

```text


int(25)
int(523776)
int(1024)
int(8192)

    
```

**使用 C 枚举**

```php


<?php
$a = FFI::cdef('typedef enum _zend_ffi_symbol_kind {
    ZEND_FFI_SYM_TYPE,
    ZEND_FFI_SYM_CONST = 2,
    ZEND_FFI_SYM_VAR,
    ZEND_FFI_SYM_FUNC
} zend_ffi_symbol_kind;
');
var_dump($a->ZEND_FFI_SYM_TYPE);
var_dump($a->ZEND_FFI_SYM_CONST);
var_dump($a->ZEND_FFI_SYM_VAR);
?>

    
```

以上示例会输出：

```text


int(0)
int(2)
int(3)

   
```

## PHP 回调

可以将 PHP 闭包分配给函数指针类型的原生变量，或将其作为函数参数传递。

**将 PHP `Closure` 指派给 C 函数指针**

```php


<?php
$zend = FFI::cdef("
    typedef int (*zend_write_func_t)(const char *str, size_t str_length);
    extern zend_write_func_t zend_write;
");

echo "Hello World 1!\n";

$orig_zend_write = clone $zend->zend_write;
$zend->zend_write = function($str, $len) {
    global $orig_zend_write;
    $orig_zend_write("{\n\t", 3);
    $ret = $orig_zend_write($str, $len);
    $orig_zend_write("}\n", 2);
    return $ret;
};
echo "Hello World 2!\n";
$zend->zend_write = $orig_zend_write;
echo "Hello World 3!\n";
?>

    
```

以上示例会输出：

```text


Hello World 1!
{
        Hello World 2!
}
Hello World 3!

    
```

虽然这样可以运行，但并非所有的 libffi 平台都支持这个功能，而且效率不高，并且在请求结束时会泄漏资源。

> 因此，建议尽量减少使用 PHP 回调函数。

## 完整 PHP/FFI/preloading 示例

 `php.ini`  
```ini

ffi.enable=preload
opcache.preload=preload.php

   
```

 `preload.php`  
```php

<?php
FFI::load(__DIR__ . "/dummy.h");
opcache_compile_file(__DIR__ . "/dummy.php");
?>

   
```

 `dummy.h`  
```c

#define FFI_SCOPE "DUMMY"
#define FFI_LIB "libc.so.6"

int printf(const char *format, ...);

   
```

 `dummy.php`  
```php

<?php
final class Dummy {
    private static $ffi = null;
    function __construct() {
        if (is_null(self::$ffi)) {
            self::$ffi = FFI::scope("DUMMY");
        }
    }
    function printf($format, ...$args) {
       return (int) self::$ffi->printf($format, ...$args);
    }
}
?>

   
```

 `test.php`  
```php

<?php
$d = new Dummy();
$d->printf("Hello %s!\n", "world");
?>

   
```
