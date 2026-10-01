---
id: "java-en-function-string-format"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["formatter"],"cwe":["CWE-134"],"params":[1]}
name: "String.format"
signature: "public static String format(String format, Object... args)"
title: "String.format"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/String.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# String.format

```java
public static String format(String format, Object... args)
```

Returns a formatted string using the specified format string and
 arguments.

 

 The locale always used is the one returned by `getDefault(java.util.Locale.Category)
 Locale.getDefault` with
 `FORMAT FORMAT` category specified.

**参数**

- **format** — A format string
- **args** — Arguments referenced by the format specifiers in the format string.  If there are more arguments than format specifiers, the extra arguments are ignored.  The number of arguments is variable and may be zero.  The maximum number of arguments is limited by the maximum dimension of a Java array as defined by The Java Virtual Machine Specification. The behaviour on a `null` argument depends on the conversion.

**返回**

- A formatted string

**异常**

- **java.util.IllegalFormatException** — If a format string contains an illegal syntax, a format specifier that is incompatible with the given arguments, insufficient arguments given the format string, or other illegal conditions.  For specification of all possible formatting errors, see the Details section of the formatter class specification.

**参见**

- java.util.Formatter

> *Since 1.5*
