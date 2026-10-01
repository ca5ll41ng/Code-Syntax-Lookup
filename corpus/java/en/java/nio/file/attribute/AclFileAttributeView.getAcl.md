---
id: "java-en-function-aclfileattributeview-getacl"
language: "java"
lang: "en"
category: "function"
name: "AclFileAttributeView.getAcl"
signature: "List<AclEntry> getAcl() throws IOException"
title: "AclFileAttributeView.getAcl"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/AclFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AclFileAttributeView.getAcl

```java
List<AclEntry> getAcl() throws IOException
```

Reads the access control list.

 

 When the file system uses an ACL model that differs from the NFSv4
 defined ACL model, then this method returns an ACL that is the translation
 of the ACL to the NFSv4 ACL model.

 

 The returned list is modifiable so as to facilitate changes to the
 existing ACL. The `setAcl setAcl` method is used to update
 the file's ACL attribute.

**返回**

- an ordered list of `AclEntry entries` representing the ACL

**异常**

- **IOException** — if an I/O error occurs
