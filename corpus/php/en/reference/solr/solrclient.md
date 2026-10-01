---
id: "en-php-guide-class-solrclient"
language: "php"
lang: "en"
category: "guide"
name: "class.solrclient"
title: "The SolrClient class"
module: "solr"
source_url: "https://www.php.net/manual/en/class.solrclient.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SolrClient class

SolrClient

   Introduction  Used to send requests to a Solr server. Currently, cloning and serialization of SolrClient instances is not supported.      Class Synopsis   `SolrClient`    `final` `SolrClient`      `const` `int` `SolrClient::SEARCH_SERVLET_TYPE` 1   `const` `int` `SolrClient::UPDATE_SERVLET_TYPE` 2   `const` `int` `SolrClient::THREADS_SERVLET_TYPE` 4   `const` `int` `SolrClient::PING_SERVLET_TYPE` 8   `const` `int` `SolrClient::TERMS_SERVLET_TYPE` 16   `const` `int` `SolrClient::SYSTEM_SERVLET_TYPE` 32   `const` `string` `SolrClient::DEFAULT_SEARCH_SERVLET` select   `const` `string` `SolrClient::DEFAULT_UPDATE_SERVLET` update   `const` `string` `SolrClient::DEFAULT_THREADS_SERVLET` admin/threads   `const` `string` `SolrClient::DEFAULT_PING_SERVLET` admin/ping   `const` `string` `SolrClient::DEFAULT_TERMS_SERVLET` terms   `const` `string` `SolrClient::DEFAULT_SYSTEM_SERVLET` admin/system           Predefined Constants 
- **`SolrClient::SEARCH_SERVLET_TYPE`** — Used when updating the search servlet.
- **`SolrClient::UPDATE_SERVLET_TYPE`** — Used when updating the update servlet.
- **`SolrClient::THREADS_SERVLET_TYPE`** — Used when updating the threads servlet.
- **`SolrClient::PING_SERVLET_TYPE`** — Used when updating the ping servlet.
- **`SolrClient::TERMS_SERVLET_TYPE`** — Used when updating the terms servlet.
- **`SolrClient::SYSTEM_SERVLET_TYPE`** — Used when retrieving system information from the system servlet.
- **`SolrClient::DEFAULT_SEARCH_SERVLET`** — This is the initial value for the search servlet.
- **`SolrClient::DEFAULT_UPDATE_SERVLET`** — This is the initial value for the update servlet.
- **`SolrClient::DEFAULT_THREADS_SERVLET`** — This is the initial value for the threads servlet.
- **`SolrClient::DEFAULT_PING_SERVLET`** — This is the initial value for the ping servlet.
- **`SolrClient::DEFAULT_TERMS_SERVLET`** — This is the initial value for the terms servlet used for the TermsComponent
- **`SolrClient::DEFAULT_SYSTEM_SERVLET`** — This is the initial value for the system servlet used to obtain Solr Server information
