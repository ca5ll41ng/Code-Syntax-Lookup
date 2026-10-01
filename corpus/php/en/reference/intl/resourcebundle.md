---
id: "en-php-guide-class-resourcebundle"
language: "php"
lang: "en"
category: "guide"
name: "class.resourcebundle"
title: "The ResourceBundle class"
module: "intl"
source_url: "https://www.php.net/manual/en/class.resourcebundle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The ResourceBundle class

ResourceBundle

   Introduction  Localized software products often require sets of data that are to be customized depending on current locale, e.g.: messages, labels, formatting patterns. ICU resource mechanism allows to define sets of resources that the application can load on locale basis, while accessing them in unified locale-independent fashion.    This class implements access to ICU resource data files. These files are binary data arrays which ICU uses to store the localized data.    ICU resource bundle can hold simple resources and complex resources. Complex resources are containers which can be either integer-indexed or string-indexed (just like PHP arrays). Simple resources can be of the following types: string, integer, binary data field or integer array.    `ResourceBundle` supports direct access to the data through array access pattern and iteration via foreach, as well as access via class methods. The result will be PHP value for simple resources and `ResourceBundle` object for complex ones. All resources are read-only.      Class Synopsis    `ResourceBundle`   `implements` IteratorAggregate   Countable        Changelog 
|  |  |
| --- | --- |
| 8.0.0 | `ResourceBundle` implements IteratorAggregate now. Previously, Traversable was implemented instead. |
| 7.4.0 | `ResourceBundle` implements Countable now. |

     See Also    [ICU Resource Management]()   [ICU Data]()
