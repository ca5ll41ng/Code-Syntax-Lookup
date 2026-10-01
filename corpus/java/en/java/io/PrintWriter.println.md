---
id: "java-en-function-printwriter-println"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["xss-servlet"],"cwe":["CWE-79"],"params":[0]}
name: "PrintWriter.println"
signature: "public void println()"
title: "PrintWriter.println"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintWriter.println

```java
public void println()
```

Terminates the current line by writing the line separator string.  The
 line separator is `lineSeparator` and is not necessarily
 a single newline character (`'\n'`).
