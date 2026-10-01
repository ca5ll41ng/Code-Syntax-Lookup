---
id: "en-php-guide-class-solrexception"
language: "php"
lang: "en"
category: "guide"
name: "class.solrexception"
title: "The SolrException class"
module: "solr"
source_url: "https://www.php.net/manual/en/class.solrexception.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SolrException class

SolrException

   Introduction  This is the base class for all exception thrown by the Solr extension classes.      Class Synopsis   `SolrException`    `SolrException`   `extends` `Exception`      `protected` `int` `sourceline`   `protected` `string` `sourcefile`   `protected` `string` `zif_name`             Properties 
- **`sourceline`** — The line in c-space source file where exception was generated
- **`sourcefile`** — The c-space source file where exception was generated
- **`zif_name`** — The c-space function where exception was generated
