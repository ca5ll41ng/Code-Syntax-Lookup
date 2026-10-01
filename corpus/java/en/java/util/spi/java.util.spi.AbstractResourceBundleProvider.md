---
id: "java-en-function-java-util-spi-abstractresourcebundleprovider"
language: "java"
lang: "en"
category: "function"
name: "java.util.spi.AbstractResourceBundleProvider"
title: "AbstractResourceBundleProvider"
directive: "type"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/AbstractResourceBundleProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractResourceBundleProvider

`AbstractResourceBundleProvider` is an abstract class that provides
 the basic support for a provider implementation class for
 `ResourceBundleProvider`.

 

 Resource bundles can be packaged in one or more
 named modules, service provider modules.  The consumer of the
 resource bundle is the one calling `getBundle`.
 In order for the consumer module to load a resource bundle
 "`com.example.app.MyResources`" provided by another module,
 it will use the `java.util.ServiceLoader service loader`
 mechanism.  A service interface named "`com.example.app.spi.MyResourcesProvider`"
 must be defined and a service provider module will provide an
 implementation class of "`com.example.app.spi.MyResourcesProvider`"
 as follows:

 
```

 `import com.example.app.spi.MyResourcesProvider;
 class MyResourcesProviderImpl extends AbstractResourceBundleProvider
     implements MyResourcesProvider
 {
     public MyResourcesProviderImpl() {
         super("java.properties");
     `
     // this provider maps the resource bundle to per-language package
     protected String toBundleName(String baseName, Locale locale) {
         return "p." + locale.getLanguage() + "." + baseName;
     }

     public ResourceBundle getBundle(String baseName, Locale locale) {
         // this module only provides bundles in French
         if (locale.equals(Locale.FRENCH)) {
              return super.getBundle(baseName, locale);
         }
         // otherwise return null
         return null;
     }
 }}
```

 

 Refer to `ResourceBundleProvider` for details.

**参见**

- ResourceBundle##resource-bundle-modules Resource Bundles and Named Modules

> *Since 9*
