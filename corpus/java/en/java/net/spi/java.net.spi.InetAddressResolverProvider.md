---
id: "java-en-function-java-net-spi-inetaddressresolverprovider"
language: "java"
lang: "en"
category: "function"
name: "java.net.spi.InetAddressResolverProvider"
title: "InetAddressResolverProvider"
directive: "type"
module: "java.base/java.net.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/spi/InetAddressResolverProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# InetAddressResolverProvider

Service-provider class for `InetAddressResolver InetAddress resolvers`.

 

 A resolver provider is a factory for custom implementations of `InetAddressResolver InetAddress resolvers`. A resolver defines operations for
 looking up (resolving) host names and IP addresses.
 

A resolver provider is a concrete subclass of this class that has a
 zero-argument constructor and implements the abstract methods specified below.

 

 A given invocation of the Java virtual machine maintains a single
 system-wide resolver instance, which is used by
 `#host-name-resolution
 InetAddress`. It is set after the VM is fully initialized and when an
 invocation of a method in `InetAddress` class triggers the first lookup
 operation.

  A resolver provider is located and loaded by
 `InetAddress` to create the system-wide resolver as follows:
 
  
- The `ServiceLoader` mechanism is used to locate an
      `InetAddressResolverProvider` using the
      system class loader. The order in which providers are located is
      `load(java.lang.Class, java.lang.ClassLoader)
      implementation specific`.
      The first provider found will be used to instantiate the
      `InetAddressResolver InetAddressResolver` by invoking the
      `get`
      method. The returned `InetAddressResolver` will be set as the
      system-wide resolver.
  
- If the previous step fails to find any resolver provider the
      `#built-in-resolver
      built-in resolver` will be set as the system-wide resolver.
 

 

 If instantiating a custom resolver from a provider discovered in
 step 1 throws an error or exception, the system-wide resolver will not be
 set and the error or exception will be propagated to the caller of the method
 that triggered the lookup operation.
 Otherwise, any lookup operation will be performed using the
 system-wide resolver.

 that might occur before the VM is fully booted.

> *Since 18*
