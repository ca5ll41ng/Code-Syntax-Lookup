---
id: "java-en-function-io-readln"
language: "java"
lang: "en"
category: "function"
name: "IO.readln"
signature: "public static String readln()"
title: "IO.readln"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/IO.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IO.readln

```java
public static String readln()
```

Reads a single line of text from the standard input.
 

 One line is read from the decoded input as if by
 `readLine`
 and then the result is returned.
 

 If necessary, this method first sets up charset decoding, as described in
 above in the class specification.

**返回**

- a string containing the line read from the standard input, not including any line separator characters. Returns `null` if an end of stream has been reached without having read any characters.

**异常**

- **IOError** — if an I/O error occurs
