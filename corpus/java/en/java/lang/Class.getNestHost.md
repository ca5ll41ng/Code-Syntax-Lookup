---
id: "java-en-function-class-getnesthost"
language: "java"
lang: "en"
category: "function"
name: "Class.getNestHost"
signature: "public Class<?> getNestHost()"
title: "Class.getNestHost"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getNestHost

```java
public Class<?> getNestHost()
```

Returns the nest host of the nest to which the class
 or interface represented by this `Class` object belongs.
 Every class and interface belongs to exactly one nest.

 If the nest host of this class or interface has previously
 been determined, then this method returns the nest host.
 If the nest host of this class or interface has
 not previously been determined, then this method determines the nest
 host using the algorithm of JVMS 5.4.4, and returns it.

 Often, a class or interface belongs to a nest consisting only of itself,
 in which case this method returns `this` to indicate that the class
 or interface is the nest host.

 

If this `Class` object represents a primitive type, an array type,
 or `void`, then this method returns `this`,
 indicating that the represented entity belongs to the nest consisting only of
 itself, and is the nest host.

**返回**

- the nest host of this class or interface

> *Since 11*
