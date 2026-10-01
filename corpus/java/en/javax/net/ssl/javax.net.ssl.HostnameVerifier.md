---
id: "java-en-function-javax-net-ssl-hostnameverifier"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.HostnameVerifier"
title: "HostnameVerifier"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/HostnameVerifier.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HostnameVerifier

This class is the base interface for hostname verification.
 

 During handshaking, if the URL's hostname and
 the server's identification hostname mismatch, the
 verification mechanism can call back to implementers of this
 interface to determine if this connection should be allowed.
 

 The policies can be certificate-based
 or may depend on other authentication schemes.
 

 These callbacks are used when the default rules for URL hostname
 verification fail.

> *Since 1.4*
