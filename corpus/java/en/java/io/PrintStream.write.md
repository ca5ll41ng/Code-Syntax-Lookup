---
id: "java-en-function-printstream-write"
language: "java"
lang: "en"
category: "function"
name: "PrintStream.write"
signature: "public void write(int b)"
title: "PrintStream.write"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintStream.write

```java
public void write(int b)
```

Writes the specified byte to this stream.  If the byte is a newline and
 automatic flushing is enabled then the `flush` method will be
 invoked on the underlying output stream.

 

 Note that the byte is written as given; to write a character that
 will be translated according to the default charset, use the
 `print(char)` or `println(char)` methods.

**参数**

- **b** — The byte to be written

**参见**

- #print(char)
- #println(char)
