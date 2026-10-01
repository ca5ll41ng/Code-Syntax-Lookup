---
id: "java-en-function-role-role"
language: "java"
lang: "en"
category: "function"
name: "Role.Role"
signature: "public Role(String roleName, List<ObjectName> roleValue) throws IllegalArgumentException"
title: "Role.Role"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/Role.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Role.Role

```java
public Role(String roleName, List<ObjectName> roleValue) throws IllegalArgumentException
```

Make a new Role object.
 No check is made that the ObjectNames in the role value exist in
 an MBean server.  That check will be made when the role is set
 in a relation.

**参数**

- **roleName** — role name
- **roleValue** — role value (List of ObjectName objects)

**异常**

- **IllegalArgumentException** — if null parameter
