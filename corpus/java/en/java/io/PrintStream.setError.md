---
id: "java-en-function-printstream-seterror"
language: "java"
lang: "en"
category: "function"
name: "PrintStream.setError"
signature: "protected void setError()"
title: "PrintStream.setError"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintStream.setError

```java
protected void setError()
```

Sets the error state of the stream to `true`.

 

 This method will cause subsequent invocations of `checkError` to return `true` until
 `clearError` is invoked.

> *Since 1.1*
