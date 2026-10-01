---
id: "java-en-function-bytearrayinputstream-close"
language: "java"
lang: "en"
category: "function"
name: "ByteArrayInputStream.close"
signature: "public void close() throws IOException"
title: "ByteArrayInputStream.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayInputStream.close

```java
public void close() throws IOException
```

Closing a `ByteArrayInputStream` has no effect. The methods in
 this class can be called after the stream has been closed without
 generating an `IOException`.
