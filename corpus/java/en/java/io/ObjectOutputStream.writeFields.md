---
id: "java-en-function-objectoutputstream-writefields"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.writeFields"
signature: "public void writeFields() throws IOException"
title: "ObjectOutputStream.writeFields"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.writeFields

```java
public void writeFields() throws IOException
```

Write the buffered fields to the stream.

**异常**

- **IOException** — if I/O errors occur while writing to the underlying stream
- **NotActiveException** — Called when a classes writeObject method was not called to write the state of the object.

> *Since 1.2*
