---
id: "java-en-function-printstream-printstream"
language: "java"
lang: "en"
category: "function"
name: "PrintStream.PrintStream"
signature: "public PrintStream(OutputStream out)"
title: "PrintStream.PrintStream"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/PrintStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PrintStream.PrintStream

```java
public PrintStream(OutputStream out)
```

Creates a new print stream, without automatic line flushing, with the
 specified OutputStream. Characters written to the stream are converted
 to bytes using the default charset, or where `out` is a
 `PrintStream`, the charset used by the print stream.

**参数**

- **out** — The output stream to which values and objects will be printed

**参见**

- java.io.PrintWriter#PrintWriter(java.io.OutputStream)
- Charset#defaultCharset()
