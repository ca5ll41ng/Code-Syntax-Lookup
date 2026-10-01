---
id: "java-en-function-objectinputstream-readutf"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.readUTF"
signature: "public String readUTF() throws IOException"
title: "ObjectInputStream.readUTF"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.readUTF

```java
public String readUTF() throws IOException
```

Reads a String in
 modified UTF-8
 format.

**返回**

- the String.

**异常**

- **IOException** — if there are I/O errors while reading from the underlying `InputStream`
- **UTFDataFormatException** — if read bytes do not represent a valid modified UTF-8 encoding of a string
