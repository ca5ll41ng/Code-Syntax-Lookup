---
id: "java-en-function-bytearrayoutputstream-close"
language: "java"
lang: "en"
category: "function"
name: "ByteArrayOutputStream.close"
signature: "public void close() throws IOException"
title: "ByteArrayOutputStream.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ByteArrayOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ByteArrayOutputStream.close

```java
public void close() throws IOException
```

Closing a `ByteArrayOutputStream` has no effect. The methods in
 this class can be called after the stream has been closed without
 generating an `IOException`.
