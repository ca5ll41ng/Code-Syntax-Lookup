---
id: "java-en-function-sequenceinputstream-close"
language: "java"
lang: "en"
category: "function"
name: "SequenceInputStream.close"
signature: "public void close() throws IOException"
title: "SequenceInputStream.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/SequenceInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequenceInputStream.close

```java
public void close() throws IOException
```

{@inheritDoc}
 A closed `SequenceInputStream`
 cannot  perform input operations and cannot
 be reopened.
 

 If this stream was created
 from an enumeration, all remaining elements
 are requested from the enumeration and closed
 before the `close` method returns.

**异常**

- **IOException** — {@inheritDoc}
