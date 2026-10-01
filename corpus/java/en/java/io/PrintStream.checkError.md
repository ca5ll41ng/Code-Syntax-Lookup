---
id: "java-en-function-printstream-checkerror"
language: "java"
lang: "en"
category: "function"
name: "PrintStream.checkError"
signature: "public boolean checkError()"
title: "PrintStream.checkError"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintStream.checkError

```java
public boolean checkError()
```

Flushes the stream if it's not closed and checks its error state.

**返回**

- `true` if and only if this stream has encountered an `IOException`, or the `setError` method has been invoked
