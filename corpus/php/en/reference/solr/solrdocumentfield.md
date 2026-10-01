---
id: "en-php-guide-class-solrdocumentfield"
language: "php"
lang: "en"
category: "guide"
name: "class.solrdocumentfield"
title: "The SolrDocumentField class"
module: "solr"
source_url: "https://www.php.net/manual/en/class.solrdocumentfield.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SolrDocumentField class

SolrDocumentField

   Introduction  This represents a field in a Solr document. All its properties are read-only.      Class Synopsis   `SolrDocumentField`    `final` `SolrDocumentField`      `public` `readonly` `string` `name`   `public` `readonly` `float` `boost`   `public` `readonly` `array` `values`          Properties 
- **`name`** — The name of the field.
- **`boost`** — The boost value for the field
- **`values`** — An array of values for this field
