---
id: "java-en-function-role-rolevaluetostring"
language: "java"
lang: "en"
category: "function"
name: "Role.roleValueToString"
signature: "public static String roleValueToString(List<ObjectName> roleValue) throws IllegalArgumentException"
title: "Role.roleValueToString"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/Role.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Role.roleValueToString

```java
public static String roleValueToString(List<ObjectName> roleValue) throws IllegalArgumentException
```

Returns a string for the given role value.

**参数**

- **roleValue** — List of ObjectName objects

**返回**

- A String consisting of the ObjectNames separated by newlines (\n).

**异常**

- **IllegalArgumentException** — if null parameter
