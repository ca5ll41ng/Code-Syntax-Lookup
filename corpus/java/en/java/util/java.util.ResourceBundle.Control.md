---
id: "java-en-function-java-util-resourcebundle-control"
language: "java"
lang: "en"
category: "function"
name: "java.util.ResourceBundle.Control"
title: "Control"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control

`ResourceBundle.Control` defines a set of callback methods
 that are invoked by the `getBundle(String,
 Locale, ClassLoader, Control) ResourceBundle.getBundle` factory
 methods during the bundle loading process. In other words, a
 `ResourceBundle.Control` collaborates with the factory
 methods for loading resource bundles. The default implementation of
 the callback methods provides the information necessary for the
 factory methods to perform the default behavior.

 

 `ResourceBundle.Control` is designed for an application deployed
 in an unnamed module, for example to support resource bundles in
 non-standard formats or package localized resources in a non-traditional
 convention. `ResourceBundleProvider` is the replacement for
 `ResourceBundle.Control` when migrating to modules.
 `UnsupportedOperationException` will be thrown when a factory
 method that takes the `ResourceBundle.Control` parameter is called.

 

In addition to the callback methods, the `toBundleName(String, Locale) toBundleName` and `toResourceName(String, String) toResourceName` methods are defined
 primarily for convenience in implementing the callback
 methods. However, the `toBundleName` method could be
 overridden to provide different conventions in the organization and
 packaging of localized resources.  The `toResourceName`
 method is `final` to avoid use of wrong resource and class
 name separators.

 

Two factory methods, `getControl` and `getNoFallbackControl`, provide
 `ResourceBundle.Control` instances that implement common
 variations of the default bundle loading process.

 

The formats returned by the `getFormats(String)
 getFormats` method and candidate locales returned by the `getCandidateLocales(String, Locale)
 getCandidateLocales` method must be consistent in all
 `ResourceBundle.getBundle` invocations for the same base
 bundle. Otherwise, the `ResourceBundle.getBundle` methods
 may return unintended bundles. For example, if only
 `"java.class"` is returned by the `getFormats`
 method for the first call to `ResourceBundle.getBundle`
 and only `"java.properties"` for the second call, then the
 second call will return the class-based one that has been cached
 during the first call.

 

A `ResourceBundle.Control` instance must be thread-safe
 if it's simultaneously used by multiple threads.
 `ResourceBundle.getBundle` does not synchronize to call
 the `ResourceBundle.Control` methods. The default
 implementations of the methods are thread-safe.

 

Applications can specify `ResourceBundle.Control`
 instances returned by the `getControl` factory methods or
 created from a subclass of `ResourceBundle.Control` to
 customize the bundle loading process. The following are examples of
 changing the default bundle loading process.

 

**Example 1**

 

The following code lets `ResourceBundle.getBundle` look
 up only properties-based resources.

 {@snippet lang=java :
 import java.util.*;
 import static java.util.ResourceBundle.Control.*;
 ...
 ResourceBundle bundle =
   ResourceBundle.getBundle("MyResources", Locale.forLanguageTag("fr-CH"),
                            ResourceBundle.Control.getControl(FORMAT_PROPERTIES));
 }

 Given the resource bundles in the example in
 the `ResourceBundle.getBundle` description, this
 `ResourceBundle.getBundle` call loads
 `MyResources_fr_CH.properties` whose parent is
 `MyResources_fr.properties` whose parent is
 `MyResources.properties`. (`MyResources_fr_CH.properties`
 is not hidden, but `MyResources_fr_CH.class` is.)

 

**Example 2**

 

The following is an example of loading XML-based bundles
 using `loadFromXML(java.io.InputStream)
 Properties.loadFromXML`.

 {@snippet lang=java :
 ResourceBundle rb = ResourceBundle.getBundle("Messages",
     new ResourceBundle.Control() {
         public List getFormats(String baseName) {
             if (baseName == null)
                 throw new NullPointerException();
             return Arrays.asList("xml");
         }
         public ResourceBundle newBundle(String baseName,
                                         Locale locale,
                                         String format,
                                         ClassLoader loader,
                                         boolean reload)
                          throws IllegalAccessException,
                                 InstantiationException,
                                 IOException {
             if (baseName == null || locale == null
                   || format == null || loader == null)
                 throw new NullPointerException();
             ResourceBundle bundle = null;
             if (format.equals("xml")) {
                 String bundleName = toBundleName(baseName, locale);
                 String resourceName = toResourceName(bundleName, format);
                 InputStream stream = null;
                 if (reload) {
                     URL url = loader.getResource(resourceName);
                     if (url != null) {
                         URLConnection connection = url.openConnection();
                         if (connection != null) {
                             // Disable caches to get fresh data for
                             // reloading.
                             connection.setUseCaches(false);
                             stream = connection.getInputStream();
                         }
                     }
                 } else {
                     stream = loader.getResourceAsStream(resourceName);
                 }
                 if (stream != null) {
                     BufferedInputStream bis = new BufferedInputStream(stream);
                     bundle = new XMLResourceBundle(bis);
                     bis.close();
                 }
             }
             return bundle;
         }
     });

 ...

 private static class XMLResourceBundle extends ResourceBundle {
     private Properties props;
     XMLResourceBundle(InputStream stream) throws IOException {
         props = new Properties();
         props.loadFromXML(stream);
     }
     protected Object handleGetObject(String key) {
         return props.getProperty(key);
     }
     public Enumeration getKeys() {
         ...
     }
 }
 }

 in named modules. If the `ResourceBundle.getBundle` method with
 a `ResourceBundle.Control` is called in a named module, the method
 will throw an `UnsupportedOperationException`. Any service providers
 of `ResourceBundleControlProvider` are ignored in named modules.

**参见**

- java.util.spi.ResourceBundleProvider

> *Since 1.6*
