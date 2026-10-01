---
id: "java-en-function-processbuilder-redirectoutput"
language: "java"
lang: "en"
category: "function"
name: "ProcessBuilder.redirectOutput"
signature: "public ProcessBuilder redirectOutput(Redirect destination)"
title: "ProcessBuilder.redirectOutput"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessBuilder.redirectOutput

```java
public ProcessBuilder redirectOutput(Redirect destination)
```

Sets this process builder's standard output destination.

 Subprocesses subsequently started by this object's `start`
 method send their standard output to this destination.

 

If the destination is `PIPE Redirect.PIPE`
 (the initial value), then the standard output of a subprocess
 can be read using the input stream returned by `getInputStream`.
 If the destination is set to any other value, then
 `getInputStream` will return a
 null input stream.

**参数**

- **destination** — the new standard output destination

**返回**

- this process builder

**异常**

- **IllegalArgumentException** — if the redirect does not correspond to a valid destination of data, that is, has type `READ READ`

> *Since 1.7*
