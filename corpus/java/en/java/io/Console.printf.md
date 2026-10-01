---
id: "java-en-function-console-printf"
language: "java"
lang: "en"
category: "function"
name: "Console.printf"
signature: "public Console printf(String format, Object ... args)"
title: "Console.printf"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Console.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Console.printf

```java
public Console printf(String format, Object ... args)
```

A convenience method to write a formatted string to this console's
 output stream using the specified format string and arguments with
 the `#default_locale default format locale`.

**参数**

- **format** — A format string as described in `#syntax Format string syntax`.
- **args** — Arguments referenced by the format specifiers in the format string.  If there are more arguments than format specifiers, the extra arguments are ignored.  The number of arguments is variable and may be zero.  The maximum number of arguments is limited by the maximum dimension of a Java array as defined by The Java Virtual Machine Specification. The behavior on a `null` argument depends on the `#syntax conversion`.

**返回**

- This console

**异常**

- **IllegalFormatException** — If a format string contains an illegal syntax, a format specifier that is incompatible with the given arguments, insufficient arguments given the format string, or other illegal conditions.  For specification of all possible formatting errors, see the `#detail Details` section of the formatter class specification.
