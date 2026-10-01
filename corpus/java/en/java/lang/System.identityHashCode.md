---
id: "java-en-function-system-identityhashcode"
language: "java"
lang: "en"
category: "function"
name: "System.identityHashCode"
signature: "public static native int identityHashCode(Object x)"
title: "System.identityHashCode"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# System.identityHashCode

```java
public static native int identityHashCode(Object x)
```

Returns the same hash code for the given object as
 would be returned by the default method hashCode(),
 whether or not the given object's class overrides
 hashCode().
 The hash code for the null reference is zero.

 
      
          The "identity hash code" of a `isValue() value object`
          is computed by combining the identity hash codes of the value object's fields recursively.
      
 
 
      
          Note that, like ==, this hash code exposes information about a value object's
          private fields that might otherwise be hidden by an identity object.
          Developers should be cautious about storing sensitive secrets in value object fields.

**参数**

- **x** — object for which the hashCode is to be calculated

**返回**

- the hashCode

**参见**

- Object#hashCode
- java.util.Objects#hashCode(Object)

> *Since 1.1*
