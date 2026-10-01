---
id: "java-en-function-printwriter-write"
language: "java"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["xss-servlet"],"cwe":["CWE-79"],"params":[0,2]}
name: "PrintWriter.write"
signature: "public void write(int c)"
title: "PrintWriter.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintWriter.write

```java
public void write(int c)
```

Writes a single character.

**参数**

- **c** — int specifying a character to be written.
