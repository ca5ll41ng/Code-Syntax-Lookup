---
id: "java-en-function-switchpoint-hasbeeninvalidated"
language: "java"
lang: "en"
category: "function"
name: "SwitchPoint.hasBeenInvalidated"
signature: "public boolean hasBeenInvalidated()"
title: "SwitchPoint.hasBeenInvalidated"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/SwitchPoint.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SwitchPoint.hasBeenInvalidated

```java
public boolean hasBeenInvalidated()
```

Determines if this switch point has been invalidated yet.

 
 Discussion:
 Because of the one-way nature of invalidation, once a switch point begins
 to return true for `hasBeenInvalidated`,
 it will always do so in the future.
 On the other hand, a valid switch point visible to other threads may
 be invalidated at any moment, due to a request by another thread.
 
 Since invalidation is a global and immediate operation,
 the execution of this query, on a valid switchpoint,
 must be internally sequenced with any
 other threads that could cause invalidation.
 This query may therefore be expensive.
 The recommended way to build a boolean-valued method handle
 which queries the invalidation state of a switch point `s` is
 to call `s.guardWithTest` on
 `constant constant` true and false method handles.

**返回**

- true if this switch point has been invalidated
