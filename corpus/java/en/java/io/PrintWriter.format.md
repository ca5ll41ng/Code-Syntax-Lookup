---
id: "java-en-function-printwriter-format"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["xss-servlet"],"cwe":["CWE-79"],"params":[0,1]}
name: "PrintWriter.format"
signature: "public PrintWriter format(String format, Object ... args)"
title: "PrintWriter.format"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintWriter.format

```java
public PrintWriter format(String format, Object ... args)
```

Writes a formatted string to this writer using the specified format
 string and arguments.  If automatic flushing is enabled, calls to this
 method will flush the output buffer.

 

 The locale always used is the one returned by `getDefault`, regardless of any
 previous invocations of other formatting methods on this object.

**参数**

- **format** — A format string as described in Format string syntax.
- **args** — Arguments referenced by the format specifiers in the format string.  If there are more arguments than format specifiers, the extra arguments are ignored.  The number of arguments is variable and may be zero.  The maximum number of arguments is limited by the maximum dimension of a Java array as defined by The Java Virtual Machine Specification. The behaviour on a `null` argument depends on the conversion.

**返回**

- This writer

**异常**

- **java.util.IllegalFormatException** — If a format string contains an illegal syntax, a format specifier that is incompatible with the given arguments, insufficient arguments given the format string, or other illegal conditions.  For specification of all possible formatting errors, see the Details section of the Formatter class specification.
- **NullPointerException** — If the `format` is `null`

> *Since 1.5*
