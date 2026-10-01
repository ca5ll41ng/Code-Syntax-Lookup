---
id: "java-en-function-bufferedreader-readline"
language: "java"
lang: "en"
category: "function"
name: "BufferedReader.readLine"
signature: "public String readLine() throws IOException"
title: "BufferedReader.readLine"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferedReader.readLine

```java
public String readLine() throws IOException
```

Reads a line of text.  A line is considered to be terminated by any one
 of a line feed ('\n'), a carriage return ('\r'), a carriage return
 followed immediately by a line feed, or by reaching the end-of-file
 (EOF).

**返回**

- A String containing the contents of the line, not including any line-termination characters, or null if the end of the stream has been reached without reading any characters

**异常**

- **IOException** — If an I/O error occurs

**参见**

- java.nio.file.Files#readAllLines
