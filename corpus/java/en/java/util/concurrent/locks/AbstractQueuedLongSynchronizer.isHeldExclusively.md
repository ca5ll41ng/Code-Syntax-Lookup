---
id: "java-en-function-abstractqueuedlongsynchronizer-isheldexclusively"
language: "java"
lang: "en"
category: "function"
name: "AbstractQueuedLongSynchronizer.isHeldExclusively"
signature: "protected boolean isHeldExclusively()"
title: "AbstractQueuedLongSynchronizer.isHeldExclusively"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/AbstractQueuedLongSynchronizer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueuedLongSynchronizer.isHeldExclusively

```java
protected boolean isHeldExclusively()
```

Returns `true` if synchronization is held exclusively with
 respect to the current (calling) thread.  This method is invoked
 upon each call to a `ConditionObject` method.

 

The default implementation throws `UnsupportedOperationException`. This method is invoked
 internally only within `ConditionObject` methods, so need
 not be defined if conditions are not used.

**返回**

- `true` if synchronization is held exclusively; `false` otherwise

**异常**

- **UnsupportedOperationException** — if conditions are not supported
