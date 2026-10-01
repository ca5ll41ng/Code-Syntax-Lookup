---
id: "java-en-function-java-util-abstractqueue"
language: "java"
lang: "en"
category: "function"
name: "java.util.AbstractQueue"
title: "AbstractQueue"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/AbstractQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractQueue

This class provides skeletal implementations of some `Queue`
 operations. The implementations in this class are appropriate when
 the base implementation does not allow `null`
 elements.  Methods `add add`, `remove remove`, and
 `element element` are based on `offer offer`, `poll poll`, and `peek peek`, respectively, but throw
 exceptions instead of indicating failure via `false` or
 `null` returns.

 

A `Queue` implementation that extends this class must
 minimally define a method `offer` which does not permit
 insertion of `null` elements, along with methods `peek`, `poll`, `size`, and
 `iterator`.  Typically, additional methods will be
 overridden as well.  If these requirements cannot be met, consider
 instead subclassing `AbstractCollection`.

 

This class is a member of the
 
 Java Collections Framework.

**参数**

- **the** — type of elements held in this queue

> *Since 1.5*
