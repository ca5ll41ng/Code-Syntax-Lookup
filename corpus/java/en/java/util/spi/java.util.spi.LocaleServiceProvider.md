---
id: "java-en-function-java-util-spi-localeserviceprovider"
language: "java"
lang: "en"
category: "function"
name: "java.util.spi.LocaleServiceProvider"
title: "LocaleServiceProvider"
directive: "type"
module: "java.base/java.util.spi"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/spi/LocaleServiceProvider.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LocaleServiceProvider

This is the super class of all the locale sensitive service provider
 interfaces (SPIs).
 

 Locale sensitive service provider interfaces are interfaces that
 correspond to locale sensitive classes in the `java.text`
 and `java.util` packages in order to provide the locale
 data used for each service. The interfaces enable the
 construction of locale sensitive objects and the retrieval of
 localized names for these packages. Locale sensitive factory methods
 and methods for name retrieval in the `java.text` and
 `java.util` packages use implementations of the provider
 interfaces to offer support for locales beyond the set of locales
 supported by the Java runtime environment itself. Locale sensitive service
 providers are deployed on the application module path or the application class
 path. In order to be looked up, providers must be visible to the `getSystemClassLoader() system class loader`.
 See `#developing-service-providers Deploying
 Service Providers` for further detail on deploying a locale sensitive service
 provider as a module or on the class path.

 Packaging of Locale Sensitive Service Provider Implementations

 

 For a locale sensitive service provider deployed in a module, the provides
 directive must be specified in the module declaration. The provides
 directive specifies both the service and the service provider.

 

 For example, an implementation of the `java.text.spi.DateFormatProvider
 DateFormatProvider` class deployed as a module might specify the following directive:
 
```
`provides java.text.spi.DateFormatProvider with com.example.ExternalDateFormatProvider;
 `
```

 

 For a Locale Service Provider deployed on the class path, the provider
 identifies itself with a provider-configuration file in the resource directory
 META-INF/services. The file name should be the fully fully qualified provider
 interface class name. The file should contain a list of fully-qualified concrete
 provider class names, one per line. A line is terminated by any one of a line
 feed ('\n'), a carriage return ('\r'), or a carriage return followed immediately
 by a line feed. Space and tab characters surrounding each name, as well as
 blank lines, are ignored. The comment character is '#' ('\u0023'); on each line
 all characters following the first comment character are ignored. The file must
 be encoded in UTF-8.
 

 If a particular concrete provider class is named in more than one configuration
 file, or is named in the same configuration file more than once, then the
 duplicates will be ignored. The configuration file naming a particular provider
 need not be in the same jar file or other distribution unit as the provider itself.
 The provider must be accessible from the same class loader that was initially
 queried to locate the configuration file; this is not necessarily the class loader
 that loaded the file.
 

 For example, an implementation of the
 `java.text.spi.DateFormatProvider DateFormatProvider` class should
 take the form of a jar file which contains the file:
 
```

 META-INF/services/java.text.spi.DateFormatProvider
 
```

 And the file `java.text.spi.DateFormatProvider` should have
 a line such as:
 
```

 `com.foo.DateFormatProviderImpl`
 
```

 which is the fully qualified class name of the class implementing
 `DateFormatProvider`.
 Invocation of Locale Sensitive Services
 

 Locale sensitive factory methods and methods for name retrieval in the
 `java.text` and `java.util` packages invoke
 service provider methods when needed to support the requested locale.
 The methods first check whether the Java runtime environment itself
 supports the requested locale, and use its support if available.
 Otherwise, they call the `isSupportedLocale(Locale) isSupportedLocale`
 methods of installed providers for the appropriate interface to find one that
 supports the requested locale. If such a provider is found, its other
 methods are called to obtain the requested object or name.  When checking
 whether a locale is supported, the `#def_extensions
 locale's extensions` are ignored by default. (If a locale's extensions should
 also be checked, the `isSupportedLocale` method must be overridden).
 If neither the Java runtime environment itself nor an installed provider
 supports the requested locale, the methods go through a list of candidate
 locales and repeat the availability check for each until a match is found.
 The algorithm used for creating a list of candidate locales is same as
 the one used by `ResourceBundle` by default (see
 `getCandidateLocales getCandidateLocales`
 for the details).  Even if a locale is resolved from the candidate list,
 methods that return requested objects or names are invoked with the original
 requested locale including `Locale` extensions. The Java runtime
 environment must support the root locale for all locale sensitive services in
 order to guarantee that this process terminates.
 

 Providers of names (but not providers of other objects) are allowed to
 return null for some name requests even for locales that they claim to
 support by including them in their return value for
 `getAvailableLocales`. Similarly, the Java runtime
 environment itself may not have all names for all locales that it
 supports. This is because the sets of objects for which names are
 requested can be large and vary over time, so that it's not always
 feasible to cover them completely. If the Java runtime environment or a
 provider returns null instead of a name, the lookup will proceed as
 described above as if the locale was not supported.
 

 The search order of locale sensitive services can
 be configured by using the {@systemProperty java.locale.providers} system property.
 This system property declares the user's preferred order for looking up
 the locale sensitive services separated by a comma. As this property value is
 read and cached only at the initialization of this class, users should specify the
 property on the java launcher command line. Setting it at runtime with
 `setProperty` is discouraged and it may not affect
 the order.
 JDK Reference Implementation provides the following three
 locale data providers:
 
 
-  "CLDR": A locale data provider based on the Unicode Consortium's
 Common Locale Data Repository (CLDR).
 
-  "SPI": represents the locale sensitive services implementing the subclasses of
 this `LocaleServiceProvider` class.
 
-  "HOST": A locale data provider that reflects the user's custom settings in the
 underlying operating system. This provider may not be available, depending
 on the JDK Reference Implementation.
 

 

 For example, if the following is specified in the property:
 
```

 java.locale.providers=SPI,CLDR
 
```

 the locale sensitive services in the SPI providers are looked up first. If the
 desired locale sensitive service is not available, then the runtime looks for CLDR.
 

 The default value for looking up the preferred locale data providers is "CLDR",
 so specifying only "CLDR" is identical to the default behavior. Applications which
 require implementations of the locale sensitive services must explicitly specify
 "SPI" in order for the Java runtime to load them from the classpath.

 Common Locale Data Repository (CLDR)
 to implement locale-sensitive APIs in the `java.util` and
 `java.text` packages. This locale data derives the set of locales
 supported by the Java runtime environment. The following tables list the
 version of CLDR used in each JDK release. Unless otherwise specified, all
 update releases in a given JDK release family use the same CLDR version.
 Note that the CLDR locale data are subject to change. Users should not assume
 that the locale data remain the same across CLDR versions. Otherwise, unexpected
 incompatible behaviors may occur, such as an exception on parsing a date.
 Refer to CLDR Releases
 for the deltas between their releases.
 
 <!-- The expanded table should include the current JDK release, followed
 by commonly used releases, with other releases listed in the details
 section -->
 JDK releases and supported CLDR versions
 
 JDK release
     CLDR version
 
 
 JDK 27
     CLDR 48.2
 JDK 25
     CLDR 47
 JDK 21
     CLDR 43
 JDK 17
     CLDR 39
 JDK 11
     CLDR 33
 JDK 8
     CLDR 21.0.1
 
 
 
 Show other JDK releases
 
 Other JDK releases and supported CLDR
 versions
 
 JDK release
     CLDR version
 
 
 JDK 26
     CLDR 48
 JDK 24
     CLDR 46
 JDK 23
     CLDR 45
 JDK 22
     CLDR 44
 JDK 20
     CLDR 42
 JDK 19
     CLDR 41
 JDK 18
     CLDR 39
 JDK 16
     CLDR 38
 JDK 15
     CLDR 37
 JDK 14
     CLDR 36
 JDK 13
     CLDR 35.1
 JDK 12
     CLDR 33
 JDK 10
     CLDR 29
 JDK 9
     CLDR 29

> *Since 1.6*
