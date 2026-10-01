---
id: "java-en-function-mbeanpermission-mbeanpermission"
language: "java"
lang: "en"
category: "function"
name: "MBeanPermission.MBeanPermission"
signature: "public MBeanPermission(String name, String actions)"
title: "MBeanPermission.MBeanPermission"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanPermission.MBeanPermission

```java
public MBeanPermission(String name, String actions)
```

Create a new MBeanPermission object with the specified target name
 and actions.

 

The target name is of the form
 "className#member[objectName]" where each part is
 optional.  It must not be empty or null.

 

The actions parameter contains a comma-separated list of the
 desired actions granted on the target name.  It must not be
 empty or null.

**参数**

- **name** — the triplet "className#member[objectName]".
- **actions** — the action string.

**异常**

- **IllegalArgumentException** — if the name or actions is invalid.
