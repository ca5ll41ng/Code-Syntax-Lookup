---
id: "java-en-function-linenumberreader-read"
language: "java"
lang: "en"
category: "function"
name: "LineNumberReader.read"
signature: "public int read() throws IOException"
title: "LineNumberReader.read"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/LineNumberReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberReader.read

```java
public int read() throws IOException
```

Read a single character.  Line terminators are
 compressed into single newline ('\n') characters.  The current line
 number is incremented whenever a line terminator is read, or when the
 end of the stream is reached and the last character in the stream is
 not a line terminator.

**返回**

- The character read, or -1 if the end of the stream has been reached

**异常**

- **IOException** — If an I/O error occurs
