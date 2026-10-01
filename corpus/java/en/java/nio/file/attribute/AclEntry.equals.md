---
id: "java-en-function-aclentry-equals"
language: "java"
lang: "en"
category: "function"
name: "AclEntry.equals"
signature: "public boolean equals(Object ob)"
title: "AclEntry.equals"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/AclEntry.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AclEntry.equals

```java
public boolean equals(Object ob)
```

Compares the specified object with this ACL entry for equality.

 

 If the given object is not an `AclEntry` then this method
 immediately returns `false`.

 

 For two ACL entries to be considered equals requires that they are
 both the same type, their who components are equal, their permissions
 components are equal, and their flags components are equal.

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **ob** — the object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is an AclEntry that is identical to this AclEntry
