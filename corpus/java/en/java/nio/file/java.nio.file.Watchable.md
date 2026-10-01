---
id: "java-en-function-java-nio-file-watchable"
language: "java"
lang: "en"
category: "function"
name: "java.nio.file.Watchable"
title: "Watchable"
directive: "type"
module: "java.base/java.nio.file"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Watchable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Watchable

An object that may be registered with a watch service so that it can be
 watched for changes and events.

 

 This interface defines the `register register` method to register
 the object with a `WatchService` returning a `WatchKey` to
 represent the registration. An object may be registered with more than one
 watch service. Registration with a watch service is cancelled by invoking the
 key's `cancel cancel` method.

**参见**

- Path#register

> *Since 1.7*
