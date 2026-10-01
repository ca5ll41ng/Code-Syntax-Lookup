---
id: "en-php-guide-class-solrquery"
language: "php"
lang: "en"
category: "guide"
name: "class.solrquery"
title: "The SolrQuery class"
module: "solr"
source_url: "https://www.php.net/manual/en/class.solrquery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SolrQuery class

SolrQuery

   Introduction  Represents a collection of name-value pairs sent to the Solr server during a request.      Class Synopsis   `SolrQuery`    `SolrQuery`   `extends` `SolrModifiableParams`   Serializable      `const` `int` `SolrQuery::ORDER_ASC` 0   `const` `int` `SolrQuery::ORDER_DESC` 1   `const` `int` `SolrQuery::FACET_SORT_INDEX` 0   `const` `int` `SolrQuery::FACET_SORT_COUNT` 1   `const` `int` `SolrQuery::TERMS_SORT_INDEX` 0   `const` `int` `SolrQuery::TERMS_SORT_COUNT` 1               Predefined Constants 
- **`SolrQuery::ORDER_ASC`** — Used to specify that the sorting should be in acending order
- **`SolrQuery::ORDER_DESC`** — Used to specify that the sorting should be in descending order
- **`SolrQuery::FACET_SORT_INDEX`** — Used to specify that the facet should sort by index
- **`SolrQuery::FACET_SORT_COUNT`** — Used to specify that the facet should sort by count
- **`SolrQuery::TERMS_SORT_INDEX`** — Used in the TermsComponent
- **`SolrQuery::TERMS_SORT_COUNT`** — Used in the TermsComponent
