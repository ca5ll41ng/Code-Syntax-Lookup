---
id: "java-en-function-java-util-zip-zipfile"
language: "java"
lang: "en"
category: "function"
name: "java.util.zip.ZipFile"
title: "ZipFile"
directive: "type"
module: "java.base/java.util.zip"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/zip/ZipFile.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ZipFile

This class is used to read entries from a ZIP file.

 

 Unless otherwise noted, passing a `null` argument to a constructor
 or method in this class will cause a `NullPointerException` to be
 thrown.

 To release resources used by this `ZipFile`, the `close` method
 should be called explicitly or by try-with-resources. Subclasses are responsible
 for the cleanup of resources acquired by the subclass. Subclasses that override
 `finalize` in order to perform cleanup should be modified to use alternative
 cleanup mechanisms such as `java.lang.ref.Cleaner` and remove the overriding
 `finalize` method.

> *Since 1.1*
