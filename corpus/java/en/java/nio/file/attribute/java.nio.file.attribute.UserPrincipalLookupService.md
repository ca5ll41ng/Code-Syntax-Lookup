---
id: "java-en-function-java-nio-file-attribute-userprincipallookupservice"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.UserPrincipalLookupService"
title: "UserPrincipalLookupService"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/UserPrincipalLookupService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# UserPrincipalLookupService

An object to lookup user and group principals by name. A `UserPrincipal`
 represents an identity that may be used to determine access rights to objects
 in a file system. A `GroupPrincipal` represents a group identity.
 A `UserPrincipalLookupService` defines methods to lookup identities by
 name or group name (which are typically user or account names). Whether names
 and group names are case sensitive or not depends on the implementation.
 The exact definition of a group is implementation specific but typically a
 group represents an identity created for administrative purposes so as to
 determine the access rights for the members of the group. In particular it is
 implementation specific if the namespace for names and groups is the
 same or is distinct. To ensure consistent and correct behavior across
 platforms it is recommended that this API be used as if the namespaces are
 distinct. In other words, the `lookupPrincipalByName
 lookupPrincipalByName` should be used to lookup users, and `lookupPrincipalByGroupName lookupPrincipalByGroupName` should be used to
 lookup groups.

**参见**

- java.nio.file.FileSystem#getUserPrincipalLookupService

> *Since 1.7*
