---
id: "java-en-function-console-charset"
language: "java"
lang: "en"
category: "function"
name: "Console.charset"
signature: "public Charset charset()"
title: "Console.charset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Console.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Console.charset

```java
public Charset charset()
```

{@return the `java.nio.charset.Charset Charset` object used for
 the write operations on this `Console`}
 

 The returned charset is used for encoding the data that is sent to
 the output (e.g., display), specified by the host environment or user.
 It defaults to the one based on `#stdout.encoding stdout.encoding`,
 and may not necessarily be the same as the default charset returned from
 `defaultCharset`.

> *Since 17*
