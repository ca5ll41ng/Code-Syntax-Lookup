---
id: "java-en-function-printstream-print"
language: "java"
lang: "en"
category: "function"
name: "PrintStream.print"
signature: "public void print(boolean b)"
title: "PrintStream.print"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintStream.print

```java
public void print(boolean b)
```

Prints a boolean value.  The string produced by `valueOf` is translated into bytes
 according to the default charset, and these bytes
 are written in exactly the manner of the
 `write` method.

**参数**

- **b** — The `boolean` to be printed

**参见**

- Charset#defaultCharset()
