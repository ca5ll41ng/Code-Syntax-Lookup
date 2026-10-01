---
id: "java-en-function-java-nio-channels-overlappingfilelockexception"
language: "java"
lang: "en"
category: "function"
name: "java.nio.channels.OverlappingFileLockException"
title: "OverlappingFileLockException"
directive: "type"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/OverlappingFileLockException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OverlappingFileLockException

Unchecked exception thrown when an attempt is made to acquire a lock on a
 region of a file that overlaps a region already locked by the same Java
 virtual machine, or when another thread is already waiting to lock an
 overlapping region of the same file.

> *Since 1.4*
