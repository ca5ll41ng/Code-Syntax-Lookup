---
id: "java-en-function-java-net-spi-inetaddressresolver"
language: "java"
lang: "en"
category: "function"
name: "java.net.spi.InetAddressResolver"
title: "InetAddressResolver"
directive: "type"
module: "java.base/java.net.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/spi/InetAddressResolver.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddressResolver

This interface defines operations for looking up host names and IP addresses.
 `InetAddress` delegates all lookup operations to the system-wide
 resolver.

 

 The system-wide resolver can be customized by
 
 deploying an implementation of `InetAddressResolverProvider`.

> *Since 18*
