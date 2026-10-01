---
id: "java-en-function-stringreader-close"
language: "java"
lang: "en"
category: "function"
name: "StringReader.close"
signature: "public void close()"
title: "StringReader.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/StringReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringReader.close

```java
public void close()
```

Closes the stream and releases any system resources associated with
 it. Once the stream has been closed, further read(),
 ready(), mark(), or reset() invocations will throw an IOException.
 Closing a previously closed stream has no effect. This method will block
 while there is another thread blocking on the reader.
