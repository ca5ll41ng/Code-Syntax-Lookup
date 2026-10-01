---
id: "java-en-function-printstream-format"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["formatter"],"cwe":["CWE-134"],"params":[1]}
name: "PrintStream.format"
signature: "public PrintStream format(String format, Object ... args)"
title: "PrintStream.format"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintStream.format

```java
public PrintStream format(String format, Object ... args)
```

Writes a formatted string to this output stream using the specified
 format string and arguments.

 

 The locale always used is the one returned by `getDefault` with
 `FORMAT FORMAT` category specified,
 regardless of any previous invocations of other formatting methods on
 this object.

**参数**

- **format** — A format string as described in Format string syntax
- **args** — Arguments referenced by the format specifiers in the format string.  If there are more arguments than format specifiers, the extra arguments are ignored.  The number of arguments is variable and may be zero.  The maximum number of arguments is limited by the maximum dimension of a Java array as defined by The Java Virtual Machine Specification. The behaviour on a `null` argument depends on the conversion.

**返回**

- This output stream

**异常**

- **java.util.IllegalFormatException** — If a format string contains an illegal syntax, a format specifier that is incompatible with the given arguments, insufficient arguments given the format string, or other illegal conditions.  For specification of all possible formatting errors, see the Details section of the formatter class specification.
- **NullPointerException** — If the `format` is `null`

> *Since 1.5*
