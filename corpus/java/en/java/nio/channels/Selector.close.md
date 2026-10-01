---
id: "java-en-function-selector-close"
language: "java"
lang: "en"
category: "function"
name: "Selector.close"
signature: "public abstract void close() throws IOException"
title: "Selector.close"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Selector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Selector.close

```java
public abstract void close() throws IOException
```

Closes this selector.

 

 If a thread is currently blocked in one of this selector's selection
 methods then it is interrupted as if by invoking the selector's `wakeup wakeup` method.

 

 Any uncancelled keys still associated with this selector are
 invalidated, their channels are deregistered, and any other resources
 associated with this selector are released.

 

 If this selector is already closed then invoking this method has no
 effect.

 

 After a selector is closed, any further attempt to use it, except by
 invoking this method or the `wakeup wakeup` method, will cause a
 `ClosedSelectorException` to be thrown.

**异常**

- **IOException** — If an I/O error occurs
