---
id: "java-en-function-streamhandler-close"
language: "java"
lang: "en"
category: "function"
name: "StreamHandler.close"
signature: "public synchronized void close()"
title: "StreamHandler.close"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/StreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamHandler.close

```java
public synchronized void close()
```

Close the current output stream.
 

 The `Formatter`'s "tail" string is written to the stream before it
 is closed.  In addition, if the `Formatter`'s "head" string has not
 yet been written to the stream, it will be written before the
 "tail" string.
