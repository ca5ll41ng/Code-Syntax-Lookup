---
id: "java-en-function-rolelist-addall"
language: "java"
lang: "en"
category: "function"
name: "RoleList.addAll"
signature: "public boolean addAll(RoleList roleList) throws IndexOutOfBoundsException"
title: "RoleList.addAll"
directive: "method"
module: "java.management/javax.management.relation"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/relation/RoleList.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RoleList.addAll

```java
public boolean addAll(RoleList roleList) throws IndexOutOfBoundsException
```

Appends all the elements in the RoleList specified to the end
 of the list, in the order in which they are returned by the Iterator of
 the RoleList specified.

**参数**

- **roleList** — Elements to be inserted into the list (can be null)

**返回**

- true if this list changed as a result of the call.

**异常**

- **IndexOutOfBoundsException** — if accessing with an index outside of the list.

**参见**

- ArrayList#addAll(Collection)
