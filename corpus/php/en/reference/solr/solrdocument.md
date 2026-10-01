---
id: "en-php-guide-class-solrdocument"
language: "php"
lang: "en"
category: "guide"
name: "class.solrdocument"
title: "The SolrDocument class"
module: "solr"
source_url: "https://www.php.net/manual/en/class.solrdocument.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SolrDocument class

SolrDocument

   Introduction  Represents a Solr document retrieved from a query response.      Class Synopsis   `SolrDocument`    `final` `SolrDocument`   ArrayAccess   Iterator   Serializable      `const` `int` `SolrDocument::SORT_DEFAULT` 1   `const` `int` `SolrDocument::SORT_ASC` 1   `const` `int` `SolrDocument::SORT_DESC` 2   `const` `int` `SolrDocument::SORT_FIELD_NAME` 1   `const` `int` `SolrDocument::SORT_FIELD_VALUE_COUNT` 2   `const` `int` `SolrDocument::SORT_FIELD_BOOST_VALUE` 4           Predefined Constants 
- **`SolrDocument::SORT_DEFAULT`** — Default mode for sorting fields within the document.
- **`SolrDocument::SORT_ASC`** — Sorts the fields in ascending order
- **`SolrDocument::SORT_DESC`** — Sorts the fields in descending order
- **`SolrDocument::SORT_FIELD_NAME`** — Sorts the fields by field name.
- **`SolrDocument::SORT_FIELD_VALUE_COUNT`** — Sorts the fields by number of values in each field.
- **`SolrDocument::SORT_FIELD_BOOST_VALUE`** — Sorts the fields by their boost values.
