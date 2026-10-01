---
id: "java-en-function-streamhandler-setencoding"
language: "java"
lang: "en"
category: "function"
name: "StreamHandler.setEncoding"
signature: "public synchronized void setEncoding(String encoding) throws java.io.UnsupportedEncodingException"
title: "StreamHandler.setEncoding"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/StreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamHandler.setEncoding

```java
public synchronized void setEncoding(String encoding) throws java.io.UnsupportedEncodingException
```

Set (or change) the character encoding used by this `Handler`.
 

 The encoding should be set before any `LogRecords` are written
 to the `Handler`.

**参数**

- **encoding** — The name of a supported character encoding. May be null, to indicate the default platform encoding.

**异常**

- **UnsupportedEncodingException** — if the named encoding is not supported.
