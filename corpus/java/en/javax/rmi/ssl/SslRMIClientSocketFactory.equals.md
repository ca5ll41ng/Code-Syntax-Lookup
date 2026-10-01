---
id: "java-en-function-sslrmiclientsocketfactory-equals"
language: "java"
lang: "en"
category: "function"
name: "SslRMIClientSocketFactory.equals"
signature: "public boolean equals(Object obj)"
title: "SslRMIClientSocketFactory.equals"
directive: "method"
module: "java.rmi/javax.rmi.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/javax/rmi/ssl/SslRMIClientSocketFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SslRMIClientSocketFactory.equals

```java
public boolean equals(Object obj)
```

Indicates whether some other object is "equal to" this one.

 

Because all instances of this class are functionally equivalent
 (they all use the default
 SSLSocketFactory), this method simply returns
 this.getClass().equals(obj.getClass()).

 

A subclass should override this method (as well
 as `hashCode`) if its instances are not all
 functionally equivalent.
