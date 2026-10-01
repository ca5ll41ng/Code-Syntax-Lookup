---
id: "java-en-function-java-util-propertyresourcebundle"
language: "java"
lang: "en"
category: "function"
name: "java.util.PropertyResourceBundle"
title: "PropertyResourceBundle"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/PropertyResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PropertyResourceBundle

`PropertyResourceBundle` is a concrete subclass of
 `ResourceBundle` that manages resources for a locale
 using a set of static strings from a property file. See
 `ResourceBundle ResourceBundle` for more information about resource
 bundles.

 

 Unlike other types of resource bundle, you don't subclass
 `PropertyResourceBundle`.  Instead, you supply properties
 files containing the resource data.  `ResourceBundle.getBundle`
 will automatically look for the appropriate properties file and create a
 `PropertyResourceBundle` that refers to it. See
 `getBundle(String, Locale, ClassLoader) ResourceBundle.getBundle`
 for a complete description of the search and instantiation strategy.

 

 The following example shows a member of a resource
 bundle family with the base name "MyResources".
 The text defines the bundle "MyResources_de",
 the German member of the bundle family.
 This member is based on `PropertyResourceBundle`, and the text
 therefore is the content of the file "MyResources_de.properties"
 (a related `#sample example` shows
 how you can add bundles to this family that are implemented as subclasses
 of `ListResourceBundle`).
 The keys in this example are of the form "s1" etc. The actual
 keys are entirely up to your choice, so long as they are the same as
 the keys you use in your program to retrieve the objects from the bundle.
 Keys are case-sensitive.
 {@snippet lang=properties :
     # MessageFormat pattern
     s1=Die Platte \"{1}\" enthält {0}.
     # location of {0} in pattern
     s2=1
     # sample disk name
     s3=Meine Platte
     # first ChoiceFormat choice
     s4=keine Dateien
     # second ChoiceFormat choice
     s5=eine Datei
     # third ChoiceFormat choice
     s6={0,number} Dateien
     # sample date
     s7=3. März 1996
 }

 `PropertyResourceBundle` can be constructed either
 from an `InputStream` or a `Reader`, which represents a property file.
 Constructing a `PropertyResourceBundle` instance from an `InputStream`
 requires that the input stream be encoded in `UTF-8`. By default, if a
 `java.nio.charset.MalformedInputException` or an
 `java.nio.charset.UnmappableCharacterException` occurs on reading the
 input stream, then the `PropertyResourceBundle` instance resets to the state
 before the exception, re-reads the input stream in `ISO-8859-1`, and
 continues reading. If the system property
 {@systemProperty java.util.PropertyResourceBundle.encoding} is set to either
 "ISO-8859-1" or "UTF-8", the input stream is solely read in that encoding,
 and throws the exception if it encounters an invalid sequence.
 If "ISO-8859-1" is specified, characters that cannot be represented in
 ISO-8859-1 encoding must be represented by Unicode Escapes as defined in section
 {@jls 3.3} of The Java Language Specification
 whereas the other constructor which takes a `Reader` does not have that limitation.
 Other encoding values are ignored for this system property.
 The system property is read and evaluated when initializing this class.
 Changing or removing the property has no effect after the initialization.

 The implementation of a `PropertyResourceBundle` subclass must be
 thread-safe if it's simultaneously used by multiple threads. The default
 implementations of the non-abstract methods in this class are thread-safe.

**参见**

- ResourceBundle
- ListResourceBundle
- Properties

> *Since 1.1*
