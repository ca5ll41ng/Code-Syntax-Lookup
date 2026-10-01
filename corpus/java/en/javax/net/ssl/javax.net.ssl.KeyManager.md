---
id: "java-en-function-javax-net-ssl-keymanager"
language: "java"
lang: "en"
category: "function"
name: "javax.net.ssl.KeyManager"
title: "KeyManager"
directive: "type"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/KeyManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyManager

This is the base interface for JSSE key managers.
 

 KeyManagers are responsible for managing the
 key material which is used to authenticate the local SSLSocket
 to its peer.  If no key material is available, the socket will
 be unable to present authentication credentials.
 

 KeyManagers are created by either
 using a KeyManagerFactory,
 or by implementing one of the KeyManager subclasses.

**参见**

- KeyManagerFactory

> *Since 1.4*
