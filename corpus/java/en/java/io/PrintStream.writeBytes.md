---
id: "java-en-function-printstream-writebytes"
language: "java"
lang: "en"
category: "function"
name: "PrintStream.writeBytes"
signature: "public void writeBytes(byte[] buf)"
title: "PrintStream.writeBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintStream.writeBytes

```java
public void writeBytes(byte[] buf)
```

Writes all bytes from the specified byte array to this stream.
 If automatic flushing is enabled then the `flush` method
 will be invoked.

 

 Note that the bytes will be written as given; to write characters
 that will be translated according to the default charset, use the
 `print(char[])` or `println(char[])` methods.

 This method is equivalent to
 `write`.

**参数**

- **buf** — A byte array

> *Since 14*
