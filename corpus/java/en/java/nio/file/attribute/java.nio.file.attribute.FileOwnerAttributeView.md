---
id: "java-en-function-java-nio-file-attribute-fileownerattributeview"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.attribute.FileOwnerAttributeView"
title: "FileOwnerAttributeView"
directive: "type"
module: "java.base/java.nio.file.attribute"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/attribute/FileOwnerAttributeView.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FileOwnerAttributeView

A file attribute view that supports reading or updating the owner of a file.
 This file attribute view is intended for file system implementations that
 support a file attribute that represents an identity that is the owner of
 the file. Often the owner of a file is the identity of the entity that
 created the file.

 

 The `getOwner getOwner` or `setOwner setOwner` methods may
 be used to read or update the owner of the file.

 

 The `getAttribute getAttribute` and
 `setAttribute setAttribute` methods may also be
 used to read or update the owner. In that case, the owner attribute is
 identified by the name `"owner"`, and the value of the attribute is
 a `UserPrincipal`.

> *Since 1.7*
