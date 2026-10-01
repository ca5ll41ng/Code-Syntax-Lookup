---
id: "java-en-function-stringwriter-close"
language: "java"
lang: "en"
category: "function"
name: "StringWriter.close"
signature: "public void close() throws IOException"
title: "StringWriter.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StringWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringWriter.close

```java
public void close() throws IOException
```

Closing a `StringWriter` has no effect. The methods in this
 class can be called after the stream has been closed without generating
 an `IOException`.
