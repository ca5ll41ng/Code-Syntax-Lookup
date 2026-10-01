---
id: "java-en-function-streamhandler-setoutputstream"
language: "java"
lang: "en"
category: "function"
name: "StreamHandler.setOutputStream"
signature: "protected synchronized void setOutputStream(OutputStream out)"
title: "StreamHandler.setOutputStream"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/StreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamHandler.setOutputStream

```java
protected synchronized void setOutputStream(OutputStream out)
```

Change the output stream.
 

 If there is a current output stream then the `Formatter`'s
 tail string is written and the stream is flushed and closed.
 Then the output stream is replaced with the new output stream.

**参数**

- **out** — New output stream.  May not be null.
