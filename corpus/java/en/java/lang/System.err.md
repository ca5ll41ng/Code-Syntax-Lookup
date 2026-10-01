---
id: "java-en-function-system-err"
language: "java"
lang: "en"
category: "function"
name: "System.err"
signature: "public static final PrintStream err = null"
title: "System.err"
directive: "field"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.err

```java
public static final PrintStream err = null
```

The "standard" error output stream. This stream is already
 open and ready to accept output data.
 

 Typically this stream corresponds to display output or another
 output destination specified by the host environment or user. By
 convention, this output stream is used to display error messages
 or other information that should come to the immediate attention
 of a user even if the principal output stream, the value of the
 variable `out`, has been redirected to a file or other
 destination that is typically not continuously monitored.
 The encoding used in the conversion from characters to bytes is
 equivalent to `#stderr.encoding stderr.encoding`.

**参见**

- ##stderr.encoding stderr.encoding
