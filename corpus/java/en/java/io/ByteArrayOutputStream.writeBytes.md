---
id: "java-en-function-bytearrayoutputstream-writebytes"
language: "java"
lang: "en"
category: "function"
name: "ByteArrayOutputStream.writeBytes"
signature: "public void writeBytes(byte[] b)"
title: "ByteArrayOutputStream.writeBytes"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayOutputStream.writeBytes

```java
public void writeBytes(byte[] b)
```

Writes the complete contents of the specified byte array
 to this `ByteArrayOutputStream`.

 This method is equivalent to `write(byte[],int,int)
 write`.

**参数**

- **b** — the data.

**异常**

- **NullPointerException** — if `b` is `null`.

> *Since 11*
