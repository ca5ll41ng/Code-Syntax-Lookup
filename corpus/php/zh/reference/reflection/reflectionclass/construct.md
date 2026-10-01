---
id: "zh-php-function-reflectionclass-construct"
language: "php"
lang: "zh"
category: "function"
name: "ReflectionClass::__construct"
title: "初始化 ReflectionClass 类"
signature: "public ReflectionClass::__construct(object|string $objectOrClass)"
module: "reflection"
source_url: "https://www.php.net/manual/zh/reflectionclass.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化 ReflectionClass 类

## 说明

```php
public ReflectionClass::__construct(object|string $objectOrClass)
```

初始化新的 `ReflectionClass` 对象。

## 参数

- **`$objectOrClass`** — 既可以是包含类名的字符串（`string`）也可以是对象（`object`）。

## 错误／异常

如果要反射的 Class 不存在，抛出异常 `ReflectionException`。

## 示例

**ReflectionClass 的基本用法**

```php


<?php
$reflection = new ReflectionClass('Exception');
echo $reflection;
?>

    
```

以上示例的输出类似于：

```text


Class [ <internal:Core> class Exception implements Stringable, Throwable ] {

  - Constants [0] {
  }

  - Static properties [0] {
  }

  - Static methods [0] {
  }

  - Properties [7] {
    Property [ protected $message = '' ]
    Property [ private string $string = '' ]
    Property [ protected $code = 0 ]
    Property [ protected string $file = '' ]
    Property [ protected int $line = 0 ]
    Property [ private array $trace = [] ]
    Property [ private ?Throwable $previous = NULL ]
  }

  - Methods [11] {
    Method [ <internal:Core> private method __clone ] {

      - Parameters [0] {
      }
      - Return [ void ]
    }

    Method [ <internal:Core, ctor> public method __construct ] {

      - Parameters [3] {
        Parameter #0 [ <optional> string $message = "" ]
        Parameter #1 [ <optional> int $code = 0 ]
        Parameter #2 [ <optional> ?Throwable $previous = null ]
      }
    }

    Method [ <internal:Core> public method __wakeup ] {

      - Parameters [0] {
      }
      - Tentative return [ void ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getMessage ] {

      - Parameters [0] {
      }
      - Return [ string ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getCode ] {

      - Parameters [0] {
      }
    }

    Method [ <internal:Core, prototype Throwable> final public method getFile ] {

      - Parameters [0] {
      }
      - Return [ string ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getLine ] {

      - Parameters [0] {
      }
      - Return [ int ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getTrace ] {

      - Parameters [0] {
      }
      - Return [ array ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getPrevious ] {

      - Parameters [0] {
      }
      - Return [ ?Throwable ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getTraceAsString ] {

      - Parameters [0] {
      }
      - Return [ string ]
    }

    Method [ <internal:Core, prototype Stringable> public method __toString ] {

      - Parameters [0] {
      }
      - Return [ string ]
    }
  }
}

    
```

## 参见

`ReflectionObject::__construct()` 构造函数
