---
id: "java-en-function-aclfileattributeview-setacl"
language: "java"
lang: "en"
category: "function"
name: "AclFileAttributeView.setAcl"
signature: "void setAcl(List<AclEntry> acl) throws IOException"
title: "AclFileAttributeView.setAcl"
directive: "method"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/AclFileAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AclFileAttributeView.setAcl

```java
void setAcl(List<AclEntry> acl) throws IOException
```

Updates (replace) the access control list.

 

 Where the file system supports Access Control Lists, and it uses an
 ACL model that differs from the NFSv4 defined ACL model, then this method
 must translate the ACL to the model supported by the file system. This
 method should reject (by throwing `IOException IOException`) any
 attempt to write an ACL that would appear to make the file more secure
 than would be the case if the ACL were updated. Where an implementation
 does not support a mapping of `AUDIT` or `ALARM` entries, then this method ignores these entries when
 writing the ACL.

 

 If an ACL entry contains a `principal user-principal`
 that is not associated with the same provider as this attribute view then
 `ProviderMismatchException` is thrown. Additional validation, if
 any, is implementation dependent.

 

 If the file system supports other security related file attributes
 (such as a file `permissions
 access-permissions` for example), the updating the access control list
 may also cause these security related attributes to be updated.

**参数**

- **acl** — the new access control list

**异常**

- **IOException** — if an I/O error occurs or the ACL is invalid
