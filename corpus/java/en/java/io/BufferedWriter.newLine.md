---
id: "java-en-function-bufferedwriter-newline"
language: "java"
lang: "en"
category: "function"
name: "BufferedWriter.newLine"
signature: "public void newLine() throws IOException"
title: "BufferedWriter.newLine"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedWriter.newLine

```java
public void newLine() throws IOException
```

Writes a line separator.  The line separator string is defined by the
 system property `line.separator`, and is not necessarily a single
 newline ('\n') character.

**异常**

- **IOException** — If an I/O error occurs
