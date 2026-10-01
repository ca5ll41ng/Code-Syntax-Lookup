---
id: "java-en-function-selectorprovider-provider"
language: "java"
lang: "en"
category: "function"
name: "SelectorProvider.provider"
signature: "public static SelectorProvider provider()"
title: "SelectorProvider.provider"
directive: "method"
module: "java.base/java.nio.channels.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/spi/SelectorProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SelectorProvider.provider

```java
public static SelectorProvider provider()
```

Returns the system-wide default selector provider for this invocation of
 the Java virtual machine.

 

 The first invocation of this method locates the default provider
 object as follows: 

 

   
- 

 If the system property
   {@systemProperty java.nio.channels.spi.SelectorProvider} is defined
   then it is taken to be the fully-qualified name of a concrete provider
   class. The class is loaded and instantiated; if this process fails then
   an unspecified error is thrown.  

   
- 

 If a provider class has been installed in a jar file that is
   visible to the system class loader, and that jar file contains a
   provider-configuration file named
   `java.nio.channels.spi.SelectorProvider` in the resource
   directory `META-INF/services`, then the first class name
   specified in that file is taken.  The class is loaded and
   instantiated; if this process fails then an unspecified error is
   thrown.  

   
- 

 Finally, if no provider has been specified by any of the above
   means then the system-default provider class is instantiated and the
   result is returned.  

 

 

 Subsequent invocations of this method return the provider that was
 returned by the first invocation.

**返回**

- The system-wide default selector provider
