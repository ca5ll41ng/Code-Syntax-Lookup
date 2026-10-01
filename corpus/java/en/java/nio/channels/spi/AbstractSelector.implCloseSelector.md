---
id: "java-en-function-abstractselector-implcloseselector"
language: "java"
lang: "en"
category: "function"
name: "AbstractSelector.implCloseSelector"
signature: "protected abstract void implCloseSelector() throws IOException"
title: "AbstractSelector.implCloseSelector"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/AbstractSelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractSelector.implCloseSelector

```java
protected abstract void implCloseSelector() throws IOException
```

Closes this selector.

 

 This method is invoked by the `close close` method in order
 to perform the actual work of closing the selector.  This method is only
 invoked if the selector has not yet been closed, and it is never invoked
 more than once.

 

 An implementation of this method must arrange for any other thread
 that is blocked in a selection operation upon this selector to return
 immediately as if by invoking the `wakeup wakeup` method.

**异常**

- **IOException** — If an I/O error occurs while closing the selector
