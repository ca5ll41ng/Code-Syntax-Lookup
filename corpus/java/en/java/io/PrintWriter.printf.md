---
id: "java-en-function-printwriter-printf"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["xss-servlet"],"cwe":["CWE-79"],"params":[0,1]}
name: "PrintWriter.printf"
signature: "public PrintWriter printf(String format, Object ... args)"
title: "PrintWriter.printf"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintWriter.printf

```java
public PrintWriter printf(String format, Object ... args)
```

A convenience method to write a formatted string to this writer using
 the specified format string and arguments.  If automatic flushing is
 enabled, calls to this method will flush the output buffer.

 

 An invocation of this method of the form
 `out.printf(format, args)`
 behaves in exactly the same way as the invocation

 {@snippet lang=java :
     out.format(format, args)
 }

**参数**

- **format** — A format string as described in Format string syntax.
- **args** — Arguments referenced by the format specifiers in the format string.  If there are more arguments than format specifiers, the extra arguments are ignored.  The number of arguments is variable and may be zero.  The maximum number of arguments is limited by the maximum dimension of a Java array as defined by The Java Virtual Machine Specification. The behaviour on a `null` argument depends on the conversion.

**返回**

- This writer

**异常**

- **java.util.IllegalFormatException** — If a format string contains an illegal syntax, a format specifier that is incompatible with the given arguments, insufficient arguments given the format string, or other illegal conditions.  For specification of all possible formatting errors, see the Details section of the formatter class specification.
- **NullPointerException** — If the `format` is `null`

> *Since 1.5*
