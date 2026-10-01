---
id: "java-en-function-objectinputstream-readstreamheader"
language: "java"
lang: "en"
category: "function"
name: "ObjectInputStream.readStreamHeader"
signature: "protected void readStreamHeader() throws IOException, StreamCorruptedException"
title: "ObjectInputStream.readStreamHeader"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectInputStream.readStreamHeader

```java
protected void readStreamHeader() throws IOException, StreamCorruptedException
```

The readStreamHeader method is provided to allow subclasses to read and
 verify their own stream headers. It reads and verifies the magic number
 and version number.

**异常**

- **IOException** — if there are I/O errors while reading from the underlying `InputStream`
- **StreamCorruptedException** — if control information in the stream is inconsistent
