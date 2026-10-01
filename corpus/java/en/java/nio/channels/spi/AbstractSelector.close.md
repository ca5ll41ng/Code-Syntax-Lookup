---
id: "java-en-function-abstractselector-close"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelector.close"
signature: "public final void close() throws IOException"
title: "AbstractSelector.close"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelector.close

```java
public final void close() throws IOException
```

Closes this selector.

 

 If the selector has already been closed then this method returns
 immediately.  Otherwise it marks the selector as closed and then invokes
 the `implCloseSelector implCloseSelector` method in order to
 complete the close operation.

**异常**

- **IOException** — If an I/O error occurs
