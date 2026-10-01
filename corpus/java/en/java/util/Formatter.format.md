---
id: "java-en-function-formatter-format"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["formatter"],"cwe":["CWE-134"],"params":[1]}
name: "Formatter.format"
signature: "public Formatter format(String format, Object ... args)"
title: "Formatter.format"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Formatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Formatter.format

```java
public Formatter format(String format, Object ... args)
```

Writes a formatted string to this object's destination using the
 specified format string and arguments.  The locale used is the one
 defined during the construction of this formatter.

**参数**

- **format** — A format string as described in Format string syntax.
- **args** — Arguments referenced by the format specifiers in the format string.  If there are more arguments than format specifiers, the extra arguments are ignored.  The maximum number of arguments is limited by the maximum dimension of a Java array as defined by The Java Virtual Machine Specification.

**返回**

- This formatter

**异常**

- **IllegalFormatException** — If a format string contains an illegal syntax, a format specifier that is incompatible with the given arguments, insufficient arguments given the format string, or other illegal conditions.  For specification of all possible formatting errors, see the Details section of the formatter class specification.
- **FormatterClosedException** — If this formatter has been closed by invoking its `close` method
