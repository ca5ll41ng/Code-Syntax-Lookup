---
id: "java-en-function-fileinputstream-close"
language: "java"
lang: "en"
category: "function"
name: "FileInputStream.close"
signature: "public void close() throws IOException"
title: "FileInputStream.close"
directive: "method"
module: "java.base/java.io"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/FileInputStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileInputStream.close

```java
public void close() throws IOException
```

Closes this file input stream and releases any system resources
 associated with the stream.

 

 If this stream has an associated channel then the channel is closed
 as well.

 Overriding `close` to perform cleanup actions is reliable
 only when called directly or when called by try-with-resources.

 Subclasses requiring that resource cleanup take place after a stream becomes
 unreachable should use the `java.lang.ref.Cleaner` mechanism.

 

 If this stream has an associated channel then this method will close the
 channel, which in turn will close this stream. Subclasses that override
 this method should be prepared to handle possible reentrant invocation.

**异常**

- **IOException** — {@inheritDoc}
