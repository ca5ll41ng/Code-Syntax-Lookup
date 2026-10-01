---
id: "java-en-function-java-lang-stringbuilder"
language: "java"
lang: "en"
category: "function"
name: "java.lang.StringBuilder"
title: "StringBuilder"
directive: "type"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StringBuilder

A mutable sequence of characters.  This class provides an API compatible
 with `StringBuffer`, but with no guarantee of synchronization.
 This class is designed for use as a drop-in replacement for
 `StringBuffer` in places where the string buffer was being
 used by a single thread (as is generally the case).   Where possible,
 it is recommended that this class be used in preference to
 `StringBuffer` as it will be faster under most implementations.

 

The principal operations on a `StringBuilder` are the
 `append` and `insert` methods, which are
 overloaded so as to accept data of any type. Each effectively
 converts a given datum to a string and then appends or inserts the
 characters of that string to the string builder. The
 `append` method always adds these characters at the end
 of the builder; the `insert` method adds the characters at
 a specified point.
 

 For example, if `z` refers to a string builder object
 whose current contents are "`start`", then
 the method call `z.append("le")` would cause the string
 builder to contain "`startle`", whereas
 `z.insert(4, "le")` would alter the string builder to
 contain "`starlet`".
 

 In general, if sb refers to an instance of a `StringBuilder`,
 then `sb.append(x)` has the same effect as
 `sb.insert(sb.length(), x)`.
 

 Every string builder has a capacity. As long as the length of the
 character sequence contained in the string builder does not exceed
 the capacity, it is not necessary to allocate a new internal
 buffer. If the internal buffer overflows, it is automatically made larger.

 

Instances of `StringBuilder` are not safe for
 use by multiple threads. If such synchronization is required then it is
 recommended that `java.lang.StringBuffer` be used.

 

Unless otherwise noted, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be
 thrown.

 `StringBuilder` implements `Comparable` but does not override
 `equals equals`. Thus, the natural ordering of `StringBuilder`
 is inconsistent with equals. Care should be exercised if `StringBuilder`
 objects are used as keys in a `SortedMap` or elements in a `SortedSet`.
 See `Comparable`, `java.util.SortedMap SortedMap`, or
 `java.util.SortedSet SortedSet` for more information.

**参见**

- java.lang.StringBuffer
- java.lang.String

> *Since 1.5*
