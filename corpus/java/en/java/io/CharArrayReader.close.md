---
id: "java-en-function-chararrayreader-close"
language: "java"
lang: "en"
category: "function"
name: "CharArrayReader.close"
signature: "public void close()"
title: "CharArrayReader.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/CharArrayReader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CharArrayReader.close

```java
public void close()
```

Closes the stream and releases any system resources associated with
 it.  Once the stream has been closed, further read(), ready(),
 mark(), reset(), or skip() invocations will throw an IOException.
 Closing a previously closed stream has no effect. This method will block
 while there is another thread blocking on the reader.
