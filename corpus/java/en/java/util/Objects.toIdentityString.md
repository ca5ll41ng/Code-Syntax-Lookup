---
id: "java-en-function-objects-toidentitystring"
language: "java"
lang: "en"
category: "function"
name: "Objects.toIdentityString"
signature: "public static String toIdentityString(Object o)"
title: "Objects.toIdentityString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Objects.toIdentityString

```java
public static String toIdentityString(Object o)
```

{@return a string equivalent to the string returned by `Object.toString` if that method and `hashCode` are not
 overridden}

 
      
          Note that, like ==, the hash code string exposes information about a value object's
          private fields that might otherwise be hidden by an identity object.
          Developers should be cautious about storing sensitive secrets in value object fields.
      
 

 This method constructs a string for an object without calling
 any overridable methods of the object.

 The method returns a string equivalent to:

 `o.getClass().getName() + "@" + Integer.toHexString(System.identityHashCode(o))`

**参数**

- **o** — an object

**异常**

- **NullPointerException** — if the argument is null

**参见**

- Object#toString
- System#identityHashCode(Object)

> *Since 19*
