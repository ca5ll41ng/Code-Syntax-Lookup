---
id: "java-en-function-processbuilder-redirectinput"
language: "java"
lang: "en"
category: "function"
name: "ProcessBuilder.redirectInput"
signature: "public ProcessBuilder redirectInput(Redirect source)"
title: "ProcessBuilder.redirectInput"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ProcessBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProcessBuilder.redirectInput

```java
public ProcessBuilder redirectInput(Redirect source)
```

Sets this process builder's standard input source.

 Subprocesses subsequently started by this object's `start`
 method obtain their standard input from this source.

 

If the source is `PIPE Redirect.PIPE`
 (the initial value), then the standard input of a
 subprocess can be written to using the output stream
 returned by `getOutputStream`.
 If the source is set to any other value, then
 `getOutputStream` will return a
 null output stream.

**参数**

- **source** — the new standard input source

**返回**

- this process builder

**异常**

- **IllegalArgumentException** — if the redirect does not correspond to a valid source of data, that is, has type `WRITE WRITE` or `APPEND APPEND`

> *Since 1.7*
