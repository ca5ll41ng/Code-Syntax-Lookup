---
id: "java-en-function-reference-get"
language: "java"
lang: "en"
category: "function"
name: "Reference.get"
signature: "public T get()"
title: "Reference.get"
directive: "method"
module: "java.base/java.lang.ref"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/Reference.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Reference.get

```java
public T get()
```

Returns this reference object's referent.  If this reference object has
 been cleared, either by the program or by the garbage collector, then
 this method returns `null`.

 This method returns a strong reference to the referent. This may cause
 the garbage collector to treat it as strongly reachable until some later
 collection cycle.  The `refersTo(Object) refersTo` method can be
 used to avoid such strengthening when testing whether some object is
 the referent of a reference object; that is, use `ref.refersTo(obj)`
 rather than `ref.get() == obj`.

**返回**

- The object to which this reference refers, or `null` if this reference object has been cleared

**参见**

- #refersTo
