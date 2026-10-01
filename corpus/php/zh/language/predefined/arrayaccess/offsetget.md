---
id: "zh-php-function-arrayaccess-offsetget"
language: "php"
lang: "zh"
category: "function"
name: "ArrayAccess::offsetGet"
title: "获取一个偏移位置的值"
signature: "public mixed ArrayAccess::offsetGet(mixed $offset)"
module: "language"
source_url: "https://www.php.net/manual/zh/arrayaccess.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个偏移位置的值

## 说明

```php
public mixed ArrayAccess::offsetGet(mixed $offset)
```

返回指定偏移位置的值。

当检查一个偏移位置是否为 `empty()` 时，会执行此方法。

## 参数

- **`$offset`** — 需要获取的偏移位置。

## 返回值

可返回任何类型。

## 注释

> 此方法的实现可以通过引用返回。 这使得可以间接修改 `ArrayAccess` 对象，能够重载数组的维度。
>
> 直接修改是完全替代数组维度的值，例如 `$obj[6] = 7`。 另一方面，间接修改是指仅修改某个维度中的一部分，或者传引用的方式赋值一个维度， 例如 `$obj[6][7] = 7` 和 `$var =& $obj[6]`。 使用 `++` 自增或者使用 `--` 自减也是通过间接修改的方式实现的。
>
> 直接修改会触发对 `ArrayAccess::offsetSet()` 的调用，而间接修改则会触发对 `ArrayAccess::offsetGet()` 的调用。在这种情况下， `ArrayAccess::offsetGet()` 的实现必须能通过引用返回，否则会引发 `E_NOTICE` 消息。

 <refsect1 role="examples"> <title xmlns="http://docbook.org/ns/docbook">示例</title> <para> <example> <title><function>ArrayAccess::offsetGet</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">以上示例的输出类似于：</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> 

## 参见

`ArrayAccess::offsetExists()`
