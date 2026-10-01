---
id: "java-en-function-mbeanpermission-implies"
language: "java"
lang: "en"
category: "function"
name: "MBeanPermission.implies"
signature: "public boolean implies(Permission p)"
title: "MBeanPermission.implies"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanPermission.implies

```java
public boolean implies(Permission p)
```

Checks if this MBeanPermission object "implies" the
 specified permission.

 

More specifically, this method returns true if:

 

 
-  p is an instance of MBeanPermission; and

 
-  p has a null className or p's className
 matches this object's className; and

 
-  p has a null member or p's member matches this
 object's member; and

 
-  p has a null object name or p's
 object name matches this object's object name; and

 
-  p's actions are a subset of this object's actions

 

 

If this object's className is "*", p's
 className always matches it.  If it is "a.*", p's
 className matches it if it begins with "a.".

 

If this object's member is "*", p's
 member always matches it.

 

If this object's objectName n1 is an object name pattern,
 p's objectName n2 matches it if
 `equals n1.equals` or if
 `apply n1.apply`.

 

A permission that includes the queryMBeans action
 is considered to include queryNames as well.

**参数**

- **p** — the permission to check against.

**返回**

- true if the specified permission is implied by this object, false if not.
