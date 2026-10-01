---
id: "java-en-function-mbeanserverpermission-implies"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerPermission.implies"
signature: "public boolean implies(Permission p)"
title: "MBeanServerPermission.implies"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerPermission.implies

```java
public boolean implies(Permission p)
```

Checks if this MBeanServerPermission object "implies" the specified
 permission.

 

More specifically, this method returns true if:

 
 
-  p is an instance of MBeanServerPermission,
 
-  p's target names are a subset of this object's target
 names
 

 

The createMBeanServer permission implies the
 newMBeanServer permission.

**参数**

- **p** — the permission to check against.

**返回**

- true if the specified permission is implied by this object, false if not.
