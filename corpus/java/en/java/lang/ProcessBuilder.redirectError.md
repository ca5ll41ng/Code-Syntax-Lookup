---
id: "java-en-function-processbuilder-redirecterror"
language: "java"
lang: "en"
category: "function"
name: "ProcessBuilder.redirectError"
signature: "public ProcessBuilder redirectError(Redirect destination)"
title: "ProcessBuilder.redirectError"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessBuilder.redirectError

```java
public ProcessBuilder redirectError(Redirect destination)
```

Sets this process builder's standard error destination.

 Subprocesses subsequently started by this object's `start`
 method send their standard error to this destination.

 

If the destination is `PIPE Redirect.PIPE`
 (the initial value), then the error output of a subprocess
 can be read using the input stream returned by `getErrorStream`.
 If the destination is set to any other value, then
 `getErrorStream` will return a
 null input stream.

 

If the `redirectErrorStream() redirectErrorStream`
 attribute has been set `true`, then the redirection set
 by this method has no effect.

**参数**

- **destination** — the new standard error destination

**返回**

- this process builder

**异常**

- **IllegalArgumentException** — if the redirect does not correspond to a valid destination of data, that is, has type `READ READ`

> *Since 1.7*
