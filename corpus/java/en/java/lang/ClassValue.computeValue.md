---
id: "java-en-function-classvalue-computevalue"
language: "java"
lang: "en"
category: "function"
name: "ClassValue.computeValue"
signature: "protected abstract T computeValue(Class<?> type)"
title: "ClassValue.computeValue"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ClassValue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassValue.computeValue

```java
protected abstract T computeValue(Class<?> type)
```

Computes the value to associate to the given `Class`.
 

 This method is invoked when the initial read-only access by `get
 get` finds no associated value.
 

 If this method throws an exception, the initiating `get` call will
 not attempt to associate a value, and may terminate by returning the
 associated value if it exists, or by propagating that exception otherwise.
 

 Otherwise, the value is computed and returned.  An attempt to associate
 the return value happens, with one of the following outcomes:
 
 
- The associated value is present; it is returned and no association
 is done.
 
- The most recent `remove remove` call, if it exists, does not
 happen-before (JLS {@jls 17.4.5}) the finish of the `computeValue`
 that computed the value to associate.  A new invocation to `computeValue`, which that `remove` call happens-before, will
 re-establish this happens-before relationship.
 
- Otherwise, this value is successfully associated and returned.
 

 A `computeValue` call may, due to class loading or other
 circumstances, recursively call `get` or `remove` for the
 same `type`.  The recursive `get`, if the recursion stops,
 successfully finishes and this initiating `get` observes the
 associated value from recursion.  The recursive `remove` is no-op,
 since being on the same thread, the `remove` already happens-before
 the finish of this `computeValue`; the result from this `computeValue` still may be associated.

**参数**

- **type** — the `Class` to associate a value to

**返回**

- the newly computed value to associate

**参见**

- #get
- #remove
