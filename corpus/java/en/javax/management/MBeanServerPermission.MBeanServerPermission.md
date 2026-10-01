---
id: "java-en-function-mbeanserverpermission-mbeanserverpermission"
language: "java"
lang: "en"
category: "function"
name: "MBeanServerPermission.MBeanServerPermission"
signature: "public MBeanServerPermission(String name)"
title: "MBeanServerPermission.MBeanServerPermission"
directive: "method"
module: "java.management/javax.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/MBeanServerPermission.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MBeanServerPermission.MBeanServerPermission

```java
public MBeanServerPermission(String name)
```

Create a new MBeanServerPermission with the given name.
        

This constructor is equivalent to
        MBeanServerPermission(name,null).

**参数**

- **name** — the name of the granted permission.  It must respect the constraints spelt out in the description of the `MBeanServerPermission` class.

**异常**

- **NullPointerException** — if the name is null.
- **IllegalArgumentException** — if the name is not * or one of the allowed names or a comma-separated list of the allowed names.
