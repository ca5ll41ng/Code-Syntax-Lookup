---
id: "zh-php-function-function-gc-disable"
language: "php"
lang: "zh"
category: "function"
name: "gc_disable"
title: "停用循环引用收集器"
signature: "void gc_disable()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.gc-disable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 停用循环引用收集器

## 说明

```php
void gc_disable()
```

停用循环引用收集器，设置 zend.enable_gc 为 `0`。

## 参数

此函数没有参数。

## 返回值

没有返回值。

 Use when ERRORS exist <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title> <para> When does this function throw E_* level errors, or exceptions? </para> </refsect1> 

 Use when a CHANGELOG exists <refsect1 role="changelog"> <title xmlns="http://docbook.org/ns/docbook">更新日志</title> <para> <informaltable> <tgroup cols="2"> <thead> <row> <entry>版本</entry> <entry>说明</entry> </row> </thead> <tbody> <row> <entry>Enter the PHP version of change here</entry> <entry>Description of change</entry> </row> </tbody> </tgroup> </informaltable> </para> </refsect1> 

 Use when examples exist <refsect1 role="examples"> <title xmlns="http://docbook.org/ns/docbook">示例</title> <para> <example> <title>A <function>gc_disable</function> example</title> <para> Any text that describes the purpose of the example, or what goes on in the example should go here (inside the <example> tag, not out </para> <programlisting role="php"> <![CDATA[ <?php if ($anexample === true) { echo 'Use the PEAR Coding Standards'; } ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">以上示例会输出：</simpara> <screen> <![CDATA[ Use the PEAR Coding Standards ]]> </screen> </example> </para> </refsect1> 

## 参见

垃圾回收机制
