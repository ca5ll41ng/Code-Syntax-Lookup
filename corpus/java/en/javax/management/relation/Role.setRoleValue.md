---
id: "java-en-function-role-setrolevalue"
language: "java"
lang: "en"
category: "function"
name: "Role.setRoleValue"
signature: "public void setRoleValue(List<ObjectName> roleValue) throws IllegalArgumentException"
title: "Role.setRoleValue"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/Role.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Role.setRoleValue

```java
public void setRoleValue(List<ObjectName> roleValue) throws IllegalArgumentException
```

Sets role value.

**参数**

- **roleValue** — List of ObjectName objects for referenced MBeans.

**异常**

- **IllegalArgumentException** — if null parameter

**参见**

- #getRoleValue
