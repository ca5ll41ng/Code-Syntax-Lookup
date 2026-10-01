---
id: "java-en-function-sslrmiserversocketfactory-equals"
language: "java"
lang: "en"
category: "function"
name: "SslRMIServerSocketFactory.equals"
signature: "public boolean equals(Object obj)"
title: "SslRMIServerSocketFactory.equals"
directive: "method"
module: "java.rmi/javax.rmi.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/javax/rmi/ssl/SslRMIServerSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SslRMIServerSocketFactory.equals

```java
public boolean equals(Object obj)
```

Indicates whether some other object is "equal to" this one.

 

Two SslRMIServerSocketFactory objects are equal
 if they have been constructed with the same SSL context and
 SSL socket configuration parameters.

 

A subclass should override this method (as well as
 `hashCode`) if it adds instance state that affects
 equality.
