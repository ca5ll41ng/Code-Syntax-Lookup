---
id: "java-en-function-java-nio-file-securedirectorystream"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.SecureDirectoryStream"
title: "SecureDirectoryStream"
directive: "type"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/SecureDirectoryStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureDirectoryStream

A `DirectoryStream` that defines operations on files that are located
 relative to an open directory. A `SecureDirectoryStream` is intended
 for use by sophisticated or security sensitive applications requiring to
 traverse file trees or otherwise operate on directories in a race-free manner.
 Race conditions can arise when a sequence of file operations cannot be
 carried out in isolation. Each of the file operations defined by this
 interface specify a relative path. All access to the file is relative
 to the open directory irrespective of if the directory is moved or replaced
 by an attacker while the directory is open. A `SecureDirectoryStream`
 may also be used as a virtual working directory.

 

 A `SecureDirectoryStream` requires corresponding support from the
 underlying operating system. Where an implementation supports this features
 then the `DirectoryStream` returned by the `newDirectoryStream
 newDirectoryStream` method will be a `SecureDirectoryStream` and must
 be cast to that type in order to invoke the methods defined by this interface.

**参数**

- **The** — type of element returned by the iterator

> *Since 1.7*
