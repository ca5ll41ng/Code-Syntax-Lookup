---
id: "java-en-function-objectoutputstream-writeutf"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.writeUTF"
signature: "public void writeUTF(String str) throws IOException"
title: "ObjectOutputStream.writeUTF"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.writeUTF

```java
public void writeUTF(String str) throws IOException
```

Primitive data write of this String in
 modified UTF-8
 format.  Note that there is a
 significant difference between writing a String into the stream as
 primitive data or as an Object. A String instance written by writeObject
 is written into the stream as a String initially. Future writeObject()
 calls write references to the string into the stream.

**参数**

- **str** — the String to be written

**异常**

- **IOException** — if I/O errors occur while writing to the underlying stream
