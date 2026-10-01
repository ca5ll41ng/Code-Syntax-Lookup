---
id: "java-en-function-objectoutputstream-reset"
language: "java"
lang: "en"
category: "function"
name: "ObjectOutputStream.reset"
signature: "public void reset() throws IOException"
title: "ObjectOutputStream.reset"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ObjectOutputStream.reset

```java
public void reset() throws IOException
```

Reset will disregard the state of any objects already written to the
 stream.  The state is reset to be the same as a new ObjectOutputStream.
 The current point in the stream is marked as reset so the corresponding
 ObjectInputStream will be reset at the same point.  Objects previously
 written to the stream will not be referred to as already being in the
 stream.  They will be written to the stream again.

**异常**

- **IOException** — if reset() is invoked while serializing an object.
