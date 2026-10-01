---
id: "java-en-function-java-nio-file-attribute-userprincipal"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.UserPrincipal"
title: "UserPrincipal"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/UserPrincipal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UserPrincipal

A `Principal` representing an identity used to determine access rights
 to objects in a file system.

 

 On many platforms and file systems an entity requires appropriate access
 rights or permissions in order to access objects in a file system. The
 access rights are generally performed by checking the identity of the entity.
 For example, on implementations that use Access Control Lists (ACLs) to
 enforce privilege separation then a file in the file system may have an
 associated ACL that determines the access rights of identities specified in
 the ACL.

 

 A `UserPrincipal` object is an abstract representation of an
 identity. It has a `getName() name` that is typically the username or
 account name that it represents. User principal objects may be obtained using
 a `UserPrincipalLookupService`, or returned by `FileAttributeView` implementations that provide access to identity related
 attributes. For example, the `AclFileAttributeView` and `PosixFileAttributeView` provide access to a file's `owner owner`.

> *Since 1.7*
