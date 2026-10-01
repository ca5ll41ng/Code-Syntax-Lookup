---
id: "zh-php-function-arrayaccess-offsetunset"
language: "php"
lang: "zh"
category: "function"
name: "ArrayAccess::offsetUnset"
title: "复位一个偏移位置的值"
signature: "public void ArrayAccess::offsetUnset(mixed $offset)"
module: "language"
source_url: "https://www.php.net/manual/zh/arrayaccess.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 复位一个偏移位置的值

## 说明

```php
public void ArrayAccess::offsetUnset(mixed $offset)
```

复位一个偏移位置的值。

> 当使用 (unset) 进行类型转换时，该方法不会被调用。

## 参数

- **`$offset`** — 待复位的偏移位置。

## 返回值

没有返回值。

 <refsect1 role="examples"> <title xmlns="http://docbook.org/ns/docbook">示例</title> <para> <example> <title><function>ArrayAccess::offsetUnset</function> example</title> <programlisting role="php"> <![CDATA[ <?php /* ... */ ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">以上示例的输出类似于：</simpara> <screen> <![CDATA[ ... ]]> </screen> </example> </para> </refsect1> <refsect1 role="seealso"> <title xmlns="http://docbook.org/ns/docbook">参见</title> <para> <simplelist> <member><methodname>Classname::Method</methodname></member> </simplelist> </para> </refsect1>
