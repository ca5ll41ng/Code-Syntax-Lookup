---
id: "java-en-function-printstream-clearerror"
language: "java"
lang: "en"
category: "function"
name: "PrintStream.clearError"
signature: "protected void clearError()"
title: "PrintStream.clearError"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintStream.clearError

```java
protected void clearError()
```

Clears the error state of this stream.

 

 This method will cause subsequent invocations of `checkError` to return `false` until another write
 operation fails and invokes `setError`.

> *Since 1.6*
