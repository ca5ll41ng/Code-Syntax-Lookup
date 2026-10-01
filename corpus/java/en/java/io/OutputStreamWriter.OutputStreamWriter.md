---
id: "java-en-function-outputstreamwriter-outputstreamwriter"
language: "java"
lang: "en"
category: "function"
name: "OutputStreamWriter.OutputStreamWriter"
signature: "public OutputStreamWriter(OutputStream out, String charsetName) throws UnsupportedEncodingException"
title: "OutputStreamWriter.OutputStreamWriter"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/OutputStreamWriter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OutputStreamWriter.OutputStreamWriter

```java
public OutputStreamWriter(OutputStream out, String charsetName) throws UnsupportedEncodingException
```

Creates an OutputStreamWriter that uses the named charset.

**参数**

- **out** — An OutputStream
- **charsetName** — The name of a supported `Charset charset`

**异常**

- **UnsupportedEncodingException** — If the named encoding is not supported
