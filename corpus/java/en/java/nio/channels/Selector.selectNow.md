---
id: "java-en-function-selector-selectnow"
language: "java"
lang: "en"
category: "function"
name: "Selector.selectNow"
signature: "public abstract int selectNow() throws IOException"
title: "Selector.selectNow"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Selector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Selector.selectNow

```java
public abstract int selectNow() throws IOException
```

Selects a set of keys whose corresponding channels are ready for I/O
 operations.

 

 This method performs a non-blocking selection
 operation.  If no channels have become selectable since the previous
 selection operation then this method immediately returns zero.

 

 Invoking this method clears the effect of any previous invocations
 of the `wakeup wakeup` method.

**返回**

- The number of keys, possibly zero, whose ready-operation sets now indicate readiness for at least one category of operations for which the channel was not previously detected to be ready

**异常**

- **IOException** — If an I/O error occurs
- **ClosedSelectorException** — If this selector is closed
