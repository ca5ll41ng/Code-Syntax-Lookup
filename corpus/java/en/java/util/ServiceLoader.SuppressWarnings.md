---
id: "java-en-function-serviceloader-suppresswarnings"
language: "java"
lang: "en"
category: "function"
name: "ServiceLoader.SuppressWarnings"
signature: "@SuppressWarnings(\"doclint:reference\") // cross-module links public static <S> ServiceLoader<S> load(Class<S> service, ClassLoader loader)"
title: "ServiceLoader.SuppressWarnings"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ServiceLoader.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ServiceLoader.SuppressWarnings

```java
@SuppressWarnings("doclint:reference") // cross-module links public static <S> ServiceLoader<S> load(Class<S> service, ClassLoader loader)
```

Creates a new service loader for the given service. The service loader
 uses the given class loader as the starting point to locate service
 providers for the service. The service loader's `iterator()
 iterator` and `stream() stream` locate providers in both named
 and unnamed modules, as follows:

 
   
-  

 Step 1: Locate providers in named modules. 

   

 Service providers are located in all named modules of the class
   loader or to any class loader reachable via parent delegation. 

   

 In addition, if the class loader is not the bootstrap or `getPlatformClassLoader() platform class loader`, then service
   providers may be located in the named modules of other class loaders.
   Specifically, if the class loader, or any class loader reachable via
   parent delegation, has a module in a `ModuleLayer module
   layer`, then service providers in all modules in the module layer are
   located.  

   

 For example, suppose there is a module layer where each module is
   in its own class loader (see `defineModulesWithManyLoaders
   defineModulesWithManyLoaders`). If this `ServiceLoader.load` method
   is invoked to locate providers using any of the class loaders created for
   the module layer, then it will locate all of the providers in the module
   layer, irrespective of their defining class loader. 

   

 Ordering: The service loader will first locate any service providers
   in modules defined to the class loader, then its parent class loader,
   its parent parent, and so on to the bootstrap class loader. If a class
   loader has modules in a module layer then all providers in that module
   layer are located (irrespective of their class loader) before the
   providers in the parent class loader are located. The ordering of
   modules in same class loader, or the ordering of modules in a module
   layer, is not defined. 

   

 If a module declares more than one provider then the providers
   are located in the order that its module descriptor `providers() lists the
   providers`. Providers added dynamically by instrumentation agents (see
   `redefineModule redefineModule`)
   are always located after providers declared by the module.  

   
-  

 Step 2: Locate providers in unnamed modules. 

   

 Service providers in unnamed modules are located if their class names
   are listed in provider-configuration files located by the class loader's
   `getResources(String) getResources` method. 

   

 The ordering is based on the order that the class loader's `getResources` method finds the service configuration files and within
   that, the order that the class names are listed in the file. 

   

 In a provider-configuration file, any mention of a service provider
   that is deployed in a named module is ignored. This is to avoid
   duplicates that would otherwise arise when a named module has both a
   provides directive and a provider-configuration file that mention
   the same service provider. 

   

 The provider class must be visible to the class loader.  

 

 URLs then those URLs may be dereferenced in the process of searching for
 provider-configuration files.

 

 This activity is normal, although it may cause puzzling entries to be
 created in web-server logs.  If a web server is not configured correctly,
 however, then this activity may cause the provider-loading algorithm to fail
 spuriously.

 

 A web server should return an HTTP 404 (Not Found) response when a
 requested resource does not exist.  Sometimes, however, web servers are
 erroneously configured to return an HTTP 200 (OK) response along with a
 helpful HTML error page in such cases.  This will cause a `ServiceConfigurationError` to be thrown when this class attempts to parse
 the HTML page as a provider-configuration file.  The best solution to this
 problem is to fix the misconfigured web server to return the correct
 response code (HTTP 404) along with the HTML error page.

**参数**

- **the** — class of the service type
- **service** — The interface or abstract class representing the service
- **loader** — The class loader to be used to load provider-configuration files and provider classes, or `null` if the system class loader (or, failing that, the bootstrap class loader) is to be used

**返回**

- A new service loader

**异常**

- **ServiceConfigurationError** — if the service type is not accessible to the caller or the caller is in an explicit module and its module descriptor does not declare that it uses `service`
