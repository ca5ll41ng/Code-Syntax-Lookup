---
id: "java-en-function-linenumberreader-readline"
language: "java"
lang: "en"
category: "function"
name: "LineNumberReader.readLine"
signature: "public String readLine() throws IOException"
title: "LineNumberReader.readLine"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/LineNumberReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LineNumberReader.readLine

```java
public String readLine() throws IOException
```

Read a line of text.  Line terminators are compressed
 into single newline ('\n') characters. The current line number is
 incremented whenever a line terminator is read, or when the end of the
 stream is reached and the last character in the stream is not a line
 terminator.

**返回**

- A String containing the contents of the line, not including any line termination characters, or `null` if the end of the stream has been reached

**异常**

- **IOException** — If an I/O error occurs
