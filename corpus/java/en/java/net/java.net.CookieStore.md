---
id: "java-en-function-java-net-cookiestore"
language: "java"
lang: "en"
category: "function"
name: "java.net.CookieStore"
title: "CookieStore"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/CookieStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CookieStore

A CookieStore object represents a storage for cookie. Can store and retrieve
 cookies.

 

`CookieManager` will call `CookieStore.add` to save cookies
 for every incoming HTTP response, and call `CookieStore.get` to
 retrieve cookie for every outgoing HTTP request. A CookieStore
 is responsible for removing HttpCookie instances which have expired.

> *Since 1.6*
