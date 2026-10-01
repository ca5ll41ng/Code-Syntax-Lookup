---
id: "java-en-function-java-util-enumeration"
language: "java"
lang: "en"
category: "function"
name: "java.util.Enumeration"
title: "Enumeration"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Enumeration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Enumeration

An object that implements the Enumeration interface generates a
 series of elements, one at a time. Successive calls to the
 `nextElement` method return successive elements of the
 series.
 

 For example, to print all elements of a `Vector` v:
 
```

   for (Enumeration&lt;E&gt; e = v.elements(); e.hasMoreElements();)
       System.out.println(e.nextElement());
```

 

 Methods are provided to enumerate through the elements of a
 vector, the keys of a hashtable, and the values in a hashtable.
 Enumerations are also used to specify the input streams to a
 `SequenceInputStream`.

 The functionality of this interface is duplicated by the `Iterator`
 interface.  In addition, `Iterator` adds an optional remove operation,
 and has shorter method names.  New implementations should consider using
 `Iterator` in preference to `Enumeration`. It is possible to
 adapt an `Enumeration` to an `Iterator` by using the
 `asIterator` method.

**参数**

- **the** — type of elements returned by this enumeration

**参见**

- java.util.Iterator
- java.io.SequenceInputStream
- java.util.Enumeration#nextElement()
- java.util.Hashtable
- java.util.Hashtable#elements()
- java.util.Hashtable#keys()
- java.util.Vector
- java.util.Vector#elements()

> *Since 1.0*
