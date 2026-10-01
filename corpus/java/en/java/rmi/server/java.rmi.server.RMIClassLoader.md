---
id: "java-en-function-java-rmi-server-rmiclassloader"
language: "java"
lang: "en"
category: "function"
name: "java.rmi.server.RMIClassLoader"
title: "RMIClassLoader"
directive: "type"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoader

RMIClassLoader comprises static methods to support
 dynamic class loading with RMI.  Included are methods for loading
 classes from a network location (one or more URLs) and obtaining
 the location from which an existing class should be loaded by
 remote parties.  These methods are used by the RMI runtime when
 marshalling and unmarshalling classes contained in the arguments
 and return values of remote method calls.

 

The implementation of the following static methods

 

 
- `loadClass`
 
- `loadClass`
 
- `loadClass`
 
- `loadProxyClass`
 
- `getClassLoader`
 
- `getClassAnnotation`

 

 is provided by an instance of `RMIClassLoaderSpi`, the
 service provider interface for those methods.  When one of the
 methods is invoked, its behavior is to delegate to a corresponding
 method on the service provider instance.  The details of how each
 method delegates to the provider instance is described in the
 documentation for each particular method.

 

The service provider instance is chosen as follows:

 

 
- If the system property
 {@systemProperty java.rmi.server.RMIClassLoaderSpi} is defined, then if
 its value equals the string "default", the provider
 instance will be the value returned by an invocation of the `getDefaultProviderInstance` method, and for any other value, if
 a class named with the value of the property can be loaded by the
 system class loader (see `getSystemClassLoader`)
 and that class is assignable to `RMIClassLoaderSpi` and has a
 public no-argument constructor, then that constructor will be
 invoked to create the provider instance.  If the property is
 defined but any other of those conditions are not true, then an
 unspecified Error will be thrown to code that attempts
 to use RMIClassLoader, indicating the failure to
 obtain a provider instance.

 
- If a resource named
 META-INF/services/java.rmi.server.RMIClassLoaderSpi is
 visible to the system class loader, then the contents of that
 resource are interpreted as a provider-configuration file, and the
 first class name specified in that file is used as the provider
 class name.  If a class with that name can be loaded by the system
 class loader and that class is assignable to `RMIClassLoaderSpi` and has a public no-argument constructor, then
 that constructor will be invoked to create the provider instance.
 If the resource is found but a provider cannot be instantiated as
 described, then an unspecified Error will be thrown to
 code that attempts to use RMIClassLoader, indicating
 the failure to obtain a provider instance.

 
- Otherwise, the provider instance will be the value returned by
 an invocation of the `getDefaultProviderInstance` method.

**参见**

- RMIClassLoaderSpi

> *Since 1.1*
