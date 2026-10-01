---
id: "en-php-guide-class-solrinputdocument"
language: "php"
lang: "en"
category: "guide"
name: "class.solrinputdocument"
title: "The SolrInputDocument class"
module: "solr"
source_url: "https://www.php.net/manual/en/class.solrinputdocument.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SolrInputDocument class

SolrInputDocument

   Introduction  This class represents a Solr document that is about to be submitted to the Solr index.      Class Synopsis   `SolrInputDocument`    `final` `SolrInputDocument`      `const` `int` `SolrInputDocument::SORT_DEFAULT` 1   `const` `int` `SolrInputDocument::SORT_ASC` 1   `const` `int` `SolrInputDocument::SORT_DESC` 2   `const` `int` `SolrInputDocument::SORT_FIELD_NAME` 1   `const` `int` `SolrInputDocument::SORT_FIELD_VALUE_COUNT` 2   `const` `int` `SolrInputDocument::SORT_FIELD_BOOST_VALUE` 4           Predefined Constants  SolrInputDocument Class Constants 
- **`SolrInputDocument::SORT_DEFAULT`** — Sorts the fields in ascending order.
- **`SolrInputDocument::SORT_ASC`** — Sorts the fields in ascending order.
- **`SolrInputDocument::SORT_DESC`** — Sorts the fields in descending order.
- **`SolrInputDocument::SORT_FIELD_NAME`** — Sorts the fields by name
- **`SolrInputDocument::SORT_FIELD_VALUE_COUNT`** — Sorts the fields by number of values.
- **`SolrInputDocument::SORT_FIELD_BOOST_VALUE`** — Sorts the fields by boost value.
