---
id: "java-en-function-java-net-proxyselector"
language: "java"
lang: "en"
category: "function"
name: "java.net.ProxySelector"
title: "ProxySelector"
directive: "type"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ProxySelector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProxySelector

Selects the proxy server to use, if any, when connecting to the
 network resource referenced by a URL. A proxy selector is a
 concrete sub-class of this class and is registered by invoking the
 `setDefault setDefault` method. The
 currently registered proxy selector can be retrieved by calling
 `getDefault getDefault` method.

 

 When a proxy selector is registered, for instance, a subclass
 of URLConnection class should call the `select select`
 method for each URL request so that the proxy selector can decide
 if a direct, or proxied connection should be used. The `select select` method returns an iterator over a collection with
 the preferred connection approach.

 

 If a connection cannot be established to a proxy (PROXY or
 SOCKS) servers then the caller should call the proxy selector's
 `connectFailed connectFailed` method to notify the proxy
 selector that the proxy server is unavailable. 

 

The default proxy selector does enforce a
 set of System Properties
 related to proxy settings.

> *Since 1.5*
