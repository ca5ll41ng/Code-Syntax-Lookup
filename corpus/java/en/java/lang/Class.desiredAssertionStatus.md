---
id: "java-en-function-class-desiredassertionstatus"
language: "java"
lang: "en"
category: "function"
name: "Class.desiredAssertionStatus"
signature: "public boolean desiredAssertionStatus()"
title: "Class.desiredAssertionStatus"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Class.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Class.desiredAssertionStatus

```java
public boolean desiredAssertionStatus()
```

Returns the assertion status that would be assigned to this
 class if it were to be initialized at the time this method is invoked.
 If this class has had its assertion status set, the most recent
 setting will be returned; otherwise, if any package default assertion
 status pertains to this class, the most recent setting for the most
 specific pertinent package default assertion status is returned;
 otherwise, if this class is not a system class (i.e., it has a
 class loader) its class loader's default assertion status is returned;
 otherwise, the system class default assertion status is returned.
 

 If this `Class` object represents an array type, a primitive type,
 or void, this method returns `false`.

 Few programmers will have any need for this method; it is provided
 for the benefit of the JDK itself.  (It allows a class to determine at
 the time that it is initialized whether assertions should be enabled.)
 Note that this method is not guaranteed to return the actual
 assertion status that was (or will be) associated with the specified
 class when it was (or will be) initialized.

**返回**

- the desired assertion status of the specified class.

**参见**

- java.lang.ClassLoader#setClassAssertionStatus
- java.lang.ClassLoader#setPackageAssertionStatus
- java.lang.ClassLoader#setDefaultAssertionStatus

> *Since 1.4*
