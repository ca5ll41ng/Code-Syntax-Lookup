---
id: "java-en-function-mutablecallsite-syncall"
language: "java"
lang: "en"
category: "function"
name: "MutableCallSite.syncAll"
signature: "public static void syncAll(MutableCallSite[] sites)"
title: "MutableCallSite.syncAll"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/MutableCallSite.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MutableCallSite.syncAll

```java
public static void syncAll(MutableCallSite[] sites)
```

Performs a synchronization operation on each call site in the given array,
 forcing all other threads to throw away any cached values previously
 loaded from the target of any of the call sites.
 

 This operation does not reverse any calls that have already started
 on an old target value.
 (Java supports `wait() forward time travel` only.)
 

 The overall effect is to force all future readers of each call site's target
 to accept the most recently stored value.
 ("Most recently" is reckoned relative to the `syncAll` itself.)
 Conversely, the `syncAll` call may block until all readers have
 (somehow) decached all previous versions of each call site's target.
 

 To avoid race conditions, calls to `setTarget` and `syncAll`
 should generally be performed under some sort of mutual exclusion.
 Note that reader threads may observe an updated target as early
 as the `setTarget` call that install the value
 (and before the `syncAll` that confirms the value).
 On the other hand, reader threads may observe previous versions of
 the target until the `syncAll` call returns
 (and after the `setTarget` that attempts to convey the updated version).
 

 This operation is likely to be expensive and should be used sparingly.
 If possible, it should be buffered for batch processing on sets of call sites.
 

 If `sites` contains a null element,
 a `NullPointerException` will be raised.
 In this case, some non-null elements in the array may be
 processed before the method returns abnormally.
 Which elements these are (if any) is implementation-dependent.

 Java Memory Model details
 In terms of the Java Memory Model, this operation performs a synchronization
 action which is comparable in effect to the writing of a volatile variable
 by the current thread, and an eventual volatile read by every other thread
 that may access one of the affected call sites.
 

 The following effects are apparent, for each individual call site `S`:
 
 
- A new volatile variable `V` is created, and written by the current thread.
     As defined by the JMM, this write is a global synchronization event.
 
- As is normal with thread-local ordering of write events,
     every action already performed by the current thread is
     taken to happen before the volatile write to `V`.
     (In some implementations, this means that the current thread
     performs a global release operation.)
 
- Specifically, the write to the current target of `S` is
     taken to happen before the volatile write to `V`.
 
- The volatile write to `V` is placed
     (in an implementation specific manner)
     in the global synchronization order.
 
- Consider an arbitrary thread `T` (other than the current thread).
     If `T` executes a synchronization action `A`
     after the volatile write to `V` (in the global synchronization order),
     it is therefore required to see either the current target
     of `S`, or a later write to that target,
     if it executes a read on the target of `S`.
     (This constraint is called "synchronization-order consistency".)
 
- The JMM specifically allows optimizing compilers to elide
     reads or writes of variables that are known to be useless.
     Such elided reads and writes have no effect on the happens-before
     relation.  Regardless of this fact, the volatile `V`
     will not be elided, even though its written value is
     indeterminate and its read value is not used.
 

 Because of the last point, the implementation behaves as if a
 volatile read of `V` were performed by `T`
 immediately after its action `A`.  In the local ordering
 of actions in `T`, this read happens before any future
 read of the target of `S`.  It is as if the
 implementation arbitrarily picked a read of `S`'s target
 by `T`, and forced a read of `V` to precede it,
 thereby ensuring communication of the new target value.
 

 As long as the constraints of the Java Memory Model are obeyed,
 implementations may delay the completion of a `syncAll`
 operation while other threads (`T` above) continue to
 use previous values of `S`'s target.
 However, implementations are (as always) encouraged to avoid
 livelock, and to eventually require all threads to take account
 of the updated target.

 
 Discussion:
 For performance reasons, `syncAll` is not a virtual method
 on a single call site, but rather applies to a set of call sites.
 Some implementations may incur a large fixed overhead cost
 for processing one or more synchronization operations,
 but a small incremental cost for each additional call site.
 In any case, this operation is likely to be costly, since
 other threads may have to be somehow interrupted
 in order to make them notice the updated target value.
 However, it may be observed that a single call to synchronize
 several sites has the same formal effect as many calls,
 each on just one of the sites.

 
 Implementation Note:
 Simple implementations of `MutableCallSite` may use
 a volatile variable for the target of a mutable call site.
 In such an implementation, the `syncAll` method can be a no-op,
 and yet it will conform to the JMM behavior documented above.

**参数**

- **sites** — an array of call sites to be synchronized

**异常**

- **NullPointerException** — if the `sites` array reference is null or the array contains a null
