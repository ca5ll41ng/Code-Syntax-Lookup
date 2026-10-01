---
id: "java-en-function-java-nio-file-attribute-groupprincipal"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.GroupPrincipal"
title: "GroupPrincipal"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/GroupPrincipal.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GroupPrincipal

A `UserPrincipal` representing a group identity, used to
 determine access rights to objects in a file system. The exact definition of
 a group is implementation specific, but typically, it represents an identity
 created for administrative purposes so as to determine the access rights for
 the members of the group. Whether an entity can be a member of multiple
 groups, and whether groups can be nested, are implementation specified and
 therefore not specified.

**参见**

- UserPrincipalLookupService#lookupPrincipalByGroupName

> *Since 1.7*
