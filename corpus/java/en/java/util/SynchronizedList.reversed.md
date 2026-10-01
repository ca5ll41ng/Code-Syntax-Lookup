---
id: "java-en-function-synchronizedlist-reversed"
language: "java"
lang: "en"
category: "function"
name: "SynchronizedList.reversed"
signature: "public List<E> reversed()"
title: "SynchronizedList.reversed"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SynchronizedList.reversed

```java
public List<E> reversed()
```

Reversed view handling. The reversedView field is transient
 and is initialized to null upon construction of the wrapper
 and upon deserialization. Reversed views are not serializable.
 The reversed view is created on first call to the reversed()
 method.

 There are four objects at play here:

 L = original list
 Lr = reversed view of original list
 S = synchronized forward wrapper: its backing list is L
 Sr = synchronized reversed wrapper: its backing list is Lr

 The reversedView field of S points to Sr and vice versa.
 This enables the reversed() method always to return the same
 object, and for S.reversed().reversed() to return S. This isn't
 strictly necessary, because all internal locking is done on S
 (which is passed around as mutex). But in the case where the
 client does external locking, it's good to minimize the number
 of different instances. Note however that external locking on
 the reversed wrapper Sr can't be made to work properly with
 internal or external locking on the forward wrapper S. (Sublists
 of a synchronized wrapper, reversed or not, have the same issue.)

 An alternative would be to have a ReversedSynchronizedList view class. However,
 that would require two extra classes (one RandomAccess and one not) and it would
 complicate the serialization story.
