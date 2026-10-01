---
id: "java-en-function-permission-hashcode"
language: "java"
lang: "en"
category: "function"
name: "Permission.hashCode"
signature: "public abstract int hashCode()"
title: "Permission.hashCode"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Permission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Permission.hashCode

```java
public abstract int hashCode()
```

Returns the hash code value for this `Permission` object.
 

 The required `hashCode` behavior for `Permission` Objects is
 the following:
 
 
- Whenever it is invoked on the same `Permission` object more
     than once during an execution of a Java application, the
     `hashCode` method
     must consistently return the same integer. This integer need not
     remain consistent from one execution of an application to another
     execution of the same application.
 
- If two `Permission` objects are equal according to the
     `equals`
     method, then calling the `hashCode` method on each of the
     two `Permission` objects must produce the same integer result.

**返回**

- a hash code value for this object.
