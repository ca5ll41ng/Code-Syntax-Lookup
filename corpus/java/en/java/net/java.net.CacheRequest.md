---
id: "java-en-function-java-net-cacherequest"
language: "java"
lang: "en"
category: "function"
name: "java.net.CacheRequest"
title: "CacheRequest"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CacheRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CacheRequest

Represents channels for storing resources in the
 ResponseCache. Instances of such a class provide an
 OutputStream object which is called by protocol handlers to
 store the resource data into the cache, and also an abort() method
 which allows a cache store operation to be interrupted and
 abandoned. If an IOException is encountered while reading the
 response or writing to the cache, the current cache store operation
 will be aborted.

> *Since 1.5*
