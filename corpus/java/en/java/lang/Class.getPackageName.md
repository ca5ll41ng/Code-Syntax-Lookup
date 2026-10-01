---
id: "java-en-function-class-getpackagename"
language: "java"
lang: "en"
category: "function"
name: "Class.getPackageName"
signature: "public String getPackageName()"
title: "Class.getPackageName"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.getPackageName

```java
public String getPackageName()
```

Returns the fully qualified package name.

 

 If this class is a top level class, then this method returns the fully
 qualified name of the package that the class is a member of, or the
 empty string if the class is in an unnamed package.

 

 If this class is a member class, then this method is equivalent to
 invoking `getPackageName()` on the `getEnclosingClass
 enclosing class`.

 

 If this class is a `isLocalClass local class` or an `isAnonymousClass() anonymous class`, then this method is equivalent to
 invoking `getPackageName()` on the `getDeclaringClass
 declaring class` of the `getEnclosingMethod enclosing method` or
 `getEnclosingConstructor enclosing constructor`.

 

 If this class represents an array type then this method returns the
 package name of the element type. If this class represents a primitive
 type or void then the package name "`java.lang`" is returned.

**返回**

- the fully qualified package name

> *Since 9*
