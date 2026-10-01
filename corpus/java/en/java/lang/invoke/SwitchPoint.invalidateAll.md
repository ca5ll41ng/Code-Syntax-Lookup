---
id: "java-en-function-switchpoint-invalidateall"
language: "java"
lang: "en"
category: "function"
name: "SwitchPoint.invalidateAll"
signature: "public static void invalidateAll(SwitchPoint[] switchPoints)"
title: "SwitchPoint.invalidateAll"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/SwitchPoint.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SwitchPoint.invalidateAll

```java
public static void invalidateAll(SwitchPoint[] switchPoints)
```

Sets all of the given switch points into the invalid state.
 After this call executes, no thread will observe any of the
 switch points to be in a valid state.
 

 This operation is likely to be expensive and should be used sparingly.
 If possible, it should be buffered for batch processing on sets of switch points.
 

 If `switchPoints` contains a null element,
 a `NullPointerException` will be raised.
 In this case, some non-null elements in the array may be
 processed before the method returns abnormally.
 Which elements these are (if any) is implementation-dependent.

 
 Discussion:
 For performance reasons, `invalidateAll` is not a virtual method
 on a single switch point, but rather applies to a set of switch points.
 Some implementations may incur a large fixed overhead cost
 for processing one or more invalidation operations,
 but a small incremental cost for each additional invalidation.
 In any case, this operation is likely to be costly, since
 other threads may have to be somehow interrupted
 in order to make them notice the updated switch point state.
 However, it may be observed that a single call to invalidate
 several switch points has the same formal effect as many calls,
 each on just one of the switch points.

 
 Implementation Note:
 Simple implementations of `SwitchPoint` may use
 a private `MutableCallSite` to publish the state of a switch point.
 In such an implementation, the `invalidateAll` method can
 simply change the call site's target, and issue one call to
 `syncAll synchronize` all the
 private call sites.

**参数**

- **switchPoints** — an array of call sites to be synchronized

**异常**

- **NullPointerException** — if the `switchPoints` array reference is null or the array contains a null
