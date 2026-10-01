---
id: "java-en-function-rmiclassloader-getdefaultproviderinstance"
language: "java"
lang: "en"
category: "function"
name: "RMIClassLoader.getDefaultProviderInstance"
signature: "public static RMIClassLoaderSpi getDefaultProviderInstance()"
title: "RMIClassLoader.getDefaultProviderInstance"
directive: "method"
module: "java.rmi/java.rmi.server"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.rmi/java/rmi/server/RMIClassLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RMIClassLoader.getDefaultProviderInstance

```java
public static RMIClassLoaderSpi getDefaultProviderInstance()
```

Returns the canonical instance of the default provider
 for the service provider interface `RMIClassLoaderSpi`.
 If the system property java.rmi.server.RMIClassLoaderSpi
 is not defined, then the RMIClassLoader static
 methods

 

 
- `loadClass`
 
- `loadClass`
 
- `loadClass`
 
- `loadProxyClass`
 
- `getClassLoader`
 
- `getClassAnnotation`

 

 will use the canonical instance of the default provider
 as the service provider instance.

 

The default service provider instance implements
 `RMIClassLoaderSpi` as follows:

 

 

The **`getClassAnnotation(Class)
 getClassAnnotation`** method returns a String
 representing the codebase URL path that a remote party should
 use to download the definition for the specified class.  The
 format of the returned string is a path of URLs separated by
 spaces.

 The codebase string returned depends on the defining class
 loader of the specified class:

 

 
- 

If the class loader is the system class loader (see
 `getSystemClassLoader`), a parent of the
 system class loader such as the loader used for installed
 extensions, or the bootstrap class loader (which may be
 represented by null), then the value of the
 {@systemProperty java.rmi.server.codebase} property (or possibly an
 earlier cached value) is returned, or
 null is returned if that property is not set.

 
- 

Otherwise, if the class loader is an instance of
 URLClassLoader, then the returned string is a
 space-separated list of the external forms of the URLs returned
 by invoking the getURLs methods of the loader.

 
- 

Finally, if the class loader is not an instance of
 URLClassLoader, then the value of the
 java.rmi.server.codebase property (or possibly an
 earlier cached value) is returned, or
 null is returned if that property is not set.

 

 

For the implementations of the methods described below,
 which all take a String parameter named
 codebase that is a space-separated list of URLs,
 the codebase argument is ignored. Class loading
 proceeds using the the current thread's context class loader
 (see `getContextClassLoader`), which is also
 considered to be the codebase loader, irrespective of any
 value passed as the codebase argument.

 

The **`getClassLoader(String)
 getClassLoader`** method returns the current thread's
 context class loader.

 

The **`loadClass(String,String,ClassLoader)
 loadClass`** method attempts to load the class with the
 specified name as follows:

 

 If the defaultLoader argument is
 non-null, it first attempts to load the class with the
 specified name using the
 defaultLoader, as if by evaluating

 
```

     Class.forName(name, false, defaultLoader)
 
```

 If the class is successfully loaded from the
 defaultLoader, that class is returned.  If an
 exception other than ClassNotFoundException is
 thrown, that exception is thrown to the caller.

 

Next, the loadClass method attempts to load the
 class with the specified name using the current
 thread's context class loader.

 

 

The **`loadProxyClass(String,String[],ClassLoader)
 loadProxyClass`** method attempts to return a dynamic proxy
 class with the named interface as follows:

 

 

If the defaultLoader argument is
 non-null and all of the named interfaces can be
 resolved through that loader, then,

 

 
- if all of the resolved interfaces are public,
 then it first attempts to obtain a dynamic proxy class (using
 `getProxyClass(ClassLoader,Class[])
 Proxy.getProxyClass`) for the resolved interfaces defined in
 the codebase loader; if that attempt throws an
 IllegalArgumentException, it then attempts to
 obtain a dynamic proxy class for the resolved interfaces
 defined in the defaultLoader.  If both attempts
 throw IllegalArgumentException, then this method
 throws a ClassNotFoundException.  If any other
 exception is thrown, that exception is thrown to the caller.

 
- if all of the non-public resolved interfaces
 are defined in the same class loader, then it attempts to
 obtain a dynamic proxy class for the resolved interfaces
 defined in that loader.

 
- otherwise, a LinkageError is thrown (because a
 class that implements all of the specified interfaces cannot be
 defined in any loader).

 

 

Otherwise, if all of the named interfaces can be resolved
 through the codebase loader, then,

 

 
- if all of the resolved interfaces are public,
 then it attempts to obtain a dynamic proxy class for the
 resolved interfaces in the codebase loader.  If the attempt
 throws an IllegalArgumentException, then this
 method throws a ClassNotFoundException.

 
- if all of the non-public resolved interfaces
 are defined in the same class loader, then it attempts to
 obtain a dynamic proxy class for the resolved interfaces
 defined in that loader.

 
- otherwise, a LinkageError is thrown (because a
 class that implements all of the specified interfaces cannot be
 defined in any loader).

 

 

Otherwise, a ClassNotFoundException is thrown
 for one of the named interfaces that could not be resolved.

**返回**

- the canonical instance of the default service provider

> *Since 1.4*
