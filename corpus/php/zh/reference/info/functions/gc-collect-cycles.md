---
id: "zh-php-function-function-gc-collect-cycles"
language: "php"
lang: "zh"
category: "function"
name: "gc_collect_cycles"
title: "强制收集所有现存的垃圾循环周期"
signature: "int gc_collect_cycles()"
module: "info"
source_url: "https://www.php.net/manual/zh/function.gc-collect-cycles.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 强制收集所有现存的垃圾循环周期

## 说明

```php
int gc_collect_cycles()
```

强制收集所有现存的垃圾循环周期。

## 参数

此函数没有参数。

## 返回值

返回收集的循环数量。

 Use when ERRORS exist <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title> <para> When does this function throw E_* level errors, or exceptions? </para> </refsect1> 

 Use when a CHANGELOG exists <refsect1 role="changelog"> <title xmlns="http://docbook.org/ns/docbook">更新日志</title> <para> <informaltable> <tgroup cols="2"> <thead> <row> <entry>版本</entry> <entry>说明</entry> </row> </thead> <tbody> <row> <entry>Enter the PHP version of change here</entry> <entry>Description of change</entry> </row> </tbody> </tgroup> </informaltable> </para> </refsect1> 

 Use when examples exist <refsect1 role="examples"> <title xmlns="http://docbook.org/ns/docbook">示例</title> <para> <example> <title>A <function>gc_collect_cycles</function> example</title> <para> Any text that describes the purpose of the example, or what goes on in the example should go here (inside the <example> tag, not out </para> <programlisting role="php"> <![CDATA[ <?php if ($anexample === true) { echo 'Use the PEAR Coding Standards'; } ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">以上示例会输出：</simpara> <screen> <![CDATA[ Use the PEAR Coding Standards ]]> </screen> </example> </para> </refsect1> 

## 参见

垃圾回收机制
