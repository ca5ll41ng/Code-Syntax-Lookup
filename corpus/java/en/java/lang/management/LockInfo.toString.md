---
id: "java-en-function-lockinfo-tostring"
language: "java"
lang: "en"
category: "function"
name: "LockInfo.toString"
signature: "public String toString()"
title: "LockInfo.toString"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/LockInfo.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LockInfo.toString

```java
public String toString()
```

Returns a string representation of a lock.  The returned
 string representation consists of the name of the class of the
 lock object, the at-sign character `@', and the unsigned
 hexadecimal representation of the identity hash code
 of the object.  This method returns a string equals to the value of:
 
```

 lock.getClass().getName() + '@' + Integer.toHexString(System.identityHashCode(lock))
 
```

 where `lock` is the lock object.

**返回**

- the string representation of a lock.
