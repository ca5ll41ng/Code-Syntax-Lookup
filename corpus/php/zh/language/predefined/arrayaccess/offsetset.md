---
id: "zh-php-function-arrayaccess-offsetset"
language: "php"
lang: "zh"
category: "function"
name: "ArrayAccess::offsetSet"
title: "设置一个偏移位置的值"
signature: "public void ArrayAccess::offsetSet(mixed $offset, mixed $value)"
module: "language"
source_url: "https://www.php.net/manual/zh/arrayaccess.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置一个偏移位置的值

## 说明

```php
public void ArrayAccess::offsetSet(mixed $offset, mixed $value)
```

为指定的偏移位置设置一个值。

## 参数

- **`$offset`** — 待设置的偏移位置。
- **`$value`** — 需要设置的值。

## 返回值

没有返回值。

## 注释

> 如果另一个值不可用，那么 `$offset` 参数将被设置为 `null`，就像下面的示例。 ```php <?php $arrayaccess[] = "first value"; $arrayaccess[] = "second value"; print_r($arrayaccess); ?> ``` 以上示例会输出： ```text Array ( [0] => first value [1] => second value ) ```

> 在通过引用赋值以及其它间接更改使用 `ArrayAccess` 重载的数组维度时，不会调用此函数（间接是指不直接更改维度本身，而是更改子维度或子属性，或者将数组维度通过引用赋值给另一个变量）。而是调用 `ArrayAccess::offsetGet()`。只有该方法通过引用返回，操作才会成功。

 <refsect1 role="examples"> <title xmlns="http://docbook.org/ns/docbook">示例</title> <para> <example> <title><function>ArrayAccess::offsetSet</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">以上示例的输出类似于：</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> <refsect1 role="seealso"> <title xmlns="http://docbook.org/ns/docbook">参见</title> <para> <simplelist> <member><methodname>Classname::Method</methodname></member> </simplelist> </para> </refsect1>
