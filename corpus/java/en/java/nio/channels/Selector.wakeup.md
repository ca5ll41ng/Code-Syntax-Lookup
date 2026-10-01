---
id: "java-en-function-selector-wakeup"
language: "java"
lang: "en"
category: "function"
name: "Selector.wakeup"
signature: "public abstract Selector wakeup()"
title: "Selector.wakeup"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/Selector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Selector.wakeup

```java
public abstract Selector wakeup()
```

Causes the first selection operation that has not yet returned to return
 immediately.

 

 If another thread is currently blocked in a selection operation then
 that invocation will return immediately.  If no selection operation is
 currently in progress then the next invocation of a selection operation
 will return immediately unless `selectNow` or `selectNow` is invoked in the meantime.  In any case the value
 returned by that invocation may be non-zero.  Subsequent selection
 operations will block as usual unless this method is invoked again in the
 meantime.

 

 Invoking this method more than once between two successive selection
 operations has the same effect as invoking it just once.

**返回**

- This selector
