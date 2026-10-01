---
id: "java-en-function-control-newbundle"
language: "java"
lang: "en"
category: "function"
name: "Control.newBundle"
signature: "public ResourceBundle newBundle(String baseName, Locale locale, String format, ClassLoader loader, boolean reload) throws IllegalAccessException, InstantiationException, IOException"
title: "Control.newBundle"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Control.newBundle

```java
public ResourceBundle newBundle(String baseName, Locale locale, String format, ClassLoader loader, boolean reload) throws IllegalAccessException, InstantiationException, IOException
```

Instantiates a resource bundle for the given bundle name of the
 given format and locale, using the given class loader if
 necessary. This method returns `null` if there is no
 resource bundle available for the given parameters. If a resource
 bundle can't be instantiated due to an unexpected error, the
 error must be reported by throwing an `Error` or
 `Exception` rather than simply returning
 `null`.

 

If the `reload` flag is `true`, it
 indicates that this method is being called because the previously
 loaded resource bundle has expired.

 Resource bundles in named modules are subject to the encapsulation
 rules specified by `getResourceAsStream Module.getResourceAsStream`.
 A resource bundle in a named module visible to the given class loader
 is accessible when the package of the resource file corresponding
 to the resource bundle is open unconditionally.

 

The default implementation instantiates a
 `ResourceBundle` as follows.

 

 
- The bundle name is obtained by calling `toBundleName(String, Locale) toBundleName(baseName,
 locale)`.

 
- If `format` is `"java.class"`, the
 `Class` specified by the bundle name is loaded with the
 given class loader. If the `Class` is found and accessible
 then the `ResourceBundle` is instantiated.  The
 resource bundle is accessible if the package of the bundle class file
 is open unconditionally; otherwise, `IllegalAccessException`
 will be thrown.
 Note that the `reload` flag is ignored for loading
 class-based resource bundles in this default implementation.
 

 
- If `format` is `"java.properties"`,
 `toResourceName(String, String) toResourceName(bundlename,
 "properties")` is called to get the resource name.
 If `reload` is `true`, `getResource(String) load.getResource` is called
 to get a `URL` for creating a `URLConnection`. This `URLConnection` is used to
 `setUseCaches(boolean) disable the
 caches` of the underlying resource loading layers,
 and to `getInputStream() get an
 `InputStream``.
 Otherwise, `getResourceAsStream(String)
 loader.getResourceAsStream` is called to get an `InputStream`. Then, a `PropertyResourceBundle` is constructed with the
 `InputStream`.

 
- If `format` is neither `"java.class"`
 nor `"java.properties"`, an
 `IllegalArgumentException` is thrown.

 
- If the `locale`'s language is one of the
 `#legacy_language_codes Legacy language
 codes`, either old or new, then repeat the loading process
 if needed, with the bundle name with the other language.
 For example, "iw" for "he" and vice versa.

**参数**

- **baseName** — the base bundle name of the resource bundle, a fully qualified class name
- **locale** — the locale for which the resource bundle should be instantiated
- **format** — the resource bundle format to be loaded
- **loader** — the `ClassLoader` to use to load the bundle
- **reload** — the flag to indicate bundle reloading; `true` if reloading an expired resource bundle, `false` otherwise

**返回**

- the resource bundle instance, or `null` if none could be found.

**异常**

- **NullPointerException** — if `bundleName`, `locale`, `format`, or `loader` is `null`, or if `null` is returned by `toBundleName(String, Locale) toBundleName`
- **IllegalArgumentException** — if `format` is unknown, or if the resource found for the given parameters contains malformed data.
- **ClassCastException** — if the loaded class cannot be cast to `ResourceBundle`
- **IllegalAccessException** — if the class or its nullary constructor is not accessible.
- **InstantiationException** — if the instantiation of a class fails for some other reason.
- **ExceptionInInitializerError** — if the initialization provoked by this method fails.
- **IOException** — if an error occurred when reading resources using any I/O operations

**参见**

- java.util.spi.ResourceBundleProvider#getBundle(String, Locale)
